import React from "react";

export default function Blog() {
  return (
    <div className="min-h-full p-5 lg:p-10 bg-theme-dark">
      <div className="flex justify-between ">
        <h1 className=" heading text-theme-accent text-6xl lg:text-[10vw] pr-5 leading-[98%]">
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
            LUIGI&apos;S PROPRIETOR LOU VOLPE. WAS BORN IN A SMALL COASTAL TOWN
            OF CARIATI. HE SPENT HIS FORMATIVE YEARS IN BOTH ITALY & AUSTRALIA
            AS HIS FAMILY BUILT A NAME FOR THEMSELVES IN THE HOSPITALITY
            INDUSTRY.
          </p>
          <p>
            TODAY. HIS EXTENSIVE KNOWLEDGE OF ITALIAN F000 AND CULTURE ALLOW HIM
            TO BRING A TRULY AUTHENTIC EXPERIENCE TO THE VICTORIAN SURF COAST.
          </p>
          <p>
            LOU AND HIS WIFE STEPH. TOGETHER WITH ALL THE TEAM At LUIGI &
            ITALIAN RESTAURANT. ARE COMMITTED TO PROVIDE QUALITY AND FRIENDLY
            SERVICE TO LOCALS & HOLIDAY MAKERS ALIKE.
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
