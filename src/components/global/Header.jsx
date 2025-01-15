import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-[200] transition-all duration-300 ${isScrolled ? "py-2 px-4 shadow-lg bg-ink" : "py-4 px-8 bg-olive"
                }`}
        >
            <div className="container mx-auto flex justify-between items-center text-offwhite font-workSans">
                <Link to="/">
                    <img
                        src={logo}
                        alt="logo"
                        className={`transition-all duration-300 ${isScrolled ? "w-12" : "w-20"}`}
                    />
                </Link>

                <nav className="relative flex justify-center w-full" aria-label="Primary Navigation">
                    <ul className="list-none flex gap-8 font-syne font-semibold relative">
                        <li className="relative">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "text-offwhite px-4 py-1 rounded-full border border-offwhite relative active" : "text-offwhite px-4 py-1 rounded-full hover:text-florange"
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="relative">
                            <NavLink
                                to="/work"
                                className={({ isActive }) =>
                                    isActive ? "text-offwhite px-4 py-1 rounded-full border border-offwhite relative active" : "text-offwhite px-4 py-1 rounded-full hover:text-florange"
                                }
                            >
                                Work
                            </NavLink>
                        </li>
                        <li className="relative">
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive ? "text-offwhite px-4 py-1 rounded-full border border-offwhite relative active" : "text-offwhite px-4 py-1 rounded-full hover:text-florange"
                                }
                            >
                                About
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;