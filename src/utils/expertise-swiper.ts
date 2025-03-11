import Swiper from 'swiper';
import { EffectCreative, Navigation } from 'swiper/modules';

export const initExpertiseSwiper = () => {
  const swiperInstances = document.querySelectorAll('[data-swiper-element="instance"]'); // Fixed selector

  swiperInstances.forEach((instance, index) => {
    (instance as HTMLElement).dataset.swiperElement += `-${index}`;
    const currentInstance = (instance as HTMLElement).dataset.swiperElement; // Scoped variable
    const swiperContainer = document.querySelector(
      `[data-swiper-element="${currentInstance}"] .swiper`
    ) as HTMLElement; // Scoped selection

    if (!swiperContainer) return; // Prevent errors if no valid container is found

    new Swiper(swiperContainer, {
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
        nextEl: instance.querySelector('.swiper_btn.is-next') as HTMLElement,
        prevEl: instance.querySelector('.swiper_btn.is-prev') as HTMLElement,
      },
    });
  });
};
