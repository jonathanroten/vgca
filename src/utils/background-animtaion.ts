//Changes the background color of the .section_project-listing_wrap element to the color specified in the color parameter.
import { gsap } from 'gsap';
export const initBackgroundAnimation = () => {
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const sourceElements = document.querySelectorAll('[data-animation-element="background-source"]');
  const targetElement = document.querySelector(
    '[data-animation-element="background-target"]'
  ) as HTMLElement;

  if (!isTouchDevice && targetElement && sourceElements.length > 0) {
    sourceElements.forEach((ele) => {
      const projectEmbed = ele.querySelector('[data-background-color]') as HTMLElement;
      const newBackgroundColor = projectEmbed.getAttribute('data-background-color') || undefined;

      if (projectEmbed && newBackgroundColor) {
        const backgroundAnimationTimeline = gsap.timeline({
          paused: true,
          duration: 0.2,
          ease: 'power1.inOut',
          delay: 0.2,
        });

        backgroundAnimationTimeline.to(targetElement, { backgroundColor: newBackgroundColor });

        const handleMouseEnter = () => {
          backgroundAnimationTimeline.kill();
          backgroundAnimationTimeline.play();
        };
        const handleMouseLeave = () => {
          backgroundAnimationTimeline.kill();
          backgroundAnimationTimeline.reverse();
        };

        ele.addEventListener('mouseenter', handleMouseEnter);
        ele.addEventListener('mouseleave', handleMouseLeave);
      }
    });
  }
};
