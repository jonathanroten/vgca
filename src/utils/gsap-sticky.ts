import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initStickyPanels = () => {
  const stickyPanels = document.querySelectorAll('[data-animation-element="sticky-panel"]');
  const mm = gsap.matchMedia();

  mm.add('(min-width: 992px)', () => {
    if (stickyPanels.length > 0) {
      stickyPanels.forEach((panel) => {
        const sickyPanelAnimation = gsap.timeline({
          scrollTrigger: {
            trigger: panel,
            start: 'bottom -50%',
            scrub: true,
          },
        });

        sickyPanelAnimation.set(panel, { opacity: 1 }).to(panel, { opacity: 0, duration: 0.1 });
      });
    }
  });
};
