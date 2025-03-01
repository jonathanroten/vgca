import { initArticlesSwiper } from '$utils/articles-swiper';
import { initCurrentTime } from '$utils/current-time';

window.Webflow ||= [];
window.Webflow.push(() => {
  initArticlesSwiper();
  initCurrentTime();
  setInterval(initCurrentTime, 120000);
});
