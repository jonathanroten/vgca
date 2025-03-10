import { initBackgroundAnimation } from '$utils/background-animtaion';
import { initStickyPanels } from '$utils/sticky-animations';

window.Webflow ||= [];
window.Webflow.push(() => {
  initBackgroundAnimation();
  initStickyPanels();
});
