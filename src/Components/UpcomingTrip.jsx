import React, { useState } from "react";
import { upcoming_trip, ongoing_trip } from "../constants";
import OngoingTrip from "./OngoingTrip";

function UpcomingTrip() {
  const startDate = new Date(upcoming_trip.startDate);
  const endDate = new Date(upcoming_trip.endDate);
  const [like, setLike] = useState(false);
  const handleLike = () => {
    setLike((prev) => !prev);
  };
  const Months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className="font-poppins group relative w-[var(--width)] cursor-pointer rounded-[var(--card-radius)] p-[var(--card-padding)] shadow [--card-padding:--spacing(4)] [--card-radius:var(--radius-3xl)] [--padding:16px] [--width:calc(min(100%,350px))]">
      <div className="mb-4 overflow-hidden rounded-[calc(var(--card-radius)-var(--card-padding))]">
        <img
          className="h-[150px] w-[var(--width)] object-cover duration-200 group-hover:scale-105"
          src={upcoming_trip.featuredImage}
          alt=""
        />
      </div>
      <div className="text-gray fill-gray text-sm">
        <span className="text-link text-[16px] font-medium">
          Trip to {upcoming_trip.destination}
        </span>
        <div>
          <span className="">
            {startDate.getDate() +
              " - " +
              endDate.getDate() +
              " " +
              Months[endDate.getMonth()] +
              " | by " +
              upcoming_trip.by}
          </span>
        </div>
        <div className="my-3 text-xs">
          {upcoming_trip.type.map((type) => (
            <span className="border-r px-2 last:border-0" key={type}>
              {type}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <People />
          <span className="mr-auto ml-2 font-medium">
            {upcoming_trip.totalTourists} people going
          </span>
          <Favorite toggle={handleLike} isFavorite={like} />
        </div>
      </div>
      <div className="absolute right-0 bottom-0 translate-x-1/2 -translate-y-1/2 transition-transform duration-150 group-hover:translate-x-full max-md:hidden">
        <OngoingTrip />
      </div>
    </div>
  );
}

export default UpcomingTrip;

function People() {
  return (
    <span>
      <svg width="20px" height="20px" viewBox="0 0 24 24">
        <path d="M14.844 20H6.5C5.121 20 4 18.879 4 17.5S5.121 15 6.5 15h7c1.93 0 3.5-1.57 3.5-3.5S15.43 8 13.5 8H8.639a9.812 9.812 0 0 1-1.354 2H13.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5h-7C4.019 13 2 15.019 2 17.5S4.019 22 6.5 22h9.593a10.415 10.415 0 0 1-1.249-2zM5 2C3.346 2 2 3.346 2 5c0 3.188 3 5 3 5s3-1.813 3-5c0-1.654-1.346-3-3-3zm0 4.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 5 6.5z"></path>
        <path d="M19 14c-1.654 0-3 1.346-3 3 0 3.188 3 5 3 5s3-1.813 3-5c0-1.654-1.346-3-3-3zm0 4.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 19 18.5z"></path>
      </svg>
    </span>
  );
}

function Favorite({ isFavorite = false, toggle }) {
  return (
    <div
      onClick={() => {
        console.log("clicked");
        toggle();
      }}
    >
      {isFavorite ? (
        <svg
          className="animate-heartbeat fill-rose-500"
          height="18px"
          width="18px"
          viewBox="0 0 455 455"
        >
          <path d="M326.632,10.346c-38.733,0-74.991,17.537-99.132,46.92c-24.141-29.383-60.399-46.92-99.132-46.92 C57.586,10.346,0,67.931,0,138.714c0,55.426,33.049,119.535,98.23,190.546c50.162,54.649,104.729,96.96,120.257,108.626l9.01,6.769 l9.009-6.768c15.53-11.667,70.099-53.979,120.26-108.625C421.95,258.251,455,194.141,455,138.714 C455,67.931,397.414,10.346,326.632,10.346z"></path>
        </svg>
      ) : (
        <svg fill="#000000" height="18px" width="18px" viewBox="0 0 455 455">
          <path d="M326.632,10.346c-38.733,0-74.991,17.537-99.132,46.92c-24.141-29.384-60.398-46.92-99.132-46.92 C57.586,10.346,0,67.931,0,138.714c0,55.426,33.05,119.535,98.23,190.546c50.161,54.647,104.728,96.959,120.257,108.626l9.01,6.769 l9.01-6.768c15.529-11.667,70.098-53.978,120.26-108.625C421.949,258.251,455,194.141,455,138.714 C455,67.931,397.414,10.346,326.632,10.346z M334.666,308.974c-41.259,44.948-85.648,81.283-107.169,98.029 c-21.52-16.746-65.907-53.082-107.166-98.03C61.236,244.592,30,185.717,30,138.714c0-54.24,44.128-98.368,98.368-98.368 c35.694,0,68.652,19.454,86.013,50.771l13.119,23.666l13.119-23.666c17.36-31.316,50.318-50.771,86.013-50.771 c54.24,0,98.368,44.127,98.368,98.368C425,185.719,393.763,244.594,334.666,308.974z"></path>
        </svg>
      )}
    </div>
  );
}
