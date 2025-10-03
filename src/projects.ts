import { initBackgroundAnimation } from '$utils/gsap-background';
import { initFeaturedProjects } from '$utils/gsap-featured-projects';

window.Webflow ||= [];
window.Webflow.push(() => {
  initBackgroundAnimation();
  initFeaturedProjects();
});
