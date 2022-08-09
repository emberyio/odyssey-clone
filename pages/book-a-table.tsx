import React from "react";

export default function bookatable() {
  return (
    <div className="min-h-full p-5 lg:p-10 bg-theme-dark">
      <div className="flex justify-between ">
        <h1 className=" heading text-theme-accent text-[10vw] pr-5 leading-[98%]">
          RESERVATION
        </h1>
        <p className=" p-5 text-gray-500 border-l-[1px] border-gray-500/50">
          Eget vestibulum dignissim enim, vel nunc. Orci, vel urna vel viverra
          sed suscipit lorem nunc. Tellus convallis.
        </p>
      </div>
      <div className="w-full h-1 border-t-[1px] border-b-[1px] border-gray-500/50 mt-8"></div>

      <div className="mt-10">
        <div className="flex items-center mb-5">
          <span className="inline-block w-1.5 h-1.5 mr-1 duration-300 rounded-full bg-theme-accent"></span>
          <span className="inline-block w-3 h-3 mr-3 duration-300 rounded-full bg-theme-accent"></span>
          <h2 className="text-4xl font-semibold text-theme-paragraphs">
            Book a Table
          </h2>
        </div>
        <div className="space-y-5">
          <div className="flex gap-5">
            <Input placeholder="First name" />
            <Input placeholder="Last name" />
          </div>
          <Input placeholder="Phone" />
          <Input placeholder="Email" />
          <div className="flex gap-5">
            <Input placeholder="Number of guests" />
            <Input placeholder="Date" />
            <Input placeholder="Time" />
          </div>
        </div>
        <button className="w-full px-8 py-4 mt-10 font-semibold uppercase duration-300 rounded-full bg-theme-accent hover:bg-white">
          Reserve
        </button>
      </div>
    </div>
  );
}

function Input({ placeholder }: { placeholder: string }) {
  return (
    <div className="flex-1">
      <div className="mb-2 text-xs font-semibold uppercase text-theme-paragraphs">
        {placeholder}
      </div>
      <input
        className="w-full px-8 py-5  rounded-full bg-[#0d1a1d] text-theme-paragraphs"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}
