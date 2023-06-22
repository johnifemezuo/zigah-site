import React from "react";
import { useAtom } from "jotai";
import {dropdownMenu} from "../../../lib/store/siteAtom"

function Menu() {
  const [openDropdown, setOpenDropdown] = useAtom(dropdownMenu);

  function openMenu() {
    setOpenDropdown(!openDropdown);
  }

  return (
    <div
      className={`border rounded-md border-zinc-200 flex lg:hidden py-1 px- items-center overflow-hidden  group cursor-pointer ${
        openDropdown ? "bg-[#ffffff]" : "bg-[#ffffff]"
      }`}
      onClick={openMenu}
    >
      <div className=" hover:text-primary-color space-y-1 group transitions hover:rounded-full  px-3 py-2">
        <span
          className={`bg-[#444444]  w-4  grid h-0.5 transitions ${
            openDropdown ? "rotate-0" : " -rotate-45 translate-y-1 translate-x- "
          }`}
        ></span>
        <span
          className={`bg-[#444444] w-4 grid h-0.5  origin-center transitions ${
            openDropdown ? "rotate-0" : "rotate-45 translate-x- -translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-[#444444] w-4 grid h-0.5  origin-center transitions ${
            openDropdown ? "rotate-0" : "rotate-45 hidden translate-x- -translate-y-0.5"
          }`}
        ></span>
      </div>
    </div>
  );
}

export default Menu;
