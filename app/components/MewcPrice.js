"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function MewcPrice() {
  const [z, setZ] = useState(null);

  useEffect(() => {
    fetch("/api/MewcPrice") // Use the correct API route path
      .then((response) => response.json())
      .then((data) => {
        const x = parseFloat(data.price);
        let y = x.toFixed(5);
        setZ("$" + y);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="w-[18%] h-[360px] bg-[#d7c47f] rounded-[48px] text-center p-[24px] flex flex-col justify-between hover:bg-[#bc8312] transition-all hover:h-[400px] hover:w-[25%] text-6xl hover:text-7xl hover:text-white shadow-md hover:shadow-lg">
      <div className="font-grandstander">Price</div>
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
          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <div className="font-grandstander">{z || "Loading"}</div>
    </div>
  );
}
