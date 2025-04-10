import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo-black.svg";
import logoOrange from "../../assets/logo.svg";
import '../../css/header.css';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLogoHovered, setIsLogoHovered] = useState(false);
    const location = useLocation();
    const activeLinkRef = useRef(null);
    const indicatorRef = useRef(null);
    const navRef = useRef(null);
    const linkRefs = {
        "/": useRef(null),
        "/work": useRef(null),
        "/art": useRef(null),
        "/about": useRef(null)
    };
    
    useEffect(() => {
        const handleScroll = () => {
          const threshold = window.innerWidth < 768 ? 30 : 50;
          setIsScrolled(window.scrollY > threshold);
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Check initial scroll position
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    // Update the indicator position when the route changes
    useEffect(() => {
        // Find active link using current path
        const currentPath = location.pathname;
        const activeRef = linkRefs[currentPath] || linkRefs["/"];
        
        if (activeRef.current && indicatorRef.current && navRef.current) {
            const indicator = indicatorRef.current;
            const activeLink = activeRef.current;
            const ul = activeLink.closest('ul'); // Get the parent ul element
            
            // Calculate position relative to the ul parent
            const linkRect = activeLink.getBoundingClientRect();
            const ulRect = ul.getBoundingClientRect();
            
            // Calculate the position and dimensions
            const width = activeLink.offsetWidth;
            const left = activeLink.offsetLeft;
            
            // Set the dimensions and position of the indicator
            setTimeout(() => {
                indicator.style.width = `${width}px`;
                indicator.style.left = `${left}px`;
                indicator.style.opacity = '1';
                
                // Ensure proper vertical centering
                const ulHeight = ulRect.height;
                const linkHeight = linkRect.height;
                indicator.style.height = `${linkHeight + 6}px`; // Slightly taller than link
            }, 50); // Small delay for more reliable positioning
        }
    }, [location.pathname, isScrolled]);

    return (
        <header
            className={`fixed w-full z-[200] transition-all duration-300 border-t border-b border-ink ${
                isScrolled 
                ? "py-2 px-4 bg-olivewhite bg-opacity-80 backdrop-blur-sm" 
                : "py-6 px-8 bg-olivewhite"
            } md:top-0 md:left-0 md:bottom-auto left-0`}
        >
            <div className="container mx-auto flex justify-between items-center text-ink font-workSans">
                <Link 
                    to="/" 
                    className="transition-all duration-700 ease-in-out"
                    onMouseEnter={() => setIsLogoHovered(true)}
                    onMouseLeave={() => setIsLogoHovered(false)}
                >
                    <img
  src={isLogoHovered ? logoOrange : logo}
  alt="logo"
  style={{ '--logo-size': isScrolled ? '2rem' : '3rem' }}
  className="logo-img"
/>
                </Link>

                <nav ref={navRef} className="relative flex justify-center w-full" aria-label="Primary Navigation">
                    <ul className="list-none flex justify-center gap-8 font-syne sm:text-xl font-semibold relative">
                        {/* Moving indicator - positioned absolutely within the ul */}
                        <div 
                            ref={indicatorRef}
                            className="absolute border border-ink rounded-full transition-all duration-500 ease-in-out opacity-0 top-1/2 transform -translate-y-1/2 pointer-events-none"
                        />
                        
                        <li className="flex items-center">
                            <NavLink
                                to="/"
                                ref={linkRefs["/"]}
                                className={({ isActive }) =>
                                    isActive ? "text-ink px-4 py-1 rounded-full active" : "text-ink px-4 py-1 rounded-full hover:text-redOrange"
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="flex items-center">
                            <NavLink
                                to="/work"
                                ref={linkRefs["/work"]}
                                className={({ isActive }) =>
                                    isActive ? "text-ink px-4 py-1 rounded-full active" : "text-ink px-4 py-1 rounded-full hover:text-redOrange"
                                }
                            >
                                Work
                            </NavLink>
                        </li>
                        <li className="flex items-center">
                            <NavLink
                                to="/art"
                                ref={linkRefs["/art"]}
                                className={({ isActive }) =>
                                    isActive ? "text-ink px-4 py-1 rounded-full active" : "text-ink px-4 py-1 rounded-full hover:text-redOrange"
                                }
                            >
                                Art
                            </NavLink>
                        </li>
                        <li className="flex items-center">
                            <NavLink
                                to="/about"
                                ref={linkRefs["/about"]}
                                className={({ isActive }) =>
                                    isActive ? "text-ink px-4 py-1 rounded-full active" : "text-ink px-4 py-1 rounded-full hover:text-redOrange"
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