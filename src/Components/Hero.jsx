import { SittingModel, traveller_model } from "../assets";
import { useMediaQuery } from "react-responsive";
const Hero = () => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1024 });
  return (
    <section id="home" className="relative w-full">
      <main className="pt-4 md:pt-10 lg:flex lg:pt-20">
        <div className="justify-center lg:flex-1/2">
          <div className="max-md:mt-20">
            <p className="text-theme-orange my-2 text-xs font-bold uppercase md:text-sm">
              Welcome to Jadoo – Your Gateway to
              <br className="md:hidden" /> Unforgettable Journeys
            </p>
            <p className="font-volkhov lagend-text text-5xl font-extrabold md:text-6xl">
              Travel, enjoy
              <br />
              and live a new
              <br />
              and full life.
            </p>
            <p className="text-gray font-poppins mt-8 text-sm">
              Wander beyond the ordinary, where each horizon holds a secret. Let
              distant lands and hidden paths awaken your spirit. With Jadoo,
              every journey is a story waiting to be lived.
            </p>
            <div className="mt-8 flex w-full items-center gap-12">
              <button className="bg-theme-yellow hover:bg-theme-yellow/80 cursor-pointer rounded-md px-4 py-2 font-medium text-white transition-colors duration-150 outline-none">
                Find out more
              </button>
              <a className="fill-theme-orange flex cursor-pointer items-center gap-3 font-medium hover:underline">
                <svg height="40px" width="40px" viewBox="0 0 459 459">
                  <path d="M229.5,0C102.751,0,0,102.751,0,229.5S102.751,459,229.5,459S459,356.249,459,229.5S356.249,0,229.5,0z M310.292,239.651 l-111.764,76.084c-3.761,2.56-8.63,2.831-12.652,0.704c-4.022-2.128-6.538-6.305-6.538-10.855V153.416 c0-4.55,2.516-8.727,6.538-10.855c4.022-2.127,8.891-1.857,12.652,0.704l111.764,76.084c3.359,2.287,5.37,6.087,5.37,10.151 C315.662,233.564,313.652,237.364,310.292,239.651z"></path>
                </svg>
                Play demo
              </a>
            </div>
          </div>
        </div>
        <div className="relative h-full items-center max-md:mt-12 md:ml-auto md:flex-1/2">
          <img
            className={`z-10 md:w-5/6 ${isTabletOrMobile ? "mix-blend-multiply" : ""}`}
            src={isTabletOrMobile ? SittingModel : traveller_model}
            alt="Traveller Model"
          />
        </div>
      </main>
    </section>
  );
};

export default Hero;
