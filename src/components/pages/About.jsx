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
    }, []);

    return (

        <div className="bg-olivewhite pb-32 relative">
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
            {/* <div className="container min-h-screen mx-auto p-16 flex flex-col lg:flex-row md:-mt-32 sm:-mt-64 items-center gap-8 mb-12 justify-between bg-olivewhite rounded-md border border-ink">
                <div data-aos="fade-right" className="lg:w-2/3 text-ink">
                    <h1 className="text-h1 font-bold font-syne mb-6">Nice to meet you</h1>
                    <p className="text-body leading-relaxed mb-4 font-workSans">Hi, I'm Samuel. I'm a UX/UI designer with a background in fine arts, driven by a
                        passion for creating meaningful, user-centered designs.</p>
                    <p className="text-body leading-relaxed font-workSans">
                    Samuel Park is a multidisciplinary artist and digital designer based in Vancouver, BC, currently studying New Media and Web Development at BCIT. With a Bachelor of Fine Arts from UBC in painting and illustration, Samuel brings a strong creative foundation to crafting user-centered digital experiences. His artwork has been featured in exhibitions across Canada, South Korea, and Mexico, and is part of permanent collections at UBC and Kwantlen Polytechnic University. Proficient in Adobe Creative Suite and Figma, Samuel is expanding his technical skills with React and Tailwind to create intuitive designs that foster connection and innovation.
                    </p>
                </div> */}
            {/* Avatar Image */}
            {/* <div data-aos="fade-left" className="lg:w-1/3 flex justify-center mb-8 mt-8">
                    <img
                        src={avatar}
                        alt="Profile Photo"
                        className="rounded-full w-64 h-64 object-cover shadow-md"
                    />
                </div>
            </div> */}
            {/* Header Introduction */}
            {/* Hero Section */}
            <div className="relative w-full h-screen bg-cover bg-[right_-14rem_center] sm:bg-center flex items-center" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="absolute inset-0 bg-black opacity-50 "></div> {/* Overlay */}
                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full h-full p-12">
                    <div className="lg:w-1/2 text-left sm:mt-12 text-white ">
                        <h1 className="text-4xl md:text-6xl font-syne mb-4" data-aos="fade-up">Nice to meet you</h1>
                        <p className="text-body md:text-xl font-mono pt-1" data-aos="fade-up" data-aos-delay="600">Hi, I'm Samuel. I'm a digital designer with a background in fine arts, driven by a passion for creating meaningful, user-centered designs.</p>
                    </div>
                </div>
            </div>



            {/* Philosophy */}
            <div data-aos="fade-left" className="bg-olivewhite container flex justify-center items-center px-16 my-16 py-8 mx-auto rounded-lg border border-ink hover:scale-105 transition-transform duration-300">
                <div className="container mx-auto">

                    <h1 className="text-h1 font-bold font-syne mb-6 text-ink">My Philosophy</h1>
                    <p className="text-body leading-relaxed mb-4 font-workSans">I see design as a bridge between creativity and functionality. I aim to create intuitive, adaptable, and user-centered experiences that not only solve problems but also tell a story. My background in fine arts shapes my visual style, while my focus on UX ensures that designs are accessible, inclusive, and engaging.</p>
                </div>
            </div>

            {/* Hobbies */}
            <div data-aos="fade-right" className="group container relative mx-auto px-16 flex flex-col lg:flex-row items-center gap-8 mb-16 mt-12 justify-between bg-olivewhite py-8 rounded-lg border border-ink">
                {/* Background Image */}
                <div
                    className=" absolute inset-0 bg-no-repeat bg-cover bg-center rounded-lg opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-70"
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
                <div className="lg:w-2/3 text-ink z-10">
                    <h1 className="text-h1 font-bold font-syne mb-6">As an Artist</h1>
                    <p className="text-body leading-relaxed font-workSans mb-4">I started my creative journey in fine arts, specializing in painting and illustration and earned a Bachelor of Fine Arts degree at UBC. Over time, I transitioned into the digital world, bringing my artistic sensibilities into digital design. This combination of traditional and digital skills allows me to approach projects with both creativity and precision.</p>
                    <Link to ="/art">
                    <button className="text-h6 px-6 py-3 bg-olivewhite text-ink font-syne font-bold rounded border border-ink hover:bg-florange duration-300 z-20">
                        View My Art!
                    </button>
                    </Link>
                </div>
            </div>

            {/* Skill Marquee */}
            <div className="container mx-auto px-8 flex flex-col lg:flex-row items-center gap-8 mb-12 justify-between">
                <div className="w-1/2 text-ink">
                    <h1 className="text-h1 font-bold font-syne mb-6">My Tacklebox</h1>
                    <p className="text-h5 leading-relaxed font-semibold mb-4 font-mono">Design tools:</p>
                    <div className="gap-6 mb-8 flex flex-row tackle-box">
                        <SiFigma className="text-8xl md:text-5xl lg:text-6xl xl:text-7xl" />
                        <SiAdobeillustrator className="text-8xl md:text-5xl lg:text-6xl xl:text-7xl" />
                        <SiAdobephotoshop className="text-8xl md:text-5xl lg:text-6xl xl:text-7xl" />
                        <SiAdobeaftereffects className="text-8xl md:text-5xl lg:text-6xl xl:text-7xl" />
                    </div>
                    <p className="text-h5 leading-relaxed mb-4 font-semibold font-mono">Languages:</p>
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
                <div className="more-projects relative border border-ink border-b-0 bg-olivewhite p-16 flex items-center gap-8 rounded-t-xl z-10"
                    style={{

                        backgroundImage: `url(${logoBlack})`,
                        backgroundSize: "400px",
                        backgroundPosition: "right center",
                        backgroundRepeat: "no-repeat",
                    }}>
                    <img
                        className="side-frog w-24 h-24 absolute top-1/2 -translate-y-1/2 -left-8 z-10"
                        src={arrowSide}
                        alt="Frog"
                    />
                    <a
                        href="/work"
                        className="px-6 py-3 bg-olivewhite text-ink text-h6 font-syne font-bold border border-ink rounded hover:bg-florange duration-300 transition z-20"
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

    )
}

export default About;