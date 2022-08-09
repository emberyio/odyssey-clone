import React from "react";

export default function contact() {
  return (
    <div className="min-h-full p-5 lg:p-10 bg-theme-dark">
      <div className="flex justify-between ">
        <h1 className=" heading text-theme-accent text-[10vw] pr-5 leading-[98%]">
          CONTACT
        </h1>
        <p className=" p-5 text-gray-500 border-l-[1px] border-gray-500/50">
          Eget vestibulum dignissim enim, vel nunc. Orci, vel urna vel viverra
          sed suscipit lorem nunc. Tellus convallis.
        </p>
      </div>
      <div className="w-full h-1 border-t-[1px] border-b-[1px] border-gray-500/50 mt-8"></div>
      <div>
        <div className="flex my-10">
          <div className="flex-1">
            <div className="text-xs text-theme-accent">CALL US</div>
            <div className="text-xl text-theme-paragraphs">1 800-123-4567</div>
          </div>
          <div className="flex-1">
            <div className="text-xs text-theme-accent">LOCATION</div>
            <div className="text-xl text-theme-paragraphs">
              5678 Seltice Way Coeur D Alene
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://assets.website-files.com/62884cf082360f3370127ed7/628b7b3af5c33a9d736314a4_Map.png"
            alt=""
            className="rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}
