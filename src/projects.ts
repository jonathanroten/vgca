import { initBackgroundAnimation } from '$utils/background-color';
//import { initCardAnimation } from '$utils/card-animation';
import { initStickyPanels } from '$utils/sticky-animations';

window.Webflow ||= [];
window.Webflow.push(() => {
  //initCardAnimation();
  initBackgroundAnimation();
  initStickyPanels();
});
