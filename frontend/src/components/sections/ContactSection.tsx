import { Mail, MapPin } from 'lucide-react';
import { MotionWrapper } from '@/components/animations';
import { SectionWrapper } from '@/components/layout';
import { ContactForm } from '@/components/common';
import { GlassCard } from '@/components/ui';
import { CONTACT_EMAIL } from '@/constants/contact';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Gurgaon, India',
    href: '#contact',
  },
];

export function ContactSection() {
  return (
    <SectionWrapper
      id="contact"
      title="Get In Touch"
      subtitle="Have a project in mind? Send a message — I'll reply to your email"
      accentWord="Touch"
    >
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          {contactInfo.map((info, i) => {
            const Icon = info.icon;
            return (
              <MotionWrapper key={info.label} delay={i * 0.1}>
                <a href={info.href}>
                  <GlassCard className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        {info.label}
                      </p>
                      <p className="font-medium text-zinc-900 dark:text-white">
                        {info.value}
                      </p>
                    </div>
                  </GlassCard>
                </a>
              </MotionWrapper>
            );
          })}
        </div>
        <div className="lg:col-span-3">
          <MotionWrapper delay={0.3}>
            <ContactForm />
          </MotionWrapper>
        </div>
      </div>
    </SectionWrapper>
  );
}
