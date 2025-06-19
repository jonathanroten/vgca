import { initStickyPanels } from '$utils/gsap-sticky';
import { initLayoutSort } from '$utils/misc-layout-sort';
import { initProjectMainSwiper } from '$utils/swiper-project-main';
import { initWorkSwiper } from '$utils/swiper-related-work';

window.Webflow ||= [];
window.Webflow.push(() => {
  initProjectMainSwiper();

  initLayoutSort();
  initStickyPanels();
  initWorkSwiper();
});
