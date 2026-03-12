/* ============================================
 * Contact page
 * ============================================ */

import { Helmet } from 'react-helmet-async';
import { Mail, MapPin, Phone } from 'lucide-react';
import { PageTransition, MotionWrapper } from '@/components/animations';
import { SectionWrapper } from '@/components/layout';
import { ContactForm } from '@/components/common';
import { GlassCard } from '@/components/ui';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'dev@mehta.com', href: 'mailto:dev@mehta.com' },
  { icon: MapPin, label: 'Location', value: 'India', href: '#' },
  { icon: Phone, label: 'Phone', value: '+91 XXXXX XXXXX', href: '#' },
];

export default function ContactPage() {
  return (
    <PageTransition>
      <Helmet>
        <title>Contact | Dev Mehta</title>
        <meta name="description" content="Get in touch with Dev Mehta for collaboration, freelance work, or just to say hi." />
      </Helmet>

      <SectionWrapper
        title="Get In Touch"
        subtitle="Have a project in mind? Let's build something great together."
      >
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Info cards */}
          <div className="space-y-4 lg:col-span-2">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <MotionWrapper key={info.label} delay={i * 0.1}>
                  <a href={info.href}>
                    <GlassCard className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          {info.label}
                        </p>
                        <p className="font-medium text-slate-900 dark:text-white">
                          {info.value}
                        </p>
                      </div>
                    </GlassCard>
                  </a>
                </MotionWrapper>
              );
            })}
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <MotionWrapper delay={0.3}>
              <ContactForm />
            </MotionWrapper>
          </div>
        </div>
      </SectionWrapper>
    </PageTransition>
  );
}
