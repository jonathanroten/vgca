import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

export const initConvoSwiper = () => {
  const swiperInstances = document.querySelectorAll('[data-swiper-element="convo-instance"]');
  swiperInstances.forEach((instance) => {
    const cloneSlides = () => {
      const swiperWrapper = instance.querySelector('.swiper-wrapper');
      const swiperSlides = Array.from(instance.querySelectorAll('.swiper-slide'));

      if (!swiperWrapper || swiperSlides.length < 0) return;

      swiperSlides.forEach((slide) => {
        const swiperClone = slide.cloneNode(true);
        swiperWrapper.appendChild(swiperClone);
      });
    };

    cloneSlides();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const swiper = new Swiper(instance as HTMLElement, {
      modules: [Autoplay],
      slidesPerView: 'auto',
      //spaceBetween: 24, set margin-right on swiper-slide via css
      loop: true,
      speed: 5000,
      allowTouchMove: false,
      autoplay: {
        delay: 1,
        disableOnInteraction: false,
      },
    });
  });
};
