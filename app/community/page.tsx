import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="relative top-[180px] left-[60px] md:w-[35vw] z-10 h-[100vh]">
        <div className="font-grandstander text-[20vw] md:text-[180px] leading-none font-medium text-center md:text-left">
          Partners
        </div>
        <div className="block md:hidden h-4" />
        <div className="font-poppins text-[10vw] md:text-5xl font-medium md:leading-tight text-center md:text-left">
          A crypto project dedicated to helping our furry friends
        </div>
        <div className="h-8" />
        <div className="grid grid-cols-2 grid-rows-2 gap-8 w-[100%] md:w-[432px] text-black text-[6vw] md:text-3xl">
          <Link className="md:w-[200px] w-[100%]" href="https://discord.gg/meowcoin/">
            <button className="font-poppins transition-all h-[72px] bg-[#d7c47f] rounded-[24px] w-[100%] hover:bg-[#BC8312] hover:text-white hover:shadow-lg">
              Discord
            </button>
          </Link>
          <Link className="md:w-[200px] w-[100%]" href="https://discord.gg/meowcoin/">
            <button className="font-poppins transition-all h-[72px] bg-[#d7c47f] rounded-[24px] w-[100%] hover:bg-[#BC8312] hover:text-white hover:shadow-lg">
              Mining
            </button>
          </Link>
          <Link className="md:w-[200px] w-[100%]" href="/donations">
            <button className="font-poppins transition-all h-[72px] bg-[#d7c47f] rounded-[24px] w-[100%] hover:bg-[#BC8312] hover:text-white hover:shadow-lg">
              Donations
            </button>
          </Link>
          <Link
            className="md:w-[200px] w-[100%]"
            href="https://docs.mewccrypto.com/whitepaper"
          >
            <button className="font-poppins transition-all h-[72px] bg-[#d7c47f] rounded-[24px] w-[100%] hover:bg-[#BC8312] hover:text-white hover:shadow-lg">
              Whitepaper
            </button>
          </Link>
        </div>
      </div>
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2273.09 2102.89"
        fill="#bc8312"
        className="top-0 right-0 absolute h-[860px] lg:block hidden"
      >
        <path d="m336.31,0c4.91,21.19,8.15,43.05,9.37,65.56,12.59,231.79-197.35,339.95-296.52,630.11-101.57,297.18-23.82,600.52,37.07,741.31,259.36,599.73,1323.82,819.45,2112.73,555.98,25.17-8.41,49.84-17.3,74.13-26.55V0H336.31Z" />
      </svg>
      <div className="mewc-logo-hero absolute top-[200px] right-[120px] 2xl:block hidden">
        <Image
          src="/MeowcoinLogoNoBackground.png"
          alt="mewc-logo"
          width="680"
          height="0"
        />
      </div>
      <Footer />
    </div>
  );
}
