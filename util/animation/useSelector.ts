import { useMemo, useRef } from "react";

export default function useSelector() {
  const ref = useRef();
  const q = useMemo(() => gsap.utils.selector(ref), [ref]);
  return [q, ref];
}
