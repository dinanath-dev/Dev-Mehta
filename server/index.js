/* ============================================
 * Local dev server — port 5000
 * ============================================ */

import 'dotenv/config';
import { createApp } from './app.js';

const PORT = Number(process.env.PORT) || 5000;
const app = createApp();

app.listen(PORT, () => {
  console.log(`API ready → http://localhost:${PORT}/api`);
});
