/* ============================================
 * Express app — API routes (dev + Vercel serverless)
 * ============================================ */

import express from 'express';
import cors from 'cors';
import contactRouter from './routes/contact.js';

export function createApp() {
  const app = express();

  app.use(cors({ origin: true, credentials: true }));
  app.use(express.json({ limit: '32kb' }));

  app.get('/api/health', (_req, res) => {
    res.json({ success: true, message: 'API is running', data: null });
  });

  app.use('/api/contact', contactRouter);

  app.use((err, _req, res, _next) => {
    console.error('[API Error]', err);
    res.status(err.status ?? 500).json({
      success: false,
      message: err.message ?? 'Internal server error',
      data: null,
    });
  });

  return app;
}

export default createApp;
