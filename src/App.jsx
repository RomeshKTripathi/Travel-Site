import { useGSAP } from "@gsap/react";
import {
  airoplane,
  animationPlane_1,
  animationPlane_2,
  animationPlane_3,
  decor,
} from "./assets";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import gsap from "gsap";
import TopDestinations from "./Components/TopDestinations";
import BookYourNextTrip from "./Components/BookYourNextTrip";
import Testimonials from "./Components/Testimonials";
import { CustomEase } from "gsap/all";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
gsap.registerPlugin(CustomEase);
const App = () => {
  const tl = gsap.timeline({ repeat: 5, repeatDelay: 1 });
  useGSAP(() => {
    tl.to("#plane-3", {
      x: 1500,
      scale: 2,
      y: -150,
      duration: 3,
      opacity: 1,
      delay: 4,
      ease: CustomEase.create("custom", ".67, .34, 1, .71"),
    });
    tl.to("#plane-5", {
      opacity: 1,
      scale: 1.2,
      duration: 4,
      delay: 3,
      x: -1500,
      y: -80,
      ease: CustomEase.create("plane-5", ".86, .54, .94, .69"),
    });
    tl.to("#plane-4", {
      x: 1500,
      opacity: 1,
      scale: 1.7,
      duration: 3,
      y: -300,
      delay: 6,
      ease: CustomEase.create("plane-4", "1, .17, .94, .69"),
    });
  });
  return (
    <div className="bg-theme-cream/5 relative overflow-x-hidden select-none">
      <img className="absolute top-0 right-0" src={decor} alt="" />
      <img
        id="plane-3"
        className="absolute top-56 left-0 w-18 -translate-x-full scale-75 opacity-50 drop-shadow-2xl"
        src={animationPlane_1}
        alt=""
      />
      <img
        id="plane-4"
        className="absolute top-96 w-32 -translate-x-full scale-50 opacity-40 drop-shadow-2xl"
        src={animationPlane_2}
        alt=""
      />
      <img
        id="plane-5"
        className="absolute top-36 right-0 w-36 translate-x-full scale-70 opacity-40"
        src={animationPlane_3}
        alt=""
      />
      <div className="relative overflow-x-hidden p-4 md:px-20">
        <Header />
        <Hero />
        <TopDestinations />
        <Services />
        <BookYourNextTrip />
        <Testimonials />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
};

export default App;
