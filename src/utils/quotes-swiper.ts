import Swiper from 'swiper';
import { Autoplay, EffectFade } from 'swiper/modules';

export const initQuotesSwiper = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const swiper = new Swiper('.cms_quotes_wrap.swiper', {
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
