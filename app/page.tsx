import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MewcSupply from "./components/MewcSupply";
import MewcDonated from "./components/MewcDonated";
import MewcHeight from "./components/MewcHeight";
import MewcPrice from "./components/MewcPrice";
import MewcBurned from "./components/MewcBurned";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="relative top-[180px] left-[60px] md:w-[35vw] z-10">
        <div className="font-grandstander text-[20vw] md:text-[180px] leading-none font-medium text-center md:text-left">
          Meowcoin
        </div>
        <div className="block md:hidden h-4" />
        <div className="font-poppins text-[10vw] md:text-5xl font-medium md:leading-tight text-center md:text-left">
          A crypto project dedicated to helping our furry friends
        </div>
        <div className="h-8" />
        <div className="grid grid-cols-2 grid-rows-2 gap-8 w-[100%] md:w-[432px] text-black text-[6vw] md:text-3xl">
          <Link className="md:w-[200px] w-[100%]" href="https://discord.gg/meowcoin/">
            <button className="font-poppins transition-all h-[72px] bg-[#d7c47f] rounded-[24px] w-[100%] hover:bg-[#BC8312] hover:text-white hover:shadow-lg">
              Discord
            </button>
          </Link>
          <Link className="md:w-[200px] w-[100%]" href="https://discord.gg/meowcoin/">
            <button className="font-poppins transition-all h-[72px] bg-[#d7c47f] rounded-[24px] w-[100%] hover:bg-[#BC8312] hover:text-white hover:shadow-lg">
              Mining
            </button>
          </Link>
          <Link className="md:w-[200px] w-[100%]" href="/donations">
            <button className="font-poppins transition-all h-[72px] bg-[#d7c47f] rounded-[24px] w-[100%] hover:bg-[#BC8312] hover:text-white hover:shadow-lg">
              Donations
            </button>
          </Link>
          <Link
            className="md:w-[200px] w-[100%]"
            href="https://docs.mewccrypto.com/whitepaper"
          >
            <button className="font-poppins transition-all h-[72px] bg-[#d7c47f] rounded-[24px] w-[100%] hover:bg-[#BC8312] hover:text-white hover:shadow-lg">
              Whitepaper
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
        className="top-0 right-0 absolute h-[860px] lg:block hidden"
      >
        <path d="m336.31,0c4.91,21.19,8.15,43.05,9.37,65.56,12.59,231.79-197.35,339.95-296.52,630.11-101.57,297.18-23.82,600.52,37.07,741.31,259.36,599.73,1323.82,819.45,2112.73,555.98,25.17-8.41,49.84-17.3,74.13-26.55V0H336.31Z" />
      </svg>
      <div className="mewc-logo-hero absolute top-[200px] right-[120px] 2xl:block hidden">
        <Image
          src="/MeowcoinLogoNoBackground.png"
          alt="mewc-logo"
          width="680"
          height="0"
        />
      </div>
      <div className="top-[400px] relative hidden flex-row justify-around z-30 items-center h-[512px] 2xl:flex">
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
          className="top-[950px] absolute lg:block hidden"
        >
          <path d="m1092.06,1624.66V0c-66.48,25.26-133.97,74.31-257.91,103.49-140.79,33.14-260.87,18.6-389.11,3.06C234.38,81.04,151.54,26.27,42.15,75.91c-15.31,6.95-29.31,15.13-42.15,24.11v1524.63h1092.06Z" />
        </svg>
      </div>
      <div className="relative top-[480px] right-[120px] z-20 w-[45%] lg:block hidden">
        <Image src="/HomePageCat1.png" alt="mewc-logo" width="800" height="0" />
      </div>
      <div className="z-30 text-black absolute text-right w-[50%] right-[120px] top-[1200px] 2xl:top-[1600px]">
        <div className="font-grandstander text-8xl">The Meowcoin Platform</div>
        <div className="font-poppins text-4xl">
          <br />
          Meowcoin is a platform built on the KawPoW algorithm that aims to
          integrate blockchain technology in the animal sector, provide small
          scale miners with a profitable blockchain to devote their hash to, and
          benefit the wider animal sector through philanthropic means. Meowcoin
          donates part of the block reward to animal shelters.
          <br />
          <br />
          Pet adoption is an opportunity to integrate blockchain technology into
          the animal sector that can benefit both animal shelters and adopters
          alike. Animals&apos; information such as owner contacts, medical history
          and microchip number can be saved onto the blockchain for all to see,
          including all future owners.
        </div>
      </div>
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1092.06 1624.66"
        fill="#deb887"
        className="top-[2200px] absolute lg:block hidden"
      >
        <path d="m1092.06,1624.66V0c-66.48,25.26-133.97,74.31-257.91,103.49-140.79,33.14-260.87,18.6-389.11,3.06C234.38,81.04,151.54,26.27,42.15,75.91c-15.31,6.95-29.31,15.13-42.15,24.11v1524.63h1092.06Z" />
      </svg>
    </div>
  );
}
