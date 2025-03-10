import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export const initArticlesSwiper = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const swiper = new Swiper('.cms_articles_wrap.swiper', {
    modules: [Navigation],
    slidesPerView: 3,
    spaceBetween: '16px',
    speed: 300,
    navigation: {
      nextEl: '.swiper_btn.is-next',
      prevEl: '.swiper_btn.is-prev',
    },
  });
};
