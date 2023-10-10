import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import Navbar from "./components/Navbar";
import MewcSupply from "./components/MewcSupply";
import MewcDonated from "./components/MewcDonated";
import MewcHeight from "./components/MewcHeight";
import MewcPrice from "./components/MewcPrice";
import MewcBurned from "./components/MewcBurned";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="relative top-[180px] left-[60px] w-[35vw] z-10">
        <div className="font-grandstander text-[180px] leading-none font-medium">
          Meowcoin
        </div>
        <div className="font-poppins text-5xl font-medium leading-tight">
          A crypto project dedicated to helping our furry friends
        </div>
        <div className="h-8" />
        <div className="grid grid-cols-2 grid-rows-2 gap-8 w-[432px]">
          <Link className="w-[200px]" href="https://discord.gg/meowcoin/">
            <button className="font-poppins transition-colors h-[72px] bg-[#d7c47f] text-black rounded-[24px] w-[100%] text-3xl xl:block hidden hover:bg-[#BC8312] hover:text-white">
              Discord
            </button>
          </Link>
          <Link className="w-[200px]" href="https://discord.gg/meowcoin/">
            <button className="font-poppins transition-colors h-[72px] bg-[#d7c47f] text-black rounded-[24px] w-[100%] text-3xl xl:block hidden hover:bg-[#BC8312] hover:text-white">
              Mining
            </button>
          </Link>
          <Link className="w-[200px]" href="/donations">
            <button className="font-poppins transition-colors h-[72px] bg-[#d7c47f] text-black rounded-[24px] w-[100%] text-3xl xl:block hidden hover:bg-[#BC8312] hover:text-white">
              Donations
            </button>
          </Link>
          <Link
            className="w-[200px]"
            href="https://docs.mewccrypto.com/whitepaper"
          >
            <button className="font-poppins transition-colors h-[72px] bg-[#d7c47f] text-black rounded-[24px] w-[100%] text-3xl xl:block hidden hover:bg-[#BC8312] hover:text-white">
              Donations
            </button>
          </Link>
        </div>
      </div>
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2273.09 2102.89"
        fill="#bc8312"
        className="top-0 right-0 absolute h-[860px]"
      >
        <path d="m336.31,0c4.91,21.19,8.15,43.05,9.37,65.56,12.59,231.79-197.35,339.95-296.52,630.11-101.57,297.18-23.82,600.52,37.07,741.31,259.36,599.73,1323.82,819.45,2112.73,555.98,25.17-8.41,49.84-17.3,74.13-26.55V0H336.31Z" />
      </svg>
      <div className="mewc-logo-hero absolute top-[200px] right-[120px]">
        <Image
          src="/MeowcoinLogoNoBackground.png"
          alt="mewc-logo"
          width="680"
          height="0"
        />
      </div>
      <div className="top-[400px] relative hidden flex-row justify-around z-30 items-center h-[512px] lg:flex">
        <MewcSupply />
        <MewcDonated />
        <MewcHeight />
        <MewcPrice />
        <MewcBurned />
      </div>
      <div>
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1092.06 1624.66"
          fill="#eccba0"
          className="top-[950px] absolute"
        >
          <path d="m1092.06,1624.66V0c-66.48,25.26-133.97,74.31-257.91,103.49-140.79,33.14-260.87,18.6-389.11,3.06C234.38,81.04,151.54,26.27,42.15,75.91c-15.31,6.95-29.31,15.13-42.15,24.11v1524.63h1092.06Z" />
        </svg>
      </div>
      <div className="relative top-[480px] right-[120px] z-20">
        <Image src="/HomePageCat1.png" alt="mewc-logo" width="800" height="0" />
      </div>
      <div className="z-30 text-black absolute text-right w-[50%] right-[120px] top-[1800px]">
        <div className="font-grandstander text-8xl">The Meowcoin Platform</div>
        <div className="font-poppins text-4xl">
          <br />
          Meowcoin is a platform built on the KaWPOW algorithm that aims to
          integrate blockchain technology in the animal sector, provide small
          scale miners with a profitable blockchain to devote their hash to, and
          benefit the wider animal sector through philanthropic means.<br /><br />Meowcoin
          donates part of the block reward to animal shelters.
        </div>
      </div>
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1092.06 1624.66"
        fill="#deb887"
        className="top-[2200px] absolute"
      >
        <path d="m1092.06,1624.66V0c-66.48,25.26-133.97,74.31-257.91,103.49-140.79,33.14-260.87,18.6-389.11,3.06C234.38,81.04,151.54,26.27,42.15,75.91c-15.31,6.95-29.31,15.13-42.15,24.11v1524.63h1092.06Z" />
      </svg>
    </div>
  );
}
