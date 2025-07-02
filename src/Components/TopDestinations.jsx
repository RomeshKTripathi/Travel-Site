import { europe } from "../assets";
import { destinations } from "../constants";

const TopDestinations = () => {
    return (
        <section id="destinations" className="md:mt-12 md:pt-12 mt-8 pt-8 ">
            <div>
                <div className="text-gray uppercase text-center font-medium text-sm mb-2">
                    Top Selling
                </div>
                <div className="text-large  text-center font-bold font-volkhov text-3xl">
                    Top Destinations
                </div>
            </div>
            <div className="lg:justify-center overflow-x-auto w-full flex py-8 md:py-12 gap-4 md:gap-12">
                {destinations.map((destination) => (
                    <DestinationCard key={destination.id} {...destination} />
                ))}
            </div>
        </section>
    );
};

function DestinationCard({ trip, image, price, desc }) {
    return (
        <div className="rounded-xl  shrink-0 group w-64  mx-auto  shadow lg:hover:shadow-2xl transition-shadow duration-200 overflow-hidden relative cursor-pointer">
            <img
                className="lg:group-hover:scale-110 transition-transform duration-300"
                src={image}
                alt=""
            />
            <div className="bg-white absolute text-sm text-gray font-poppins bottom-0 left-0 right-0 p-3 ">
                <div className="flex justify-between  font-medium ">
                    <span>{trip}</span>
                    <span>{price}</span>
                </div>
                <div className="py-3 flex fill-gray items-center gap-2">
                    <svg
                        height="18px"
                        width="18px"
                        viewBox="0 0 486.736 486.736"
                    >
                        <path d="M481.883,61.238l-474.3,171.4c-8.8,3.2-10.3,15-2.6,20.2l70.9,48.4l321.8-169.7l-272.4,203.4v82.4c0,5.6,6.3,9,11,5.9 l60-39.8l59.1,40.3c5.4,3.7,12.8,2.1,16.3-3.5l214.5-353.7C487.983,63.638,485.083,60.038,481.883,61.238z"></path>
                    </svg>
                    <span>{desc}</span>
                </div>
            </div>
        </div>
    );
}

export default TopDestinations;
