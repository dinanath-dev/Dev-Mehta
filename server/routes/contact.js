/* ============================================
 * POST /api/contact — send email via SMTP
 * ============================================ */

import { Router } from 'express';
import { z } from 'zod';
import { sendContactMail } from '../services/mail.js';

const router = Router();

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(120),
  email: z.string().trim().email('Invalid email'),
  message: z.string().trim().min(10, 'Message must be at least 10 characters').max(5000),
});

router.post('/', async (req, res, next) => {
  try {
    const parsed = contactSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        success: false,
        message: parsed.error.errors[0]?.message ?? 'Invalid input',
        data: null,
      });
    }

    await sendContactMail(parsed.data);

    res.json({
      success: true,
      message: 'Message sent successfully',
      data: null,
    });
  } catch (err) {
    next(err);
  }
});

export default router;
