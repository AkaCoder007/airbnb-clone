import Image from "next/image";
import React from "react";

const Mediumcard = ({ img, title }) => {
  return (
    <div className="space-y-2 m-2 mt-5 hover:scale-105  transition transform duration-300 ease-out ">
      <div className="relative h-52 w-52 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-2xl">
        <Image
          className="rounded-2xl"
          src={img}
          layout="fill"
          objectFit="contain"
          alt="mediumcard"
        />
      </div>
      <h2 className="text-xl  font-semibold">{title}</h2>
    </div>
  );
};

export default Mediumcard;
