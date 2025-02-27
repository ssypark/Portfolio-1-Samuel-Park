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
import redLogo from "../../assets/logo-red.svg";
import logoBlack from "../../assets/logo-darkblack.svg";
import froggy from "../../assets/froggy.svg";
import arrowDown from "../../assets/arrow-down.png";
import arrowSide from "../../assets/arrow-side.png";
import froggySide from "../../assets/froggy-side.svg";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import { FaArrowDown } from "react-icons/fa6";
import bee from "../../assets/bee.svg";


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
        <div className="relative px-4 sm:px-8 bg-olivewhite">
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
            <div className="container mx-auto bg-olivewhite">
                {/* Hero Section */}
                <div className="relative p-16 flex items-center justify-center content-center bg-olivewhite">
                    <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 text-center md:text-left z-20 mb-12">
                
                        {/* Header Section */}
                        <div className="text-left mb-8 sm:text-center">
                            <h1 className="text-hmax font-bold font-syne tracking-wide text-ink pt-24 md:pt-24 sm:pt-4 amalgm-font">
                                PROJECTS
                            </h1>
                        </div>
                    </div>

                    {/* Hero Frog */}
                    
                    {/* Decorative borders */}
                    {/* <img
                        className="absolute bottom-9 left-0 w-72 z-20" // Bottom-left plant
                        src={borderL}
                        alt="left border"
                    />
                    <img
                        className="absolute bottom-9 right-0 w-64 z-20" // Bottom-right plant
                        src={borderR}
                        alt="Right Border"
                    /> */}
                    {/* <img
                        className="hero-frog w-24 sm:w-32 md:w-40 h-auto absolute -bottom-6 sm:-bottom-10 left-1/2 transform -translate-x-1/2 z-10"
                        src={arrowDown}
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
                    /> */}

                    {/* Fish */}
                    {/*  This creates and displays an array of 10 fish icons from Font Awesome */}
                    {/* .map() is used to create an array of 10 fish icons */}
                    {[...Array(1)].map((_, i) => {
                    const size = Math.random() * 30 + 20; // Random size between 10 and 30
                    return (
                        <img
                            src={bee}
                            key={i}
                            className="fish absolute opacity-50 z-0"
                            data-speed={Math.random() * 1 + 0.8}
                            style={{
                                width: `${size}px`, // Set the width to the random size
                                height: 'auto', // Maintain aspect ratio
                                top: `${Math.random() * 60 + 20}%`,
                                left: `${Math.random() * 80 + 10}%`,
                                transform: "rotate(0deg)",
                            }}
                            alt="Bee"
                        />
                    );
                })}



                </div>

                {/* Projects */}
                <div id="featuredProjects">
                    <div className="w-full">
                        <h2 className="text-h2 font-syne font-bold p-4 mb-4 mt-0 text-ink flex items-center">Current Projects <FaArrowDown className="ml-4" /></h2>
                    </div>
                    <Portfolio />
                </div>
                {/* More Projects Section */}
                <div className="more-projects relative bg-olivewhite p-16 flex items-center gap-8 rounded-t-xl z-50 border border-b-0 border-ink"
                    style={{
                        backgroundImage: `url(${logoBlack})`,
                        backgroundSize: "400px",
                        backgroundPosition: "right center",
                        backgroundRepeat: "no-repeat",
                    }}>
                    <img
                        className="side-frog w-32 h-32 absolute top-1/2 -translate-y-1/2 -left-8 z-20"
                        src={arrowSide}
                        alt="Frog"
                    />
                    <button className="px-6 py-3 bg-olivewhite border border-ink text-ink font-syne font-bold rounded hover:bg-florange transition z-20">
                        View My Artwork!
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