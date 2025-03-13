import Swiper from 'swiper';
import { EffectCreative, Navigation } from 'swiper/modules';

export const initExpertiseSwiper = () => {
  const swiperInstances = document.querySelectorAll('[data-swiper-element="expertise-instance"]');

  swiperInstances.forEach((instance, index) => {
    const instanceSwiper = instance.querySelector('.swiper');

    const instanceNext = instance.querySelector('[data-swiper-element="next"]') as HTMLElement;
    instanceNext?.setAttribute('data-swiper-element', `next-${index}`);

    const instancePrev = instance.querySelector('[data-swiper-element="prev"]') as HTMLElement;
    instanceNext?.setAttribute('data-swiper-element', `prev-${index}`);

    if (!instanceSwiper || !instanceNext || !instancePrev) {
      return;
    }

    new Swiper(instanceSwiper as HTMLElement, {
      modules: [Navigation, EffectCreative],
      effect: 'creative',
      grabCursor: true,
      creativeEffect: {
        prev: {
          shadow: true,
          origin: 'bottom right',
          translate: ['4%', '4%', -3],
        },
        next: {
          shadow: true,
          origin: 'bottom right',
          translate: ['2%', '2%', -2],
        },
      },
      slidesPerView: 1,
      speed: 500,
      navigation: {
        nextEl: instanceNext,
        prevEl: instancePrev,
      },
    });
  });
};
