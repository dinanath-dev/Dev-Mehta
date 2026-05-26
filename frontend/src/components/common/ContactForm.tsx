/* ============================================
 * Contact form — sends to mehtadevv351@gmail.com via Web3Forms
 * ============================================ */

import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import { Button, Input, Textarea, GlassCard } from '@/components/ui';
import { isValidEmail } from '@/utils';
import { sendContactEmail } from '@/services/contactService';
import type { ContactFormValues } from '@/types';

export function ContactForm() {
  const [form, setForm] = useState<ContactFormValues>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<ContactFormValues>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: Partial<ContactFormValues> = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!isValidEmail(form.email)) errs.email = 'Invalid email format';
    if (!form.message.trim()) errs.message = 'Message is required';
    else if (form.message.trim().length < 10)
      errs.message = 'Message must be at least 10 characters';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await sendContactEmail(form);
      setSubmitted(true);
      toast.success('Message sent! I will reply to your email soon.');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof ContactFormValues, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    if (submitted) setSubmitted(false);
  };

  return (
    <GlassCard className="mx-auto max-w-xl">
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center py-8 text-center"
        >
          <CheckCircle className="h-16 w-16 text-green-500" />
          <h3 className="mt-4 text-xl font-bold text-zinc-900 dark:text-white">
            Thank You!
          </h3>
          <p className="mt-2 text-zinc-500 dark:text-zinc-400">
            Your message has been sent. I will respond within 24 hours.
          </p>
          <Button
            variant="outline"
            className="mt-6"
            onClick={() => setSubmitted(false)}
          >
            Send Another Message
          </Button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            id="name"
            label="Name"
            placeholder="Your name"
            value={form.name}
            onChange={(e) => handleChange('name', e.target.value)}
            error={errors.name}
          />
          <Input
            id="email"
            label="Your Email"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) => handleChange('email', e.target.value)}
            error={errors.email}
          />
          <Textarea
            id="message"
            label="Message"
            placeholder="Tell me about your project..."
            value={form.message}
            onChange={(e) => handleChange('message', e.target.value)}
            error={errors.message}
          />
          <Button
            type="submit"
            fullWidth
            isLoading={isSubmitting}
            icon={<Send className="h-4 w-4" />}
            iconPosition="right"
          >
            Send Message
          </Button>
        </form>
      )}
    </GlassCard>
  );
}
