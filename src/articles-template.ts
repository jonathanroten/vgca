import { initReadTime } from '$utils/misc-read-time';
import { initMainSwiper } from '$utils/swiper-main';
window.Webflow ||= [];
window.Webflow.push(() => {
  initMainSwiper();
  initReadTime();
});
