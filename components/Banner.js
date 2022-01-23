import Image from "next/image";
import bannerImage from "../public/images/banner.jpg";
export default function Banner() {
  return (
    <div
      className="relative flex items-center justify-center bg-black h-[550px]
   md:h-[500px] lg:h-[750px]"
    >
      <div className=" relative w-[100%] h-[100%] lg:w-[90%] lg:h-[80%]">
        <Image
          src="https://a0.muscache.com/im/pictures/53e51dcb-8fad-4ce8-b61c-8a7a369267bf.jpg?im_w=1200"
          layout="fill"
          objectFit="cover"
          className=" md:rounded-r-3xl"
          alt="bannerimage"
        />

        <div className="absolute space-y-4 top-96 w-full text-center">
          <h1 className="text-slate-200 text-3xl font-semibold lg:text-[2.7rem]">
            Not sure where to go? Perfect.
          </h1>
          <button
            className="font-bold bg-white px-6 py-3 shadow-md 
            md:px-8
            md:py-4
            rounded-full
            hover:shadow-2xl
            active:scale-90 transition duration-150
          "
          >
            <span
              className="bg-gradient-to-r from-pink-900 to-pink-700  text-transparent bg-clip-text text-md font-bold md:text-xl
            "
            >
              I'm flexible
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
