"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useEffect } from "react";
import Chart from "chart.js/auto";

export default function DonationChart() {
  return (
    <div className="relative">
      <div className="chart-container">
        <canvas id="cryptoDonationChart" width="200" height="100"></canvas>
        <div className="chart-center">
          <div className="text-4xl font-bold">$14,784</div>
          <div className="text-lg">Total Donated</div>
        </div>
      </div>
    </div>
  );
}