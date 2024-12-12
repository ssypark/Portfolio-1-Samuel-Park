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
import { FaFishFins, FaSeedling } from "react-icons/fa6";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger for GSAP

function Home() {
    // To see the animation code, refer to animations.js
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
        <div className="relative mt-24 px-4 sm:px-8 bg-olive">
            {/* Metadata */}
            <Helmet>
                <title>Samuel Park - UX/UI & Visual Designer Portfolio</title>
                <meta
                    name="description"
                    content="Welcome to Samuel Park's portfolio! Explore a blend of UX/UI design, fine arts, and digital innovation. Check out featured projects and learn more about Samuel's work."
                />
                <meta
                    name="keywords"
                    content="UX/UI design, visual design, digital innovation, Samuel Park portfolio, featured projects, fine arts"
                />
                <meta name="author" content="Samuel Park" />
                <meta property="og:title" content="Samuel Park - UX/UI & Visual Designer Portfolio" />
                <meta
                    property="og:description"
                    content="Discover Samuel Park's portfolio showcasing UX/UI design, fine arts, and creative projects. Explore his featured projects and contact him for collaborations."
                />
                <meta property="og:image" content="../../assets/logo.svg" />
                <meta property="og:url" content="https://sampark.ca/" />

            </Helmet>
            {/* Main Content */}
            <div className="container mx-auto">
                {/* Hero Section */}
                <div className="relative min-h-screen px-16 -mt-16 flex items-center justify-center bg-water bg-sage text-ink">
                    <div className="flex flex-col md:flex-row items-center md:items-start text-left space-y-8 md:space-y-0 md:space-x-8 z-20 mb-12" data-aos="fade-up">
                        <img
                            className="logo w-36 sm:w-72 mr-8"
                            src={logo}
                            alt="Samuel Park Logo"
                        />
                        <div className="text-left">
                            <h1 className="sm:text-h1 font-bold font-syne tracking-wide mb-4 leading-normal">
                                Hello, I'm Samuel Park
                            </h1>

                            <p className="text-h6 max-w-2xl font-workSans">
                                I'm a UI and visual designer with a
                                background in fine arts, blending creativity
                                with digital innovation to create impactful designs.
                            </p>
                        </div>
                    </div>

                    {/* Hero Frog Bar*/}
                    {/* Olive bar for frog */}
                    <div className="absolute bottom-0 left-0 w-full h-10 bg-olive z-20"></div>
                    {/* Hero Frog */}
                    <img
                        className="hero-frog w-40 h-40 absolute -bottom-10 left-1/2 transform -translate-x-1/2 z-10"
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
                    {/* pointer events none ensures that the fish don't interfere with user click events */}
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        {/*  This creates and displays an array of 10 fish icons from Font Awesome */}
                        {/* .map() is used to create an array of 10 fish icons */}
                        {[...Array(10)].map((_, i) => (
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


                </div>

                {/* Projects */}
                <div id="featuredProjects">
                    <div className="w-full">
                        <h2 className="text-h2 font-syne font-bold p-4 mb-4 mt-0 text-offwhite flex items-center">Featured Projects <FaSeedling className="text-h2 ml-4" /></h2>
                    </div>
                    {/* with the limit prop (see Portfolio.jsx), we can limit the number of projects displayed */}
                    <div className="z-100">
                        <Portfolio limit={3} />
                    </div>
                </div>
                {/* More Projects Section */}
                <div className="more-projects relative bg-ink p-16 flex items-center gap-8 rounded-t-xl z-10"
                    style={{
                        backgroundImage: `url(${logoBlack})`,
                        backgroundSize: "400px",
                        backgroundPosition: "right center",
                        backgroundRepeat: "no-repeat",
                    }}>
                    <img
                        className="side-frog w-48 h-48 absolute top-1/2 -translate-y-1/2 -left-8 z-10"
                        src={froggySide}
                        alt="Frog"
                    />
                    <a
                        href="/work"
                        className="px-6 py-3 bg-redwood text-offwhite text-h6 font-syne font-bold rounded hover:bg-opacity-90 transition z-20"
                    >
                        More Projects
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

export default Home;