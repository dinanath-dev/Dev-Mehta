import { SectionWrapper } from '@/components/layout';
import { Timeline } from '@/components/common';
import { experiences } from '@/constants/mockData';

export function ExperienceSection() {
  return (
    <SectionWrapper
      id="experience"
      title="Work Experience"
      subtitle="Professional journey building impactful products"
      accentWord="Experience"
    >
      <Timeline experiences={experiences} />
    </SectionWrapper>
  );
}
