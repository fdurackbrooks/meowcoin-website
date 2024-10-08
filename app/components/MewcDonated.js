"use client";

import React, { useEffect, useState } from "react";

export default function MewcSupply() {
  const [z, setZ] = useState(null);

  useEffect(() => {
    fetch("/api/MewcSupply")
      .then((response) => response.json())
      .then((data) => {
        const x = data.coinsupply;
        let y = ((x * 100) / 100000000000).toFixed(2);
        setZ(y + " B");
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="w-[18%] h-[360px] bg-[#d7c47f] rounded-[48px] text-center p-[24px] flex flex-col justify-between hover:bg-[#bc8312] transition-all hover:h-[400px] hover:w-[25%] text-6xl hover:text-7xl hover:text-white shadow-2xl hover:shadow-2xl">
      <div className="font-grandstander">Donated</div>
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
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
      <div className="font-grandstander">{z || "Loading"}</div>
    </div>
  );
}
