import { useAtom } from "jotai";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { dropdownMenu } from "../../../lib/store/siteAtom";
import DownIcon from "../Icons/svg/DownIcon";
import HeadPhone from "../Icons/svg/HeadPhone";
import QuestionIcon from "../Icons/svg/QuestionIcon";
import ShieldIcon from "../Icons/svg/ShieldIcon";
import Logo from "../Logo/Logo";
import Button from "../UI/Button/Button";
import NavLink from "./NavLink";

function SideBar() {
  const [openSideBar, setOpenSideBar] = useAtom(dropdownMenu);
  const router = useRouter();

  function addActiveClass(path: string) {
    return router.pathname === path ? "text-primary-magenta" : "text-gray-dark border-b pb-3 border-zinc-300";
  }

  return (
    <div
      onClick={() => setOpenSideBar(true)}
      className={`z-50 ${
        openSideBar ? "-translate-x-[100%]" : "translate-x-0"
      } bg-[#F8FAFF] h-full lg:hidden w-[80vw] fixed top-0 left-0 transitions `}
    >
      <div className="p-6 w-[150px]">
        <Logo />
      </div>

      <div className="grid px-6 gap-6 mt-12">
        <NavLink link="/faq" activeClass={addActiveClass("/faq")}>
          Faq
        </NavLink>
        <NavLink link="/book-session" activeClass={addActiveClass("/book-session")}>
          Schedule a session
        </NavLink>

        <NavLink link="/about-us" activeClass={addActiveClass("/about-us")}>
          About
        </NavLink>

        <div className="group">

          <div className={`absolute  bottom-0 right-0 left-0 mx-6 mb-8 text-center space-y-4 mx-a`}>

            <div className="flex items-center ">
              <Link href={`https://app.zigah.co/auth/login`}>
                <a>
                  <Button
                    className="btn-primary w-full lg:block btn btn-rounded-xl"
                    isLoading={false}
                  >
                    Create Account
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
