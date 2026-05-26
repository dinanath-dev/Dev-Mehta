import { SectionWrapper } from '@/components/layout';
import { GitHubStatsSection } from '@/components/common';

export function GitHubSection() {
  return (
    <SectionWrapper
      id="github"
      title="GitHub Activity"
      subtitle="Open source contributions at a glance — connect live API later"
      accentWord="Activity"
    >
      <GitHubStatsSection />
    </SectionWrapper>
  );
}
