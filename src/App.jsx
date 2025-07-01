import { airoplane, decor } from "./assets";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Services from "./Components/Services";

const App = () => {
    return (
        <div className=" relative">
            <div className="absolute -z-10 -top-24 right-0">
                <img src={decor} alt="" />
                <img
                    className="absolute z-0 top-36 right-20 w-24 rotate-12"
                    src={airoplane}
                    alt=""
                />
                <img
                    className="absolute top-64 right-5/6 "
                    src={airoplane}
                    alt="plane"
                />
            </div>
            <div className="px-20 relative">
                <Header />
                <Hero />
                <Services />
                {/* TopDestinations  */}
                {/* BookYourNextTrip  */}
                {/* Reviews  */}
                {/* ContactUs  */}
                {/* Footer  */}
            </div>
        </div>
    );
};

export default App;
