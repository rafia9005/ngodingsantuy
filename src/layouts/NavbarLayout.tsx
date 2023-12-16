import { useState } from "react";
import {
  PaperAirplaneIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { DarkModeComponent } from "@/components/DarkModeComponent";
import { motion } from "framer-motion";

export default function NavbarLayout() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav
      className="fixed w-[100%] backdrop-blur-lg bg-opacity-30"
      style={{ zIndex: "2" }}
    >
      <div className="mx-auto">
        <div className="flex mx-auto justify-between w-5/6 ">
          <div className="flex items-center gap-16 my-5">
            <div className="flex items-center">
              <div>
                <PaperAirplaneIcon className="h-6 w-6" />
              </div>
              <span className="text-2xl">ngodingsantuy</span>
            </div>
            <div className="hidden lg:flex gap-8 ">
              <a href="#" className="">
                Home
              </a>
              <a href="#">Docs</a>
              <a href="#">Learning</a>
              <a href="#">Contact Us</a>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex items-center gap-10">
              <DarkModeComponent />

              <div className="hidden md:flex">
                <button className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100">
                  Login
                </button>
              </div>
            </div>
            <div
              className="lg:hidden flex items-center"
            >
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                <Bars3Icon className="h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed z-40 w-full overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
          !toggleMenu ? "h-0" : "h-[265px]"
        }`}
      >
        <div className="w-[90%] mt-5 h-[100%] mx-[5%] relative backdrop-filter bg-black backdrop-blur-lg bg-opacity-60 py-5 border border-white rounded-md">
          <div className="mx-8 flex flex-col gap-8 font-bold tracking-wider">
            <a href="#">Home</a>
            <a href="#">Docs</a>
            <a href="#">Learning</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
