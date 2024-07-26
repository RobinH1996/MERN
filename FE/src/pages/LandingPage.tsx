import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Gallery from "../components/Gallery";
import IconRightArrow from "../components/icons/IconRightArrow";
import IconPlay from "../components/icons/IconPlay";
import IconPause from "../components/icons/IconPause";
import Image1 from "../assets/landingPage/img1.png";
import Step1 from "../assets/landingPage/step1.png";
import Step2 from "../assets/landingPage/step2.png";
import Step3 from "../assets/landingPage/step3.png";

export default function LandingPage() {
  const [playSlide, set_playSlide] = useState(true);
  return (
    <div>
      <Header />
      <div className="container">
        <div className="flex xl:flex-row flex-col items-center justify-between gap-2 w-full py-5">
          <div className="flex items-center xl:w-8/12 w-full">
            <input
              type="text"
              placeholder="Type the domain you want"
              className="px-5 py-2 text-lg bg-light-100 h-[60px] w-[calc(100%_-_165px)] border-2 focus:border-mainColour1 outline-none"
            />
            <div className="h-[60px] w-[165px] flex items-center justify-center text-lg font-medium text-white cursor-pointer bg-mainColour1 hover:brightness-75">
              Search Domain
            </div>
          </div>
          <div className="xl:w-1/3 w-full flex items-center justify-center xl:py-0 py-3">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <p className="text-sm font-bold text-gray-600">.online</p>
                <p className="text-sm font-medium text-gray-600">$0.99</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-sm font-bold text-gray-600">.net</p>
                <p className="text-sm font-medium text-gray-600">$0.99</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-sm font-bold text-gray-600">.inc</p>
                <p className="text-sm font-medium text-gray-600">$0.99</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-sm font-bold text-gray-600">.Online</p>
                <p className="text-sm font-medium text-gray-600">$0.99</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex xl:flex-row flex-col justify-between gap-7 w-full">
          <div
            className="flex flex-col justify-between xl:w-8/12 w-full h-[500px] bg-center bg-cover rounded xs:px-20 py-20 px-10"
            style={{ backgroundImage: `url(${Image1})` }}
          >
            <p className="text-lg font-semibold text-blackColour">
              Websites & Commerce
            </p>
            <p className="xs:text-5xl text-3xl font-bold text-blackColour">
              Tools for all your
              <br /> business firsts.
            </p>
            <p className="text-lg font-semibold text-blackColour">
              Website and store solutions for any small business.
            </p>
            <div className="flex xs:flex-row flex-col xs:items-center xs:gap-5 gap-2">
              <div className="w-[200px]">
                <Button
                  onClick={() => {}}
                  size="Lg"
                  icon={<IconRightArrow className="w-5 fill-white" />}
                >
                  Get Started
                </Button>
              </div>
              <p className="xs:text-lg text-sm font-semibold text-blackColour cursor-pointer hover:underline hover:opacity-80">
                Learn More
              </p>
            </div>
            <p className="text-sm font-semibold text-blackColour">
              No credit card required**
            </p>
          </div>
          <div className="xl:w-4/12 w-full xs:px-20 py-20 px-10 bg-mainColour3 rounded flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <p className="text-lg font-semibold text-gray-700">Domain Name</p>
              <p className="text-3xl font-bold text-blackColour">
                Grab a .com for just $0.01*/1st yr
              </p>
              <p className="text-lg font-semibold text-gray-600">
                2-year purchase required*
              </p>
            </div>
            <div className="w-[250px]">
              <Button
                onClick={() => {}}
                size="Lg"
                icon={<IconRightArrow className="w-5 fill-white" />}
              >
                Find Your Domain
              </Button>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-lg font-semibold text-gray-600">
                Transfer Your Domains
              </p>
              <p className="text-sm font-semibold text-gray-600">
                Domains include free privacy protection forever*
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex lg:flex-row flex-col py-5 text-sm font-medium text-gray-600">
          <div className="lg:w-[80%] w-full flex md:flex-row flex-col">
            <div className="md:w-1/2 w-full flex">
              <div className="w-1/2 flex flex-col">
                <div className="border border-gray-300 py-4 flex items-center justify-center">
                  Domains
                </div>
                <div className="border border-gray-300 py-4 flex items-center justify-center">
                  Email & Microsoft 365
                </div>
              </div>
              <div className="w-1/2">
                <div className="border border-gray-300 py-4 flex items-center justify-center">
                  SSL Security
                </div>
                <div className="border border-gray-300 py-4 flex items-center justify-center">
                  Website Design Services
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full flex">
              <div className="w-1/2">
                <div className="border border-gray-300 py-4 flex items-center justify-center">
                  Websites
                </div>
                <div className="border border-gray-300 py-4 flex items-center justify-center">
                  Online Store
                </div>
              </div>
              <div className="w-1/2">
                <div className="border border-gray-300 py-4 flex items-center justify-center">
                  Wordpress
                </div>
                <div className="border border-gray-300 py-4 flex items-center justify-center">
                  Web Hosting
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[20%] w-full border border-gray-300 py-5 flex items-center justify-center">
            <p className="text-center">
              Sales $0.99*/1st yr.
              <br /> Attract shoppers. Sell more stuff
            </p>
          </div>
        </div>
        <div className="w-fit mx-auto flex md:flex-row flex-col gap-20 py-10">
          <div className="xl:w-[430px] w-[300px]">
            <p className="text-5xl font-bold text-blackColour">
              Success in
              <br /> 3 easy steps
            </p>
            <div className="md:hidden block mt-20">
              <img src={Step1} alt="step1" className="rounded-md" />
              <div className="mt-[50px] text-[16px] font-medium text-blackColour flex flex-col gap-4">
                <p>01</p>
                <p>Sell online with a website</p>
                <p>
                  Sell anything, from physical products to downloads and
                  services, and manage it all in one place.
                </p>
                <div className="flex xl:flex-row flex-col xl:items-center xs:gap-5 gap-2">
                  <div className="w-[200px]">
                    <Button
                      onClick={() => {}}
                      size="Lg"
                      icon={<IconRightArrow className="w-5 fill-white" />}
                    >
                      Get Started
                    </Button>
                  </div>
                  <p className="xs:text-lg text-sm font-semibold text-blackColour cursor-pointer hover:underline hover:opacity-80">
                    Learn More
                  </p>
                </div>
              </div>
            </div>
            <div className="md:block hidden mt-[200px]">
              <img src={Step2} alt="step2" className="rounded-md" />
              <div className="mt-[50px] text-[16px] font-medium text-blackColour flex flex-col gap-4">
                <p>02</p>
                <p>Save with the lowest fees</p>
                <div>
                  <p>2.3% + 0$ per in-person transaction.</p>
                  <p>2.3% + 30$ per online transaction.</p>
                  <p>
                    Enjoy the lowest transaction fees compared to other leading
                    providers.
                  </p>
                </div>
                <div className="flex xl:flex-row flex-col xl:items-center xs:gap-5 gap-2">
                  <div className="w-[250px]">
                    <Button
                      onClick={() => {}}
                      size="Lg"
                      icon={<IconRightArrow className="w-5 fill-white" />}
                    >
                      Start Getting Paid
                    </Button>
                  </div>
                  <p className="xs:text-lg text-sm font-semibold text-blackColour cursor-pointer hover:underline hover:opacity-80">
                    Learn More
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:w-[430px] w-[300px] flex flex-col gap-20">
            <div className="md:hidden block">
              <img src={Step2} alt="step2" className="rounded-md" />
              <div className="mt-[50px] text-[16px] font-medium text-blackColour flex flex-col gap-4">
                <p>02</p>
                <p>Save with the lowest fees</p>
                <div>
                  <p>2.3% + 0$ per in-person transaction.</p>
                  <p>2.3% + 30$ per online transaction.</p>
                  <p>
                    Enjoy the lowest transaction fees compared to other leading
                    providers.
                  </p>
                </div>
                <div className="flex xl:flex-row flex-col xl:items-center xs:gap-5 gap-2">
                  <div className="w-[250px]">
                    <Button
                      onClick={() => {}}
                      size="Lg"
                      icon={<IconRightArrow className="w-5 fill-white" />}
                    >
                      Start Getting Paid
                    </Button>
                  </div>
                  <p className="xs:text-lg text-sm font-semibold text-blackColour cursor-pointer hover:underline hover:opacity-80">
                    Learn More
                  </p>
                </div>
              </div>
            </div>
            <div className="md:block hidden">
              <img src={Step1} alt="step1" className="rounded-md" />
              <div className="mt-[50px] text-[16px] font-medium text-blackColour flex flex-col gap-4">
                <p>01</p>
                <p>Sell online with a website</p>
                <p>
                  Sell anything, from physical products to downloads and
                  services, and manage it all in one place.
                </p>
                <div className="flex xl:flex-row flex-col xl:items-center xs:gap-5 gap-2">
                  <div className="w-[200px]">
                    <Button
                      onClick={() => {}}
                      size="Lg"
                      icon={<IconRightArrow className="w-5 fill-white" />}
                    >
                      Get Started
                    </Button>
                  </div>
                  <p className="xs:text-lg text-sm font-semibold text-blackColour cursor-pointer hover:underline hover:opacity-80">
                    Learn More
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img src={Step3} alt="step3" className="rounded-md" />
              <div className="mt-[50px] text-[16px] font-medium text-blackColour flex flex-col gap-4">
                <p>03</p>
                <p>Sell in-person and on the go</p>
                <p>
                  Our new Point of Sale devices are designed to fit any business
                  and budget. Choose the one that's right for you.
                </p>
                <div className="flex xl:flex-row flex-col xl:items-center xs:gap-5 gap-2">
                  <div className="w-[200px]">
                    <Button
                      onClick={() => {}}
                      size="Lg"
                      icon={<IconRightArrow className="w-5 fill-white" />}
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 bg-[#e9eaec]">
        <div className="container">
          <p className="text-center text-5xl font-bold text-blackColour">
            Templates designed to sell.
          </p>
          <p className="text-center text-lg font-semibold text-gray-700 mt-5">
            Choose from 100s of designs for every idea and industry.
          </p>
        </div>
        <div className="mt-20 overflow-x-hidden">
          <Gallery autoplayEnabled={playSlide} />
        </div>
        <div className="container">
          <div className="flex items-center justify-between mt-10">
            <div />
            <div className="w-[300px]">
              <Button
                onClick={() => {}}
                size="Lg"
                icon={<IconRightArrow className="w-5 fill-white" />}
              >
                Browse All Templates
              </Button>
            </div>
            <div
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 cursor-pointer bg-transparent hover:bg-mainColour3"
              onClick={() => set_playSlide(!playSlide)}
            >
              {playSlide ? (
                <IconPause className="w-4 h-4 text-blackColour" />
              ) : (
                <IconPlay className="w-2 h-2 text-blackColour" />
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
