import { initStickyPanels } from '$utils/gsap-sticky';
import { initLayoutSort } from '$utils/misc-layout-sort';
import { initWorkSwiper } from '$utils/swiper-related-work';

window.Webflow ||= [];
window.Webflow.push(() => {
  initWorkSwiper();
  initStickyPanels();
  initLayoutSort();
});
