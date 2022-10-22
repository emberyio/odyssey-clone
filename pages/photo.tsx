import Image from "next/image";
import React from "react";



export default function Blog() {
  const PhotoItems = [
    {
    "title": "Gnocchi Con Salsiccia E Funghi Porcini",
    "desc": "Potato gnocchi with Italian pork & fennel sausage, porcini mushrooms, white wine, rocket and shave Parmesan"
    },
    { "title": "Antipasto Della Casa", 
    "desc": "A selection of cold Italian cured meats, marinated vegetables, a selection of cheese, olives & buffalo mozzarella." },
    { "title": "Panna Cotta", 
    "desc": "" },
    { "title": "Fish Special Salmon", 
    "desc": "" },
    { "title": "Lemon Meringue", 
    "desc": "" },
    { "title": "Garlic Focaccia", 
    "desc": "" },
    { "title": "Chocolate Semi-Freddo", 
    "desc": "" },
    { "title": "Fish Special Barramundi", 
    "desc": "" },
    { "title": "Mixed Shellfish and Salmon Special", 
    "desc": "" },
    { "title": "Fish Special and Veg", 
    "desc": "" },
    { "title": "Insalata di Manzo", 
    "desc": "" },
    { "title": "Fish Special", 
    "desc": "" },
    { "title": "Wagyu Beef Burger", 
    "desc": "" },

  ]


  return (
    <div className="min-h-full p-5 lg:p-10 bg-theme-dark">
      <div className="flex justify-between ">
        <h1 className="pr-5 text-6xl text-theme-accent heading">
          PHOTO AND EVENTS
        </h1>
      </div>
      <div className="w-full h-1 border-t-[1px] border-b-[1px] border-gray-500/50 mt-8"></div>
      <div className="my-10 space-y-5">
        {PhotoItems.map((PhotoItem, i) => (
          <div
            className="flex flex-col lg:flex-row pt-5 pb-10 border-b-[1px] border-gray-500/50"
            key={i}
          >
            <div className="relative flex-1 aspect-video">
              <Image
                layout="fill"
                src={`/images/photos/photo (${i + 1}).jpeg`}
                alt=""
                className="object-cover w-full h-full rounded-xl aspect-video"
              />
            </div>
            <div className="flex-1 pt-5 lg:pl-5 lg:pt-0">
              <div className="mb-5 text-3xl font-semibold text-theme-paragraphs">
                {PhotoItem.title}
              </div>
              <div className="text-gray-500">{PhotoItem.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
