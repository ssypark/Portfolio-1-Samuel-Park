import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Helmet } from "react-helmet";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "../Contact";

//Icons
import { SiAdobephotoshop, SiAdobeillustrator, SiFigma, SiTailwindcss, SiAdobeaftereffects, SiReact, SiHtml5, SiCss3 } from "react-icons/si";

// Image Imports
import flyFishing from "../../assets/flyfishing.jpeg";
import painting from "../../assets/painting.png";
import logoBlack from "../../assets/logo-black.svg";
import arrowSide from "../../assets/arrow-side.png";
import tempest from "../../assets/tempest.jpg";
import heroImage from "../../assets/portrait.jpg";
import arrowDown from "../../assets/arrow-down.png";

// Animation Imports
import {
    initSideFrogAnimation,
    initHeroFrogAnimation,
} from "../animations/animations";
import { section } from "framer-motion/client";

gsap.registerPlugin(ScrollTrigger);


function About() {

    //Icon Animation
    //useRef is null because the icons are not rendered yet. So, we need to use useEffect to get the icons.
    const iconsRef = useRef(null);

    useEffect(() => {
        // Initialize AOS animations
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });

        // TackleBox Animation
        // this animation is triggered when the user scrolls down to the section
        gsap.fromTo(
            ".tackle-box",
            { opacity: 0, x: "-100%" },
            {
                opacity: 1,
                x: 0,
                duration: 2,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".tackle-box",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "restart none none reset ",
                }
            });

        // Side Frog Animation
        // see animations.js for details
        initSideFrogAnimation();
        initHeroFrogAnimation();
    }, []);
    const handleScrollToFeatured = () => {
        const targetElement = document.getElementById("philosophy");
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
    <div>
        <div className="bg-olivewhite  relative ">
            <Helmet>
                {/* General Meta Tags */}
                <title>About Samuel Park - UX/UI Designer & Fine Artist</title>
                <meta name="description" content="Learn more about Samuel Park, a UX/UI designer with a fine arts background. Explore his philosophy, creative journey, skills, and passion for blending art with digital innovation." />
                <meta name="author" content="Samuel Park" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                {/* Open Graph Tags */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="About Samuel Park - UX/UI Designer & Fine Artist" />
                <meta property="og:description" content="Discover Samuel Park's journey from fine arts to UX/UI design. See how his artistic background shapes his user-centered, innovative designs." />
                <meta property="og:image" content="../../assets/avatar.jpg" />
                <meta property="og:url" content="https://sampark.ca/about" />
                <meta property="og:site_name" content="Samuel Park Portfolio" />
            </Helmet>

            {/* Hero Section */}
            <div className="relative w-full h-screen bg-cover bg-[right_-14rem_center] sm:bg-center flex items-center rounded-b-2xl" style={{ backgroundImage: `url(${heroImage})` }}>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-ink to-transparent opacity-90 rounded-b-3xl z-0"></div>

                <div className="relative z-0 flex flex-col lg:flex-row items-center justify-between w-full h-full md:pl-24 p-12">
                    <div className="md:w-1/2 text-left mt-20 sm:mt-16 md:mt-36 text-white">
                        <h2 className="text-5xl md:text-hmax font-ppSupply mb-4" data-aos="fade-up">
                            Hello, I'm Samuel
                        </h2>
                        <p className="text-xl md:text-h4 font-ppFraktion pt-1" data-aos="fade-up" data-aos-delay="600">
                            I’m a product designer with a fine arts background who loves mixing creativity with practicality. I believe design should solve problems and bring a smile, so I strive to create experiences that are both meaningful and a little fun.
                        </p>
                    </div>
                </div>
                {/* Hero Frog */}
                <img
                    className="hero-frog w-16 h-16 absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 pointer-events-auto invert"
                    src={arrowDown}
                    alt="Down Arrow"
                    title="Jump to Featured Projects"
                    onClick={handleScrollToFeatured}
                />
            </div>
        </div>

        <div className="bg-olivewhite pb-32 relative px-4 sm:px-8">

            {/* Philosophy */}
            <div id="philosophy" data-aos="fade-left" className="bg-olivewhite container flex justify-center items-center px-8 sm:px-12 md:px-16  sm:pt-36 sm:pb-24 mx-auto  hover:scale-105 transition-transform duration-300">
                <div className="container mx-auto">
                    <h2 className="text-h2 font-ppSupply mb-6 text-ink">How I Approach Design</h2>
                    <p className="text-body leading-relaxed mb-4 ">I often compare my design process to a day on the water: every lake has its own type of fish, much like each target audience has unique needs. When a fish bites, it confirms that my casting technique, interactive flow, and visual presentation are on point. That moment of feedback prompts me to fine-tune my approach—adjusting my lure and strategy—to craft designs that capture attention and deliver real value. By listening to every “bite,” I continuously refine my process to create engaging, user-centered experiences.</p>
                </div>
            </div>
       
            {/* Hobbies */}
            <div data-aos="fade-right" className="group container relative mx-auto px-8 sm:px-12 md:px-16 flex flex-col lg:flex-row items-center gap-8 mb-16 mt-12 justify-between bg-olivewhite py-12 rounded-lg border border-ink">
                {/* Background Image */}
                <div
                    className=" absolute inset-0 bg-no-repeat bg-cover bg-center rounded-lg opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-70"
                    style={{ backgroundImage: `url(${tempest})` }}
                ></div>

                {/* Avatar Image */}
                <div className="lg:w-1/3 flex justify-center px-4 z-10">
                    <img
                        src={painting}
                        alt="Profile Photo"
                        className="rounded-md w-72 h-72 object-cover shadow-md"
                    />
                </div>
                <div className="lg:w-2/3 text-ink z-10">
                    <h2 className="text-h2 font-ppSupply mb-2">As an Artist</h2>
                    <p className="text-body leading-relaxed  mb-8">My artistic roots are firmly planted in fine arts, where I specialized in painting and illustration and earned a BFA from UBC. Throughout that time, feedback and critiques were invaluable in shaping my creative process, teaching me to embrace both the beauty and the challenges of art. As I moved into digital design, I carried that same openness to critique, merging traditional techniques with modern digital strategies. This dual perspective lets me approach each project with creativity, precision, and a keen understanding of how to refine my work.</p>
                    <Link to="/art">
                        <button className="btn-grey">
                            View My Art!
                        </button>
                    </Link>
                </div>
            </div>

            {/* Skill Marquee */}
            <div className="container mx-auto px-6 sm:px-12 md:px-16  flex flex-col lg:flex-row items-center gap-8 mb-24 justify-between">
                <div className="w-full lg:w-1/2 text-ink">
                    <h2 className="text-h2 font-ppSupply mb-6">My Tacklebox</h2>
                    <p className="text-h5 leading-relaxed font-bold mb-4">Design tools:</p>
                    <div className="gap-6 mb-8 flex flex-row tackle-box">
                        <SiFigma className="text-8xl md:text-5xl lg:text-6xl xl:text-7xl" />
                        <SiAdobeillustrator className="text-8xl md:text-5xl lg:text-6xl xl:text-7xl" />
                        <SiAdobephotoshop className="text-8xl md:text-5xl lg:text-6xl xl:text-7xl" />
                        <SiAdobeaftereffects className="text-8xl md:text-5xl lg:text-6xl xl:text-7xl" />
                    </div>
                    <p className="text-h5 leading-relaxed font-bold mb-4">Languages:</p>
                    <div className="gap-6 mb-8 flex flex-row tackle-box">
                        <SiHtml5 className="text-8xl md:text-5xl lg:text-6xl xl:text-7xl" />
                        <SiCss3 className="text-8xl md:text-5xl lg:text-6xl xl:text-7xl" />
                        <SiReact className="text-8xl md:text-5xl lg:text-6xl xl:text-7xl" />
                        <SiTailwindcss className="text-8xl md:text-5xl lg:text-6xl xl:text-7xl" />
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center">
                    <img
                        src={flyFishing}
                        alt="Fly Fishing"
                        className="rounded-md border-ink border w-128 h-auto object-cover "
                        data-aos="fade-up"
                    />
                </div>
            </div>

            {/* More Projects Section */}
            <div className="mx-auto container">
                <div className="more-projects relative border-ink border-2 border-b-0 bg-olivewhite p-16 flex items-center gap-8 rounded-t-xl z-10"
                    style={{

                        backgroundImage: `url(${logoBlack})`,
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
                        className="btn-grey"
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
       

    
     </div>                  
    )
}

export default About;