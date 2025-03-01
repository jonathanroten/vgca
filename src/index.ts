import { initArticlesSwiper } from '$utils/articles-swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  initArticlesSwiper();
});
