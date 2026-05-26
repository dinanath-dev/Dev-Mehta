/* ============================================
 * Local dev server — port 5000
 * ============================================ */

import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { createApp } from './app.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const PORT = Number(process.env.PORT) || 5000;
const app = createApp();

app.listen(PORT, () => {
  console.log(`API ready → http://localhost:${PORT}/api`);
});
