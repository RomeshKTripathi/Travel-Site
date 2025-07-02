import React, { useRef, useState, useEffect } from "react";
import { links } from "../constants";
import { Logo } from "../assets";
import { Cross as Hamburger } from "hamburger-react";
import gsap from "gsap";

const Header = () => {
    return (
        <div className="absolute top-0 left-0 right-0 flex md:items-center z-10 justify-between py-3 max-md:px-4 lg:px-20 ">
            <div>
                <img className="w-20 " src={Logo} alt="" />
            </div>
            <div className="md:flex max-md:hidden items-center gap-12 font-poppins text-sm">
                <ul className="md:flex gap-12">
                    {links.map((link) => (
                        <a key={link.id} href={link.url}>
                            <li className="z-10 link py-2 ">{link.title}</li>
                        </a>
                    ))}
                </ul>
                <button className="px-4 max-md:hidden py-1.5 border-2 border-gray rounded-lg">
                    Sign up
                </button>
            </div>
            <SmallDeviceMenu />
        </div>
    );
};

const SmallDeviceMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const tlRef = useRef(null);
    useEffect(() => {
        // create the timeline once
        const tl = gsap.timeline({ paused: true });
        tl.fromTo("#menu", { x: "110%" }, { x: 0, duration: 0.3 });
        tlRef.current = tl;
    }, []);

    const toggleMenu = () => {
        if (!isOpen) tlRef.current.restart();
        else tlRef.current.reverse();
        setIsOpen((prev) => !prev);
    };
    return (
        <>
            <div
                id="menu"
                className="md:hidden absolute right-4  bg-white rounded-md p-8 w-1/2 top-12  font-poppins text-sm"
            >
                <ul className="md:flex gap-12">
                    {links.map((link) => (
                        <a key={link.id} href={link.url}>
                            <li
                                onClick={toggleMenu}
                                className="z-10 link py-3 "
                            >
                                {link.title}
                            </li>
                        </a>
                    ))}
                    <button className="py-3 font-medium">Sign up</button>
                </ul>
            </div>
            <span className="absolute md:hidden top-0 right-3 ">
                <Hamburger
                    direction="left"
                    size={28}
                    rounded
                    toggled={isOpen}
                    toggle={toggleMenu}
                    color="#14183e"
                />
            </span>
        </>
    );
};
export default Header;
