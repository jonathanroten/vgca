import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export const initWorkSwiper = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const swiper = new Swiper('.cms_related-work_wrap.swiper', {
    modules: [Navigation],
    slidesPerView: 2,
    spaceBetween: '24px',
    speed: 500,
    navigation: {
      nextEl: '.swiper_btn.is-next',
      prevEl: '.swiper_btn.is-prev',
    },
  });
};
