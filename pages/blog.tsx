import React from "react";

export default function Blog() {
  return (
    <div className="min-h-full p-5 lg:p-10 bg-theme-dark">
      <div className="flex justify-between ">
        <h1 className="pr-5 text-3xl lg:text-6xl menu-font text-theme-accent">
          BLOG AND EVENTS
        </h1>
      </div>
      <div className="w-full h-1 border-t-[1px] border-b-[1px] border-gray-500/50 mt-8"></div>
      <div className="my-10 space-y-5">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            className="flex flex-col lg:flex-row pt-5 pb-10 border-b-[1px] border-gray-500/50"
            key={i}
          >
            <div className="flex-1">
              <img
                src={`https://source.unsplash.com/random/?restaurant&gravity=center&${i}`}
                alt=""
                className="object-cover w-full h-full rounded-xl aspect-video"
              />
            </div>
            <div className="flex-1 pt-5 lg:pl-5 lg:pt-0">
              <div className="text-xs text-theme-accent">MAY 23, 2022</div>
              <div className="mb-5 text-3xl font-semibold text-theme-paragraphs">
                Can We Stop Treating Restaurants As Status Symbols?
              </div>
              <div className="text-gray-500">
                Nunc sem purus dui faucibus id amet habitant pellentesque.
                Condimentum sed semper risus, arcu. Ornare adipiscing urna.
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
