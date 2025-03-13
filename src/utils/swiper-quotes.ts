import Swiper from 'swiper';
import { Autoplay, EffectFade } from 'swiper/modules';

export const initQuotesSwiper = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const swiper = new Swiper('[data-swiper-element="quotes-instance"]', {
    modules: [Autoplay, EffectFade],
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    speed: 500,
    loop: true,
    autoplay: {
      delay: 3000,
    },
  });
};
