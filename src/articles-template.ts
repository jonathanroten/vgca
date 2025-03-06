import { initArticlesSwiper } from '$utils/articles-swiper';
import { initReadTime } from '$utils/read-time';

window.Webflow ||= [];
window.Webflow.push(() => {
  initArticlesSwiper();
  initReadTime();
});
