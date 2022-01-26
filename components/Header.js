import Image from "next/image";
import { useState } from "react";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useRouter } from "next/router";

export default function Header({ placeHolder }) {
  const router = useRouter();
  const searchHandler = (event) => setSearchInput(event.target.value);
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const { placeholder } = router.query;
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const searchBtnHandler = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
    resetSearchInputsHandler();
  };
  const handleSelect = (range) => {
    setStartDate(range.selection.startDate);
    setEndDate(range.selection.endDate);
  };
  const resetSearchInputsHandler = () => {
    setSearchInput("");
  };
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 items-center bg-white shadow-md py-4 px-5 md:px-14 ">
      {/* left */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-8 cursor-pointer"
      >
        <Image
          src="http://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="headerimage"
        />
      </div>
      {/* Middle--search */}
      <div className="flex space-around items-center md:border-2 py-2 px-1 rounded-full md:shadow-sm cursor-pointer">
        <input
          className="pl-5 outline-none grow mx-2"
          type="text"
          value={searchInput}
          placeholder={placeHolder || "Start your search"}
          onChange={searchHandler}
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

      {searchInput && (
        <div className="flex flex-col mt-4 mx-auto col-span-3">
          <DateRangePicker
            // scroll={{ enabled: true }}
            ranges={[selectionRange]}
            rangeColors={["#000000"]}
            onChange={handleSelect}
            minDate={new Date()}
          />
          <div className="flex mt-1 border-b-2">
            <h2 className="text-2xl font-semi-bold pb-2 flex-grow">
              Number of Guests
            </h2>
            <UsersIcon className="h-6" />
            <input
              type="number"
              className="w-12 pl-2 h-6 text-red-600 outline-none"
              value={noOfGuests}
              min={1}
              onChange={(e) => setNoOfGuests(e.target.value)}
            />
          </div>
          <div className="flex mt-2">
            <button
              type="button"
              className="flex-grow text-gray-500"
              onClick={resetSearchInputsHandler}
            >
              Cancel
            </button>
            <button
              type="button"
              className="flex-grow text-red-500"
              onClick={searchBtnHandler}
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
