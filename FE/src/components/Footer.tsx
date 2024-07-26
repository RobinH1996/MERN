import React from "react";
import Logo from "../assets/Logo.svg";
import IconRightArrow from "./icons/IconRightArrow";
import IconFacebook from "./icons/IconFacebook";
import IconInstagram from "./icons/IconInstagram";
import IconTwitter from "./icons/IconTwitter";
import IconYoutube from "./icons/IconYoutube";

export default function Footer() {
  return (
    <div className="bg-blackColour">
      <div className="container py-10">
        <div className="w-full flex md:flex-row flex-col md:gap-20 gap-7">
          <div className="md:w-1/2 w-full">
            <p className="text-white text-xl font-medium">
              Sign up for news and special offers
            </p>
            <div className="flex items-center w-full md:mt-5 mt-2">
              <input
                type="text"
                placeholder="Type the domain you want"
                className="px-5 py-2 text-sm bg-[#2b2b2b] h-[50px] w-[calc(100%_-_100px)] outline-none text-white font-medium"
              />
              <div className="h-[50px] w-[100px] flex items-center justify-center text-sm font-medium text-blackColour cursor-pointer bg-white hover:brightness-75">
                Sign up
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full flex flex-col justify-between">
            <p className="text-white text-xl font-medium">
              We love taking your call.
            </p>
            <div
              className="flex gap-10 items-center md:mt-5 mt-2 cursor-auto hover:opacity-80"
              onClick={() => (window.location.href = "")}
            >
              <div className="flex items-center gap-3 cursor-pointer pb-4">
                <img src={Logo} alt="Logo" />
                <p className="text-2xl font-bold text-white">My Shop</p>
              </div>
              <div className="pb-2">
                <IconRightArrow className="w-10 fill-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-600" />
      <div className="container py-10">
        <div className="w-full flex lg:flex-row flex-col gap-10">
          <div className="lg:w-2/3 w-full flex xs:flex-row flex-col gap-10">
            <div className="xs:w-1/2 w-full flex">
              <div className="w-1/2 text-sm font-medium text-gray-300 flex flex-col gap-3">
                <p className="text-lg font-semibold text-white">
                  About My Shop
                </p>
                <p className="cursor-pointer hover:underline">About Us</p>
                <p className="cursor-pointer hover:underline">Newsroom</p>
                <p className="cursor-pointer hover:underline">
                  Investor Relations
                </p>
                <p className="cursor-pointer hover:underline">Careers</p>
                <p className="cursor-pointer hover:underline">
                  Corporate Responsibility
                </p>
                <p className="cursor-pointer hover:underline">Trust Center</p>
                <p className="cursor-pointer hover:underline">Legal</p>
              </div>
              <div className="w-1/2 text-sm font-medium text-gray-300 flex flex-col gap-3">
                <p className="text-lg font-semibold text-white">Help Center</p>
                <p className="cursor-pointer hover:underline">Help Center</p>
                <p className="cursor-pointer hover:underline">Community</p>
                <p className="cursor-pointer hover:underline">
                  Venture Forward: Microbusiness Data
                </p>
                <p className="cursor-pointer hover:underline">MyShop Blog</p>
                <p className="cursor-pointer hover:underline">Contact Us</p>
                <p className="cursor-pointer hover:underline">Report Abuse</p>
                <p className="cursor-pointer hover:underline">Resources</p>
              </div>
            </div>
            <div className="xs:w-1/2 w-full flex">
              <div className="w-1/2 text-sm font-medium text-gray-300 flex flex-col gap-3">
                <p className="text-lg font-semibold text-white">Resources</p>
                <p className="cursor-pointer hover:underline">Webmail</p>
                <p className="cursor-pointer hover:underline">WHOIS</p>
                <p className="cursor-pointer hover:underline">
                  MyShop Mobile App
                </p>
                <p className="cursor-pointer hover:underline">
                  ICANN Confirmation
                </p>
                <p className="cursor-pointer hover:underline">
                  Designers & Developers
                </p>
                <p className="cursor-pointer hover:underline">
                  Corporate Domains
                </p>
                <p className="cursor-pointer hover:underline">Redeem Code</p>
                <p className="cursor-pointer hover:underline">
                  Product Catalog
                </p>
                <p className="cursor-pointer hover:underline">Videos</p>
                <p className="cursor-pointer hover:underline">
                  Business Name Generator
                </p>
              </div>
              <div className="w-1/2 text-sm font-medium text-gray-300 flex flex-col gap-3">
                <p className="text-lg font-semibold text-white">
                  Partner Programs
                </p>
                <p className="cursor-pointer hover:underline">Affiliates</p>
                <p className="cursor-pointer hover:underline">
                  Reseller Programs
                </p>
                <p className="cursor-pointer hover:underline">MyShop Pro</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 w-full flex gap-10">
            <div className="w-1/2 text-sm font-medium text-gray-300 flex flex-col gap-3">
              <p className="text-lg font-semibold text-white">Account</p>
              <p className="cursor-pointer hover:underline">My Products</p>
              <p className="cursor-pointer hover:underline">
                Renewals & Billing
              </p>
              <p className="cursor-pointer hover:underline">Create Account</p>
            </div>
            <div className="w-1/2 text-sm font-medium text-gray-300 flex flex-col gap-3">
              <p className="text-lg font-semibold text-white">Shopping</p>
              <p className="cursor-pointer hover:underline">Buy a Domain</p>
              <p className="cursor-pointer hover:underline">Websites</p>
              <p className="cursor-pointer hover:underline">WordPress</p>
              <p className="cursor-pointer hover:underline">Hosting</p>
              <p className="cursor-pointer hover:underline">Web Security</p>
              <p className="cursor-pointer hover:underline">Email & Office</p>
              <p className="cursor-pointer hover:underline">Phone Numbers</p>
              <p className="cursor-pointer hover:underline">Promos</p>
            </div>
          </div>
        </div>
        <div className="py-5">
          <div className="flex md:flex-row flex-col gap-5 md:items-center justify-between">
            <div className="flex xs:flex-row flex-col xs:items-center xs:gap-10 gap-1">
              <div
                className="flex items-center gap-3 cursor-pointer pb-4"
                onClick={() => (window.location.href = "")}
              >
                <img src={Logo} alt="Logo" />
                <p className="text-2xl font-bold text-white">My Shop</p>
              </div>
              <div className="flex items-center gap-8 text-lg font-medium text-white">
                <p>United States - English</p>
                <p>USD</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-end">
              <div className="cursor-pointer hover:opacity-80">
                <IconFacebook className="w-8 text-white" />
              </div>
              <div className="cursor-pointer hover:opacity-80">
                <IconInstagram className="w-8 text-white" />
              </div>
              <div className="cursor-pointer hover:opacity-80">
                <IconTwitter className="w-8 text-white" />
              </div>
              <div className="cursor-pointer hover:opacity-80">
                <IconYoutube className="w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-white" />
        <div className="flex xs:flex-row flex-col items-start xs:gap-8 gap-4 justify-between text-xs font-medium text-white mt-5 w-full">
          <p>
            Copyright @ 1999 - 2023 MyShop Operating Company.LLC. All Rights.
            The MyShop word mark is a registered trademark of MyShop Operating
            Company, LLC in the US and other countries. The "GO" Logo is a
            registered trademark of GoDaddy.com, LLC in the US
          </p>
          <ul className="flex items-center gap-4 text-gray-300 whitespace-nowrap">
            <li className="cursor-pointer hover:underline">Legal</li>
            <li className="cursor-pointer hover:underline">Privacy Policy</li>
            <li className="cursor-pointer hover:underline">Coolies</li>
          </ul>
        </div>
        <div className="flex xs:flex-row flex-col items-start xs:gap-8 gap-4 justify-between text-xs font-medium text-white mt-5 w-full">
          <p>
            Use of this Site is subject to express terms of use. By using this
            site, you signify that you agree to be bound by these{" "}
            <span className="text-mainColour1 hover:underline cursor-pointer">
              Universal Terms of Service
            </span>
          </p>
          <p className="text-gray-300 ">Do not sell my personal information</p>
        </div>
      </div>
    </div>
  );
}
