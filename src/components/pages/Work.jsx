import React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

// Animation Imports
import {
    initSideFrogAnimation,
    initHeroFrogAnimation,
    initFishAnimation,
} from "../animations/animations";


//Image Imports
import logo from "../../assets/logo-black.svg";
import arrowDown from "../../assets/arrow-down.png";
import arrowSide from "../../assets/arrow-side.png";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import bee from "../../assets/bee.svg";


import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger for GSAP

function Work() {


    // To see the animation code logic, refer to animations.js
    useEffect(() => {
        initSideFrogAnimation();
        initHeroFrogAnimation();
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
                        <div className="text-left  sm:text-center">
                            <h1 className="text-hmax font-bold font-ppSupply tracking-wide text-ink md:pt-24 sm:pt-4 amalgm-font">
                                WORK & PROJECTS
                            </h1>
                        </div>
                    </div>

                    {/* Fish */}
                    {[...Array(1)].map((_, i) => {
                    const size = 25;
                    return (
                        <img
                            src={bee}
                            key={i}
                            className="fish absolute opacity-80 z-0"
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
                        <h2 className="text-h2 font-ppSupply font-bold  mb-4 mt-0 text-ink flex pb-4 items-center">Current Projects </h2>
                    </div>
                    <Portfolio />
                </div>
                {/* More Projects Section */}
                <div className="more-projects relative bg-olivewhite p-16 flex items-center gap-8 rounded-t-xl z-50 border border-b-0 border-ink"
                    style={{
                        backgroundImage: `url(${logo})`,
                        backgroundSize: "400px",
                        backgroundPosition: "right center",
                        backgroundRepeat: "no-repeat",
                    }}>
                    <img
                        className="side-frog w-32 h-32 absolute top-1/2 -translate-y-1/2 -left-8 z-20"
                        src={arrowSide}
                        alt="side arrow"
                    />
                    <a
                    href="/art"
                    className="btn-grey mx-auto sm:mx-0"
                    aria-label="View My Artwork"
                >
                    See My Artwork!
                </a>
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