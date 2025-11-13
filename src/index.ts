import { initCurrentTime } from '$utils/misc-current-time';
import { initMainSwiper } from '$utils/swiper-main';
import { initQuotesSwiper } from '$utils/swiper-quotes';

window.Webflow ||= [];
window.Webflow.push(() => {
  initCurrentTime();
  setInterval(initCurrentTime, 1000);
  initQuotesSwiper();
  initMainSwiper();
});
