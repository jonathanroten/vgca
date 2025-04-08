//Changes the background color of the .section_project-listing_wrap element to the color specified in the color parameter.
import { gsap } from 'gsap';
export const initBackgroundAnimation = () => {
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const sourceElements = document.querySelectorAll('[data-animation-element="background-source"]');
  const targetElement = document.querySelector(
    '[data-animation-element="background-target"]'
  ) as HTMLElement;

  if (!isTouchDevice && targetElement && sourceElements.length > 0) {
    let defaultBackgroundColor = window.getComputedStyle(targetElement).backgroundColor;
    const rgbToHex = (color: string) => {
      const match = color.match(/\d+/g);
      const result = match ? match.map(Number) : [];
      return '#' + result.map((x) => x.toString(16).padStart(2, '0')).join('');
    };
    defaultBackgroundColor = rgbToHex(defaultBackgroundColor);

    sourceElements.forEach((ele) => {
      const projectEmbed = ele.querySelector('[data-background-color]') as HTMLElement;
      const newBackgroundColor = projectEmbed.getAttribute('data-background-color') || undefined;

      if (projectEmbed && newBackgroundColor) {
        const backgroundAnimationTimeline = gsap.timeline({
          paused: true,
          duration: 0.4,
          ease: 'power1.inOut',
        });

        backgroundAnimationTimeline.fromTo(
          targetElement,
          { backgroundColor: defaultBackgroundColor },
          { backgroundColor: newBackgroundColor },
          '<'
        );

        const playAnimation = () => {
          backgroundAnimationTimeline.kill();
          backgroundAnimationTimeline.play();
        };
        const reverseAnimation = () => {
          backgroundAnimationTimeline.kill();
          backgroundAnimationTimeline.reverse();
        };

        ele.addEventListener('mouseenter', playAnimation);
        ele.addEventListener('mouseleave', reverseAnimation);
      }
    });
  }
};
