import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import IconMenu from "./icons/IconMenu";
import IconClose from "./icons/IconClose";

export default function Header() {
  const navigate = useNavigate();
  const [showMenu, set_showMenu] = useState(false);

  return (
    <div className="container">
      <div className="flex items-center justify-between py-5">
        <div className="flex items-center gap-10">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => (window.location.href = "")}
          >
            <img src={Logo} alt="Logo" />
            <p className="text-2xl font-bold text-blackColour">My Shop</p>
          </div>
          <ul className="xl:flex hidden  items-center 2xl:gap-3 gap-2 2xl:text-lg text-sm font-semibold text-blackColour">
            <li className="cursor-pointer px-2 py-1 bg-whiteColour hover:bg-mainColour3 rounded-md">
              Domain Names
            </li>
            <li className="cursor-pointer px-2 py-1 bg-whiteColour hover:bg-mainColour3 rounded-md">
              Website & Hosting
            </li>
            <li className="cursor-pointer px-2 py-1 bg-whiteColour hover:bg-mainColour3 rounded-md">
              Commerce
            </li>
            <li className="cursor-pointer px-2 py-1 bg-whiteColour hover:bg-mainColour3 rounded-md">
              Email & Marketing
            </li>
            <li className="cursor-pointer px-2 py-1 bg-whiteColour hover:bg-mainColour3 rounded-md">
              Expert Services
            </li>
            <li className="cursor-pointer px-2 py-1 bg-whiteColour hover:bg-mainColour3 rounded-md">
              More
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3 text-lg font-semibold text-blackColour">
            <div className="xs:block hidden cursor-pointer px-2 py-1 bg-whiteColour hover:bg-mainColour3 rounded-md">
              Help Center
            </div>
            <div
              className="cursor-pointer px-2 py-1 bg-whiteColour hover:bg-mainColour3 rounded-md"
              onClick={() => navigate("/login")}
            >
              Sign In
            </div>
          </div>
          <div
            className="xl:hidden block p-2 bg-mainColour3 rounded-md cursor-pointer hover:opacity-80"
            onClick={() => set_showMenu(!showMenu)}
          >
            <IconMenu className="w-4 h-4 text-blackColour" />
          </div>
        </div>
      </div>
      <div
        className={`fixed ${
          showMenu ? "w-screen h-screen" : " w-0 h-0 overflow-hidden"
        } backdrop-brightness-50 left-0 top-0 z-[100]`}
        onClick={() => set_showMenu(false)}
      >
        <div
          className={`${
            showMenu ? "w-8/12 max-w-[500px]" : "w-0 overflow-hidden"
          } h-full bg-white p-5 ml-auto rounded-lg transition-all duration-200 relative`}
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <div
            className="p-2 w-fit ml-auto bg-mainColour3 rounded-md cursor-pointer hover:opacity-80"
            onClick={() => set_showMenu(!showMenu)}
          >
            <IconClose className="w-4 h-4 text-blackColour" />
          </div>

          <ul className="flex flex-col items-left gap-3 2xl:text-lg text-sm font-semibold text-blackColour mt-5">
            <li className="cursor-pointer px-2 py-1 bg-whiteColour hover:bg-mainColour3 rounded-md">
              Domain Names
            </li>
            <li className="cursor-pointer px-2 py-1 bg-whiteColour hover:bg-mainColour3 rounded-md">
              Website & Hosting
            </li>
            <li className="cursor-pointer px-2 py-1 bg-whiteColour hover:bg-mainColour3 rounded-md">
              Commerce
            </li>
            <li className="cursor-pointer px-2 py-1 bg-whiteColour hover:bg-mainColour3 rounded-md">
              Email & Marketing
            </li>
            <li className="cursor-pointer px-2 py-1 bg-whiteColour hover:bg-mainColour3 rounded-md">
              Expert Services
            </li>
            <li className="cursor-pointer px-2 py-1 bg-whiteColour hover:bg-mainColour3 rounded-md">
              More
            </li>
            <li className="xs:hidden block cursor-pointer px-2 py-1 bg-whiteColour hover:bg-mainColour3 rounded-md">
              Help Center
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
