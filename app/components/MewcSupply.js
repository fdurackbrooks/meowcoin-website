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
    <div className="w-[18%] h-[360px] bg-[#d7c47f] rounded-[48px] text-center p-[24px] flex flex-col justify-between hover:bg-[#bc8312] transition-all hover:h-[400px] hover:w-[25%] text-6xl hover:text-7xl hover:text-white shadow-md hover:shadow-lg">
      <div className="font-grandstander">Supply</div>
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
          d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
        />
      </svg>
      <div className="font-grandstander">{z || "Loading"}</div>
    </div>
  );
}
