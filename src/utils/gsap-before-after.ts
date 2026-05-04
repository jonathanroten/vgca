import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { InertiaPlugin } from 'gsap/InertiaPlugin';

gsap.registerPlugin(Draggable, InertiaPlugin);

const CONFIG = Object.freeze({
  startPct: 50,
  inertia: true,
  velocityMultiplier: 1.0,
  resistance: 500,
  ease: 'power4.out',
  springBack: false,
  springDur: 0.6,
  snapEdge: false,
  snapEdgeZone: 10,
  snapCenter: false,
  snapCenterZone: 5,
});

export const initBeforeAfterAnimation = () => {
  const initSlider = (el: HTMLElement) => {
    const afterWrap = el.querySelector<HTMLElement>('.visual_after_wrap');
    const divider = el.querySelector<HTMLElement>('.card_before-after_divider');
    const handle = el.querySelector<HTMLElement>('.card_before-after_draggable');
    let currentPct: number = CONFIG.startPct;
    let containerWidth = 0;
    let draggable: Draggable[] | null = null;
    let snapTween: gsap.core.Tween | null = null;

    // Convert % to GSAP x offset (handle is anchored at left:50%)
    const pctToX = (p: number) => (p / 100) * containerWidth - containerWidth / 2;
    // Read handle position back as % using GSAP's tracked value — no forced reflow
    const readPct = () => (((gsap.getProperty(handle!, 'x') as number) / containerWidth + 0.5) * 100);
    const reveal = (p: number) => {
      currentPct = gsap.utils.clamp(0, 100, p);
      afterWrap!.style.clipPath = `inset(0 ${100 - currentPct}% 0 0)`;
      divider!.style.left = `${currentPct}%`;
    };
    const getSnapTarget = (p: number): number | null => {
      if (CONFIG.springBack) return 50;
      if (CONFIG.snapEdge) {
        if (p <= CONFIG.snapEdgeZone) return 0;
        if (p >= 100 - CONFIG.snapEdgeZone) return 100;
      }
      if (CONFIG.snapCenter && Math.abs(p - 50) <= CONFIG.snapCenterZone) return 50;
      return null;
    };
    const snapTo = (target: number) => {
      snapTween?.kill();
      snapTween = gsap.to(handle, {
        x: pctToX(target),
        duration: CONFIG.springBack ? CONFIG.springDur : 0.3,
        ease: CONFIG.ease,
        onUpdate: () => reveal(readPct()),
      });
    };
    const onRelease = () => {
      const target = getSnapTarget(readPct());
      if (target !== null) snapTo(target);
    };
    const build = () => {
      draggable?.[0].kill();
      const cfg: Draggable.Vars = {
        type: 'x',
        bounds: el,
        onDrag() {
          snapTween?.kill();
          reveal(readPct());
        },
        onDragEnd() {
          onRelease();
        },
      };
      if (CONFIG.inertia) {
        Object.assign(cfg, {
          inertia: true,
          velocityMultiplier: CONFIG.velocityMultiplier,
          resistance: CONFIG.resistance,
          onThrowUpdate: () => reveal(readPct()),
          onThrowComplete: () => onRelease(),
        });
      }
      draggable = Draggable.create(handle, cfg);
    };
    const place = (p: number) => {
      gsap.set(handle, { x: pctToX(p), xPercent: -50, y: 0, yPercent: -50 });
      reveal(p);
    };
    // ResizeObserver handles both initial placement and resize.
    // Using it as the sole trigger ensures correct positioning even
    // when the element is hidden (e.g. inside an inactive tab panel)
    // at script execution time — it fires once the element gains size.
    let initialized = false;
    const ro = new ResizeObserver(() => {
      if (!el.offsetWidth) return;
      containerWidth = el.offsetWidth;
      build();
      place(initialized ? currentPct : CONFIG.startPct);
      initialized = true;
    });
    ro.observe(el);
  };

  document.querySelectorAll<HTMLElement>('.card_before-after_element').forEach(initSlider);
};
