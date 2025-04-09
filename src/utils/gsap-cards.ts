import { gsap } from 'gsap';

export const initCardAnimation = () => {
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const cardElements = document.querySelectorAll('[data-animation-element="card"]');
  if (!isTouchDevice && cardElements.length > 0) {
    cardElements.forEach((ele) => {
      const textElement = ele.querySelector('[data-animation-element="text"]') as HTMLElement;
      const titleElement = ele.querySelector('[data-animation-element="title"]') as HTMLElement;
      const mainVisualElement = ele.querySelector(
        '[data-animation-element="visual-1"] img'
      ) as HTMLElement;
      const altVisualElement = ele.querySelector(
        '[data-animation-element="visual-2"] img'
      ) as HTMLElement;

      if (textElement && titleElement && mainVisualElement) {
        const cardAnimationTimeline = gsap.timeline({
          paused: true,
          defaults: {
            duration: 0.4,
            ease: 'power1.inOut',
          },
        });

        gsap.set(titleElement, { y: '2rem' });
        gsap.set(textElement, { autoAlpha: 0, y: '1rem' });
        gsap.set(mainVisualElement, { transform: 'scale(1)' });
        if (altVisualElement) {
          gsap.set(altVisualElement, { transform: 'scale(1)' });
        }

        cardAnimationTimeline
          .to(titleElement, { y: 0 })
          .to(textElement, { autoAlpha: 1, y: 0 }, '<')
          .to(
            mainVisualElement,
            { transform: 'scale(1.03)', autoAlpha: altVisualElement ? 0 : 1 },
            '<'
          );

        if (altVisualElement) {
          cardAnimationTimeline.to(
            altVisualElement,
            { transform: 'scale(1.03)', autoAlpha: 1 },
            '<'
          );
        }

        const playAnimation = () => cardAnimationTimeline.play();
        const reverseAnimation = () => cardAnimationTimeline.reverse();

        ele.addEventListener('mouseenter', playAnimation);
        ele.addEventListener('mouseleave', reverseAnimation);
      } else {
        console.error('Missing required elements for card animation');
      }
    });
  } else {
    console.error('Touch Device: Card animation disabled');
  }
};
