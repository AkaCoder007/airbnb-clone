import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
export default function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 items-center bg-white shadow-md py-4 px-5 md:px-14 ">
      {/* left */}
      <div className="relative flex items-center h-8 cursor-pointer">
        <Image
          src="http://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Middle--search */}
      <div className="flex space-around items-center md:border-2 py-2 px-1 rounded-full md:shadow-sm cursor-pointer">
        <input
          className="pl-5 outline-none grow mx-2"
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon className=" hidden md:inline-block h-8 bg-red-500 text-white p-2 rounded-full" />
      </div>

      {/* Right */}
      <div className="hidden md:flex items-center space-x-4 justify-end">
        <p
          className="rounded-full
        py-2 px-3 hover:shadow-inner
        cursor-pointer"
        >
          Become a host
        </p>
        <div className="rounded-full p-2 hover:shadow-inner cursor-pointer">
          <GlobeAltIcon className="h-4 " />
        </div>
        <div
          className="flex items-center py-1 px-2 space-x-2 rounded-full border pd
        hover:shadow-xl
        cursor-pointer"
        >
          <MenuIcon className="h-5" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}
