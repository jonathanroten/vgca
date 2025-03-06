import { initBackgroundColor } from './utils/background-color';

window.Webflow ||= [];
window.Webflow.push(() => {
  initBackgroundColor();
});
