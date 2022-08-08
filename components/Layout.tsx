import { motion } from "framer-motion";
import React from "react";
import { Autoplay, EffectCreative } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-theme-dark">
      <div className="lg:w-1/2 relative min-h-[50vh]">
        <Nav />
        <ImageSlider />
        <Overlay />
      </div>
      <div className="lg:w-1/2 relative">
        {children}
        <Overlay />
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="p-10 relative z-20">
      <div className="text-theme-paragraphs uppercase font-bold text-4xl">
        odyssey
      </div>
      <ul className="mt-5 font-semibold text-theme-paragraphs space-y-5">
        <li className="group hover:text-theme-accent duration-300 cursor-pointer">
          <span className="group-hover:h-2.5 group-hover:w-2.5  duration-300 w-1.5 mr-1 h-1.5 rounded-full bg-theme-accent inline-block"></span>{" "}
          Menu
        </li>
        <li className="group hover:text-theme-accent duration-300 cursor-pointer">
          <span className="group-hover:h-2.5 group-hover:w-2.5  duration-300 w-1.5 mr-1 h-1.5 rounded-full bg-theme-accent inline-block"></span>{" "}
          Book a Table
        </li>
        <li className="group hover:text-theme-accent duration-300 cursor-pointer">
          <span className="group-hover:h-2.5 group-hover:w-2.5  duration-300 w-1.5 mr-1 h-1.5 rounded-full bg-theme-accent inline-block"></span>{" "}
          Contact
        </li>
        <li className="group hover:text-theme-accent duration-300 cursor-pointer">
          <span className="group-hover:h-2.5 group-hover:w-2.5  duration-300 w-1.5 mr-1 h-1.5 rounded-full bg-theme-accent inline-block"></span>{" "}
          Blog
        </li>
        <li className="group hover:text-theme-accent duration-300 cursor-pointer">
          <span className="group-hover:h-2.5 group-hover:w-2.5  duration-300 w-1.5 mr-1 h-1.5 rounded-full bg-theme-accent inline-block"></span>{" "}
          About
        </li>
      </ul>
    </div>
  );
}

function ImageSlider() {
  return (
    <div className="absolute z-0 w-full h-full top-0 left-0">
      <div
        style={{
          backgroundImage:
            "linear-gradient(150deg, rgba(0, 0, 0, 0.9), transparent 55%)",
        }}
        className="z-10 w-full h-full absolute top-0 left-0"
      ></div>
      <Swiper
        loop
        allowTouchMove={false}
        modules={[Autoplay, EffectCreative]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          waitForTransition: true,
        }}
        effect="creative"
        creativeEffect={{
          prev: {
            translate: ["-100%", 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        speed={2000}
        className="w-full h-full"
      >
        {Array.from({ length: 5 }, (_, i) => (
          <SwiperSlide key={i}>
            <div className="w-full h-full">
              <img
                src={`http://unsplash.it/1000?random&gravity=center&${i}`}
                className="w-full h-full object-cover select-none"
                alt=""
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function Overlay() {
  return (
    <motion.div
      initial={{
        width: "100%",
        height: "100%",
      }}
      animate={{
        width: "0%",
      }}
      transition={{
        duration: 1,
        delay: 0.5,
        ease: "easeInOut",
      }}
      className="z-50 bg-theme-dark absolute top-0 left-0 flex justify-end"
    >
      <motion.div
        initial={{
          width: 0,
        }}
        animate={{
          width: [0, 300, 0],
        }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: "easeInOut",
        }}
        className="bg-theme-accent h-full"
      ></motion.div>
    </motion.div>
  );
}
