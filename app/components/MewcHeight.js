"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function MewcDonated() {
  const [z, setZ] = useState(null);

  useEffect(() => {
    fetch("/api/MewcHeight")
      .then((response) => response.json())
      .then((data) => {
        const x = data.blockcount;
        let y = x.toLocaleString();
        setZ(y);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="w-[18%] h-[360px] bg-[#d7c47f] rounded-[48px] text-center p-[24px] flex flex-col justify-between hover:bg-[#bc8312] transition-all hover:h-[400px] hover:w-[25%] text-6xl hover:text-7xl hover:text-white shadow-md hover:shadow-lg">
      <div className="font-grandstander">Height</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1"
        stroke="currentColor"
        className="flex-grow-1"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
        />
      </svg>
      <div className="font-grandstander">{z || "Loading"}</div>
    </div>
  );
}
