import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Helmet } from "react-helmet";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "../Contact";

//Icons
import { SiAdobephotoshop, SiAdobeillustrator, SiFigma, SiTailwindcss, SiAdobeaftereffects, SiReact, SiHtml5, SiCss3 } from "react-icons/si";

// Image Imports
import avatar from "../../assets/avatar.jpg";
import flyFishing from "../../assets/flyfishing.jpeg";
import painting from "../../assets/painting.png";
import logoBlack from "../../assets/logo-darkblack.svg";
import froggySide from "../../assets/froggy-side.svg";
import tempest from "../../assets/tempest.jpg";

// Animation Imports
import {
    initSideFrogAnimation,
} from "../animations/animations";
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
    }, []);

    return (

        <div className="bg-olive pt-48 pb-32 px-4 sm:px-8 relative">
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
            {/* Header Introduction */}
            <div className="container min-h-screen mx-auto p-16 flex flex-col lg:flex-row md:-mt-32 sm:-mt-64 items-center gap-8 mb-12 justify-between bg-redwood bg-paper rounded-md shadow-md">
                <div data-aos="fade-right" className="lg:w-2/3 text-offwhite">
                    <h1 className="text-h1 font-bold font-syne mb-6">Nice to meet you</h1>
                    <p className="text-body leading-relaxed mb-4 font-workSans">Hi, I'm Samuel. I'm a UX/UI designer with a background in fine arts, driven by a
                        passion for creating meaningful, user-centered designs.</p>
                    <p className="text-body leading-relaxed font-workSans">
                        My work blends creativity with digital innovation, aiming to deliver designs that
                        are not just visually compelling but also intuitive and impactful. I believe in
                        making the digital world accessible and engaging for everyone.
                    </p>
                </div>
                {/* Avatar Image */}
                <div data-aos="fade-left" className="lg:w-1/3 flex justify-center mb-8 mt-8">
                    <img
                        src={avatar}
                        alt="Profile Photo"
                        className="rounded-full w-64 h-64 object-cover shadow-md"
                    />
                </div>
            </div>

            {/* Philosophy */}
            <div data-aos="fade-left" className="bg-sage container flex justify-center items-center px-16 py-8 mx-auto rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
                <div className="container mx-auto">

                    <h1 className="text-h1 font-bold font-syne mb-6 text-ink">My Philosophy</h1>
                    <p className="text-body leading-relaxed mb-4 font-workSans">I see design as a bridge between creativity and functionality. I aim to create intuitive, adaptable, and user-centered experiences that not only solve problems but also tell a story. My background in fine arts shapes my visual style, while my focus on UX ensures that designs are accessible, inclusive, and engaging.</p>
                </div>
            </div>

            {/* Hobbies */}
            <div data-aos="fade-right" className="group container relative mx-auto px-16 flex flex-col lg:flex-row items-center gap-8 mb-12 mt-12 justify-between bg-ink py-8 rounded-lg shadow-md">
                {/* Background Image */}
                <div
                    className=" absolute inset-0 bg-no-repeat bg-cover bg-center rounded-lg opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-50"
                    style={{ backgroundImage: `url(${tempest})` }}
                ></div>

                {/* Avatar Image */}
                <div className="lg:w-1/3 flex justify-center z-10">
                    <img
                        src={painting}
                        alt="Profile Photo"
                        className="rounded-md w-72 h-72 object-cover shadow-md"
                    />
                </div>
                <div className="lg:w-2/3 text-offwhite z-10">
                    <h1 className="text-h1 font-bold font-syne mb-6">As an Artist</h1>
                    <p className="text-body leading-relaxed mb-4 font-workSans mb-6">I started my creative journey in fine arts, specializing in painting and illustration and earned a Bachelor of Fine Arts degree at UBC. Over time, I transitioned into the digital world, bringing my artistic sensibilities into digital design. This combination of traditional and digital skills allows me to approach projects with both creativity and precision.</p>
                    <button className="text-h6 px-6 py-3 bg-redwood text-offwhite font-syne font-bold rounded hover:bg-florange hover:scale-105 transition-transform duration-300 z-20">
                        View My Art!
                    </button>
                </div>
            </div>

            {/* Skill Marquee */}
            <div className="container mx-auto px-8 flex flex-col lg:flex-row items-center gap-8 mb-12 justify-between">
                <div className="w-1/2 text-offwhite">
                    <h1 className="text-h1 font-bold font-syne mb-6">My Tacklebox</h1>
                    <p className="text-h5 leading-relaxed font-semibold mb-4 font-workSans">Design tools:</p>
                    <div className="gap-6 mb-8 flex flex-row tackle-box">
                        <SiFigma className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl" />
                        <SiAdobeillustrator className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl" />
                        <SiAdobephotoshop className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl" />
                        <SiAdobeaftereffects className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl" />
                    </div>
                    <p className="text-h5 leading-relaxed mb-4 font-semibold font-workSans">Languages:</p>
                    <div className="gap-6 mb-8 flex flex-row tackle-box">
                        <SiHtml5 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl" />
                        <SiCss3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl" />
                        <SiReact className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl" />
                        <SiTailwindcss className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl" />
                    </div>
                </div>
                <div className="w-1/2 flex justify-center">
                    <img
                        src={flyFishing}
                        alt="Fly Fishing"
                        className="rounded-md w-128 h-auto object-cover shadow-md"
                        data-aos="fade-up"
                    />
                </div>
            </div>

            {/* More Projects Section */}
            <div className="mx-auto container">
                <div className="more-projects relative bg-ink py-16 px-16 flex items-center gap-8 rounded-t-xl z-50"
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
                    <button className="text-h6 px-6 py-3 bg-redwood text-offwhite font-syne font-bold rounded hover:bg-opacity-90 transition z-20">
                        View My Work
                    </button>
                </div>

                {/* Contact Section */}
                <div>
                    <Contact />
                </div>
            </div>
        </div>

    )
}

export default About;