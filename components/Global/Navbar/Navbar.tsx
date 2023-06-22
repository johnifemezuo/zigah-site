import { useAtom } from "jotai";
import React from "react";
import Container from "../../../layout/Container";
import { dropdownMenu } from "../../../lib/store/siteAtom";
import { useShowNavbar } from "../../../util/hooks/useShowNavbar";
import Logo from "../Logo/Logo";
import NavbarSignUp from "./NavbarSignUp";
import NavLinks from "./NavLinks";
import SideBar from "./SideBar";

function Navbar() {
  const [showNavbar, showButton] = useShowNavbar();
  const [openSideBar, setOpenSideBar] = useAtom(dropdownMenu);

  return (
    <div className="relative z-40 ">
      <div
        className={`fixed top-0 bg-white white transitions left-0 z-50  w-full border-b `}
      >
        <Container>
          <div className="px-4 lg:px-0 flex justify-between py-3 items-center ">
            <Logo />

            <NavLinks />

            <NavbarSignUp />
            <div
              onClick={() => setOpenSideBar(true)}
              className={`${openSideBar ? "invisible " : "visible"}  transition duration-500
                fixed inset-0 z-0 bg-black/10 w-full lg:invisible`}
            ></div>
          </div>
        </Container>
      </div>

      {/* reveal ticky navbar */}
      {/* <div
        className={`bg-white fixed top-0 left-0 right-0 hidden lg:flex max-w-7xl mx-auto items-center justify-between py-3 px-8 rounded-br-2xl shadow-xl rounded-bl-2xl ${
          showNavbar ? "translate-y-0 transitions" : "-translate-y-28 "
        }`}
      >
        <Logo />

        <NavLinks />

        <NavbarSignUp />
      </div> */}

      <SideBar />
    </div>
  );
}

export default Navbar;
