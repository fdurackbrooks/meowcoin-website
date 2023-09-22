"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function NavbarCommunity() {
  return (
    <div className="w-[100%] h-max-minus-96 grid grid-cols-2 relative bg-white rounded-[24px] col-start-2 col-span-3">
      <div className="flex flex-col gap-4 p-[24px] ">
        <Link href="/community">
          <div className="font-grandstander text-8xl">Community</div>
          <div className="relative flex gap-2 left-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
            </div>
            <div className="font-poppins text-2xl">
              mewccrypto.com/community
            </div>
          </div>
        </Link>
        <div className="border-b-2 border-black" />
        <div className="font-poppins text-4xl">
          Our incredible community is the heart of Meowcoin. Connect with fellow
          supporters, share your ideas, and stay updated on the latest
          developments. At Meowcoin, we're more than just a cryptocurrency;
          we're a community united by a common goal – to support animals through
          blockchain technology.
        </div>
      </div>
      <div className="w-[100%] h-[100%] about-us-image rounded-r-[24px]" />
    </div>
  );
}
