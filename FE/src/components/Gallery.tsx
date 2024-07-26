import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import GallaryImage from "../assets/landingPage/gallery.png";
import { Autoplay } from "swiper/modules";
import Button from "./Button";
import IconRightArrow from "./icons/IconRightArrow";

interface Gallery {
  autoplayEnabled: Boolean;
}

export default function Gallery({ autoplayEnabled }: Gallery) {
  const swiperRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      if (autoplayEnabled) {
        swiperRef.current.swiper.autoplay.start();
      } else {
        swiperRef.current.swiper.autoplay.stop();
      }
    }
  }, [autoplayEnabled]);

  return (
    <div className="overflow-hidden">
      <Swiper
        ref={swiperRef}
        className="w-full max-w-[100vw]"
        modules={[Autoplay]}
        navigation={true}
        centeredSlides={false}
        centeredSlidesBounds={true}
        loop={true}
        spaceBetween={30}
        slidesPerView={"auto"}
        speed={5000}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <SwiperSlide
              key={index}
              className={`!w-fit relative ${index === 0 && "ml-5"}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`md:h-[400px] h-[200px] rounded-md transition-colors duration-300 ${
                  hoveredIndex === index ? "backdrop-brightness-50" : ""
                }`}
              >
                <img
                  src={GallaryImage}
                  alt={`Slide ${index}`}
                  className={`md:h-[400px] h-[200px] rounded-md transition-opacity duration-300 ${
                    hoveredIndex === index ? "opacity-50" : "opacity-100"
                  }`}
                />
                {hoveredIndex === index && (
                  <div className="w-[180px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Button
                      onClick={() => {}}
                      size="Md"
                      icon={<IconRightArrow className="w-5 fill-blackColour" />}
                      buttonStyle="Secondary"
                    >
                      Start Editing
                    </Button>
                    <p className="text-white text-lg font-semibold hover:underline cursor-pointer text-center">
                      Preview
                    </p>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
