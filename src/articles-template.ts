import { initArticlesSwiper } from '$utils/articles-swiper';
//import { initCardAnimation } from '$utils/card-animation';
import { initReadTime } from '$utils/read-time';

window.Webflow ||= [];
window.Webflow.push(() => {
  initArticlesSwiper();
  initReadTime();
  // initCardAnimation();
});
