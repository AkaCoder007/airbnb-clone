import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";

const Infocard = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
  long,
  lat,
}) => {
  return (
    <div className="flex-grow space-y-3 p-4  md:flex lg:w-[55vw] ">
      <div className="relative h-52 w-80 m-4 rounded-full">
        <Image
          className="rounded-xl"
          src={img}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="flex-cols items-center w-96 lg:pl-8 ">
        <div className="flex">
          <StarIcon className="h-5 text-red-500"></StarIcon>
          {star}
          <span className="text-gray-500">(141)</span>
        </div>
        <h2 className="text-xl lg:py-4">{title}</h2>
        <p className="text-md lg:text-gray-500">{description}</p>
        <p className=" text-xl lg:py-6 font-bold">
          <span className="line-through text-lg font-semibold text-gray-600">
            {price.slice(0, -8)}
          </span>
          &nbsp;{price}
        </p>
        <p className=" text-xl ">{total}</p>
      </div>
    </div>
  );
};

export default Infocard;
