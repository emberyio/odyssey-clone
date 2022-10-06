import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Autoplay, EffectCreative } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import logo from "../public/Luigis-Logo-Final1500-1500-px_adobe_express.svg";
const NUM_IMAGES = 8;

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsOpenNav(false);
    setIsMenuOpen(false);
  }, [router]);

  return (
    <div className="flex flex-col min-h-screen lg:flex-row bg-theme-dark">
      {!isMenuOpen && (
        <div
          className="lg:hidden fixed z-[100] cursor-pointer top-5 left-5"
          onClick={() => setIsOpenNav(!isOpenNav)}
        >
          {!isOpenNav && <AiOutlineMenu className="text-5xl text-white" />}
          {isOpenNav && <AiOutlineClose className="text-5xl text-white" />}
        </div>
      )}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="z-[91] "
          >
            <MenuView onClose={() => setIsMenuOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpenNav && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="z-[90] lg:hidden"
          >
            <Nav onMenuClick={() => setIsMenuOpen(true)} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="lg:w-[50vw] relative min-h-[50vh]">
        <Overlay />

        <div className="fixed h-[50vh] lg:h-full top-0 left-0 lg:w-[50vw] w-full ">
          <ImageSlider />
          <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
          <div className="relative flex flex-col items-center justify-center w-full h-full lg:items-start lg:justify-between lg:p-5">
            <Link href="/">
              <a className="">
                <Image alt="logo" src={logo} width="250" height="250" />
              </a>
            </Link>
            <div className="hidden lg:block">
              <ul className="pb-5 pl-10 space-y-10 text-3xl font-semibold first-letter:mt-5 text-theme-paragraphs">
                <li className="duration-300 cursor-pointer group hover:text-theme-accent">
                  <a onClick={() => setIsMenuOpen(true)}>
                    <span className=" group-hover:h-2.5 group-hover:w-2.5  duration-300 w-1.5 mr-1 h-1.5 rounded-full bg-theme-accent inline-block"></span>{" "}
                    Menu
                  </a>
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
          </div>
        </div>
      </div>
      <div className="relative lg:w-1/2">
        {children}
        <Overlay />
      </div>
    </div>
  );
}

function MenuView({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-theme-dark ">
      <div
        className=" fixed z-[120]  cursor-pointer top-5 left-5"
        onClick={onClose}
      >
        <AiOutlineClose className="text-5xl text-white" />
      </div>
      <ul className="space-y-10 text-3xl font-semibold first-letter:mt-5 text-theme-paragraphs">
        <li className="duration-300 cursor-pointer group hover:text-theme-accent">
          <Link href="menu-1">
            <a>
              <span className="hidden uppercase duration-300 tr acking-wider lg:block heading text-7xl hover:tracking-widest text-theme-accent">
                Dine In
              </span>
              <span className="lg:hidden">
                <span className="group-hover:h-2.5 lg:hidden group-hover:w-2.5  duration-300 w-1.5 mr-1 h-1.5 rounded-full bg-theme-accent inline-block"></span>{" "}
                Dine In
              </span>
            </a>
          </Link>
        </li>
        <li className="duration-300 cursor-pointer group hover:text-theme-accent">
          <Link href="menu-2">
            <a>
              <span className="hidden tracking-wider uppercase duration-300 lg:block heading text-7xl hover:tracking-widest text-theme-accent ">
                Takeaway
              </span>
              <span className="lg:hidden">
                <span className="group-hover:h-2.5  group-hover:w-2.5  duration-300 w-1.5 mr-1 h-1.5 rounded-full bg-theme-accent inline-block"></span>{" "}
                Takeaway
              </span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

function Nav({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-theme-dark ">
      <ul className="space-y-10 text-3xl font-semibold first-letter:mt-5 text-theme-paragraphs">
        <li className="duration-300 cursor-pointer group hover:text-theme-accent">
          <a onClick={onMenuClick}>
            <span className=" group-hover:h-2.5 group-hover:w-2.5  duration-300 w-1.5 mr-1 h-1.5 rounded-full bg-theme-accent inline-block"></span>{" "}
            Menu
          </a>
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
        {Array.from({ length: NUM_IMAGES }, (_, i) => (
          <SwiperSlide key={i}>
            <div className="w-full h-full">
              <img
                src={`/images/slider (${i + 1}).jpg`}
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
