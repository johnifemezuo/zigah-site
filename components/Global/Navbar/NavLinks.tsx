import { useAtom } from "jotai";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { dropdownMenu } from "../../../lib/store/siteAtom";
import { StyledNavDropdown } from "../../../styles/styled-components/Styled-component";
import DownIcon from "../Icons/svg/DownIcon";
import HeadPhone from "../Icons/svg/HeadPhone";
import QuestionIcon from "../Icons/svg/QuestionIcon";
import ShieldIcon from "../Icons/svg/ShieldIcon";
import NavLink from "./NavLink";

function NavLinks() {
  const router = useRouter();

  const [openDropdown, setOpenDropdown] = useAtom(dropdownMenu);

  function addActiveClass(path: string) {
    return router.pathname === path ? "text-primary-magenta" : "text-gray-dark";
  }

  return (
    <div className=" hidden  z-20 lg:flex lg:items-center md:space-x-10">
      <NavLink link="/faq" activeClass={addActiveClass("/faq")}>
        Faq
      </NavLink>
      <NavLink link="/book-session" activeClass={addActiveClass("/book-session")}>
        Schedule a session
      </NavLink>

      <NavLink link="/about-us" activeClass={addActiveClass("/about-us")}>
        About
      </NavLink>

      {/* <div className="group">
        <div className="text-gray-dark hover:text-primary-magenta transitions">
          <div className="flex items-center group">
            <span>Help</span>{" "}
            <span>
              <DownIcon />
            </span>
          </div>
        </div>

        <div
          onClick={() => setOpenDropdown(false)}
          className="px-6 transitions group-hover:opacity-100 group-hover:translate-y-3 translate-y-0 opacity-0 py-5 lg:-ml-[16vh] bg-[#eceff3bf] rounded-md absolute flex items-center space-x-6  border-border"
        >
          <Link href="/faq">
            <StyledNavDropdown>
              <span>Faq</span>
              <QuestionIcon />
            </StyledNavDropdown>
          </Link>

          <Link href="/">
            <StyledNavDropdown>
              <span>Get Help</span>
              <HeadPhone />
            </StyledNavDropdown>
          </Link>

          <Link href="/terms-of-use">
            <StyledNavDropdown>
              <span>Terms </span>
              <ShieldIcon />
            </StyledNavDropdown>
          </Link>

          <span className=" bg-[#eceff3bf] p-3 absolute top-0  rotate-45 -mt-1  translate-x-28   rounded-sm"></span>
        </div>
      </div> */}
    </div>
  );
}

export default NavLinks;
