import { initBeforeAfterAnimation } from '$utils/gsap-before-after';
import { initFormSwiper } from '$utils/swiper-form';

window.Webflow ||= [];
window.Webflow.push(() => {
  const init = () => {
    initFormSwiper();
    initBeforeAfterAnimation();
  };
  if ('requestIdleCallback' in window) {
    requestIdleCallback(init, { timeout: 2000 });
  } else {
    setTimeout(init, 200);
  }
});
