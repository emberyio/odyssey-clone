import { motion, useAnimationControls } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Autoplay, EffectCreative } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen lg:flex-row bg-theme-dark">
      <div className="lg:w-1/2 relative min-h-[50vh]">
        <Overlay />
        <div className="fixed top-0 left-0 w-full h-full">
          <Nav />
          <ImageSlider />
        </div>
      </div>
      <div className="relative lg:w-1/2">
        {children}
        <Overlay />
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="relative z-20 p-10 w-96">
      <Link href="/">
        <a className="text-4xl font-bold uppercase text-theme-paragraphs">
          Embery
        </a>
      </Link>
      <ul className="mt-5 space-y-5 font-semibold text-theme-paragraphs">
        <li className="duration-300 cursor-pointer group hover:text-theme-accent">
          <Link href="menu-1">
            <a>
              <span className="group-hover:h-2.5 group-hover:w-2.5  duration-300 w-1.5 mr-1 h-1.5 rounded-full bg-theme-accent inline-block"></span>{" "}
              Menu
            </a>
          </Link>
        </li>
        <li className="duration-300 cursor-pointer group hover:text-theme-accent">
          <Link href="menu-2">
            <a>
              <span className="group-hover:h-2.5 group-hover:w-2.5  duration-300 w-1.5 mr-1 h-1.5 rounded-full bg-theme-accent inline-block"></span>{" "}
              Takeaway Menu
            </a>
          </Link>
        </li>
        <li className="duration-300 cursor-pointer group hover:text-theme-accent">
          <Link href="book-a-table">
            <a>
              <span className="group-hover:h-2.5 group-hover:w-2.5  duration-300 w-1.5 mr-1 h-1.5 rounded-full bg-theme-accent inline-block"></span>{" "}
              Book a Table
            </a>
          </Link>
        </li>
        <li className="duration-300 cursor-pointer group hover:text-theme-accent">
          <Link href="contact">
            <a>
              <span className="group-hover:h-2.5 group-hover:w-2.5  duration-300 w-1.5 mr-1 h-1.5 rounded-full bg-theme-accent inline-block"></span>{" "}
              Contact
            </a>
          </Link>
        </li>
        <li className="duration-300 cursor-pointer group hover:text-theme-accent">
          <Link href="blog">
            <a>
              <span className="group-hover:h-2.5 group-hover:w-2.5  duration-300 w-1.5 mr-1 h-1.5 rounded-full bg-theme-accent inline-block"></span>{" "}
              Blog
            </a>
          </Link>
        </li>
        <li className="duration-300 cursor-pointer group hover:text-theme-accent">
          <Link href="about">
            <a>
              <span className="group-hover:h-2.5 group-hover:w-2.5  duration-300 w-1.5 mr-1 h-1.5 rounded-full bg-theme-accent inline-block"></span>{" "}
              About
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

function ImageSlider() {
  return (
    <div className="absolute top-0 left-0 z-0 w-full h-full">
      <div
        style={{
          backgroundImage:
            "linear-gradient(150deg, rgba(0, 0, 0, 0.9), transparent 55%)",
        }}
        className="absolute top-0 left-0 z-10 w-full h-full"
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
                src={`https://source.unsplash.com/random/?food&gravity=center&${i}`}
                className="object-cover w-full h-full select-none"
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
  const control1 = useAnimationControls();
  const control2 = useAnimationControls();
  const router = useRouter();
  useEffect(() => {
    control1.set({
      width: "100%",
      height: "100%",
    });
    control1.start({
      width: "0%",
    });
    control2.start({
      width: [0, 300, 0],
    });
  }, [control1, control2, router]);

  return (
    <motion.div
      animate={control1}
      transition={{
        duration: 1,
        delay: 0.5,
        ease: "easeInOut",
      }}
      className="absolute top-0 left-0 z-50 flex justify-end bg-theme-dark"
    >
      <motion.div
        animate={control2}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: "easeInOut",
        }}
        className="h-full bg-theme-accent"
      ></motion.div>
    </motion.div>
  );
}
