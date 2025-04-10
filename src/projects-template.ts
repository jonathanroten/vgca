import { initStickyPanels } from '$utils/gsap-sticky';
import { initWorkSwiper } from '$utils/swiper-related-work';

window.Webflow ||= [];
window.Webflow.push(() => {
  initWorkSwiper();
  initStickyPanels();
});
