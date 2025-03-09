import { initCardAnimation } from '$utils/card-animation';
import { initWorkSwiper } from '$utils/work-swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  initWorkSwiper();
  initCardAnimation();
});
