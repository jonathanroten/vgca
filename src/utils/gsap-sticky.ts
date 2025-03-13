import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initStickyPanels = () => {
  const stickyPanels = document.querySelectorAll('[data-animation-element="sticky-panel"]');

  if (stickyPanels.length > 0) {
    stickyPanels.forEach((panel) => {
      (panel as HTMLElement).style.position = 'sticky';
      (panel as HTMLElement).style.top = '0';
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
};
