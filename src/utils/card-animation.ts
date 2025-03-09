import { gsap } from 'gsap';

export const initCardAnimation = () => {
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const cardElements = document.querySelectorAll('[data-animation-element="card"]');
  if (!isTouchDevice && cardElements.length > 0) {
    cardElements.forEach((ele) => {
      const textElement = ele.querySelector('[data-animation-element="text"]') as HTMLElement;
      const titleElement = ele.querySelector('[data-animation-element="title"]') as HTMLElement;
      const visualElement = ele.querySelector(
        '[data-animation-element="visual"] img'
      ) as HTMLElement;

      if (textElement && titleElement && visualElement) {
        const cardAnimationTimeline = gsap.timeline({
          paused: true,
          defaults: {
            duration: 0.4,
            ease: 'power1.inOut',
          },
        });

        cardAnimationTimeline
          .fromTo(titleElement, { y: '2rem' }, { y: 0 })
          .fromTo(textElement, { opacity: 0, y: '1rem' }, { opacity: 1, y: 0 }, '<')
          .fromTo(visualElement, { transform: 'scale(1)' }, { transform: 'scale(1.03)' }, '<');

        const handleMouseEnter = () => cardAnimationTimeline.play();
        const handleMouseLeave = () => cardAnimationTimeline.reverse();

        ele.addEventListener('mouseenter', handleMouseEnter);
        ele.addEventListener('mouseleave', handleMouseLeave);
      }
    });
  } else {
    console.error('Card animation disabled');
  }
};
