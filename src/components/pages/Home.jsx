import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";

// Animation Imports
import {
    initSideFrogAnimation,
    initHeroFrogAnimation,
    initFishAnimation,
} from "../animations/animations";
import AOS from 'aos';
import 'aos/dist/aos.css';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


//Image Imports
import logo from "../../assets/logo-black.svg";
import arrowDown from "../../assets/arrow-down.png";
import arrowSide from "../../assets/arrow-side.png";

// Component Imports
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import nameVideoWebm from "../../assets/name-animation.webm";
import nameVideoMp4 from "../../assets/name-animation.mp4";
import nameStatic from "../../assets/name-mobile.png";
import dot from "../../assets/dot.svg";
import Particles from "../animations/react-bits/Particles";
import { HelmetProvider } from "react-helmet-async";


gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger for GSAP

function Home() {
    const videoRef = useRef(null);
    const [isMobileWidth, setIsMobileWidth] = useState(false);

    // To see the animation code, refer to animations.js
    useEffect(() => {
        AOS.init({
            once: true, // This will make the animations run only once
        });

        initSideFrogAnimation();
        initHeroFrogAnimation();
        const fishAnimationCleanup = initFishAnimation();

        // Check if the screen is mobile width
        const checkWidth = () => {
            setIsMobileWidth(window.innerWidth < 768);
        };

        // Run on mount and when window resizes
        checkWidth();
        window.addEventListener('resize', checkWidth);

        // Only handle video if we're on desktop width
        if (!isMobileWidth && videoRef.current) {
            const video = videoRef.current;
            video.autoplay = false;

            setTimeout(() => {
                video.play()
                    .catch(e => console.error("Video play failed:", e));
            }, 1000);
        }

        //Cleanup function for the fish animation
        return () => {
            fishAnimationCleanup();
            window.removeEventListener('resize', checkWidth);
        };
    }, [isMobileWidth]);

    const handleScrollToFeatured = () => {
        const targetElement = document.getElementById("featuredProjects");
        if (targetElement) {
            const headerOffset = 60; // Adjust this value to match your header's height
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            gsap.to(window, {
                duration: 1,
                scrollTo: { y: offsetPosition },
                ease: "power2.out",
            });
        }
    };

    return (
        <HelmetProvider>
            <div className="relative px-4 sm:px-8 bg-olivewhite">
                {/* Metadata */}
                <Helmet>
                    <title>Samuel Park - Experience & Visual Designer Portfolio</title>
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
                <div className="absolute inset-0 w-full min-h-screen z-5" >
                    <Particles
                        particleColors={['#24261B']}
                        particleCount={200}
                        particleSpread={10}
                        speed={0.1}
                        particleBaseSize={300}
                        moveParticlesOnHover={false}
                        alphaParticles={false}
                        disableRotation={true}
                    />
                </div>
                {/* Main Content */}
                <div className="container py-24 md:pt-32 mx-auto">

                    {/* Hero Section */}
                    <div className="relative w-full min-h-screen -mt-16 flex items-center justify-center text-ink pointer-events-none" >
                        <div className="flex flex-col md:flex-row items-center md:items-start text-left space-y-8 md:space-y-0 md:space-x-8 z-0 mb-12 pointer-events-none" >
                            <div className="text-left z-0 pointer-events-none">
                                <p className="sm:text-h3 font-ppSupply max-w-2xl pointer-events-none" data-aos="fade-right">
                                    Hello, I'm
                                </p>

                                {/* Responsive container with conditional rendering based on width */}
                                <div className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-3xl xl:max-w-4xl mx-auto">
                                    {isMobileWidth ? (
                                        // Static image for mobile widths
                                        <img
                                            src={nameStatic}
                                            alt="Samuel Park"
                                            className="w-full h-auto pointer-events-none"
                                            data-aos="fade-up"
                                        />
                                    ) : (
                                        // Video for desktop widths
                                        <video
                                            ref={videoRef}
                                            muted
                                            playsInline
                                            className="w-full h-auto pointer-events-none animated-name"
                                            aria-label="Samuel Park"
                                        >
                                            <source src={nameVideoWebm} type="video/webm" />
                                            <source src={nameVideoMp4} type="video/mp4" />
                                            <img src={nameStatic} alt="Samuel Park" className="w-full" />
                                        </video>
                                    )}
                                </div>

                                <p className="sm:text-h1 text-right font-ppSupply pointer-events-none" data-aos="fade-up" data-aos-delay="2000">
                                    Experience Designer & Visual Artist
                                </p>
                            </div>
                        </div>


                        {/* Hero Frog */}
                        <img
                            className="hero-frog w-16 h-16 absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 pointer-events-auto"
                            src={arrowDown}
                            alt="Down Arrow"
                            title="Jump to Featured Projects"
                            onClick={handleScrollToFeatured}
                        />
                    </div>


                    {/* Projects */}
                    <div id="featuredProjects" className="z-2000 mb-24">
                        <div className="w-full" data-aos="fade-right">
                            <h2 className="text-h1 font-ppSupply  p-4 mb-4 mt-0 text-ink flex items-center">Featured Projects</h2>
                        </div>
                        {/* with the limit prop (see Portfolio.jsx), we can limit the number of projects displayed */}
                        <div className="z-100 mx-8 -mb-40">
                            <Portfolio limit={3} />
                        </div>

                        {/* View All Projects CTA */}
                        <div className="flex justify-end mt-0 mr-8">
                            <a
                                href="/work"
                                className="btn-default inline-flex items-center transition-all duration-300 hover:translate-x-2"
                                aria-label="View All Projects"
                            >
                                View All Projects
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>


                </div>
                {/* More Projects Section */}
                <div className="mx-12 mb-16">
                    <div className="more-projects relative border-ink border-2 border-b-0 bg-olivewhite p-16 flex items-center gap-8 rounded-t-xl z-10"
                        style={{
                            backgroundImage: `url(${logo})`,
                            backgroundSize: "400px",
                            backgroundPosition: "right center",
                            backgroundRepeat: "no-repeat",
                        }}>
                        <img
                            className="side-frog w-24 h-24 absolute top-1/2 -translate-y-1/2 -left-8 z-10"
                            src={arrowSide}
                            alt="side arrow"
                        />
                        <a
                            href="/work"
                            className="btn-default mx-auto sm:mx-0"
                            aria-label="View More Projects"
                        >
                            More Projects!
                        </a>
                    </div>
                    {/* Contact Section */}
                    <div>
                        <Contact />
                    </div>
                </div>
            </div>
        </HelmetProvider>
    );
}


export default Home;