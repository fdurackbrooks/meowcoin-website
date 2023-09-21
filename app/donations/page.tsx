import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="text-green-500">Hello</div>
    </div>
  );
}