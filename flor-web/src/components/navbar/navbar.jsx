import React, { useState, useEffect } from "react";

export default function Navbar() {
    const [colorNavbar, setColorNavbar] = useState("bg-transparent");
    const [bottomNavbar1, setBottomNavbar1] = useState("")
    const [bottomNavbar2, setBottomNavbar2] = useState("")
    const [bottomNavbar3, setBottomNavbar3] = useState("")
    const [botNavbar, setBotNavbar] = useState(false)
    const [id1, setId1] = useState("#about")
    const [id2, setId2] = useState("#sosmed")
    const [id3, setId3] = useState("#flosCover")
    const [isOpen, setIsOpen] = useState(false);

    const navbar = () => {
        if (window.scrollY >= 80) {
            setColorNavbar("bg-gothic_2");
        } else {
            setColorNavbar("bg-transparent");
        }
    };

    const borderNavbar = () => {
        if (window.scrollY >= 400 && id1 == "#about" && window.scrollY <= 1000) {
            setBottomNavbar1("border-b-2 border-gothic_1 transition-all");
            setBottomNavbar2("");
            setBottomNavbar3("");
        } else if (window.scrollY >= 1000 && id2 == "#sosmed" && window.scrollY <= 3000) {
            setBottomNavbar1("");
            setBottomNavbar2("border-b-2 border-gothic_1 transition-all");
            setBottomNavbar3("");
        }else if (window.scrollY >= 3100 && id3 == "#flosCover") {
            setBottomNavbar1("");
            setBottomNavbar2("");
            setBottomNavbar3("border-b-2 border-gothic_1 transition-all");
        } else {
            setBottomNavbar1("");
            setBottomNavbar2("");
            setBottomNavbar3("");
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", navbar);
        window.addEventListener("scroll", borderNavbar);
        return () => {
            window.removeEventListener("scroll", navbar);
            window.removeEventListener("scroll", borderNavbar);
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
                    <a href={id1} className={`text-xl text-gothic_4 hover:text-gothic_5 ${bottomNavbar1}`}>
                        About Flora
                    </a>
                    <a href={id2} className={`text-xl text-gothic_4 hover:text-gothic_5 ${bottomNavbar2}`}>
                        Social Media
                    </a>
                    <a href={id3} className={`text-xl text-gothic_4 hover:text-gothic_5 ${bottomNavbar3}`}>
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
