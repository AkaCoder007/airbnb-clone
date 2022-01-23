import React from "react";
import Image from "next/image";

const Largecard = ({ img, title, description, buttonText }) => {
  return (
    <section className="relative py-16">
      <div className="relative h-[28rem] min-w-[300px] lg:aspect-h-7 lg:aspect-w-16 ">
        <Image className="" src={img} layout="fill" objectFit="cover" />
      </div>

      <div className="absolute top-20 w-1/2 lg:w-1/3 lg:px-10">
        <h3 className="text-slate-100  p-4 text-5xl lg:text-7xl font-semibold ">
          {" "}
          {title}
        </h3>
      </div>
      <button
        className="absolute
         text-md  font-semibold
          top-3/4 px-6 py-3
          ml-5
       bg-white
       rounded-md
       hover:bg-gray-200
       lg:ml-20
       lg:text-xl
       "
      >
        {buttonText}
      </button>
    </section>
  );
};

export default Largecard;
