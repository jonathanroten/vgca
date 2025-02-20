import { greetUser } from '$utils/greet';
import { initWorkSwiper } from '$utils/work-swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'Johnny';
  greetUser(name);
  initWorkSwiper();
});
