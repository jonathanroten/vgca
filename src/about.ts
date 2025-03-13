import { initStickyPanels } from '$utils/sticky-animations';
import { initConvoSwiper } from '$utils/swiper-convo-starters';
import { initWorkSwiper } from '$utils/work-swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  initWorkSwiper();
  initStickyPanels();
  initConvoSwiper();
});
