import Link from "next/link";
import Navbar from "../components/Navbar";
import DonationChart from "../components/DonationChart";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="relative top-[120px]">
        <DonationChart />
      </div>
    </div>
  );
}