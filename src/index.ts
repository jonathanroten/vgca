import { greetUser } from '$utils/greet';
import { initSwiper } from '$utils/swiper';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'Johnny';
  greetUser(name);
  initSwiper();
});
