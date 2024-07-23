import React, { useState, useEffect } from "react";

export default function Navbar() {
    const [colorNavbar, setColorNavbar] = useState("bg-transparent");
    const [isOpen, setIsOpen] = useState(false);

    const navbar = () => {
        if (window.scrollY >= 80) {
            setColorNavbar("bg-gothic_2");
        } else {
            setColorNavbar("bg-transparent");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", navbar);
        return () => {
            window.removeEventListener("scroll", navbar);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav
            id="nav"
            className={`font-gothic text-white ${colorNavbar} w-[100vw] h-16 fixed top-0 left-0 right-0 z-10 transition-colors duration-300`}
        >
            <div className="container flex flex-row mx-auto justify-between w-full h-full items-center px-6">
                <div className="text-2xl font-bold">
                    <h1 className="tracking-wider text-gothic_4">Flora Shafiqa</h1>
                </div>

                <div className="hidden md:flex flex-row space-x-4">
                    <a href="#" className="text-xl text-gothic_4 hover:text-gothic_5">
                        Home
                    </a>
                    <a href="#about" className="text-xl text-gothic_4 hover:text-gothic_5">
                        About Flora
                    </a>
                    <a href="#sosmed" className="text-xl text-gothic_4 hover:text-gothic_5">
                        Social Media
                    </a>
                    <a href="#flosCover" className="text-xl text-gothic_4 hover:text-gothic_5">
                        Flora Cover
                    </a>
                </div>

                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-2xl focus:outline-none"
                    >
                        ☰
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className={`md:hidden ${colorNavbar} h-fit`}>
                    <a
                        href="#"
                        className="block px-4 py-2 text-lg text-gothic_4 hover:text-gothic_5"
                        onClick={toggleMenu}
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        className="block px-4 py-2 text-lg text-gothic_4 hover:text-gothic_5"
                        onClick={toggleMenu}
                    >
                        About Flora
                    </a>
                    <a
                        href="#sosmed"
                        className="block px-4 py-2 text-lg text-gothic_4 hover:text-gothic_5"
                        onClick={toggleMenu}
                    >
                        Social Media
                    </a>
                    <a
                        href="#flosCover"
                        className="block px-4 py-2 text-lg text-gothic_4 hover:text-gothic_5"
                        onClick={toggleMenu}
                    >
                        Flora Cover
                    </a>
                </div>
            )}
        </nav>
    );
}
