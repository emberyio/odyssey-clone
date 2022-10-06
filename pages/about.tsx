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
        <div className="space-y-5 text-gray-500">
          <p>
            Ac a at tempor, aliquam integer. Fusce sed nibh nisi, ullamcorper
            massa risus pulvinar. Suspendisse tortor at cras senectus quis
            facilisi posuere. Sollicitudin vel blandit amet mauris accumsan
            lobortis. Magna vel turpis odio blandit pharetra sed nascetur sed.
            Vivamus nisl quam sed congue nec.
          </p>
          <p>
            Pulvinar scelerisque diam nunc eu rhoncus nunc quis senectus.
            Dignissim arcu tellus mauris sagittis. Molestie molestie imperdiet
            mus amet, habitasse non, a maecenas malesuada. Sed aliquam amet
            cursus.
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
