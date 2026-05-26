/* ============================================
 * Contact form → Express API → SMTP
 * ============================================ */

import { contactApi } from './api';
import type { ContactFormValues } from '@/types';

export async function sendContactEmail(data: ContactFormValues): Promise<void> {
  const response = await contactApi.send(data);

  if (!response.data.success) {
    throw new Error(response.data.message ?? 'Failed to send message');
  }
}
