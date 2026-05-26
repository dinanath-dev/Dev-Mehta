/* ============================================
 * Vercel serverless — Express API (ESM)
 * Dynamic import avoids CJS require() of server/*.js on Vercel
 * ============================================ */

import serverless from 'serverless-http';

let handler;

export default async function apiHandler(req, res) {
  if (!handler) {
    const { createApp } = await import('../server/app.js');
    handler = serverless(createApp());
  }
  return handler(req, res);
}
