import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import logo from "../../assets/logo-black.svg";
import Portfolio from "../Porfolio";
import Contact from "../Contact";


function Home() {
    const logoRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            logoRef.current,
            { scale: 0.5, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1, ease: "power3.out" }
        );
    }, []);

    return (
        <div className="bg-olive">
            <div className="min-h-screen flex items-center justify-center bg-sage text-ink p-8">
                <div className="flex flex-col md:flex-row items-center md:items-start text-left space-y-8 md:space-y-0 md:space-x-8">
                    {/* Logo */}
                    <img
                    ref={logoRef}
                    src={logo} 
                    alt="Samuel Park Logo" 
                    className="w-72 mr-8" 
                    />

                    {/* Text Content */}
                    <div className="text-left">
                        <h1 className="text-h1 font-bold font-syne tracking-wide mb-4">
                            DIGITAL DESIGNER
                        </h1>
                        <p className="text-xl md:text-2xl max-w-2xl font-workSans">
                            I’m Samuel Park, a UI and visual designer with a background in fine arts, blending creativity with digital innovation to create impactful and inclusive designs.
                        </p>
                    </div>
                </div>
            </div>
            
            {/* PROJECTS */}
            <div>
                <Portfolio />
            </div>

            {/* More Projects Section */}
            <div className="bg-ink py-16 flex justify-center items-center">
                <button className="px-6 py-3 bg-redwood text-offwhite font-syne font-bold rounded hover:bg-opacity-90 transition">
                    More Projects
                </button>
            </div>

            {/* Contact Section */}
            <Contact />
        </div >
    )
}

export default Home;