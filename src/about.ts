import { initFormatNumber } from '$utils/misc-format-numbers';
import { initConvoSwiper } from '$utils/swiper-convo-starters';
import { initWorkSwiper } from '$utils/swiper-related-work';

window.Webflow ||= [];
window.Webflow.push(() => {
  initWorkSwiper();
  initConvoSwiper();
  initFormatNumber();
});
