import { initBackgroundAnimation } from '$utils/background-animtaion';
import { initFeaturedProjects } from '$utils/featured-project-animations';

window.Webflow ||= [];
window.Webflow.push(() => {
  initBackgroundAnimation();
  initFeaturedProjects();
});
