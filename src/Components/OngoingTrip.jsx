import React from "react";
import { ongoing_trip } from "../constants";

const OngoingTrip = ({ show = true }) => {
    return !show ? null : (
        <div className=" bg-white p-[var(--padding)] shadow rounded-[var(--card-radius)] [--card-radius:var(--radius-2xl)] [--card-padding:--spacing(4)] [--padding:16px] flex gap-2 max-w-56">
            <img
                src={ongoing_trip.featuredImage}
                className="size-11 rounded-full shrink-0"
                alt=""
            />
            <div className="text-gray flex flex-col gap-1 text-xs ">
                <span className="text-xs ">Ongoing</span>
                <span className="text-sm text-black">
                    Trip to {ongoing_trip.destination}
                </span>
                <div>
                    <div>
                        <span className="text-indigo-400 font-medium">40%</span>{" "}
                        completed
                    </div>
                    <div className="w-full bg-gray/20 h-1 rounded-full my-2 relative">
                        <div
                            className={`w-1/2 bg-indigo-400 absolute h-full rounded-full`}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OngoingTrip;
