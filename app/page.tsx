import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="relative top-[120px] w-[35vw]">
        <div className="font-grandstander text-9xl">Meowcoin</div>
        <div className="font-poppins text-5xl">A crypto project dedicated to helping our furry friends</div>
        <div className="grid grid-cols-2 grid-rows-2 gap-8 w-[480px]">
          <button className="font-poppins transition-colors h-[72px] bg-[#d7c47f] text-black rounded-[24px] w-[200px] text-3xl xl:block hidden hover:bg-[#BC8312] hover:text-white">Discord</button>
          <button className="font-poppins transition-colors h-[72px] bg-[#d7c47f] text-black rounded-[24px] w-[200px] text-3xl xl:block hidden hover:bg-[#BC8312] hover:text-white">Mining</button>
          <button className="font-poppins transition-colors h-[72px] bg-[#d7c47f] text-black rounded-[24px] w-[200px] text-3xl xl:block hidden hover:bg-[#BC8312] hover:text-white">Donations</button>
          <button className="font-poppins transition-colors h-[72px] bg-[#d7c47f] text-black rounded-[24px] w-[200px] text-3xl xl:block hidden hover:bg-[#BC8312] hover:text-white">Whitepaper</button>
        </div>
      </div>
    </div>
  );
}
