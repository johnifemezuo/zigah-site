import React from "react";
import Link from "next/link";
import Image from "next/image";

function Logo() {
  return (
    <Link href="/">
      <a className="w-[90px] lg:w-auto">
        <Image src="/img/logo.svg" alt="IFEM" width={120} height={60} />
      </a>
    </Link>
  );
}

export default Logo;
