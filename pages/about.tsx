import React from "react";

export default function Blog() {
  return (
    <div className="min-h-full p-5 lg:p-10 bg-theme-dark">
      <div className="flex justify-between ">
        <h1 className=" heading text-theme-accent text-[10vw] pr-5 leading-[98%]">
          ABOUT Luigi&apos;s
        </h1>
      </div>
      <div className="w-full h-1 border-t-[1px] border-b-[1px] border-gray-500/50 mt-8"></div>
      <div>
        <div className="flex items-center my-10">
          <span className="inline-block w-1.5 h-1.5 mr-1 duration-300 rounded-full bg-theme-accent"></span>
          <span className="inline-block w-3 h-3 mr-3 duration-300 rounded-full bg-theme-accent"></span>
          <h2 className="text-4xl font-semibold text-theme-paragraphs">
            Our Story
          </h2>
        </div>
        <div className="space-y-5 text-gray-300">
          <p>
            The proprietor of Luigi’s Italian Restaurant, Lou Volpe, has spent
            his formative years in both Italy & Australia, as his family built a
            name for themselves in the hospitality industry.
          </p>
          <p>
            Today, his extensive knowledge of Italian food and culture allow him
            to bring a truly authentic experience to the Victorian Surf Coast.
          </p>
          <p>
            Lou and his wife Steph, together with all the team at Luigi’s
            Italian Restaurant, are committed to provide quality and friendly
            service to locals & holiday makers alike.
          </p>
          <img
            src={`https://source.unsplash.com/random/?restaurant&gravity=center`}
            alt=""
            className="object-cover w-full h-full my-5 rounded-xl aspect-video"
          />
        </div>
      </div>
    </div>
  );
}
