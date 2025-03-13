import { initCardAnimation } from '$utils/card-animation';
import { initMenuAnimation } from '$utils/gsap-menu';
import { initNavScroll } from '$utils/nav-scroll';

window.Webflow ||= [];
window.Webflow.push(() => {
  initNavScroll();
  initCardAnimation();
  initMenuAnimation();
});
