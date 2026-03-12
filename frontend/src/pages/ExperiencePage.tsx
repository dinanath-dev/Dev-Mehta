/* ============================================
 * Experience page — timeline
 * ============================================ */

import { Helmet } from 'react-helmet-async';
import { PageTransition } from '@/components/animations';
import { SectionWrapper } from '@/components/layout';
import { Timeline } from '@/components/common';
import { experiences } from '@/constants/mockData';

export default function ExperiencePage() {
  return (
    <PageTransition>
      <Helmet>
        <title>Experience | Dev Mehta</title>
        <meta name="description" content="My professional journey and work experience as a Full Stack Developer." />
      </Helmet>

      <SectionWrapper
        title="Work Experience"
        subtitle="My professional journey building impactful products"
      >
        <Timeline experiences={experiences} />
      </SectionWrapper>
    </PageTransition>
  );
}
