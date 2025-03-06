import { initArticlesSwiper } from '$utils/articles-swiper';
import { initCurrentTime } from '$utils/current-time';
import { initQuotesSwiper } from '$utils/quotes-swiper';
window.Webflow ||= [];
window.Webflow.push(() => {
  initQuotesSwiper();
  initArticlesSwiper();
  initCurrentTime();
  setInterval(initCurrentTime, 120000);
});
