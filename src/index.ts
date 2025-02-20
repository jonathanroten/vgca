import { initArticlesSwiper } from '$utils/articles-swiper';
import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'Johnny';
  greetUser(name);
  initArticlesSwiper();
});
