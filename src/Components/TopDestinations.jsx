import { useGSAP } from "@gsap/react";
import { destinations } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const TopDestinations = () => {
  return (
    <section
      id="destinations"
      className="mt-8 overflow-x-hidden pt-8 md:mt-12 md:pt-12"
    >
      <div>
        <div className="text-gray mb-2 text-center text-sm font-medium uppercase">
          Top Selling
        </div>
        <div className="text-large font-volkhov lagend-text text-center text-3xl font-bold">
          Top Destinations
        </div>
      </div>
      <div className="flex w-full gap-4 overflow-x-auto py-8 md:gap-12 md:py-12 lg:justify-center">
        {destinations.map((destination) => (
          <DestinationCard key={destination.id} {...destination} />
        ))}
      </div>
    </section>
  );
};

function DestinationCard({ trip, image, price, desc }) {
  // gsap.registerPlugin(ScrollTrigger);
  // useGSAP(() => {
  //     gsap.from(".d-card", {
  //         scrollTrigger: {
  //             trigger: ".d-card",

  //             horizontal: true,
  //         },
  //         opacity: 0,
  //         x: "100%",
  //     });
  // });
  return (
    // <div className="">
    <div className="d-card group relative mx-auto w-64 shrink-0 grow-0 cursor-pointer overflow-hidden rounded-xl shadow transition-shadow duration-200 lg:hover:shadow-2xl">
      <img
        className="transition-transform duration-300 lg:group-hover:scale-110"
        src={image}
        alt=""
      />
      <div className="font-poppins from-theme-yellow/10 to-theme-orange/10 absolute right-0 bottom-0 left-0 bg-gradient-to-br fill-white p-3 text-sm text-white backdrop-blur-sm">
        <div className="flex justify-between font-medium">
          <span>{trip}</span>
          <span>{price}</span>
        </div>
        <div className="flex items-center gap-2 py-3">
          <svg height="18px" width="18px" viewBox="0 0 486.736 486.736">
            <path d="M481.883,61.238l-474.3,171.4c-8.8,3.2-10.3,15-2.6,20.2l70.9,48.4l321.8-169.7l-272.4,203.4v82.4c0,5.6,6.3,9,11,5.9 l60-39.8l59.1,40.3c5.4,3.7,12.8,2.1,16.3-3.5l214.5-353.7C487.983,63.638,485.083,60.038,481.883,61.238z"></path>
          </svg>
          <span>{desc}</span>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default TopDestinations;
