import { initBackgroundAnimation } from '$utils/gsap-background';
import { initFeaturedProjects } from '$utils/gsap-featured-projects';
import { initStickyPanels } from '$utils/gsap-sticky';

window.Webflow ||= [];
window.Webflow.push(() => {
  initBackgroundAnimation();
  initFeaturedProjects();
  initStickyPanels();
});
