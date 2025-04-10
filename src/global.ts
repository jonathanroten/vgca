import { initCardAnimation } from '$utils/gsap-cards';
import { initMenuAnimation } from '$utils/gsap-menu';
import { initNavScroll } from '$utils/gsap-nav';
window.Webflow ||= [];
window.Webflow.push(() => {
  initNavScroll();
  initCardAnimation();
  initMenuAnimation();
});
