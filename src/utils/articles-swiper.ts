import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export const initArticlesSwiper = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const swiper = new Swiper('[data-swiper-element="articles-instance"]', {
    modules: [Navigation],
    slidesPerView: 3,
    spaceBetween: 16,
    speed: 300,
    navigation: {
      nextEl: '[data-swiper-element="next"]',
      prevEl: '[data-swiper-element="prev"]',
    },
  });
};
