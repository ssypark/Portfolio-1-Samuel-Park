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

// Amalgm Image Imports
import amalgmLogo from "../../../assets/amalgm/amalgm-brushed_logo.svg";
import amalgmFont from "../../../assets/amalgm/amalgm-font.svg";
import mindMap from "../../../assets/amalgm/amalgm-mind_map.png";
import moodBoard from "../../../assets/amalgm/amalgm-moodboard.png";
import logoSketch from "../../../assets/amalgm/amalgm-logosketch.png";
import logoFinal from "../../../assets/amalgm/amalgm-logofinal.png";
import colorGuide from "../../../assets/amalgm/amalgm-colors.png";
import typography from "../../../assets/amalgm/amalgm-typography.png";
import shirtMockup from "../../../assets/amalgm/tshirt-mockup.png";
import sketchBook from "../../../assets/amalgm/amalgm-sketchbooks.png";
import tagMockup from "../../../assets/amalgm/amalgm-tag_mockup.png";
import people from "../../../assets/amalgm/people.png";
import slogan from "../../../assets/amalgm/slogan.png";
import throwie from "../../../assets/amalgm/throwie.png";

import logo from "../../../assets/logo-black.svg";
import logoBlack from "../../../assets/logo-darkblack.svg";
import froggySide from "../../../assets/froggy-side.svg";

// Animation Imports
import { initSideFrogAnimation } from "../../animations/animations";
gsap.registerPlugin(ScrollTrigger);
function Amalgm() {
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
    return (
        <div className="relative mt-18 w-full bg-white">
            <Helmet>
                <title>Amalgm | Collaborative Branding</title>
                <meta
                    name="description"
                    content="Explore Amalgm: A branding case study featuring sustainable design, artistic collaboration, and individuality."
                />
                <meta name="author" content="Samuel Park" />
                <link rel="stylesheet" href="https://use.typekit.net/brb8uki.css" />
            </Helmet>


            {/* Hero Section */}
            <div className="relative min-h-screen p-8 bg-offwhite bg-paper rounded-md shadow-md flex flex-col justify-between">
                {/* Centered Logo and Header */}
                <div className="flex flex-col items-center justify-center flex-grow space-y-8">
                    {/* Logo */}
                    <div className="flex justify-center p-8">
                        <img
                            src={amalgmLogo}
                            alt="Amalgm Icon"
                            className="amalgm-logo h-96 max-w-full object-contain"
                        />
                    </div>
                    <div className="flex justify-center pb-8">
                        <img
                            src={amalgmFont}
                            alt="Amalgm Icon"
                            className="amalgm-font w-96 object-contain"
                        />
                    </div>
                    {/* Header */}
                    <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="3000" className="text-center">
                        <h1 className="text-h1 font-bold font-tomarik text-ink">
                            Collaborative Branding & Sustainability
                        </h1>
                        <p className="text-lg mt-4 text-gray-700 max-w-3xl mx-auto">
                            A deep dive into how Amalgm integrates artistic expression and environmental consciousness
                            into a seamless branding experience. This project highlights collaboration, creativity, and
                            individuality.
                        </p>
                    </div>
                </div>

                {/* Role, Date, and Project Link */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8 p-8 border-t border-gray-300">
                    {/* Role and Date */}
                    <div className="flex flex-col sm:flex-row gap-8">
                        <div>
                            <h2 className="text-sm font-bold">Role</h2>
                            <p className="text-base">Brand Designer<br />Creative Strategist</p>
                        </div>
                        <div>
                            <h2 className="text-sm font-bold">Date</h2>
                            <p className="text-base">2024</p>
                        </div>
                        <div>
                            <h2 className="text-sm font-bold">Duration</h2>
                            <p className="text-base">6 Weeks</p>
                        </div>
                    </div>
                    {/* View CTA*/}
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
            <img
                src={slogan}
                alt="Prototyping and Mockups"
                className=" w-full my-8 rounded-md object-contain"
                data-aos="fade-up"
            />
            {/* The Journey Section */}
            <div className="relative p-8 bg-gray-100 rounded-md shadow-md">
                <h2 className="text-hmax font-tomarik font-bold text-ink mb-8">The Journey</h2>

                {/* Inspiration and Ideation */}
                <div className="mb-16 flex flex-col gap-4">
                    <h3 className="text-h2 font-tomarik text-gray-900">1. Inspiration and Ideation</h3>
                    <p className="text-gray-800 text-body font-workSans leading-relaxed">
                        Amalgm was conceived as a personal project to explore branding at the intersection of creativity and sustainability. During the brainstorming phase, I imagined a brand that celebrates individuality while fostering collaboration between artists and eco-conscious consumers. Concepts were sketched, and mood boards were created to envision a cohesive story and aesthetic for the brand.
                    </p>
                    {/* Slick Slider */}
                    <div className="p-8">
                    <iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://embed.figma.com/proto/gCVW1snYrr66F7o51z2MCb/Flydex?page-id=955%3A391&node-id=961-420&node-type=frame&viewport=652%2C1156%2C0.42&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=961%3A420&embed-host=share" allowfullscreen></iframe>
                    </div>
                </div>

                {/* Divider */}
                <hr className="my-12 border-t border-gray-300" />

                {/* Crafting the Visual Identity */}
                <div className="mb-16 flex flex-col gap-4">
                    <h3 className="text-h1 font-tomarik font-bold text-gray-900">2. Crafting the Visual Identity</h3>
                    <p className="text-gray-800 text-body
                        font-workSans leading-relaxed">
                        The logo design was inspired by themes of connection and collaboration. Typography choices balanced boldness and elegance, reflecting the brand's vision of individuality and professionalism. The earthy yet vibrant color palette symbolized the intersection of sustainability and creative energy, resulting in a unified and distinctive visual identity.
                    </p>
                    {/* Slick Slider */}
                    <div className="p-8">
                        <Slider {...sliderSettings}>
                            {/* Slide 1 */}
                            <div>
                                <img
                                    src={logoFinal}
                                    alt="Sketches and Mood Boards"
                                    className="rounded-lg shadow-md mx-auto"
                                />
                                <p className="text-center mt-4 text-lg">Finalized logo</p>
                            </div>
                            {/* Slide 2 */}
                            <div>
                                <img
                                    src={typography}
                                    alt="Brand typography"
                                    className="rounded-lg shadow-md mx-auto"
                                />
                                <p className="text-center mt-4 text-lg">Brand typography</p>
                            </div>
                            {/* Slide 3 */}
                            <div>
                                <img
                                    src={colorGuide}
                                    alt="Brand Color Guide"
                                    className="rounded-lg shadow-md mx-auto"
                                />
                                <p className="text-center mt-4 text-lg">Color Guide</p>
                            </div>
                        </Slider>
                    </div>
                </div>

                {/* Divider */}
                <hr className="my-12 border-t border-gray-300" />

                {/* Prototyping and Mockups */}
                <div className="mb-16 flex flex-col gap-4">
                    <h3 className="text-h1 font-tomarik text-gray-900">3. Prototyping and Mockups</h3>
                    <p className="text-gray-800 text-body font-workSans leading-relaxed">
                        To bring the concept to life, I developed mockups showcasing how Amalgm's branding could translate across various applications. From product labels and apparel tags to digital advertisements, these prototypes demonstrated the flexibility and cohesiveness of the brand's visual identity.
                    </p>
                    <img
                        src={tagMockup}
                        alt="Prototyping and Mockups"
                        className="rounded-lg shadow-md"
                    />
                    <img
                        src={sketchBook}
                        alt="Prototyping and Mockups"
                        className="rounded-lg shadow-md"
                    />
                    <img
                        src={shirtMockup}
                        alt="Prototyping and Mockups"

                    />
                </div>

                {/* Divider */}
                <hr className="my-12 border-t border-gray-300" />

                {/* Reflecting on the Project */}
                <div className="flex flex-col gap-4 mb-24">
                    <h3 className="text-h1 font-tomarik text-gray-900">4. Reflecting on the Project</h3>
                    <p className="text-gray-800 text-body font-workSans leading-relaxed">
                        Although Amalgm is a conceptual project, it allowed me to explore the complete branding process—from ideation to execution. Through this experience, I gained valuable insights into creating a cohesive brand narrative and visual identity while enhancing my skills in storytelling, design, and mockup creation.
                    </p>
                    <img
                        src={throwie}
                        alt="Reflection and Learnings"
                        className="animate-wiggle"
                    />
                    <p className="text-center mt-4 text-body font-workSans">Thank you for reading!</p>
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

export default Amalgm;