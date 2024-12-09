import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Components
import Contact from "../../Contact";

// FlyDex Image Imports
import flyDexLogo from "../../../assets/flydex/flydex-logo.png";
import flyDexLogo2 from "../../../assets/flydex/flydex-logo-w.png";
import lesson from "../../../assets/flydex/flydex-lesson-mockup.png";
import splashMockup from "../../../assets/flydex/flydex-login-mockup.png";
import lessonVideo from "../../../assets/flydex//flydex-lessonvideo.png";
import justin from "../../../assets/flydex/justin.png";
import tangled from "../../../assets/flydex/tangled.png";

import logo from "../../../assets/logo-black.svg";
import logoBlack from "../../../assets/logo-darkblack.svg";
import froggySide from "../../../assets/froggy-side.svg";

// Animation Imports
import { initSideFrogAnimation } from "../../animations/animations";
gsap.registerPlugin(ScrollTrigger);
function FlyDex() {

    const sliderSettings = {
        dots: true, // Enable navigation dots
        infinite: true, // Infinite loop
        speed: 500, // Transition speed in ms
        slidesToShow: 1, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll
        autoplay: true, // Auto play slides
        autoplaySpeed: 3000, // Auto play interval
        adaptiveHeight: false,
        draggable: true,
        focusOnSelect: true,
        mobileFirst: true,

    };
    useEffect(() => {
        gsap.set(".amalgm-font", {
            opacity: 0,
            y: 50, // Position below
        });
        // GSAP Animation for Logo
        const logoAnimation = gsap.fromTo(
            ".amalgm-logo", // Target logo by class
            {
                scale: 0, // Start at 0 scale
                rotation: 0, // Start with no rotation
            },
            {
                scale: 1, // End at full size
                rotation: 1080, // Full spin
                duration: 2, // Animation duration
                ease: "power3.out", // Smooth easing
                onComplete: () => {
                    // Animation for font starts after logo animation completes
                    gsap.fromTo(
                        ".amalgm-font", // Target font by class
                        {
                            y: 50, // Start below
                            opacity: 0, // Start fully transparent
                        },
                        {
                            y: 0, // End at original position
                            opacity: 1, // Fully visible
                            duration: 1.5, // Animation duration
                            ease: "power3.out", // Smooth easing
                        }
                    );
                },
            }
        );
        AOS.init();
        initSideFrogAnimation();
    })

    const [isModalOpen, setModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState("");

    const openImageModal = (imagePath) => {
        setModalImage(imagePath);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setModalImage("");
    };
    return (
        <div className="bg-olive min-h-screen">
            <Helmet>
                <title>FlyDex | UX/UI Design</title>
                <meta
                    name="description"
                    content="Dive into the UX/UI design process of FlyDex, an app that makes fly fishing accessible for beginners."
                />
            </Helmet>

            {/* Hero Section */}
            <div
                className="relative min-h-screen p-8 bg-cover rounded-md shadow-md flex flex-col justify-end"
                style={{ backgroundImage: `url(${splashMockup})` }}
            >
                {/* Bottom-Left Header */}
                <div className="text-left mb-8">
                    <h1
                        className="text-h1 font-bold font-syne text-florange"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        data-aos-delay="500"
                    >
                        Simplifying <br /> Fly Fishing
                    </h1>
                </div>

                {/* Role, Date, and Project Link */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8 p-8 bg-black bg-opacity-50 rounded-md">
                    {/* Role and Date */}
                    <div className="flex flex-col sm:flex-row gap-8">
                        <div>
                            <h2 className="text-sm font-bold text-offwhite">Role</h2>
                            <p className="text-base text-offwhite">
                                UX/UI Designer
                                <br />
                                Product Strategist
                            </p>
                        </div>
                        <div>
                            <h2 className="text-sm font-bold text-offwhite">Date</h2>
                            <p className="text-base text-offwhite">2024</p>
                        </div>
                        <div>
                            <h2 className="text-sm font-bold text-offwhite">Duration</h2>
                            <p className="text-base text-offwhite">4 Weeks</p>
                        </div>
                        <div>
                            <h2 className="text-sm font-bold text-offwhite">Tools</h2>
                            <p className="text-base text-offwhite">
                                Figma
                                <br />
                                Adobe Illustrator
                            </p>
                        </div>
                    </div>

                    {/* View CTA */}
                    <div>
                        <a
                            href="https://assets.adobe.com/id/urn:aaid:sc:US:a81bada4-4b4e-418e-9620-de905fb16f5e?view=published"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-6 py-3 bg-redwood text-offwhite text-lg rounded shadow-md hover:shadow-lg transition duration-300"
                        >
                            → VIEW BRAND BOOK
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Section */}
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 py-16">
                {/* Left Section: Project Overview */}
                <div className="lg:col-span-1 p-8">
                    <h2 className="text-h2 font-bold font-syne text-offwhite">Project Overview</h2>
                    <p className="text-body font-workSans text-offwhite mt-4 leading-relaxed">
                        FlyDex is a conceptual app designed to make fly fishing more accessible and enjoyable. It offers a clean, intuitive interface with features like fishing spot recommendations, fly fishing techniques, and a personal catch log.
                    </p>
                    <img src={flyDexLogo2} alt="FlyDex Logo" className="w-64 mt-12 mx-auto animate-pulse" />
                </div>

                {/* Right Section: Challenges and Accomplishments */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Challenges Section */}
                    <div className="p-8">
                        <h2 className="text-h2 font-bold font-syne text-offwhite">Challenges</h2>
                        <p className="text-body font-workSans text-offwhite mt-4 leading-relaxed">
                            Designing FlyDex involved overcoming several key challenges:
                        </p>
                        <ul className="list-disc pl-5 mt-6 space-y-3 text-offwhite">
                            <li>
                                Simplifying complex fly fishing information into digestible, beginner-friendly formats without sacrificing depth for experienced users.
                            </li>
                            <li>
                                Creating a visual design system that reflects the serene yet adventurous nature of fly fishing.
                            </li>
                            <li>
                                Ensuring the app design encourages exploration while providing users with practical, actionable guidance.
                            </li>
                        </ul>
                    </div>

                    {/* What I Accomplished Section */}
                    <div className="p-8">
                        <h2 className="text-h2 font-bold font-syne text-offwhite">What I Accomplished</h2>
                        <p className="text-body font-workSans text-offwhite mt-4 leading-relaxed">
                            The design process for FlyDex led to several accomplishments:
                        </p>
                        <ul className="list-disc pl-5 mt-6 space-y-3 text-offwhite">
                            <li>
                                Developed a user-centered design that adapts seamlessly to different skill levels, providing an engaging experience for both beginners and seasoned anglers.
                            </li>
                            <li>
                                Designed a clean and intuitive interface with a consistent visual language that emphasizes simplicity and accessibility.
                            </li>
                            <li>
                                Prototyped features like location-based fishing spot recommendations, step-by-step technique guides, and a personal catch log.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Identifying the Problem Section */}
            <div className="container mx-auto bg-redwood flex flex-col lg:flex-row items-center gap-12 py-16 px-4 sm:px-8" data-aos="fade-right">
                <div className="lg:w-1/2">
                    <h2 className="text-h2 font-syne font-bold text-offwhite mb-4">Identifying the Problem</h2>
                    <p className="text-body font-workSans text-offwhite leading-relaxed">
                        FlyDex began with a simple observation: fly fishing is a beautiful and rewarding outdoor activity, but its steep learning curve makes it inaccessible to many beginners. Complex information, technical jargon, and scattered resources on outdated blogs and forums create frustration for newcomers. With no centralized, user-friendly platform catering specifically to beginner fly fishers, I saw an opportunity to bridge this gap.
                    </p>
                </div>
                <div className="lg:w-1/2">
                    <img
                        src={tangled}
                        alt="Identifying the Problem"
                        className="rounded-lg shadow-md"
                    />
                </div>
            </div>

            {/* Target User Section */}
            <div className="container mx-auto py-16 px-4 sm:px-8" data-aos="fade-up">
                <h2 className="text-h2 font-syne font-bold text-offwhite mb-4">Target User</h2>
                <div className="flex flex-col sm:flex-row gap-8 bg-gray-100 p-8 rounded-lg shadow-md">
                    <div className="sm:w-1/3">
                        <img
                            src={justin}
                            alt="Target User"
                            className="rounded-full shadow-md"
                        />
                    </div>
                    <div className="sm:w-2/3">
                        <h3 className="text-h3 font-syne font-bold text-ink mb-2">Meet Justin</h3>
                        <p className="text-body font-workSans text-gray-700 leading-relaxed">
                            Justin, a 34-year-old outdoor enthusiast, exemplifies the challenges faced by beginners. Eager to learn but overwhelmed by the sheer volume of information and technicalities, he needed guidance. FlyDex was conceptualized as a digital companion, simplifying his learning process with structured lessons and intuitive resources, allowing him to progress at his own pace.
                        </p>
                        {/* CTAs */}
                        <div className="mt-6 flex gap-4">
                            <button
                                className="px-4 py-2 bg-redwood text-offwhite font-workSans rounded shadow-md hover:bg-opacity-90 transition"
                                onClick={() => openImageModal('src/assets/flydex/persona.png')}
                            >
                                Learn More About Justin
                            </button>
                            <button
                                className="px-4 py-2 bg-redwood text-offwhite font-workSans rounded shadow-md hover:bg-opacity-90 transition"
                                onClick={() => openImageModal('path/to/justin-journey-image.jpg')}
                            >
                                See His Journey
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Solution Design Section */}
            <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 py-16 px-4 sm:px-8" data-aos="fade-left">
                <div className="lg:w-1/2 order-2 lg:order-1">
                    <img
                        src="https://via.placeholder.com/600x400"
                        alt="Solution Design"
                        className="rounded-lg shadow-md"
                    />
                </div>
                <div className="lg:w-1/2 order-1 lg:order-2">
                    <h2 className="text-h2 font-syne font-bold text-ink mb-4">Designing the Solution</h2>
                    <p className="text-body font-workSans text-gray-700 leading-relaxed">
                        FlyDex provides beginner-friendly tutorials, personalized equipment suggestions, and an
                        interactive map to locate fishing spots. The design process focused on creating an intuitive
                        interface, reducing cognitive load, and maintaining a visually engaging experience.
                    </p>
                </div>
            </div>

            {/* Features and Iterations Section */}
            <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 py-16 px-4 sm:px-8" data-aos="fade-right">
                <div className="lg:w-1/2">
                    <h2 className="text-h2 font-syne font-bold text-ink mb-4">Features & Iterations</h2>
                    <p className="text-body font-workSans text-gray-700 leading-relaxed">
                        Our iterative process led to standout features like a fly identification tool and a checklist
                        for trip preparation. User feedback informed every decision, ensuring that FlyDex truly
                        addressed the needs of its target audience.
                    </p>
                </div>
                <div className="lg:w-1/2">
                    <img
                        src="https://via.placeholder.com/600x400"
                        alt="Features & Iterations"
                        className="rounded-lg shadow-md"
                    />
                </div>
            </div>

            {/* Reflecting on the Project Section */}
            <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 py-16 px-4 sm:px-8" data-aos="fade-up">
                <div className="lg:w-1/2 order-2 lg:order-1">
                    <img
                        src="https://via.placeholder.com/600x400"
                        alt="Reflection"
                        className="rounded-lg shadow-md"
                    />
                </div>
                <div className="lg:w-1/2 order-1 lg:order-2">
                    <h2 className="text-h2 font-syne font-bold text-ink mb-4">Reflecting on the Project</h2>
                    <p className="text-body font-workSans text-gray-700 leading-relaxed">
                        FlyDex was an opportunity to create a meaningful, user-focused product. From concept to
                        execution, the project reinforced the importance of empathy in design and demonstrated how
                        thoughtful features can empower users to overcome challenges.
                    </p>
                </div>
            </div>


            {/* More Projects Section */}
            <div className="min-w-screen mx-auto  mb-0 bg-olive">
                <h2 className="ml-4 py-16 text-h3 font-syne font-bold text-offwhite mb-6">View More of My Work!</h2>

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
                        Go
                    </a>
                </div>

                {/* Contact Section */}
                <div className="pb-28 z-10">
                    <Contact />
                </div>
            </div>

        </div>

    )
}


export default FlyDex;