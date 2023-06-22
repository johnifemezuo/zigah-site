import Link from "next/link";
import React from "react";
import CopyLink from "../../Global/Icons/svg/CopyLink";
import FacebookIcon from "../../Global/Icons/svg/FacebookIcon";
import LinkedIn from "../../Global/Icons/svg/LinkedIn";
import Twitter from "../../Global/Icons/svg/Twitter";

function BlogSocials() {
  return (
    <div className="flex items-center relative space-x-9">
      <Link href={"/"}>
        <a
          className="text-para hover:text-primary-magenta transitions"
          target="_blank"
        >
          <Twitter />
        </a>
      </Link>
      <Link href={"/"}>
        <a
          className="text-para hover:text-primary-magenta transitions"
          target="_blank"
        >
          <FacebookIcon />
        </a>
      </Link>
      <Link href={"/"}>
        <a
          className="text-para hover:text-primary-magenta transitions"
          target="_blank"
        >
          <LinkedIn />
        </a>
      </Link>
      <Link href={"/"}>
        <a
          className="text-para hover:text-primary-magenta transitions"
          target="_blank"
        >
          <CopyLink />
        </a>
      </Link>
    </div>
  );
}

export default BlogSocials;
