"use client";

import burned1 from "../../pages/api/MewcBurned1";
import burned2 from "../../pages/api/MewcBurned2";
import burned3 from "../../pages/api/MewcBurned3";
import burned4 from "../../pages/api/MewcBurned4";
import burned5 from "../../pages/api/MewcBurned5";
import burned6 from "../../pages/api/MewcBurned6";
import burned7 from "../../pages/api/MewcBurned7";
import burned8 from "../../pages/api/MewcBurned8";
import burned9 from "../../pages/api/MewcBurned9";

import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function MewcBurned() {
  const [z, setZ] = useState(null);

  useEffect(() => {
    Promise.all([burned1(), burned2(), burned3(), burned4(), burned5(), burned6(), burned7(), burned8(), burned9()])
    .then((responses) => {
        const x = responses.balance;
        let y = x.toLocaleString();
        setZ(y);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="w-[18%] h-[360px] bg-[#d7c47f] rounded-[48px] text-center p-[24px] flex flex-col justify-between hover:bg-[#bc8312] transition-all hover:h-[400px] hover:w-[25%] text-6xl hover:text-7xl hover:text-white shadow-md hover:shadow-lg">
      <div className="font-grandstander">Burned</div>
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
          d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
        />
      </svg>
      <div className="font-grandstander">{z || "Loading"}</div>
    </div>
  );
}
