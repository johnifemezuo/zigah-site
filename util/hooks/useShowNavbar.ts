import React from "react";

export function useShowNavbar() {
  const [showNavbar, setshowNavbar] = React.useState<boolean>(false);

  const revealStickyNavbar = () =>
    (window.onscroll = () => {
      const scrollPosition = document.body.scrollTop;
      const scrollElementPosition = document.documentElement.scrollTop;
      if (scrollPosition > 20 || scrollElementPosition > 20) {
        setshowNavbar(true);
      } else {
        setshowNavbar(false);
      }
    });

  React.useEffect(() => {
    revealStickyNavbar();
  }, []);

  return [showNavbar];
}
