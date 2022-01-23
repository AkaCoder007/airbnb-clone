import React from "react";

const Footer = () => {
  return (
    <div
      className="grid grid-cols-1
      px-4
      py-6
      md:grid-cols-4 
      md:py-10
       md:px-32 gap-10
    bg-gray-100"
    >
      <div className="space-y-3 text-sm text-gray-600 border-b-2 py-5 border-solid border-gray-30 md:border-0 ">
        <h5 className="font-bold">Support</h5>
        <p>Newsroom</p>
        <p>Learn about new features</p>
        <p>Letter from our founders</p>
        <p>Careers</p>
        <p>Investors</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-3 text-sm text-gray-800 border-b-2 py-5  border-solid border-gray-30">
        <h5 className="font-bold">About</h5>
        <p>Newsroom</p>
        <p>Learn about new features</p>
        <p>Letter from our founders</p>
        <p>Careers</p>
        <p>Investors</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className="space-y-3 text-sm text-gray-800 border-b-2 py-5  border-solid border-gray-30">
        <h5 className="font-bold">Community</h5>
        <p>Newsroom</p>
        <p>Learn about new features</p>
        <p>Investors</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-3 text-sm text-gray-800 border-b-2  py-5  border-solid border-gray-30">
        <h5 className="font-bold">Hosting</h5>
        <p>Newsroom</p>
        <p>Learn about new features</p>
        <p>Letter from our founders</p>
        <p>Investors</p>
        <p>Airbnb Luxe</p>
      </div>
    </div>
  );
};

export default Footer;
