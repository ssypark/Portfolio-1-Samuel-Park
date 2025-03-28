import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo-black.svg";
import '../../css/header.css';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        // const handleScroll = () => {
        //   const threshold = window.innerWidth < 768 ? 30 : 50;
        //   setIsScrolled(window.scrollY > threshold);
        // };
        // window.addEventListener("scroll", handleScroll);
        // handleScroll();
        // return () => window.removeEventListener("scroll", handleScroll);
      }, []);

    return (
        <header
        className={`fixed w-full z-[200] transition-all duration-300 border-t border-b border-ink ${isScrolled ? "py-2 px-4 border-t border-b border-ink bg-opacity-90 bg-olivewhite" : "py-4 px-8 bg-olivewhite"} md:top-0 md:left-0 md:bottom-auto left-0`}
    >
            <div className="container mx-auto flex justify-between items-center text-ink font-workSans">
                <Link to="/">
                    <img
                        src={logo}
                        alt="logo"
                        className={`transition-all duration-300 ${isScrolled ? "w-8" : "w-12"}`}
                    />
                </Link>

                <nav className="relative flex justify-center w-full" aria-label="Primary Navigation">
                    <ul className="list-none flex gap-8 font-syne sm:text-xl font-semibold relative">
                        <li className="relative">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "text-ink px-4 py-1 rounded-full border border-ink relative active" : "text-ink px-4 py-1 rounded-full hover:text-redOrange"
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="relative">
                            <NavLink
                                to="/work"
                                className={({ isActive }) =>
                                    isActive ? "text-ink px-4 py-1 rounded-full border border-ink relative active" : "text-ink px-4 py-1 rounded-full hover:text-redOrange"
                                }
                            >
                                Work
                            </NavLink>
                        </li>
                        <li className="relative">
                            <NavLink
                                to="/art"
                                className={({ isActive }) =>
                                    isActive ? "text-ink px-4 py-1 rounded-full border border-ink relative active" : "text-ink px-4 py-1 rounded-full hover:text-redOrange"
                                }
                            >
                                Art
                            </NavLink>
                        </li>
                        <li className="relative">
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive ? "text-ink px-4 py-1 rounded-full border border-ink relative active" : "text-ink px-4 py-1 rounded-full hover:text-redOrange"
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