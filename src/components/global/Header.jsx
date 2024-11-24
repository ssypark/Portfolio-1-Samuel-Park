import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
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
            className={`fixed top-0 left-0 w-full z-[200] transition-all duration-300 ${
                isScrolled ? "py-2 shadow-lg bg-ink" : "py-4 bg-olive"
            }`}
        >
            <div className="max-w-screen-xl mx-auto flex justify-between items-center text-offwhite font-workSans">
                <Link to="/">
                <img
                    src={logo}
                    alt="logo"
                    className={`transition-all duration-300 ${
                        isScrolled ? "w-12" : "w-20"
                    }`}
                />
                </Link>
                <nav className="hidden md:flex">
                    <ul className="list-none flex gap-8">
                        <li className="text-offwhite hover:text-redwood">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="text-offwhite hover:text-redwood">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="text-offwhite hover:text-redwood">
                            <Link to="/work">Work</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;