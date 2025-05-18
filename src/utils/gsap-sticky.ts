import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initStickyPanels = () => {
  const stickyPanels = document.querySelectorAll('[data-animation-element="sticky-panel"]');
  const mm = gsap.matchMedia();

  mm.add('(min-width: 992px)', () => {
    if (stickyPanels.length > 0) {
      stickyPanels.forEach((panel) => {
        ScrollTrigger.create({
          trigger: panel,
          start: 'top bottom',
          end: 'bottom top',
          onEnter: () => gsap.set(panel, { autoAlpha: 1 }),
          onEnterBack: () => gsap.set(panel, { autoAlpha: 1 }),
          onLeave: () => gsap.set(panel, { autoAlpha: 0 }),
          onLeaveBack: () => gsap.set(panel, { autoAlpha: 0 }),
        });
      });
    }
  });
};
