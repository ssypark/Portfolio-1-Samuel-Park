import React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

// Animation Imports
import {
    initSideFrogAnimation,
    initHeroFrogAnimation,
    initFooterFrogAnimation,
    initFishAnimation,
} from "../animations/animations";

//Image Imports
import logo from "../../assets/logo-black.svg";
import logoBlack from "../../assets/logo-darkblack.svg";
import froggy from "../../assets/froggy.svg";
import froggySide from "../../assets/froggy-side.svg";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import { FaFishFins, FaArrowDown } from "react-icons/fa6";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger for GSAP

function Work() {
        // To see the animation code logic, refer to animations.js
        useEffect(() => {
            initSideFrogAnimation();
            initHeroFrogAnimation();
            initFooterFrogAnimation();
            const fishAnimationCleanup = initFishAnimation();
    
            //Cleanup function for the fish animation
            return () => {
                fishAnimationCleanup();
            };
        }, []);

       

    return (
        <div className="relative  mt-24 px-4 sm:px-8 bg-olive">
            <Helmet>
                {/* General Meta Tags */}
                <title>Work & Projects - Samuel Park</title>
                <meta name="description" content="Explore the creative projects of Samuel Park, a UX/UI designer and visual artist. Discover current and featured projects showcasing innovation and user-centered design." />
                <meta name="author" content="Samuel Park" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                {/* Open Graph Tags */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Work & Projects - Samuel Park" />
                <meta property="og:description" content="Discover Samuel Park's portfolio featuring innovative and user-centered designs. See current projects and visual artwork." />
                <meta property="og:image" content="../../assets/logo.svg" />
                <meta property="og:url" content="https://sampark.ca/work" />
                <meta property="og:site_name" content="Samuel Park Portfolio" />
            </Helmet>
            {/* Main Content */}
            <div className="container mx-auto">
                {/* Hero Section */}
                <div className="relative p-16 flex items-center justify-center content-center bg-sage bg-water">
                    <div className="flex flex-col  md:flex-row items-center md:items-start md:space-x-8 text-center md:text-left z-20 mb-12">
                        <img
                            className="logo w-24 sm:w-36 md:w-48 lg:w-72 mr-0 sm:mr-8"
                            src={logo}
                            alt="Samuel Park Logo"
                        />
                        <div className="text-left sm:text-center">
                            <h1 className="text-h1 font-bold font-syne  tracking-wide text-ink  pt-24 md:pt-24 sm:pt-4">
                                WORK & PROJECTS
                            </h1>

                        </div>
                    </div>

                    {/* Hero Frog */}
                    <div className="absolute bottom-0 left-0 w-full h-10 bg-olive z-20"></div>
                    <img
                        className="hero-frog w-24 sm:w-32 md:w-40 h-auto absolute -bottom-6 sm:-bottom-10 left-1/2 transform -translate-x-1/2 z-10"
                        src={froggy}
                        alt="Frog"
                        title="Jump to Featured Projects"
                        // This is to scroll to the "Featured Projects" section when the frog is clicked
                        onClick={() => {
                            document.getElementById("featuredProjects").scrollIntoView({ // This targets the "Featured Projects" section by its ID
                                behavior: "smooth", // Smooth scrolling animation
                                block: "start", // Scroll to the top of the section "featuredProjects"
                            });
                            //However, it scrolled too far down that it would hide the header by the nav bar.
                            // To fix this, we add a slight offset for after the scroll and a bounce effect
                            setTimeout(() => {
                                window.scrollBy({
                                    top: -60, //offset value for the scroll to show the header of "featuredProjects"
                                    behavior: "smooth",
                                });
                            }, 400); // Delay the scroll by 400ms
                        }}
                    />

                    {/* Fish */}
                    {/*  This creates and displays an array of 10 fish icons from Font Awesome */}
                    {/* .map() is used to create an array of 10 fish icons */}
                    {[...Array(4)].map((_, i) => (
                        <FaFishFins
                            key={i} // A key is necessary to assign a unique identifier to each fish icon
                            className="fish absolute text-ink opacity-50" // Class name for the fish icon for the animation along with styling
                            data-speed={Math.random() * 1 + 0.8} // Random speed multiplier to create a more natural movement
                            style={{
                                fontSize: `${Math.random() * 30 + 20}px`, // Random sizes to create depth and variation
                                top: `${Math.random() * 60 + 20}%`, // Random position to ensure the fish are spread out more evenly (vertically)
                                left: `${Math.random() * 80 + 10}%`, // Random position to ensure the fish are spread out more evenly (horizontally)
                                transform: "rotate(0deg)", // Initial rotation so the fish start out facing correctly
                            }}
                        />
                    ))}



                </div>

                {/* Projects */}
                <div id="featuredProjects">
                    <div className="w-full">
                        <h2 className="text-h2 font-syne font-bold p-4 mb-4 mt-0 text-offwhite flex items-center">Current Projects <FaArrowDown className="ml-4 animate-bounce" /></h2>
                    </div>
                    <Portfolio />
                </div>
                {/* More Projects Section */}
                <div className="more-projects relative bg-ink p-16 flex items-center gap-8 rounded-t-xl z-50"
                    style={{
                        backgroundImage: `url(${logoBlack})`,
                        backgroundSize: "400px",
                        backgroundPosition: "right center",
                        backgroundRepeat: "no-repeat",
                    }}>
                    <img
                        className="side-frog w-48 h-48 absolute top-1/2 -translate-y-1/2 -left-8 z-20"
                        src={froggySide}
                        alt="Frog"
                    />
                    <button className="px-6 py-3 bg-redwood text-offwhite font-syne font-bold rounded hover:bg-opacity-90 transition z-20">
                        Extras!
                    </button>
                </div>

                {/* Contact Section */}
                <div className="pb-28">
                    <Contact />
                </div>

            </div>
        </div>
    );
}


export default Work;