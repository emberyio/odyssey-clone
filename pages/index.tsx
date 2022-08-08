import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div
      style={{
        backgroundPosition: "50% 50%, 0px 0px",
        backgroundSize: "cover, auto",
        backgroundRepeat: "no-repeat, repeat",
        backgroundImage:
          " url(https://assets.website-files.com/62884cf082360f3370127ed7/6288b3dd226efd671983ff03_illustration.svg), linear-gradient(180deg, #102326, #102326);",
      }}
      className="w-full h-full"
    >
      <div className="p-10 flex gap-20 flex-col h-full justify-between">
        <div>
          <h1 className="heading text-theme-paragraphs text-[10vw] leading-[98%]">
            <span className="text-theme-accent">RESTAURANT</span> OF EUROPEAN
            CUISINE
          </h1>
          <p className="text-slate-400 max-w-lg my-10 text-xl">
            We use only the finest local ingredients available and offer
            seasonal specials throughout the year.
          </p>
          <button className="bg-theme-accent px-8 hover:bg-white duration-300 py-4 rounded-full font-semibold">
            BOOK A TABLE
          </button>
        </div>
        <div className="flex justify-between">
          <div>
            <div className="text-theme-accent text-sm font-mono tracking-wide">
              CALL US
            </div>
            <div className="text-theme-paragraphs text-xl font-semibold">
              1 800-123-4567
            </div>
          </div>
          <div>
            <div className="text-theme-accent text-right text-sm font-mono tracking-wide">
              LOCATION
            </div>
            <div className="text-theme-paragraphs text-xl font-semibold">
              5678 Seltice Way Coeur D Alene
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
