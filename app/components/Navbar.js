"use client";

import Link from "next/link";
import React, { useState } from "react";
import NavbarAboutUs from "@/app/components/NavbarAboutUs";
import NavbarRoadmap from "@/app/components/NavbarRoadmap";
import NavbarPartners from "@/app/components/NavbarPartners";
import NavbarCommunity from "@/app/components/NavbarCommunity";
import NavbarResources from "@/app/components/NavbarResources";
import NavbarDocs from "@/app/components/NavbarDocs";
import NavbarExplorer from "@/app/components/NavbarExplorer";
import NavbarStore from "@/app/components/NavbarStore";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastHovered, setLastHovered] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      setLastHovered(null);
    }
  };

  const handleLinkHover = (linkName) => {
    if (lastHovered !== linkName) {
      setLastHovered(linkName);
    }
  };

  return (
    <div>
      <div
        className={`${
          menuOpen ? "h-[90%]" : "h-[120px]"
        } w-[85%] bg-[#d7c47f] translate-x-[-50%] left-[50%] fixed rounded-b-[48px] p-[24px] transition-all z-50 shadow-2xl`}
      >
        <div className="flex justify-between">
          <button
            className="font-poppins transition-all h-[72px] bg-white text-black rounded-[24px] w-[35%] lg:w-[200px] text-3xl hover:bg-[#BC8312] hover:text-white flex flex-col items-center hover:shadow-2xl"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-[100%]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <div className="flex-grow-1 2xl:flex-grow-0 items-center flex flex-col">
            <div className="flex items-center gap-4">
              <Link href="/" className="meowcoin-logo" />
              <div className="font-grandstander text-6xl text-center lg:block hidden h-[60px]">
                <Link href="/">Meowcoin</Link>
              </div>
            </div>
          </div>
          <button className="font-poppins transition-all h-[72px] bg-white text-black rounded-[24px] w-[200px] text-3xl lg:block hidden hover:bg-[#BC8312] hover:text-white hover:shadow-2xl">
            <Link href="/donations">Donations</Link>
          </button>
        </div>
        {menuOpen && (
          <div className="relative top-2 xl:top-6 grid grid-cols-4 h-[100%]">
            <div className="relative text-[8vw] font-grandstander flex flex-col gap-9 left-6 top-12 leading-[4vw] md:leading-[2.5vw] md:text-[2.5vw] whitespace-nowrap">
              <Link
                className={`hover:text-[#BC8312] transition-all ${
                  lastHovered === "about-us" ? "text-[#BC8312] text-[125%]" : ""
                }`}
                href="/about-us"
                onMouseEnter={() => handleLinkHover("about-us")}
              >
                About Us
              </Link>
              <Link
                className={`hover:text-[#BC8312] transition-all ${
                  lastHovered === "roadmap" ? "text-[#BC8312] text-[125%]" : ""
                }`}
                href="/roadmap"
                onMouseEnter={() => handleLinkHover("roadmap")}
              >
                Roadmap
              </Link>
              <Link
                className={`hover:text-[#BC8312] transition-all ${
                  lastHovered === "partners" ? "text-[#BC8312] text-[125%]" : ""
                }`}
                href="/partners"
                onMouseEnter={() => handleLinkHover("partners")}
              >
                Partners
              </Link>
              <Link
                className={`hover:text-[#BC8312] transition-all ${
                  lastHovered === "community" ? "text-[#BC8312] text-[125%]" : ""
                }`}
                href="/community"
                onMouseEnter={() => handleLinkHover("community")}
              >
                Community
              </Link>
              <Link
                className={`hover:text-[#BC8312] transition-all ${
                  lastHovered === "resources" ? "text-[#BC8312] text-[125%]" : ""
                }`}
                href="/resources"
                onMouseEnter={() => handleLinkHover("resources")}
              >
                Resources
              </Link>
              <Link
                className={`hover:text-[#BC8312] transition-all ${
                  lastHovered === "docs" ? "text-[#BC8312] text-[125%]" : ""
                }`}
                href="https://docs.mewccrypto.com/"
                onMouseEnter={() => handleLinkHover("docs")}
              >
                Docs
              </Link>
              <Link
                className={`hover:text-[#BC8312] transition-all ${
                  lastHovered === "explorer" ? "text-[#BC8312] text-[125%]" : ""
                }`}
                href="https://mewc.cryptoscope.io/"
                onMouseEnter={() => handleLinkHover("explorer")}
              >
                Explorer
              </Link>
              <Link
                className={`hover:text-[#BC8312] transition-all ${
                  lastHovered === "store" ? "text-[#BC8312] text-[125%]" : ""
                }`}
                href="https://store.mewccrypto.com/"
                onMouseEnter={() => handleLinkHover("store")}
              >
                Store
              </Link>
            </div>
            {lastHovered === "about-us" && <NavbarAboutUs />}
            {lastHovered === "roadmap" && <NavbarRoadmap />}
            {lastHovered === "partners" && <NavbarPartners />}
            {lastHovered === "community" && <NavbarCommunity />}
            {lastHovered === "resources" && <NavbarResources />}
            {lastHovered === "docs" && <NavbarDocs />}
            {lastHovered === "explorer" && <NavbarExplorer />}
            {lastHovered === "store" && <NavbarStore />}
          </div>
        )}
      </div>
    </div>
  );
}
