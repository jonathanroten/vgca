import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export const initProjectMainSwiper = () => {
  const swiperInstances = document.querySelectorAll(
    '[data-swiper-element="project-main-instance"]'
  );

  if (swiperInstances.length === 0) {
    return;
  }

  swiperInstances.forEach((instance, index) => {
    const instanceSwiper = instance.querySelector('.swiper');
    instanceSwiper?.setAttribute('data-swiper-element', `swiper-${index}`);

    const instanceNext = instance.querySelector('[data-swiper-element="next"]') as HTMLElement;
    instanceNext?.setAttribute('data-swiper-element', `next-${index}`);

    const instancePrev = instance.querySelector('[data-swiper-element="prev"]') as HTMLElement;
    instancePrev?.setAttribute('data-swiper-element', `prev-${index}`);

    if (!instanceSwiper || !instanceNext || !instancePrev) {
      return;
    }

    new Swiper(instanceSwiper as HTMLElement, {
      modules: [Navigation],

      navigation: {
        prevEl: instancePrev,
        nextEl: instanceNext,
      },
      speed: 500,
    });
  });
};
