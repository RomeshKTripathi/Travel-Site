import { traveller_model } from "../assets";

const Hero = () => {
    return (
        <section id="home" className="relative w-full  ">
            <main className="flex pt-20">
                <div className="flex-1/2 items-center justify-center ">
                    <div className=" mt-20">
                        <p className="text-theme-orange uppercase text-sm font-bold my-2">
                            Welcome to Jadoo – Your Gateway to Unforgettable
                            Journeys
                        </p>
                        <p className="text-6xl font-extrabold font-volkhov">
                            Travel, enjoy
                            <br />
                            and live a new
                            <br />
                            and full life.
                        </p>
                        <p className="mt-8 text-gray text-sm font-poppins">
                            Wander beyond the ordinary, where each horizon holds
                            a secret. Let distant lands and hidden paths awaken
                            your spirit. With Jadoo, every journey is a story
                            waiting to be lived.
                        </p>
                        <div className="mt-8 flex w-full gap-12 items-center">
                            <button
                                className="outline-none bg-theme-yellow px-4 py-2 rounded-md text-white hover:bg-theme-yellow/80
                             transition-colors duration-150 font-medium cursor-pointer "
                            >
                                Find out more
                            </button>
                            <a className="flex items-center font-medium hover:underline  cursor-pointer gap-3 fill-theme-orange ">
                                <svg
                                    height="40px"
                                    width="40px"
                                    viewBox="0 0 459 459"
                                >
                                    <path d="M229.5,0C102.751,0,0,102.751,0,229.5S102.751,459,229.5,459S459,356.249,459,229.5S356.249,0,229.5,0z M310.292,239.651 l-111.764,76.084c-3.761,2.56-8.63,2.831-12.652,0.704c-4.022-2.128-6.538-6.305-6.538-10.855V153.416 c0-4.55,2.516-8.727,6.538-10.855c4.022-2.127,8.891-1.857,12.652,0.704l111.764,76.084c3.359,2.287,5.37,6.087,5.37,10.151 C315.662,233.564,313.652,237.364,310.292,239.651z"></path>
                                </svg>
                                Play demo
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex-1/2 ml-auto relative">
                    <img
                        className="z-10 w-5/6"
                        src={traveller_model}
                        alt="Traveller Model"
                    />
                </div>
            </main>
        </section>
    );
};

export default Hero;
