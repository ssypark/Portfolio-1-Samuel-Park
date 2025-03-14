import React from "react";
import { useEffect } from "react";
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
import name from "../../assets/myname.png";
import dot from "../../assets/dot.svg";
import Particles from "../animations/react-bits/Particles";
import { HelmetProvider } from "react-helmet-async";


gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger for GSAP

function Home() {
    // To see the animation code, refer to animations.js
    useEffect(() => {
        AOS.init({
            once: true, // This will make the animations run only once
        });

        initSideFrogAnimation();
        initHeroFrogAnimation();
        const fishAnimationCleanup = initFishAnimation();

        //Cleanup function for the fish animation
        return () => {
            fishAnimationCleanup();
        };
    }, []);

    return (
        <HelmetProvider>
            <div className="relative px-4 sm:px-8 bg-olivewhite">
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
                <div className="absolute inset-0 w-full min-h-screen z-5" >
                            <Particles
                                particleColors={['#24261B', '#24261B']}
                                particleCount={500}
                                particleSpread={10}
                                speed={0.1}
                                particleBaseSize={200}
                                moveParticlesOnHover={true}
                                alphaParticles={false}
                                disableRotation={false}
                            />
                        </div>
                {/* Main Content */}
                <div className="container py-24 md:pt-32 mx-auto">

                    {/* Hero Section */}
                    <div className="relative w-full min-h-screen -mt-16 flex items-center justify-center  text-ink">
                        <div className="flex flex-col md:flex-row items-center md:items-start text-left space-y-8 md:space-y-0 md:space-x-8 z-0 mb-12" data-aos="zoom-in">
                            {/* <img
                                className="logo w-36 sm:w-72 mr-8"
                                src={logo}
                                alt="Samuel Park Logo"
                            /> */}

                            <div className="text-left">
                                <p className="sm:text-h3 font-ppSupply max-w-2xl ">
                                    Hello, I'm
                                </p>
                                <img className="w-128 pointer-events-none z-0" src={name} alt="Samuel Park" />
                                <p className="sm:text-h1 text-right  font-ppSupply" data-aos="fade-up" data-aos-delay="800">
                                    Product Designer & Visual Artist </p>
                                {/* <p className="sm:text-h5 max-w-2xl font-workSans">
                                    I'm a UI and visual designer with a
                                    background in fine arts, blending creativity
                                    with digital innovation to create impactful designs.
                                </p> */}
                            </div>
                        </div>

                        {/* Hero Frog Bar*/}
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
                        {/* Plants */}
                        {/* <img
                        className="absolute bottom-8 left-14 w-36 z-20" // Bottom-left plant
                        src={plantSm}
                        alt="Small Plant"
                    />
                    <img
                        className="absolute bottom-8 right-14 w-36 z-20" // Bottom-right plant
                        src={plantMd}
                        alt="Medium Plant"
                    /> */}

                        {/* Hero Frog */}
                        <img
                            className="hero-frog w-16 h-16 absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10"
                            src={arrowDown}
                            alt="Down Arrow"
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
                        {/* <div className="absolute inset-0 z-0 pointer-events-none">
                            {[...Array(80)].map((_, i) => {
                                const size = Math.random() * 10 + 5; // Random size between 20 and 50
                                return (
                                    <img
                                        key={i}
                                        className="fish absolute text-ink opacity-80"
                                        data-speed={Math.random() * 1 + 0.8}
                                        style={{
                                            top: `${Math.random() * 60 + 20}%`,
                                            left: `${Math.random() * 80 + 10}%`,
                                            transform: "rotate(0deg)",
                                        }}
                                        width={size}
                                        height={size}
                                        src={dot}
                                        alt="dot" />
                                );
                            })}
                        </div> */}

                    </div>


                    {/* Projects */}
                    <div id="featuredProjects" className="z-2000">
                        <div className="w-full" data-aos="fade-right">
                            <h2 className="text-h1 font-ppSupply  p-4 mb-4 mt-0 text-ink flex items-center">Featured Projects</h2>
                        </div>
                        {/* with the limit prop (see Portfolio.jsx), we can limit the number of projects displayed */}
                        <div className="z-100">
                            <Portfolio limit={3} />
                        </div>
                    </div>
                    {/* More Projects Section */}
                    <div className="mx-auto container">
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
            </div>
        </HelmetProvider>
    );
}


export default Home;