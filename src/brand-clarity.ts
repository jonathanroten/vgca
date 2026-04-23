import { initBeforeAfterAnimation } from '$utils/gsap-before-after';
import { initFormSwiper } from '$utils/swiper-form';
window.Webflow ||= [];
window.Webflow.push(() => {
  initFormSwiper();
  initBeforeAfterAnimation();
});
