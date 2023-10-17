import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Community() {
  return (
    <div>
      <Navbar />
      <div className="relative top-[180px] z-10 h-[100vh]">
        <div className="font-grandstander text-[20vw] md:text-[180px] leading-none font-medium text-center">
          Community
        </div>
        <div className="block md:hidden h-4" />
        <div className="font-poppins text-[10vw] md:text-5xl font-medium md:leading-tight text-center md:text-left">
          Discover our partners helping us in our mission
        </div>
        <div className="h-8" />
        <div className="grid grid-cols-2 grid-rows-2 gap-8 w-[100%] md:w-[432px] text-black text-[6vw] md:text-3xl">
          <Link
            className="md:w-[200px] w-[100%]"
            href="https://discord.gg/meowcoin/"
          >
            <button className="font-poppins transition-all h-[72px] bg-[#d7c47f] rounded-[24px] w-[100%] hover:bg-[#BC8312] hover:text-white hover:shadow-2xl">
              Discord
            </button>
          </Link>
          <Link
            className="md:w-[200px] w-[100%]"
            href="https://discord.gg/meowcoin/"
          >
            <button className="font-poppins transition-all h-[72px] bg-[#d7c47f] rounded-[24px] w-[100%] hover:bg-[#BC8312] hover:text-white hover:shadow-2xl">
              Mining
            </button>
          </Link>
          <Link className="md:w-[200px] w-[100%]" href="/donations">
            <button className="font-poppins transition-all h-[72px] bg-[#d7c47f] rounded-[24px] w-[100%] hover:bg-[#BC8312] hover:text-white hover:shadow-2xl">
              Donations
            </button>
          </Link>
          <Link
            className="md:w-[200px] w-[100%]"
            href="https://docs.mewccrypto.com/whitepaper"
          >
            <button className="font-poppins transition-all h-[72px] bg-[#d7c47f] rounded-[24px] w-[100%] hover:bg-[#BC8312] hover:text-white hover:shadow-2xl">
              Whitepaper
            </button>
          </Link>
        </div>
      </div>
      <div className="hidden md:block relative">
        <div className="h-[120px]" />
        <Footer />
      </div>
    </div>
  );
}
