import React from "react";
import { facebook, instagram, twitter } from "../assets";

const Footer = () => {
  return (
    <div className="font-poppins flex-col py-8 md:flex-row md:py-24">
      <div className="flex flex-col gap-4 max-md:mb-8 md:flex-1/4">
        <div className="text-large text-3xl font-medium max-md:text-center">
          Jadoo
        </div>
        <div className="text-gray text-xs max-md:text-center">
          {" "}
          Book your trip in minutes,
          <br /> get full control for much longer
        </div>
      </div>
      <div className="flex flex-2/4 justify-around font-medium max-md:mb-8">
        <div className="text-gray flex flex-col gap-2 text-sm">
          <span className="mb-4 font-bold text-black">Company</span>
          <span>About </span>
          <span>Careers</span>
          <span>Mobile</span>
        </div>
        <div className="text-gray flex flex-col gap-2 text-sm">
          <span className="mb-4 font-bold text-black">Contact</span>
          <span>Help/FAQ </span>
          <span>Press</span>
          <span>Affiliate</span>
        </div>
        <div className="text-gray flex flex-col gap-2 text-sm">
          <span className="mb-4 font-bold text-black">More</span>
          <span>Airline fee </span>
          <span>Airline</span>
          <span>Low fare trips</span>
        </div>
      </div>
      <div className="md:flex-1/4">
        <div className="flex justify-center gap-8 *:w-11 md:justify-start">
          <img
            className="cursor-pointer transition-transform duration-150 hover:scale-105"
            src={facebook}
            alt="Facebook Icon"
          />
          <img
            className="cursor-pointer transition-transform duration-150 hover:scale-105"
            src={instagram}
            alt="Instagram Icon"
          />
          <img
            className="cursor-pointer transition-transform duration-150 hover:scale-105"
            src={twitter}
            alt="Twitter Icon"
          />
        </div>
        <div className="text-gray my-4 text-center font-medium md:text-start">
          Discover our app
        </div>
      </div>
    </div>
  );
};

export default Footer;
