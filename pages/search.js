import { format } from "date-fns";
import { useRouter } from "next/router";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Infocard from "../components/InfoCard";

const Search = ({ searchResults }) => {
  const router = useRouter();
  console.log(searchResults);
  const { location, startDate, endDate, noOfGuests } = router.query;
  console.log("formatstartdate", startDate);
  console.log("formatenddate", endDate);
  const formattedStartDate = format(new Date(startDate), "dd MMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMM yy");
  const range = `${formattedStartDate}-${formattedEndDate}`;
  return (
    <>
      <Header placeHolder={`${location} | ${range} | ${noOfGuests} guests`} />
      <main className="flex flex-col">
        <section className="flex-grow mt-2  space-y-2">
          <div className=" hidden p-4 lg:flex space-x-3 whitespace-nowrap border-b">
            <p className="button">Price</p>
            <p className="button">Type of Place</p>
            <p className="button">Wifi</p>
            <p className="button">Air Conditioning</p>
            <p className="button">Washing machine</p>
            <p className="button">Iron</p>
            <p className="button">Dryer</p>
            <p className="button">Free Parking</p>
            <p className="button">Dryer</p>
          </div>
        </section>
        <section className="flex-grow mt-2  space-y-2 p-6 border-b">
          <p className="text-sm">
            300 + Stays for {noOfGuests} number of guests
            <span className=" hidden lg:flex text-gray-700 font-semibold">
              between {range}
            </span>
          </p>
          <h1 className="text-3xl font-semibold">Stays in {location}</h1>
        </section>
        <section className="flex">
          <section
            className=" md:flex m-auto gap-12 md:flex-col lg:ml-6 md:w-[100vw] lg:w-[60vw]
          
          "
          >
            {searchResults.map(
              ({
                img,
                location,
                title,
                description,
                star,
                price,
                total,
                long,
                lat,
              }) => (
                <Infocard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  price={price}
                  star={star}
                  long={long}
                  lat={lat}
                />
              )
            )}
          </section>
          {/* this is map */}
          <section className="hidden  lg:grid flex-grow  ">
            <div className="">
              <p className="text-xl">This is Map</p>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Search;

export async function getServerSideProps(context) {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}
