import { initStickyPanels } from '$utils/gsap-sticky';
import { initExpertiseSwiper } from '$utils/swiper-expertise';
import { initWorkSwiper } from '$utils/swiper-related-work';

window.Webflow ||= [];
window.Webflow.push(() => {
  initWorkSwiper();
  initStickyPanels();
  initExpertiseSwiper();
});
