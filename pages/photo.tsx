import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getPhotos } from "../api/photo";

interface PhotoItem {
  title: string;
  desc: string;
  file_id: string;
}

export default function Blog({}) {
  const [photoItems, setPhotoItems] = useState<PhotoItem[]>();

  const getPhotoItems = async () => {
    const photoItems = await getPhotos();
    if (!photoItems) return;
    let currPhotoItem: PhotoItem[] = [];
    photoItems.forEach((item) => {
      currPhotoItem.push({
        title: item.Title,
        desc: item.Description,
        file_id: item.Photo
      })
    })

    setPhotoItems(currPhotoItem);
  };

  useEffect(() => {
    getPhotoItems();
  }, []);

  return (
    <div className="min-h-full p-5 lg:p-10 bg-theme-dark">
      <div className="flex justify-between ">
        <h1 className="pr-5 text-6xl text-theme-accent heading">
          PHOTO AND EVENTS
        </h1>
      </div>
      <div className="w-full h-1 border-t-[1px] border-b-[1px] border-gray-500/50 mt-8"></div>
      <div className="my-10 space-y-5">
        {photoItems && photoItems.map((PhotoItem, i) => (
          <div
            className="flex flex-col lg:flex-row pt-5 pb-10 border-b-[1px] border-gray-500/50"
            key={i}
          >
            <div className="relative flex-1 aspect-video">
              <Image
                layout="fill"
                src={`https://dashboard.embery.com.au/assets/${PhotoItem.file_id}`}
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
