import Link from "next/link";
import React from "react";
import Button from "../UI/Button/Button";
import Menu from "./Menu";

function NavbarSignUp() {
  return (
    <div className="space-x-4 -translate-y-1 lg:space-x-6 flex items-center ">
      <Link href={`https://app.zigah.co/auth/login`}>
        <a
          className="text-sm lg:text-base font-medium text-primary-magenta transitions"
        >
          Login In
        </a>
      </Link>

      <div className="flex items-center space-x-3">

        <a href={`https://app.zigah.co/auth/sign-up`}>
            <Button
              className="hover:bg-primary-blue-hover border rounded-4xl text-white bg-primary-blue hover:text-zinc-100 rounded-md border-zinc-300 hidden md:block"
              isLoading={false}
            >
              Open an Account
            </Button>
        </a>
        
        <Menu />
      </div>
    </div>
  );
}

export default NavbarSignUp;
