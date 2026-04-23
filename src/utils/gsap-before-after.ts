import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { InertiaPlugin } from 'gsap/InertiaPlugin';

export const initBeforeAfterAnimation = () => {
  document.querySelectorAll<HTMLElement>('.card_before-after_wrap').forEach((element) => {
    if (element.dataset.scriptInitialized) return;
    element.dataset.scriptInitialized = 'true';
    /* ── CONFIG ────────────────────────────────────────── */
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
    /* ── SETUP ─────────────────────────────────────────── */
    gsap.registerPlugin(Draggable);
    const hasInertia = typeof InertiaPlugin !== 'undefined';
    if (hasInertia) gsap.registerPlugin(InertiaPlugin);
    /* ── SLIDER ────────────────────────────────────────── */
    const initSlider = (el: HTMLElement) => {
      const afterWrap = el.querySelector<HTMLElement>('.visual_after_wrap');
      const divider = el.querySelector<HTMLElement>('.card_before-after_divider');
      const handle = el.querySelector<HTMLElement>('.card_before-after_draggable');
      let currentPct: number = CONFIG.startPct;
      let draggable: Draggable[] | null = null;
      let snapTween: gsap.core.Tween | null = null;
      // Convert % to GSAP x offset (handle is anchored at left:50%)
      const pctToX = (p: number) => (p / 100) * el.offsetWidth - el.offsetWidth / 2;
      // Read handle position back as %
      const readPct = () => {
        const { left: sLeft, width: sWidth } = el.getBoundingClientRect();
        const { left: hLeft, width: hWidth } = handle!.getBoundingClientRect();
        return ((hLeft + hWidth / 2 - sLeft) / sWidth) * 100;
      };
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
        if (CONFIG.inertia && hasInertia) {
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
        gsap.set(handle, { x: pctToX(p), y: 0 });
        reveal(p);
      };
      // ResizeObserver handles both initial placement and resize.
      // Using it as the sole trigger ensures correct positioning even
      // when the element is hidden (e.g. inside an inactive tab panel)
      // at script execution time — it fires once the element gains size.
      let initialized = false;
      const ro = new ResizeObserver(() => {
        if (!el.offsetWidth) return;
        place(initialized ? currentPct : CONFIG.startPct);
        build();
        initialized = true;
      });
      ro.observe(el);
    };
    document.querySelectorAll<HTMLElement>('.card_before-after_element').forEach(initSlider);
  });
};
