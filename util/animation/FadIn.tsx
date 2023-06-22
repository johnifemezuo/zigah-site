/* eslint-disable @typescript-eslint/no-explicit-any */
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "./global";

function FadIn({
  children,
  var2,
  var1,
  param,
}: any): JSX.Element {
  const element = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useIsomorphicLayoutEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: "power4.out" }
    });

    tl.fromTo(
      element.current,
      {
        opacity: 0,
        ...var1,
      },
      { opacity: 1, ...var2 },
      param
    );
  }, []);

  // eslint-disable-next-line react/react-in-jsx-scope
  return <div ref={element}>{children}</div>;
}

export default FadIn;
