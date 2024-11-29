"use client";
import { urlFor } from "@/sanity/lib/client";
import { Any } from "next-sanity";
import Image from "next/image";
import { useState } from "react";

interface imagesAppProps {
  images: Any;
}

const ImageGallery = ({ images }: imagesAppProps) => {
  const [bigImage, setBigImage] = useState(images[0]);

  const handleSmallImagClick = (image: Any) => {
    setBigImage(image);
  };
  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {images.map((image: Any, idx: Any) => (
          <div key={idx} className="overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={urlFor(image).url()}
              alt="photo"
              width={200}
              height={200}
              className="h-full w-full object-cover object-center cursor-pointer"
              onClick={()=>{handleSmallImagClick(image)}}
            />
          </div>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
        <Image
          src={urlFor(bigImage).url()}
          alt="photo"
          width={500}
          height={500}
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default ImageGallery;
