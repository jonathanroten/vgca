import { gsap } from 'gsap';

export const initCardAnimation = () => {
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const projectElement = document.querySelectorAll('[data-animation-element="project"]');
  const sectionElement = document.querySelector(
    '[data-animation-element="background-target"]'
  ) as HTMLElement;

  if (!isTouchDevice && projectElement.length > 0 && sectionElement) {
    projectElement.forEach((ele) => {
      const projectEmbed = ele.querySelector('[data-background-color]') as HTMLElement;
      const textElement = ele.querySelector('[data-animation-element="text"]') as HTMLElement;
      const TitleElement = ele.querySelector('[data-animation-element="title"]') as HTMLElement;

      const defaultBackground = getComputedStyle(document.documentElement).getPropertyValue(
        '--swatch--dark'
      );
      const backgroundColor =
        projectEmbed.getAttribute('data-background-color') || defaultBackground;

      if (projectEmbed && textElement && TitleElement) {
        const projectAnimationTimeline = gsap.timeline({
          paused: true,
          defaults: {
            duration: 0.3,
            ease: 'power1.out',
          },
        });

        projectAnimationTimeline
          .fromTo(TitleElement, { y: 26 }, { y: 0 })
          .fromTo(textElement, { opacity: 0, y: 26 }, { opacity: 1, y: 0 }, '-=0.2')
          .fromTo(
            sectionElement,
            { backgroundColor: defaultBackground },
            { backgroundColor: backgroundColor },
            '-=0.1'
          );

        const handleMouseEnter = () => projectAnimationTimeline.play();
        const handleMouseLeave = () => projectAnimationTimeline.reverse();

        ele.addEventListener('mouseenter', handleMouseEnter);
        ele.addEventListener('mouseleave', handleMouseLeave);

        // Clean up event listeners if needed
        ele.addEventListener('remove', () => {
          ele.removeEventListener('mouseenter', handleMouseEnter);
          ele.removeEventListener('mouseleave', handleMouseLeave);
        });
      }
    });
  }
};
