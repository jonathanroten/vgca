import { initCardAnimation } from '$utils/card-animation';
import { initNavScroll } from '$utils/nav-scroll';

window.Webflow ||= [];
window.Webflow.push(() => {
  initNavScroll();
  initCardAnimation();
});
