import { gsap } from 'gsap';

export const initCardAnimation = () => {
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const projectElements = document.querySelectorAll('[data-animation-element="project"]');
  const sectionElement = document.querySelector(
    '[data-animation-element="background-target"]'
  ) as HTMLElement;

  if (!isTouchDevice && projectElements.length > 0 && sectionElement) {
    projectElements.forEach((ele) => {
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

/*
import { gsap } from 'gsap';

export const initCardAnimation = () => {
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const projectElements = document.querySelectorAll('[data-animation-element="project"]');
  const sectionElement = document.querySelector(
    '[data-animation-element="background-target"]'
  ) as HTMLElement;

  if (!isTouchDevice && projectElements.length > 0 && sectionElement) {
    projectElements.forEach((ele) => {
      const projectEmbed = ele.querySelector('[data-background-color]') as HTMLElement;
      const textElements = ele.querySelectorAll(
        '[data-animation-element="text"]'
      ) as NodeListOf<HTMLElement>;
      const titleElements = ele.querySelectorAll(
        '[data-animation-element="title"]'
      ) as NodeListOf<HTMLElement>;

      const defaultBackground = getComputedStyle(document.documentElement).getPropertyValue(
        '--swatch--dark'
      );
      const backgroundColor =
        projectEmbed.getAttribute('data-background-color') || defaultBackground;

      if (projectEmbed && textElements && titleElements.length > 0) {
        const projectAnimationTimeline = gsap.timeline({
          paused: true,
          defaults: {
            duration: 0.3,
            ease: 'power1.out',
          },
        });

        // Animate each title element individually
        titleElements.forEach((title) => {
          projectAnimationTimeline.fromTo(
            title,
            { y: 26 },
            { y: 0, duration: 0.3, ease: 'power1.out' }
          );
        });

        textElements.forEach((text) => {
          projectAnimationTimeline.fromTo(
            text,
            { y: 26, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.3, ease: 'power1.out' },
            '-=0.4'
          );
        });

        // Animate the background color of the section element
        projectAnimationTimeline.fromTo(
          sectionElement,
          { backgroundColor: defaultBackground },
          { backgroundColor: backgroundColor },
          '-=0.3'
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
*/
