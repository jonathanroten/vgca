//import { initExpertiseSwiper } from '$utils/expertise-swiper';
import { initStickyPanels } from '$utils/sticky-animations';
import { initWorkSwiper } from '$utils/work-swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  initWorkSwiper();
  initStickyPanels();
  // initExpertiseSwiper();
});
