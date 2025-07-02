import React from "react";
import { links } from "../constants";
import { Logo } from "../assets";

const Header = () => {
    return (
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between py-3 lg:px-20">
            <div>
                <img className="w-20 " src={Logo} alt="" />
            </div>
            <div className="flex items-center gap-12 font-poppins text-sm">
                <ul className="flex gap-12">
                    {links.map((link) => (
                        <a href={link.url}>
                            <li className="z-10 link py-2 " key={link.id}>
                                {link.title}
                            </li>
                        </a>
                    ))}
                </ul>
                <button className="px-4 py-1.5 border-2 border-gray rounded-lg">
                    Sign up
                </button>
            </div>
        </div>
    );
};

export default Header;
