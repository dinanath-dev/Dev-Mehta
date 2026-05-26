/** Smooth-scroll to a section by id (navbar offset handled via scroll-mt on sections) */
export function scrollToSection(sectionId: string): void {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
