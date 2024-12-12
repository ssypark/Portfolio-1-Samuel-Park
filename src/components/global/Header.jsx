import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../../assets/logo.svg";



function Header() {
    // This is for the header and it is used to change the color and height of the header along with other styling for when the user scrolls.
    // I made it a fixed position so it is always on top of the page and shrink in size as the user scrolls down so that it allows the content to take center stage.
    // This is done by using the scrollY property of the window object.
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        // as the user scrolls, if the scrollY is greater than 50, then set the isScrolled state to true.
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        // this is used to add the scroll event listener to the window object
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            // This is the header that is fixed to the top of the page. When the user scrolls down (isScrolled=true), the header shrinks in size and changes color.
            className={`fixed top-0 left-0 w-full z-[200] transition-all duration-300 ${isScrolled ? "py-2 px-4 shadow-lg bg-ink" : "py-4 px-8 bg-olive"
                }`}
        >
            <div className="max-w-screen-xl mx-auto flex  justify-between items-center text-offwhite font-workSans">
                <Link to="/">
                    <img
                        src={logo}
                        alt="logo"
                        className={`transition-all duration-300 ${
                            // if the isScrolled state is true, this will set the width of the logo to 12, otherwise set it to 20
                            isScrolled ? "w-12" : "w-20"
                            } animate-pulse`}
                    />

                </Link>

                <nav className="flex" aria-label="Primary Navigation">
                    <ul className="list-none flex gap-8 font-syne font-semibold">
                        <li>
                            <Link to="/" className="text-offwhite hover:text-florange">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-offwhite hover:text-florange">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/work" className="text-offwhite hover:text-florange">
                                Work
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;