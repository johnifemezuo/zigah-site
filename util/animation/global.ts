import gsap from "gsap";
import { useEffect, useLayoutEffect } from "react";

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

gsap.registerEffect({
  name: "fade",
  effect: (targets: string, config: { duration: string | number; }) => {
    return gsap.to(targets, { duration: config.duration, opacity: 0 });
  },
  defaults: { duration: 2 }, //defaults get applied to any "config" object passed to the effect
  extendTimeline: true,
});




