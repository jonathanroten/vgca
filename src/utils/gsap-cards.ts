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

        gsap.set(titleElement, { y: '2rem' });
        gsap.set(textElement, { opacity: 0, y: '1rem' });
        gsap.set(visualElement, { transform: 'scale(1)' });

        cardAnimationTimeline
          .to(titleElement, { y: 0 })
          .to(textElement, { opacity: 1, y: 0 }, '<')
          .to(visualElement, { transform: 'scale(1.03)' }, '<');

        const playAnimation = () => cardAnimationTimeline.play();
        const reverseAnimation = () => cardAnimationTimeline.reverse();

        ele.addEventListener('mouseenter', playAnimation);
        ele.addEventListener('mouseleave', reverseAnimation);
      }
    });
  } else {
    console.error('Card animation disabled');
  }
};
