import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div
      style={{
        backgroundPosition: "50% 50%, 0px 0px",
        backgroundSize: "cover, auto",
        backgroundRepeat: "no-repeat, repeat",
        backgroundImage:
          " url(https://assets.website-files.com/62884cf082360f3370127ed7/6288b3dd226efd671983ff03_illustration.svg), linear-gradient(180deg, #102326, #102326)",
      }}
      className="w-full h-full"
    >
      <div className="flex flex-col justify-between h-full gap-20 p-10">
        <div>
          <h1 className="heading text-theme-paragraphs text-[10vw] leading-[98%]">
            <span className="text-theme-accent">LUIGI&apos;S</span> <br />
            ITALIAN RESTAURANT
          </h1>
          <p className="max-w-lg my-10 text-xl text-slate-400">
            We use only the finest imported ingredients available and offer
            seasonal specials throughout the year.
          </p>
          <Link href="book-a-table">
            <a className="px-8 py-4 font-semibold duration-300 rounded-full bg-theme-accent hover:bg-white">
              BOOK A TABLE
            </a>
          </Link>
        </div>
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          <div>
            <div className="font-mono text-sm tracking-wide text-theme-accent">
              CALL US
            </div>
            <div className="text-xl font-semibold text-theme-paragraphs">
              1800 LUIGIS / 1800 584447
            </div>
          </div>
          <div>
            <div className="font-mono text-sm tracking-wide lg:text-right text-theme-accent">
              LOCATION
            </div>
            <div className="text-xl font-semibold text-theme-paragraphs">
              Shop 1-2/40 The Esplanade, Torquay VIC
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
