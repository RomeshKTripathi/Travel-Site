import { useState } from "react";
import { worldmap } from "../assets";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${email} subscribed`);
  };
  return (
    <div id="contact-us" className="py-16">
      <div className="relative w-full overflow-hidden rounded-md p-4 shadow md:rounded-lg md:p-24">
        <div className="absolute top-0 right-0 bottom-0 left-0 -z-10">
          <img
            className="object-cover opacity-50 bg-blend-multiply blur-xs"
            src={worldmap}
            alt=""
          />
        </div>
        <div className="text-gray z-0 mb-6 text-center font-medium md:mb-16 md:text-lg">
          Subscribe to get information, latest news and other interesting offers
          about Jadoo.
        </div>
        <form className="mx-auto md:flex md:w-1/2" onSubmit={handleSubmit}>
          <input
            className="border-theme-orange/60 text-theme-orange w-full rounded-lg border-2 p-2 text-lg font-medium outline-none"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="from-theme-yellow to-theme-orange mx-auto rounded-lg bg-gradient-to-br py-2 font-medium text-white max-md:mt-2 max-md:w-full md:mx-2 md:px-4 md:py-3"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
