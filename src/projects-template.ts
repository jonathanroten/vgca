import { initLayoutSort } from '$utils/misc-layout-sort';
import { initMainSwiper } from '$utils/swiper-main';
import { initProjectSwiper } from '$utils/swiper-project';

window.Webflow ||= [];
window.Webflow.push(() => {
  initProjectSwiper();
  initLayoutSort();
  initMainSwiper();
});
