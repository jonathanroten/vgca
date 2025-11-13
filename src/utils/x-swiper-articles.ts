import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export const initArticlesSwiper = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const swiper = new Swiper('[data-swiper-element="articles-instance"]', {
    modules: [Navigation],
    slidesPerView: 'auto',
    followFinger: true,
    loopAdditionalSlides: 10,
    freeMode: false,
    slideToClickedSlide: true,
    centeredSlides: false,
    autoHeight: false,
    speed: 300,
    mousewheel: {
      enabled: true,
      forceToAxis: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    navigation: {
      nextEl: '[data-swiper-element="next"]',
      prevEl: '[data-swiper-element="prev"]',
    },
  });
};
