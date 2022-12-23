/* eslint-disable react/jsx-closing-bracket-location */
import Link from "next/link";
import React from "react";
import { StyledNavMenu } from "./styled";
import { NEXT_PUBLIC_ZIGAH_APP_URL } from "../../utils/api/apis";

const NavBar = () => (
  <div className="w-100 py-4 bg-tranparent">
    <div className="container d-flex justify-content-between align-items-center px-4">
      <div className="col-sm-2">
        <Link href="/" passHref>
          <a href="/">
            <img
              src="/assets/ziga-logo-wide.png"
              alt="woman holding ipad"
              width="50%"
              height="10%"
              sizes="10vw"
            />
          </a>
        </Link>
      </div>
      <StyledNavMenu className="d-flex">
        <div className="d-lg-block d-md-block d-none">
          <Link href={`${NEXT_PUBLIC_ZIGAH_APP_URL}/auth/login`} passHref>
            <a
              href={`${NEXT_PUBLIC_ZIGAH_APP_URL}/auth/login`}
              style={{ fontSize: "0.92rem" }}>
              Sign into your account
            </a>
          </Link>
        </div>

        <a href={`${NEXT_PUBLIC_ZIGAH_APP_URL}/auth/sign-up`}>
          <button className="btn btn-primary" type="button">
            Get Started
          </button>
        </a>
      </StyledNavMenu>
    </div>
  </div>
);

export default NavBar;
