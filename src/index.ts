import { initStickyPanels } from '$utils/gsap-sticky';
import { initCurrentTime } from '$utils/misc-current-time';
import { initArticlesSwiper } from '$utils/swiper-articles';
import { initQuotesSwiper } from '$utils/swiper-quotes';

window.Webflow ||= [];
window.Webflow.push(() => {
  initCurrentTime();
  setInterval(initCurrentTime, 1000);
  initQuotesSwiper();
  initArticlesSwiper();
  initStickyPanels();
});
