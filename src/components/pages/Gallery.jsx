import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Painting from "./gallery/Painting"; 
import Illustration from "./gallery/Illustration";

// Animation Imports
import {
    initSideFrogAnimation,
    initHeroFrogAnimation,
    initFishAnimation,
} from "../animations/animations";

// Image Imports
import logo from "../../assets/logo-black.svg";
import arrowSide from "../../assets/arrow-side.png";
import Contact from "../Contact";
import gallery from "../../../public/gallery/3d-gallery.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger for GSAP

function Gallery() {
    // To see the animation code logic, refer to animations.js
    useEffect(() => {
        initSideFrogAnimation();
        initHeroFrogAnimation();
        const fishAnimationCleanup = initFishAnimation();

        // Cleanup function for the fish animation
        return () => {
            fishAnimationCleanup();
        };
    }, []);

    // Add state for the dropdown toggle
    const [showDetails, setShowDetails] = useState(false);

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
                    <h1 className="text-hmax font-bold font-ppSupply tracking-wide text-ink pt-24 md:pt-24 sm:pt-4">
                        ARTWORK
                    </h1>
                    <p className="text-body font-workSans text-ink mt-8 max-w-4xl mx-auto">My artwork has become a way for me to liberate my ideas and thoughts; to express myself freely, without limits or restraints. It has become a way for me to portray events and issues that are personal to me and affect me, whether it be social, internal, on-going occurrences </p>
                    
                   
                </div>
            </div>

            {/* PAINTING SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 px-8 sm:px-24">
                <div className="lg:col-span-1">
                    <h2 className="text-h3 font-ppSupply font-bold mb-4 mt-0 text-ink">Paintings</h2>
                    <p className="text-body font-workSans text-ink">In this series, I create layered, action-oriented images
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
                    <h2 className="text-h3 font-ppSupply font-bold mb-4 mt-0 text-ink">Illustrations</h2>
                    <p className="text-body font-workSans text-ink">Many of my illustrations are an exploration of the subconcious and the internal imagery 
                    seen through daily life.</p>
                </div>
                <div className="lg:col-span-3 mb-24">
                    <Illustration />
                </div>
            </div>
             {/* Virtual Gallery CTA */}
             <div className="mt-12 mb-24 p-6 bg-neutral border-2 border-ink rounded-lg container mx-auto">
                <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="md:w-1/2 mb-6 md:mb-0 flex flex-col h-full justify-between">
                        <div>
                            <h2 className="text-h4 font-ppSupply font-bold text-ink mb-3">Virtual Gallery</h2>
                            <p className="text-body font-workSans text-ink mb-4">
                                Explore our immersive virtual gallery featuring collaborative works between myself and <a 
                                    href="https://www.linkedin.com/in/vahan-vartanian-63ab72315/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-redOrange font-medium hover:underline"
                                >
                                    Vahan Vartanian
                                </a>. Experience art in a whole new dimension.
                            </p>
                            
                            {/* How It Was Made Dropdown */}
                            <div className="mb-4">
                                <button 
                                    onClick={() => setShowDetails(!showDetails)}
                                    className="flex items-center text-ink/80 hover:text-redOrange transition-colors mb-2 group"
                                >
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        className={`h-4 w-4 mr-2 transition-transform duration-300 ${showDetails ? 'rotate-90' : ''}`} 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                    <span className="text-body font-medium group-hover:underline">How was this made?</span>
                                </button>
                                
                                {showDetails && (
                                    <div className="text-body text-ink/80 bg-neutral/50 p-4 rounded-md border border-ink/10 transition-all duration-500 ease-in-out">
                                        <p className="mb-3">
                                            This interactive 3D gallery was a collaborative project between myself and designer Vahan Vartanian. We each designed and rendered our own gallery rooms in Adobe Dimension, then brought them together into a unified virtual world using A‑Frame, an open-source WebXR framework.
                                        </p>
                                        <p className="mb-3">
                                            The gallery runs directly in-browser and invites visitors to explore two distinct artistic spaces—each accessible through interactive portals. I handled the web implementation, spatial layout, custom interactions, and particle effects, experimenting with immersive environments that blend visual art with playful UI.
                                        </p>
                                        <p>
                                            This project was a chance to explore how traditional gallery experiences can evolve into something more dynamic and shareable—accessible to anyone, anywhere.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                        
                        <a 
                            href="/ar-project/index.html"
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn-default inline-flex items-center self-start mt-4"
                        >
                            Enter Virtual Gallery
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                    <div className="md:w-1/2 md:flex md:items-center">
                        <img 
                            src={gallery} 
                            alt="3D Virtual Art Gallery" 
                            className="w-full h-auto object-cover rounded-md border border-ink shadow-md hover:opacity-90 transition-opacity duration-300" 
                        />
                    </div>
                </div>
            </div>

            {/* More Projects Section */}
            <div className="mx-12 mb-16">
            <div className="more-projects relative border border-ink border-b-0 bg-olivewhite p-16 flex items-center gap-8 rounded-t-xl z-10 "
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
                    className="btn-default mx-auto sm:mx-0"
                    aria-label="View My Projects"
                >
                    See My Projects!
                </a>
            </div>
            {/* Contact Section */}
            <div className="pb-28 z-10">
                <Contact />
            </div>
            </div>
        </div>
    );
}

export default Gallery;