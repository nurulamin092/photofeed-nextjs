import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        className="max-w-[100px] md:max-w[165px]"
        src="/lws_logo.png"
        alt="Lws"
        height={100}
        width={165}
      />
    </Link>
  );
}
