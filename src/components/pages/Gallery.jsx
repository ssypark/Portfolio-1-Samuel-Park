import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Painting from "./gallery/Painting"; 
import Illustration from "./gallery/Illustration";

// Animation Imports
import {
    initSideFrogAnimation,
    initHeroFrogAnimation,
    initFooterFrogAnimation,
    initFishAnimation,
} from "../animations/animations";

// Image Imports
import redLogo from "../../assets/logo-red.svg";
import logo from "../../assets/logo-darkblack.svg";
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

function Gallery() {
    // To see the animation code logic, refer to animations.js
    useEffect(() => {
        initSideFrogAnimation();
        initHeroFrogAnimation();
        initFooterFrogAnimation();
        const fishAnimationCleanup = initFishAnimation();

        // Cleanup function for the fish animation
        return () => {
            fishAnimationCleanup();
        };
    }, []);

    return (
        <div className="relative pt-12 px-4 sm:px-8 bg-olivewhite">
            <Helmet>
                <title>Gallery - Samuel Park</title>
                <meta name="description" content="Explore the gallery of Samuel Park, showcasing his visual artwork and creative projects." />
                <meta name="author" content="Samuel Park" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Gallery - Samuel Park" />
                <meta property="og:description" content="Discover Samuel Park's portfolio featuring innovative and user-centered designs. See current projects and visual artwork." />
                <meta property="og:image" content="../../assets/logo.svg" />
                <meta property="og:url" content="https://sampark.ca/gallery" />
                <meta property="og:site_name" content="Samuel Park Portfolio" />
            </Helmet>

            <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 text-center z-20 mb-12">

                {/* Header Section */}
                <div className="w-full mb-16 text-center justify-center items-center px-12 sm:px-24">
                    <h1 className="text-hmax font-bold font-syne tracking-wide text-ink pt-24 md:pt-24 sm:pt-4 amalgm-font">
                        ARTWORK
                    </h1>
                    <p className="text-body  font-mono text-ink mt-8 max-w-4xl mx-auto">My artwork has become a way for me to liberate my ideas and thoughts; to express myself freely, without limits or restraints. It has become a way for me to portray events and issues that are personal to me and affect me, whether it be social, internal, on-going occurrences </p>
                </div>
            </div>
            {/* PAINTING SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 px-8 sm:px-24">
                <div className="lg:col-span-1">
                    <h2 className="text-h3 font-syne font-bold mb-4 mt-0 text-ink">Paintings</h2>
                    <p className="text-sm font-mono text-ink">In this series, I create layered, action-oriented images
                        drawn from  my subconscious. Viscera, organic forms, and
                        flung paint mix to create curiously mesmerizing
                        almost-landscapes and organisms, influenced in equal parts
                        by graffiti and action painting.</p>
                </div>
                <div className="lg:col-span-3 mb-24">
                    <Painting />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 px-8 sm:px-24">
                <div className="lg:col-span-1">
                    <h2 className="text-h3 font-syne font-bold mb-4 mt-0 text-ink">Illustrations</h2>
                    <p className="text-sm font-mono text-ink">Many of my illustrations are an exploration of the subconcious and the internal imagery 
                    seen through daily life.</p>
                </div>
                <div className="lg:col-span-3 mb-24">
                    <Illustration />
                </div>
            </div>

            {/* More Projects Section */}
            <div className="more-projects relative border border-ink border-b-0 bg-olivewhite p-16 flex items-center gap-8 rounded-t-xl z-10"
                style={{
                    backgroundImage: `url(${logo})`,
                    backgroundSize: "400px",
                    backgroundPosition: "right center",
                    backgroundRepeat: "no-repeat",
                    opacity: "0.9",
                }}>
                <img
                    className="side-frog w-24 h-24 absolute top-1/2 -translate-y-1/2 -left-8 z-10"
                    src={arrowSide}
                    alt="Frog"
                />
                <a
                    href="/work"
                    className="flex items-center text-body gap-2 px-2 py-1 bg-olivewhite text-ink font-bold font-syne rounded border border-ink hover:bg-florange duration-300 w-max"
                >
                    More Projects!
                </a>
            </div>

            {/* Contact Section */}
            <div className="pb-28 z-10">
                <Contact />
            </div>
        </div>
    );
}

export default Gallery;