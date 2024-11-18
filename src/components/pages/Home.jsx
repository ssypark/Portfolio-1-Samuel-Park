import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import logo from "../../assets/logo-black.svg";
import froggy from "../../assets/froggy.svg";
import froggySide from "../../assets/froggy-side.svg";
import Portfolio from "../Porfolio";
import Contact from "../Contact";

function Home() {
    const heroFrogStyles = {
        position: "absolute",
        bottom: "-80px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 10,
        width: "256px",
        height: "256px",
    };

    const sideFrogStyles = {
        position: "absolute",
        top: "50%",
        left: "-30%",
        transform: "translateY(-50%)",
        zIndex: 0,
        width: "192px",
        height: "192px",
    };

    useGSAP(() => {
        // Logo Animation
        gsap.fromTo(
            ".logo",
            { scale: 0.5, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1, ease: "power3.out" }
        );

        // Hero Frog Animation
        gsap.to(".hero-frog", {
            y: -15,
            duration: 0.6,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });

        // Side Frog Animation
        gsap.fromTo(
            ".side-frog",
            { x: "-100%", opacity: 0 },
            {
                x: "-30%",
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".more-projects",
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: true,
                },
            }
        );
    });

    return (
        <div className="relative bg-olive">
            {/* Sidebars */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-16 h-full bg-olive"></div>
                <div className="absolute top-0 right-0 w-8 h-full bg-olive"></div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto">
                {/* Hero Section */}
                <div className="relative min-h-screen px-16 mt-12 flex items-center justify-center bg-sage text-ink p-8 rounded-xl">
                    <div className="flex flex-col md:flex-row items-center md:items-start text-left space-y-8 md:space-y-0 md:space-x-8">
                        <img
                            className="logo w-72 mr-8"
                            src={logo}
                            alt="Samuel Park Logo"
                        />
                        <div className="text-left">
                            <h1 className="text-h1 font-bold font-syne tracking-wide mb-4">
                                DIGITAL DESIGNER
                            </h1>
                            <p className="text-xl md:text-2xl max-w-2xl font-workSans">
                                I’m Samuel Park, a UI and visual designer with a
                                background in fine arts, blending creativity
                                with digital innovation to create impactful and
                                inclusive designs.
                            </p>
                        </div>
                    </div>

                    {/* Hero Frog */}
                    <div className="absolute bottom-0 left-0 w-full h-20 bg-olive z-20"></div>
                    <img
                        className="hero-frog"
                        style={heroFrogStyles}
                        src={froggy}
                        alt="Frog"
                    />
                </div>

                {/* Projects */}
                <Portfolio />

                {/* More Projects Section */}
                <div className="more-projects relative bg-ink py-16 px-16 flex items-center justify-start gap-8">
                    <img
                        className="side-frog"
                        style={sideFrogStyles}
                        src={froggySide}
                        alt="Frog"
                    />
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