import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export const initWorkSwiper = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const swiper = new Swiper('[data-swiper-element="related-work-instance"]', {
    modules: [Navigation],
    slidesPerView: 2,
    spaceBetween: 24,
    speed: 500,
    navigation: {
      nextEl: '[data-swiper-element="next"]',
      prevEl: '[data-swiper-element="prev"]',
    },
  });
};
