"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Navbar() {
  return (
    <div>
      <div className="h-[120px]" />
      <div className="relative h-[360px] w-[85%] bg-[#d7c47f] translate-x-[-50%] left-[50%] rounded-t-[48px] p-[24px] transition-all z-15">
        <div></div>
        <div className="font-grandstander flex flex-col relative h-[100%] w-min justify-between left-4 text-[100%] items">
          <Link href="/about-us">About Us</Link>
          <Link href="/roadmap">Roadmap</Link>
          <Link href="/partners">Partners</Link>
          <Link href="/community">Community</Link>
          <Link href="/resources">Resources</Link>
          <Link href="https://docs.mewccrypto.com/">Docs</Link>
          <Link href="https://mewc.cryptoscope.io/">Explorer</Link>
        </div>
        <div className="h-[80px] flex flex-row gap-8 bottom-4 right-6 absolute">
          <Link href="https://x.com/MeowcoinProject">
            <Icon
              className="h-[100%] w-[auto] transition-colors text-black hover:text-[#BC8312]"
              icon="simple-icons:x"
            />
          </Link>
          <Link href="https://discord.com/invite/meowcoin">
            <Icon
              className="h-[100%] w-[auto] transition-colors text-black hover:text-[#BC8312]"
              icon="simple-icons:discord"
            />
          </Link>
          <Link href="https://www.reddit.com/r/MeowcoinOfficial/">
            <Icon
              className="h-[100%] w-[auto] transition-colors text-black hover:text-[#BC8312]"
              icon="simple-icons:reddit"
            />
          </Link>
          <Link href="https://t.me/OfficialMeowcoin">
            <Icon
              className="h-[100%] w-[auto] transition-colors text-black hover:text-[#BC8312]"
              icon="icon-park-outline:telegram"
            />
          </Link>
          <Link href="https://www.youtube.com/@meowcoin1618">
            <Icon
              className="h-[100%] w-[auto] transition-colors text-black hover:text-[#BC8312]"
              icon="simple-icons:youtube"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
