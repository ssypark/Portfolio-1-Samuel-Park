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
import FigmaEmbed from "../FigmaEmbed";

// FlyDex Image Imports
import flyDexLogo from "../../../assets/flydex/flydex-logo.png";
import flyDexLogo2 from "../../../assets/flydex/flydex-logo-w.png";
import lesson from "../../../assets/flydex/flydex-lesson-mockup.png";
import splashMockup from "../../../assets/flydex/flydex-login-mockup.jpg";
import lessonVideo from "../../../assets/flydex//flydex-lessonvideo.png";
import justin from "../../../assets/flydex/justin.png";
import tangled from "../../../assets/flydex/tangled.jpg";
import persona from "../../../assets/flydex/persona.png";
import empathy from "../../../assets/flydex/empathymap.png";
import journey from "../../../assets/flydex/journey.png";
import coho from "../../../assets/flydex/coho.png";

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

        AOS.init();
        initSideFrogAnimation();
    })

    const [justinModalOpen, setJustinModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState("");

    // Open modal function
    const openJustinModal = (imagePath) => {
        setModalImage(imagePath);
        setJustinModalOpen(true);
    };

    // Close modal function
    const closeJustinModal = () => {
        setJustinModalOpen(false);
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
                    <p className="text-body font-workSans text-gray-300  mt-4 leading-relaxed">
                        FlyDex is a conceptual app designed to make fly fishing more accessible and enjoyable. It offers a clean, intuitive interface with features like fishing spot recommendations, fly fishing techniques, and a personal catch log.
                    </p>
                    <img src={flyDexLogo2} alt="FlyDex Logo" className="w-64 mt-12 mx-auto animate-pulse" />
                </div>

                {/* Right Section: Challenges and Accomplishments */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Challenges Section */}
                    <div className="p-8">
                        <h2 className="text-h2 font-bold font-syne text-offwhite">Challenges</h2>
                        <p className="text-body font-workSans text-gray-300  mt-4 leading-relaxed">
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
                        <p className="text-body font-workSans text-gray-300  mt-4 leading-relaxed">
                            The design process for FlyDex led to several accomplishments:
                        </p>
                        <ul className="list-disc pl-5 mt-6 space-y-3 text-gray-300 ">
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
            <div className="container mx-auto bg-redwood rounded-md shadow-md flex flex-col lg:flex-row items-center gap-12 py-16 px-4 sm:px-8" data-aos="fade-right">
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
                                onClick={() => openJustinModal(persona)}
                            >
                                Learn More About Justin
                            </button>
                            <button
                                className="px-4 py-2 bg-redwood text-offwhite font-workSans rounded shadow-md hover:bg-opacity-90 transition"
                                onClick={() => openJustinModal(empathy)}
                            >
                                Empathy Map
                            </button>
                            <button
                                className="px-4 py-2 bg-redwood text-offwhite font-workSans rounded shadow-md hover:bg-opacity-90 transition"
                                onClick={() => openJustinModal(journey)}
                            >
                                User Journey
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Solution Design Section */}
            <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 py-16 px-4 sm:px-8" data-aos="fade-left">
                <div className="lg:w-1/2 order-2 lg:order-1">
                    <img
                        src={lesson}
                        alt="Solution Design"
                        className="rounded-lg shadow-md"
                    />
                </div>
                <div className="lg:w-1/2 order-1 lg:order-2">
                    <h2 className="text-h2 font-syne font-bold text-offwhite mb-4">Designing the Solution</h2>
                    <p className="text-body font-workSans text-gray-300  leading-relaxed">
                        FlyDex provides beginner-friendly tutorials, personalized equipment suggestions, and an
                        interactive map to locate fishing spots. The design process focused on creating an intuitive
                        interface, reducing cognitive load, and maintaining a visually engaging experience.
                    </p>
                </div>
            </div>

            {/* Features and Iterations Section */}
            <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 py-16 px-4 sm:px-8" data-aos="fade-right">
                <div className="lg:w-1/2">
                    <h2 className="text-h2 font-syne font-bold text-offwhite mb-4">Features & Iterations</h2>
                    <p className="text-body font-workSans text-gray-300  leading-relaxed">
                        The iterative process behind FlyDex focused on refining features to cater to both beginner and experienced anglers. Key highlights include:
                    </p>
                    <ul className="list-disc pl-5 mt-6 space-y-3 font-workSans text-gray-300 ">
                        <li>
                            <strong>Downloadable Lessons for Offline Use:</strong> Interactive tutorials covering essential techniques, available for offline viewing to support users during outdoor fishing trips.
                        </li>
                        <li>
                            <strong>Checklist for Trip Preparation:</strong> A dynamic, customizable checklist tailored to user location, weather, and targeted fish species, ensuring every trip is fully equipped.
                        </li>
                        <li>
                            <strong>Location-Based Fishing Spot Recommendations:</strong> Enhanced with GPS functionality, user-generated reviews, and filtering options for proximity, accessibility, and species availability.
                        </li>
                        <li>
                            <strong>Personal Catch Log:</strong> A visual log allowing photo uploads, tagging, and progress tracking, with the option to share catches on social media or with the FlyDex community.
                        </li>
                    </ul>
                    <p className="text-body font-workSans text-gray-300 leading-relaxed mt-4">
                        Each iteration leveraged user feedback to create an engaging, user-friendly app that empowers anglers and simplifies the fly fishing experience.
                    </p>
                </div>
                <div className="lg:w-1/2">
                    <img
                        src={lessonVideo}
                        alt="Features & Iterations"
                        className="rounded-lg shadow-md"
                    />
                </div>
            </div>

            {/* Reflecting on the Project Section */}
            <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 py-16 px-4 sm:px-8" data-aos="fade-up">
                <div className="lg:w-1/2 order-2 lg:order-1">
                    <img
                        src={coho}
                        alt="Reflection"
                        className="rounded-lg shadow-md"
                    />
                </div>
                <div className="lg:w-1/2 order-1 lg:order-2">
                    <h2 className="text-h2 font-syne font-bold text-offwhite mb-4">Reflecting on the Project</h2>
                    <p className="text-body font-workSans text-gray-300 leading-relaxed">
                        FlyDex was an opportunity to create a meaningful, user-focused product. From concept to
                        execution, the project reinforced the importance of empathy in design and demonstrated how
                        thoughtful features can empower users to overcome challenges.
                    </p>
                </div>
            </div>

            {/* Conclusion Section */}
            <div className="container mx-auto justify-center flex flex-col items-center gap-12 py-16 px-4 sm:px-8" data-aos="fade-left">
                <h1 className="text-h1 font-syne font-bold text-offwhite mb-4">Try out Flydex</h1>
                <FigmaEmbed />
            </div>

            {/* More Projects Section */}
            <div className="container min-w-screen mx-auto px-4 sm:px-8 mb-0">
                <h2 className="text-h3 font-syne font-bold text-offwhite mb-6">View More of My Work!</h2>

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



            {justinModalOpen && (
                <div
                className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                onClick={closeJustinModal} 
            >
                    <div className="relative bg-white p-6 rounded-lg shadow-lg"
                    onClick={(e) => e.stopPropagation()}>
                        {/* Modal Image */}
                        <img
                            src={modalImage}
                            alt="Justin Modal Content"
                            className="rounded"
                            style={{
                                maxWidth: "80vw", 
                                maxHeight: "80vh", 
                                objectFit: "contain", 
                            }}
                        />
                        <button
                            className="absolute top-2 right-2 text-ink p-2 rounded-full"
                            onClick={closeJustinModal}
                        >
                            X
                        </button>
                    </div>
                </div>
            )}
        </div>

    )
}


export default FlyDex;