import { initArticlesSwiper } from '$utils/articles-swiper';
import { initCurrentTime } from '$utils/current-time';
import { initQuotesSwiper } from '$utils/quotes-swiper';
import { initStickyPanels } from '$utils/sticky-animations';

window.Webflow ||= [];
window.Webflow.push(() => {
  initCurrentTime();
  setInterval(initCurrentTime, 15000);
  initQuotesSwiper();
  initArticlesSwiper();
  initStickyPanels();
});
