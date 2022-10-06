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
            <div className="text-xl text-theme-paragraphs">1800 LUIGIS</div>
          </div>
          <div className="flex-1">
            <div className="text-xs text-theme-accent">LOCATION</div>
            <div className="text-xl text-theme-paragraphs">
              Shop 1-2/40 The Esplanade, Torquay VIC
            </div>
          </div>
        </div>
        <div className="flex my-10">
          <div className="flex-1">
            <div className="text-xs text-theme-accent">EMAIL US</div>
            <div className="text-xl text-theme-paragraphs">
              <a href="mailto:info@luigisitalianrestaurant.com.au">
                info@luigisitalianrestaurant.com.au
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3129.7353304736775!2d144.32610019999998!3d-38.331959399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad46f3e129e6f1f%3A0xf4bb5ca151cb0062!2s1%202%2F40%20The%20Esplanade%2C%20Torquay%20VIC%203228%2C%20%C3%9Ac!5e0!3m2!1svi!2s!4v1665074197646!5m2!1svi!2s"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
