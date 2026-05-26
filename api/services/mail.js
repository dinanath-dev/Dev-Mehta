/* ============================================
 * Nodemailer SMTP — Gmail / any SMTP provider
 * ============================================ */

import nodemailer from 'nodemailer';

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error(
      'SMTP not configured. Set SMTP_HOST, SMTP_USER, SMTP_PASS in Vercel env vars',
    );
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    pool: false,
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 10_000,
  });
}

export async function sendContactMail({ name, email, message }) {
  const to = process.env.CONTACT_TO ?? process.env.SMTP_USER;
  const from = process.env.SMTP_FROM ?? process.env.SMTP_USER;
  const transporter = getTransporter();

  const sendPromise = transporter.sendMail({
    from: `"Dev Mehta Portfolio" <${from}>`,
    to,
    replyTo: email,
    subject: `Portfolio contact from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      '',
      'Message:',
      message,
    ].join('\n'),
    html: `
      <h2>New portfolio message</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
      <hr />
      <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
    `,
  });

  const timeoutMs = 12_000;
  await Promise.race([
    sendPromise,
    new Promise((_, reject) => {
      setTimeout(
        () => reject(new Error('Email send timed out. Use SMTP_PORT=465 and a Gmail App Password.')),
        timeoutMs,
      );
    }),
  ]);
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
