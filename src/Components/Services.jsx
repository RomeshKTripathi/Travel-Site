import React from "react";
import { cards } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
const Services = () => {
  useGSAP(() => {
    const divs = gsap.utils.toArray(".card div");
    divs.forEach((div) => {
      gsap.from(div, {
        scrollTrigger: {
          trigger: "#services",
          start: "50% bottom",
          fastScrollEnd: true,
          end: "+=200",
          scrub: true,
          once: true,
        },

        x: 100,
        stagger: 0.3,
      });
    });
  });

  return (
    <div id="services" className="pt-8 md:mt-18 md:py-12">
      <div>
        <div className="text-gray mb-2 text-center text-sm font-medium uppercase">
          Services
        </div>
        <div className="text-large font-volkhov lagend-text text-center text-3xl font-bold">
          We Offer Best Services
        </div>
      </div>
      {/* Render cards  */}
      <div className="card font-poppins mt-12 flex-wrap justify-center gap-8 md:mt-24 md:flex">
        {cards.map((card) => (
          <div
            key={card.id}
            className="from-theme-yellow/10 to-theme-orange/10 md:card-effect md;justify-center hover:from-theme-yellow/15 hover:to-theme-orange/15 flex w-full shrink-0 cursor-pointer gap-3 rounded-2xl bg-white bg-gradient-to-tr p-4 opacity-100 shadow transition-colors duration-150 max-md:mb-4 md:w-64 md:flex-col"
          >
            <img
              className="w-1/3 self-center max-md:size-16 max-md:shrink-0"
              src={card.image}
              alt=""
            />
            <div className="text-link font-medium md:text-center">
              <span>{card.title}</span>
              <p className="text-gray text-sm md:text-center">{card.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
