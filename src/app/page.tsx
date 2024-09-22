import Link from "next/link";
import Banner from "./utils/Banner";
import Footer from "./utils/Footer";
import Logo from "./utils/Logo";
import Navigation from "./utils/Navigation";

export default function Home() {
  return (
    <div className="space-y-5">
      {/* Navbar */}
      <div className="flex justify-between items-center h-20 px-10">
        <Logo />
        <Navigation />
      </div>

      {/* Banner */}
      <Banner />

      {/* Intro Text Area */}
      <div className="bg-gray-300 h-80 font-bold text-3xl flex justify-center items-center">
        Intro Text Area
      </div>

      {/* Boxes */}
      <div className="grid grid-cols-3 gap-4">
        <Link href="/box/1">
          <div className="bg-gray-300 h-96 font-bold text-3xl flex justify-center items-center cursor-pointer">
            Box 1
          </div>
        </Link>
        <Link href="/box/2">
          <div className="bg-gray-300 h-96 font-bold text-3xl flex justify-center items-center cursor-pointer">
            Box 2
          </div>
        </Link>
        <Link href="/box/3">
          <div className="bg-gray-300 h-96 font-bold text-3xl flex justify-center items-center cursor-pointer">
            Box 3
          </div>
        </Link>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
