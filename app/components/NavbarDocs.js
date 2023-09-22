"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function NavbarRoadmap() {
  return (
    <div className="w-[100%] h-max-minus-96 grid grid-cols-2 relative bg-white rounded-[24px] col-start-2 col-span-3">
      <div className="flex flex-col gap-4 p-[24px] ">
        <Link href="https://docs.mewccrypto.com/">
          <div className="font-grandstander text-8xl">Docs</div>
          <div className="relative flex gap-2 left-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
            </div>
            <div className="font-poppins text-2xl">docs.mewccrypto.com</div>
          </div>
        </Link>
        <div className="border-b-2 border-black" />
        <div className="font-poppins text-4xl">
          Meowcoin's documentation is packed with insights into our
          blockchain. Access whitepapers and technical guides to gain an
          in-depth understanding of Meowcoin's architecture, features, and
          future plans. Whether you're a developer or enthusiast, our
          documentation gives you the tools you need to build with Meowcoin.
        </div>
      </div>
      <div className="w-[100%] h-[100%] about-us-image rounded-r-[24px]" />
    </div>
  );
}
