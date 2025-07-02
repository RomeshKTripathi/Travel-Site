import React from "react";
import { weather } from "../assets";
import { cards } from "../constants";

const Services = () => {
    return (
        <div id="categories" className="mt-18 py-12">
            <div>
                <div className="text-gray uppercase text-center font-medium text-sm mb-2">
                    Category
                </div>
                <div className="text-large  text-center font-bold font-volkhov text-3xl">
                    We Offer Best Services
                </div>
            </div>
            {/* Render cards  */}
            <div className="card mt-24 flex gap-8 justify-center font-poppins">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="w-64 flex flex-col card-effect bg-white shadow gap-3 p-4 rounded-2xl justify-center"
                    >
                        <img
                            className="w-1/3 self-center"
                            src={card.image}
                            alt=""
                        />
                        <div className="text-center font-medium text-link">
                            {card.title}
                        </div>
                        <p className="text-center text-gray text-sm ">
                            {card.content}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
