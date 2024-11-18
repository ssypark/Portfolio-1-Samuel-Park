import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "../../assets/logo-black.svg";

import froggyside from "../../assets/froggy-side.svg";
import Portfolio from "../Porfolio";
import Contact from "../Contact";

// ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Home() {
    const logoRef = useRef(null);
    const heroFrogRef = useRef(null);
    const sideFrogRef = useRef(null); 
    const moreProjectsRef = useRef(null); 

    useEffect(() => {
        // Logo Animation
        gsap.fromTo(
            logoRef.current,
            { scale: 0.5, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1, ease: "power3.out" }
        );

        // Hero Frog Animation

        // Side Frog Animation
        gsap.fromTo(
            sideFrogRef.current,
            { x: '-100%', zIndex: 0, opacity: 0 }, 
            {
                x: '-30%', 
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: moreProjectsRef.current,
                    start: "top 80%", 
                    end: "bottom 20%", 
                    scrub: true, 
                    invalidateOnRefresh: true, 
                },
            }
        );
        


        // gsap.to(blobRef.current, {
        //     x: '-1px',
        //     duration: 0.5,
        //     repeat: -1,
        //     yoyo: true,
        //     ease: "power1.inOut",
        //     zIndex: 0, 
        // });
    }, []);

    return (
        <div className="relative bg-olive">
            {/* Sidebars */}
            <div className="absolute inset-0">
                {/* Left Sidebar */}
                <div className="absolute top-0 left-0 w-16 h-full bg-olive"></div>
                {/* Right Sidebar */}
                <div className="absolute top-0 right-0 w-8 h-full bg-olive"></div>
            </div>
            {/* MAIN CONTENT */}
            <div className="container mx-auto">
            {/* HERO SECTION */}
            <div className="min-h-screen px-16 mt-12 flex items-center justify-center bg-sage text-ink p-8">
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
            <div
                ref={moreProjectsRef}
                className="relative bg-ink py-16 px-16 flex items-center justify-start gap-8"
            >
                {/* Blob/Frog Sidebar */}
                <div
                    ref={sideFrogRef}
                    className="absolute -left-2 z-0 top-1/2 transform -translate-y-1/2 w-48 h-48"
                    style={{ top: '90px' }}
                >
                    {/* Replace with your frog/blob SVG or image */}
                    <img
                        src={froggyside}
                        alt="Frog"
                        className="w-48 h-48 object-contain"
                    />
                </div>

                {/* Button */}
                <button className="px-6 py-3 ml-8 bg-redwood text-offwhite font-syne font-bold rounded hover:bg-opacity-90 transition">
                    More Projects
                </button>
            </div>


            {/* Contact Section */}
            <Contact />
        </div>
        </div>
    );
}

export default Home;