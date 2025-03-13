import { initReadTime } from '$utils/read-time';
import { initArticlesSwiper } from '$utils/swiper-articles';

window.Webflow ||= [];
window.Webflow.push(() => {
  initArticlesSwiper();
  initReadTime();
});
