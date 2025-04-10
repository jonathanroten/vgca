import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export const initWorkSwiper = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const swiper = new Swiper('[data-swiper-element="related-work-instance"]', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 16,
    speed: 500,
    navigation: {
      nextEl: '[data-swiper-element="next"]',
      prevEl: '[data-swiper-element="prev"]',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
    },
  });
};
