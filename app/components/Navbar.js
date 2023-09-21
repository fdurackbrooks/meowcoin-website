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
        } w-[85%] bg-[#d7c47f] translate-x-[-50%] left-[50%] fixed rounded-b-[48px] p-[24px] transition-all`}
      >
        <div className="flex justify-between">
          <button
            className="font-poppins transition-all h-[72px] bg-white text-black rounded-[24px] w-[180px] text-3xl xl:block hidden hover:bg-[#BC8312] hover:text-white"
            onClick={toggleMenu}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
          <div>
            <div className="flex items-center gap-4">
              <Link href="/" className="meowcoin-logo" />
              <div className="font-grandstander text-6xl text-center xl:block hidden h-[60px]">
                <Link href="/">Meowcoin</Link>
              </div>
            </div>
          </div>
          <button className="font-poppins transition-colors h-[72px] bg-white text-black rounded-[24px] w-[180px] text-3xl xl:block hidden hover:bg-[#BC8312] hover:text-white">
            <Link href="/donations">Donations</Link>
          </button>
        </div>
        {menuOpen && (
          <div className="relative top-6 grid grid-cols-4 h-[100%]">
            <div className="relative font-grandstander text-5xl flex flex-col gap-12 left-8 top-12">
              <Link
                className={`hover:text-[#BC8312] transition-all ${
                  lastHovered === "about-us" ? "text-[#BC8312]" : ""
                }`}
                href="/about-us"
                onMouseEnter={() => handleLinkHover("about-us")}
              >
                About Us
              </Link>
              <Link
                className={`hover:text-[#BC8312] transition-all ${
                  lastHovered === "roadmap" ? "text-[#BC8312]" : ""
                }`}
                href="/roadmap"
                onMouseEnter={() => handleLinkHover("roadmap")}
              >
                Roadmap
              </Link>
              <Link
                className={`hover:text-[#BC8312] transition-all ${
                  lastHovered === "partners" ? "text-[#BC8312]" : ""
                }`}
                href="/partners"
                onMouseEnter={() => handleLinkHover("partners")}
              >
                Partners
              </Link>
              <Link
                className={`hover:text-[#BC8312] transition-all ${
                  lastHovered === "community" ? "text-[#BC8312]" : ""
                }`}
                href="/community"
                onMouseEnter={() => handleLinkHover("community")}
              >
                Community
              </Link>
              <Link
                className={`hover:text-[#BC8312] transition-all ${
                  lastHovered === "resources" ? "text-[#BC8312]" : ""
                }`}
                href="/resources"
                onMouseEnter={() => handleLinkHover("resources")}
              >
                Resources
              </Link>
              <Link
                className={`hover:text-[#BC8312] transition-all ${
                  lastHovered === "docs" ? "text-[#BC8312]" : ""
                }`}
                href="https://docs.mewccrypto.com/"
                onMouseEnter={() => handleLinkHover("docs")}
              >
                Docs
              </Link>
              <Link
                className={`hover:text-[#BC8312] transition-all ${
                  lastHovered === "explorer" ? "text-[#BC8312]" : ""
                }`}
                href="https://mewc.cryptoscope.io/"
                onMouseEnter={() => handleLinkHover("explorer")}
              >
                Explorer
              </Link>
            </div>
            {lastHovered === "about-us" && <NavbarAboutUs />}
            {lastHovered === "roadmap" && <NavbarRoadmap />}
            {lastHovered === "partners" && <NavbarPartners />}
            {lastHovered === "community" && <NavbarCommunity />}
            {lastHovered === "resources" && <NavbarResources />}
            {lastHovered === "docs" && <NavbarDocs />}
            {lastHovered === "explorer" && <NavbarExplorer />}
          </div>
        )}
      </div>
    </div>
  );
}