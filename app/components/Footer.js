"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <div className="relative h-[360px] w-[85%] bg-[#d7c47f] translate-x-[-50%] left-[50%] rounded-t-[48px] p-[32px] transition-all shadow-2xl">
      <div className="font-grandstander grid grid-cols-2 grid-rows-4 w-[30%] gap-[32px] text-[2vw]">
        <Link className="hover:text-[#bc8312] transition-all" href="/about-us">
          About Us
        </Link>
        <Link className="hover:text-[#bc8312] transition-all" href="/roadmap">
          Roadmap
        </Link>
        <Link className="hover:text-[#bc8312] transition-all" href="/partners">
          Partners
        </Link>
        <Link className="hover:text-[#bc8312] transition-all" href="/community">
          Community
        </Link>
        <Link className="hover:text-[#bc8312] transition-all" href="/resources">
          Resources
        </Link>
        <Link
          className="hover:text-[#bc8312] transition-all"
          href="https://docs.mewccrypto.com/"
        >
          Docs
        </Link>
        <Link
          className="hover:text-[#bc8312] transition-all"
          href="https://mewc.cryptoscope.io/"
        >
          Explorer
        </Link>
        <Link
          className="hover:text-[#bc8312] transition-all"
          href="https://store.mewccrypto.com/"
        >
          Store
        </Link>
      </div>
      <div className="h-[80px] flex flex-row gap-8 bottom-4 right-6 absolute">
        <Link href="https://x.com/MeowcoinProject">
          <Icon
            className="h-[100%] w-[auto] transition-colors text-black hover:text-[#BC8312]"
            icon="formkit:twitter"
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
            icon="simple-icons:telegram"
          />
        </Link>
        <Link href="https://bitcointalk.org/index.php?topic=5412692.0">
          <Icon
            className="h-[100%] w-[auto] transition-colors text-black hover:text-[#BC8312]"
            icon="cib:bitcoin"
          />
        </Link>
        <Link href="https://discord.com/invite/meowcoin">
          <Icon
            className="h-[100%] w-[auto] transition-colors text-black hover:text-[#BC8312]"
            icon="simple-icons:discord"
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
  );
}
