import { useGSAP } from "@gsap/react";
import { airoplane, decor } from "./assets";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import gsap from "gsap";
import TopDestinations from "./Components/TopDestinations";

const App = () => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    useGSAP(() => {
        tl.fromTo(
            "#plane-2",
            {
                scale: 1.3,
                x: -1000,
                y: 500,
            },
            {
                scale: 0.6,
                x: 800,
                y: -400,
                duration: 10,
            }
        );
        tl.fromTo(
            "#plane-1",
            {
                x: -1300,
                y: 300,
            },
            {
                duration: 10,
                x: 300,
                y: 0,
            }
        );
    });
    return (
        <div className=" relative ">
            <div className="absolute -z-10 -top-24 right-0">
                <img src={decor} alt="" />
                <img
                    id="plane-1"
                    className="absolute z-0 top-36 right-20 w-24 rotate-12"
                    src={airoplane}
                    alt=""
                />
                <img
                    id="plane-2"
                    className="absolute top-64 right-5/6 "
                    src={airoplane}
                    alt="plane"
                />
            </div>
            <div className="px-20 relative ">
                <Header />
                <Hero />
                <Services />
                <TopDestinations />
                {/* BookYourNextTrip  */}
                {/* Reviews  */}
                {/* ContactUs  */}
                {/* Footer  */}
            </div>
        </div>
    );
};

export default App;
