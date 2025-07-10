import React from "react";
import { TestimonialsImage } from "../assets";
import { brands } from "../constants";

const Testimonials = () => {
    return (
        <>
            <div
                id="testimonials"
                className="flex md:flex-row flex-col max-md:gap-16 gap-4 mt-16 pt-16 max-md:mt-0"
            >
                <div className="md:flex-1/3">
                    <div>
                        <div className="text-gray uppercase font-medium text-sm mb-2 max-md:text-center">
                            Testimonials
                        </div>
                        <div className="text-large  font-bold font-volkhov md:text-5xl text-4xl max-md:text-center lagend-text">
                            What People Say
                            <br />
                            About Us
                        </div>
                    </div>
                    <div className="max-md:hidden flex items-center justify-center gap-5 mt-8">
                        <span className="size-2 rounded-full bg-gray/30 shrink-0"></span>
                        <span className="size-2 rounded-full bg-gray shrink-0"></span>
                        <span className="size-2 rounded-full bg-gray/30 shrink-0"></span>
                    </div>
                </div>
                <div className="md:flex-1/2  justify-center items-center ">
                    <div className="">
                        <img
                            className=" drop-shadow-2xl"
                            src={TestimonialsImage}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="my-8 flex justify-center md:gap-16 gap-8 items-center flex-wrap">
                {brands.map((logo, index) => (
                    <div className="shrink-0 md:w-28 w-24" key={index}>
                        <img src={logo} alt="Brand Logo" />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Testimonials;
