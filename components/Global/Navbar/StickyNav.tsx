import React, { useState } from "react";
import Container from "../../../layout/Container";
import Logo from "../Logo/Logo";
import Menu from "./Menu";
import NavLinks from "./NavLinks";

function StickyNav() {
  const [showNavbar, setShowNavbar] = useState("");

  return (
    <div
      className={`fixed top-0 bg-white  border-line-color border-b white transitions left-0 z-50  ${showNavbar} w-full`}
    >
      <Container>
        <div className="border-b border-x px-2 border-x-line-color  border-b-black flex z-50 py-3 justify-between items-center  max-w-[90vw] mx-auto sm:py-5">
          <Logo />
          <div className=" lg:mr-6">
            <NavLinks />
            <Menu />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default StickyNav;
