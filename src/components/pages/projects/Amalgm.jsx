import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import AOS from "aos";
import "aos/dist/aos.css";
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css'; // Import the Lightbox CSS
import 'yet-another-react-lightbox/plugins/captions.css'; // Import the Captions plugin CSS
import '../../../css/lightbox.css'; // Import your custom CSS
import { MdArrowOutward } from "react-icons/md";
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
import slogan from "../../../assets/amalgm/slogan.png";
import throwie from "../../../assets/amalgm/throwie.png";
import hoodie from "../../../assets/amalgm/dr-hood.png";
import tote from "../../../assets/amalgm/tote-mockup.png";
import seedoflife from "../../../assets/amalgm/seedoflife.png";
import fonts from "../../../assets/amalgm/typography.png";
import colors from "../../../assets/amalgm/colors.png";
import logoGuide from "../../../assets/amalgm/logo-guide.png";
import thumbnails from "../../../assets/amalgm/thumbnails.png";
import people from "../../../assets/amalgm/people.png";
import history from "../../../assets/amalgm/history.png";

import logoBlack from "../../../assets/logo-black.svg";
import arrowSide from "../../../assets/arrow-side.png";


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const topics = [
    { id: "context", label: "Context" },
    { id: "approach", label: "Approach" },
    { id: "outcome", label: "Outcome" },
    { id: "takeaways", label: "Takeaways" },
];

function Amalgm() {

    useEffect(() => {
        AOS.init({
            duration: 500,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [lightboxImages, setLightboxImages] = useState([]);

    const ideationImages = [
        { src: mindMap, alt: 'Initial Mind Map' },
        { src: moodBoard, alt: 'Brand Mood Board' },

    ];

    const craftingImages = [
        { src: logoFinal, alt: 'Finalized Logo' },
        { src: typography, alt: 'Brand Typography' },
        { src: colorGuide, alt: 'Color Guide' },
    ];

    const openLightbox = (images, index) => {
        setLightboxImages(images);
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };


    // SIDEBAR FEATURE
    // bulletRefs is a reference to the bullet elements in addition to activeSection
    const bulletRefs = useRef({});
    const [activeSection, setActiveSection] = useState(null);
    useEffect(() => {
        const sections = document.querySelectorAll("section"); // first I needed to get all the sections which were also defined by id

        //HIGHLIGHTING ACTIVE SECTION
        const highlightSection = () => { // then I created a function to highlight the active section
            sections.forEach((section) => {
                // rect is the position of each section in the viewport used to check if the section is in the viewport
                // getBoundingClientRect() returns the size of an element and its position relative to the viewport
                const rect = section.getBoundingClientRect();
                // sectionId is set to the id of each section
                const sectionId = section.getAttribute("id");
                // here, this checks if the section is in the viewport by comparing the top and bottom of the section with the top and bottom of the viewport
                if (rect.top <= window.innerHeight * 0.3 && rect.bottom >= window.innerHeight * 0.3) {
                    setActiveSection(sectionId);
                }
            });
        };
        // then I used the useEffect hook to add and remove the scroll event listener to highlight the active section
        window.addEventListener("scroll", highlightSection);
        return () => window.removeEventListener("scroll", highlightSection);
    }, []);

    // BULLET ANIMATION (pew pew pew)
    // Now that we have the active section, we can animate the bullets to add a nice effect to the UI
    useEffect(() => {
        // Here, we loop through the topics and check if the bullet element exists
        topics.forEach((topic) => {
            // If the bullet element exists, we animate it
            const bulletEl = bulletRefs.current[topic.id];

            if (bulletEl) {
                // If the active section is the same as the topic id, we animate the bullet
                if (activeSection === topic.id) {
                    // GSAP Animation
                    gsap.fromTo(
                        bulletEl,
                        {
                            x: -20,
                            opacity: 0,
                            scale: 0.5
                        },
                        {
                            x: 0,
                            opacity: 1,
                            scale: 1.25,
                            duration: 0.6,
                            ease: "bounce.out",
                        }
                    );
                }
            }
        });
    }, [activeSection]);

    // This function handles the scroll event for when the user clicks on the topic in the sidebar
    // It takes the event and the id of the section as arguments
    const handleScroll = (e, id) => {
        // Prevent the default behavior of the link because we want to scroll to the section
        e.preventDefault();
        // GSAP Animation set to scroll to the section via the id and offsetY to 80 to offset the header for better visibility
        gsap.to(window, {
            duration: 1,
            scrollTo: { y: `#${id}`, offsetY: 80 },
            ease: "power2.out",
        });
    };

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
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
        gsap.fromTo(
            ".amalgm-logo",
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
    }, []);

    return (
        <div className="relative mt-18 w-full pb-16 bg-olivewhite">
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
            <div className="relative min-h-screen p-8 bg-olivewhite md:p-16 flex flex-col justify-between">
                {/* Centered Logo and Header */}
                <div className="flex flex-col items-center justify-center flex-grow space-y-8">
                    {/* Logo */}
                    <div className="flex justify-center p-8 mt-8">
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
                    <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="3000" className="text-center pb-12">
                        <h2 className="text-h1 font-bold font-ppSupply text-ink">
                            A Collaborative Brand Identity
                        </h2>
                        <h2 className="text-h4 font-bold font-ppSupply mt-16 text-ink">
                            How can branding celebrate individuality while maintaining cohesion?
                        </h2>
                        <p className="text-lg mt-4 text-gray-700 max-w-3xl mx-auto">
                            Amalgm answers this by marrying structure and creative freedom in a modular system—empowering artists to express their unique voices while keeping the overall identity instantly recognizable across every touchpoint.
                        </p>
                    </div>
                </div>

                {/* Role, Date, and Project Link */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8 p-8 border-t border-gray-300">
                    {/* Role and Date */}
                    <div className="flex flex-col sm:flex-row gap-8 text-ink">
                        <div>
                            <h2 className="text-body  font-bold">Role</h2>
                            <p className="text-base">Brand Designer<br />Creative Strategist</p>
                        </div>
                        <div>
                            <h2 className="text-body  font-bold">Date</h2>
                            <p className="text-base">2024</p>
                        </div>
                        <div>
                            <h2 className="text-body  font-bold">Duration</h2>
                            <p className="text-base">44 Hours</p>
                        </div>
                        <div>
                            <h2 className="text-body  font-bold">Tools</h2>
                            <p className="text-base">
                                Adobe Photoshop
                                <br />
                                Adobe Illustrator
                                <br />
                                Adobe InDesign
                                <br />
                                Procreate
                            </p>
                        </div>
                    </div>

                    {/* View CTA*/}
                    <div>
                        <a
                            href="https://assets.adobe.com/id/urn:aaid:sc:US:a81bada4-4b4e-418e-9620-de905fb16f5e?view=published"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-6 py-3 bg-redOrange text-offwhite text-lg rounded  hover:shadow-lg transition duration-300"
                            aria-label="View Brand Book"
                        >
                            → VIEW BRAND BOOK
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <img src={history} alt="brand history" className="items-center w-full border-b border-ink" />
            </div>
            <div className="flex container mx-auto gap-14 px-8 bg-olivewhite">

                {/* Sidebar Navigation */}
                <div className="hidden md:block md:sticky md:top-10 md:h-fit md:py-12 pl-8">
                    <ul className="flex flex-col space-y-4 pl-4 pt-16">
                        {topics.map((topic) => (
                            <li key={topic.id} className="relative group flex items-center">
                                {/* Sliding Bullet Point */}
                                {activeSection === topic.id && (
                                    <div
                                        ref={(el) => bulletRefs.current[topic.id] = el}
                                        className="
                                            absolute -left-2 top-1/2 -translate-y-1/2 
                                            w-2 h-2 rounded-full 
                                            bg-redOrange
                                            border-2 border-redOrange
                                            origin-center
                                        "
                                    ></div>
                                )}

                                <a
                                    href={`#${topic.id}`}
                                    onClick={(e) => handleScroll(e, topic.id)}
                                    className={`
                                                sidebar 
                                                pl-2 
                                                text-gray-500 
                                                group-hover:text-redOrange 
                                                transition-all 
                                                duration-300 
                                                text-lg 
                                                relative
                                                ${activeSection === topic.id
                                            ? 'text-redOrange font-bold translate-x-2'
                                            : 'hover:translate-x-1'
                                        }
                                    `}
                                >
                                    {topic.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Main Content */}
                <div className="flex-1 space-y-20">

                    {/* Context Section */}
                    <section id="context" className="mb-16">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-16 border-ink">

                            {/* Left Column: Project Overview */}
                            <div
                                className="lg:col-span-1 p-8 bg-olivewhite border border-ink rounded-md"
                                data-aos="fade-right"
                            >
                                <h2 className="text-h2 font-bold font-ppSupply text-ink">
                                    Project Overview
                                </h2>
                                <p className="text-body text-ink mt-4 leading-relaxed">
                                    Amalgm is a conceptual brand system designed to honor individual artistry
                                    while preserving a unified identity. Drawing inspiration from collaborative
                                    art studios and sustainable design movements, I built a modular toolkit—
                                    from typography to color blocks to “art‑tags”—so the brand can flex across
                                    posters, websites, apparel, and product packaging without ever feeling
                                    out of sync.
                                </p>
                            </div>

                            {/* Right Column: Challenges & Approach */}
                            <div className="lg:col-span-2 bg-olivewhite rounded-md border border-ink" data-aos="fade-left">
                                <div className="p-8 space-y-8">
                                    <h2 className="text-h2 font-bold font-ppSupply text-ink">
                                        Challenges & Approach
                                    </h2>

                                    {/* 1. Balancing Structure & Expression */}
                                    <div>
                                        <h3 className="text-h5 font-bold text-ink">
                                            1. Balancing Structure & Expression
                                        </h3>
                                        <p className="text-body text-ink mt-2 leading-relaxed">
                                            <strong>Problem:</strong> Artists need room to experiment; brands need consistency.<br />
                                            <strong>Solution:</strong> I defined a clear grid and core asset library (logo, type scale, color hierarchy), then layered in “free zones” where creatives could inject their own textures, patterns, or imagery—ensuring every variation still felt unmistakably Amalgm.
                                        </p>
                                    </div>

                                    {/* 2. Crafting a Distinct, Organic Logo */}
                                    <div>
                                        <h3 className="text-h5 font-bold text-ink">
                                            2. Crafting the Logo: From Sacred Geometry to Signature Mark
                                        </h3>
                                        <p className="text-body text-ink mt-2 leading-relaxed">
                                            <strong>Problem:</strong> We needed a logo that felt handcrafted and organic without sacrificing clarity or memorability.<br />
                                            <strong>Solution:</strong> Starting with the Seed of Life pattern—a timeless symbol of unity—I sketched over 20 iterations, exploring interlocking forms and a stylized “a.” Through vector refinement, I distilled these explorations into a clean, geometric mark whose curves evoke natural growth. This emblem works solo or pairs seamlessly with customizable “art‑tags,” marrying individuality with brand cohesion.
                                        </p>
                                    </div>

                                    {/* 3. Ensuring Cross-Platform Cohesion */}
                                    <div>
                                        <h3 className="text-h5 font-bold text-ink">
                                            3. Ensuring Cross‑Platform Cohesion
                                        </h3>
                                        <p className="text-body text-ink mt-2 leading-relaxed">
                                            <strong>Problem:</strong> What works on a screen often fails in print or on fabric.<br />
                                            <strong>Solution:</strong> I prototyped the identity on real‑world mockups—apparel tags, tote bags, digital banners—iterating until colors, scales, and layouts felt harmonious in every medium. This stress‑testing guaranteed that Amalgm’s core essence survives every application.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>

                    <div className="relative bg-olivewhite  border-gray-500 mx-auto">
                        <h3 className="p-8 text-hmax font-ppSupply text-gray-900 text-left">
                            Approach
                        </h3>

                        {/* The rest of your content sections (ideation, crafting, etc.) */}
                        {/* Inspiration and Ideation */}
                        <section id="approach" className="min-h-screen">
                            <div className="mb-16 px-8">
                                {/* Content Wrapper */}
                                <div className="max-w-full md:max-w-screen-2xl mx-auto">
                                    {/* Text Section */}
                                    <div className="">
                                        {/* Header */}
                                        <h3 className="text-h1 font-ppSupply text-gray-900 mb-4 text-left">
                                            Inspiration and Ideation
                                        </h3>
                                        <p className="text-gray-800 text-body leading-relaxed mb-8">
                                            Amalgm was conceived as a personal project to explore branding at the intersection of creativity and sustainability. During the brainstorming phase, I imagined a brand that celebrates individuality while fostering collaboration between artists and eco-conscious consumers. Concepts were sketched, and mood boards were created to envision a cohesive story and aesthetic for the brand.
                                        </p>
                                    </div>

                                    {/* Stacked Images instead of grid */}
                                    <div className="space-y-12 mt-16">
                                        {ideationImages.map((image, index) => (
                                            <div
                                                key={index}
                                                className="cursor-pointer w-full"
                                                onClick={() => openLightbox(ideationImages, index)}
                                            >
                                                <img
                                                    src={image.src}
                                                    alt={image.alt}
                                                    className="rounded-sm w-full object-contain border border-ink"
                                                    data-aos="fade-up"
                                                    data-aos-duration="500"
                                                    data-aos-easing="ease-in-out"
                                                />
                                                <p className="text-left mt-4 text-lg font-medium">{image.alt}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <h3 className="text-h1 font-ppSupply text-gray-900 mb-4 text-left mt-12">
                                        Logo Design Process
                                    </h3>
                                    <p className="text-gray-800 text-body leading-relaxed mb-8">
                                        Inspired by collaboration, nature, and sacred geometry, the Amalgm logo evolved through iterative exploration and refinement. I began with the Seed of Life pattern—a universal symbol found in art, biology, and architecture—to embody unity and creative synergy. From there, I sketched multiple arrangements, testing both the recycling‑inspired interlock and a stylized “a” form. Through vector refinement, I distilled these explorations into a clean, geometric mark that feels both organic and structured—perfectly reflecting Amalgm’s balance of individual expression and cohesive identity.
                                    </p>

                                    {/* Seed of Life Inspiration Section */}
                                    <div className="space-y-12 mt-16">
                                        <div className="w-full">
                                            <div className="w-full my-12">
                                                <img
                                                    src={seedoflife}
                                                    alt="Seed of Life Pattern"
                                                    className="rounded-sm w-full object-contain border border-ink"
                                                    data-aos="fade-up"
                                                    data-aos-duration="500"
                                                    data-aos-easing="ease-in-out"
                                                />
                                                <p className="text-left mt-2 text-base">
                                                    Seed of Life Pattern - Source: <a
                                                        href="https://en.wikipedia.org/wiki/Overlapping_circles_grid#Modern_usage"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-redOrange hover:underline"
                                                    >
                                                        Wikipedia
                                                    </a>
                                                </p>
                                            </div>
                                            <div className="w-full mt-12">
                                                <img
                                                    src={thumbnails}
                                                    alt="Logo Sketches and Iterations"
                                                    className="rounded-sm w-full object-contain border border-ink"
                                                    data-aos="fade-up"
                                                    data-aos-duration="500"
                                                    data-aos-easing="ease-in-out"
                                                />
                                                <p className="text-left mt-2 text-lg font-medium">Logo Sketches and Iterations</p>
                                            </div>
                                            <div className="w-full mt-12">
                                                <img
                                                    src={logoGuide}
                                                    alt="Logo Sketches and Iterations"
                                                    className="rounded-sm w-full object-contain border border-ink"
                                                    data-aos="fade-up"
                                                    data-aos-duration="500"
                                                    data-aos-easing="ease-in-out"
                                                />
                                                <p className="text-left mt-2 text-lg font-medium">Logo Guidelines</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Divider */}
                        <hr className="my-12 border-t border-gray-300" />

                        {/* Crafting the Visual Identity */}
                        <section id="outcome" className="">
                            <h3 className="p-8 text-hmax font-ppSupply text-gray-900 text-left">
                                Outcome
                            </h3>
                            <div className="mb-16 px-8">
                                {/* Content Wrapper */}
                                <div className="max-w-full md:max-w-screen-2xl mx-auto">
                                    {/* Text Section */}
                                    <div className="">
                                        {/* Header */}
                                        <h3 className="text-h1 font-ppSupply text-gray-900 text-left">
                                            Crafting the Visual Identity
                                        </h3>
                                    </div>

                                    {/* Logo Section */}
                                    <div className="flex flex-col xl:grid xl:grid-cols-2 gap-8 mt-16 items-start">
                                        <div className="order-1">
                                            <h3 className="text-h3 font-ppSupply text-gray-900 mb-4 text-left">
                                                Logo: Connection & Collaboration
                                            </h3>

                                            <p className="text-gray-800 text-body leading-relaxed mb-8">
                                                The finalized mark distills the Seed of Life's interlocking geometry into a bold, organic emblem. Each loop represents an artist's unique voice, yet all lock together in a single, cohesive form—symbolizing Amalgm's ethos of individual expression within a unified community. This flexible logo stands alone or pairs with custom "art‑tags," ensuring brand recognition across every touchpoint.
                                            </p>
                                        </div>
                                        <div className="order-2 cursor-pointer" onClick={() => openLightbox([{ src: logoFinal, alt: 'Finalized Logo' }], 0)}>
                                            <img
                                                src={logoFinal}
                                                alt="Finalized Logo"
                                                className="rounded-sm w-full object-contain border border-ink"
                                                data-aos="fade-left"
                                                data-aos-duration="1000"
                                                data-aos-easing="ease-in-out"
                                            />
                                        </div>
                                    </div>

                                    {/* Typography Section */}
                                    <div className="flex flex-col xl:grid xl:grid-cols-2 gap-8 mt-16 items-start">
                                        <div className="order-1">
                                            <h3 className="text-h3 font-ppSupply text-gray-900 mb-4 text-left">
                                                Typography: Expressive Meets Practical
                                            </h3>

                                            <p className="text-gray-800 text-body leading-relaxed mb-4">
                                                <strong>Tomarik Brush (Header):</strong> This hand‑drawn brush font sets the tone for Amalgm's creative spirit. Its bold, textured strokes capture the energy of artistic expression and immediately signal the brand's playful, handcrafted nature.
                                            </p>
                                            <p className="text-gray-800 text-body leading-relaxed mb-4">
                                                <strong>LFT Etica (Subheader & Body):</strong> Serving as the workhorse of our system, LFT Etica provides clean, modern counterpoint to the expressive header. Its crisp lines and open letterforms ensure optimal readability for subheaders and body text, guiding users through content with clarity and confidence.
                                            </p>
                                            <p className="text-gray-800 text-body leading-relaxed mb-8">
                                                By pairing Tomarik Brush's personality with LFT Etica's precision, we strike a balance between artistry and professionalism—supporting both eye‑catching headlines and long‑form communication.
                                            </p>
                                        </div>
                                        <div className="order-2 cursor-pointer" onClick={() => openLightbox([{ src: fonts, alt: 'Brand Typography' }], 0)}>
                                            <img
                                                src={fonts}
                                                alt="Brand Typography"
                                                className="rounded-sm w-full object-contain "
                                                data-aos="fade-left"
                                                data-aos-duration="1000"
                                                data-aos-easing="ease-in-out"
                                            />
                                        </div>
                                    </div>

                                    {/* Color Section */}
                                    <div className="flex flex-col mt-16 items-center">
                                        <div className="w-full">
                                            <h3 className="text-h3 font-ppSupply text-gray-900 mb-4 text-left">
                                                Color: Minimalist Canvas & Creative Sparks
                                            </h3>

                                            <p className="text-gray-800 text-body leading-relaxed mb-4">
                                                <strong>Primary Palette (Black, White, Greys):</strong> A spectrum of neutrals forms our minimalist canvas. These subtle shades create a versatile backdrop that lets each artist's work shine, whether in print, digital, or product form. The restrained palette also reinforces a sense of sophistication and timelessness.
                                            </p>
                                            <p className="text-gray-800 text-body leading-relaxed mb-4">
                                                <strong>Secondary Accents (Electric Hues):</strong> Bursts of vibrant color act as creative jolts—reflecting the bold, innovative spirit of our collaborators. These accents draw attention to key elements (CTAs, highlights, interactive components) and invite users to personalize their experience, adding their own flair to the Amalgm canvas.
                                            </p>
                                            <p className="text-gray-800 text-body leading-relaxed mb-8">
                                                This three‑tiered color hierarchy ensures the brand remains grounded and approachable, while accent hues energize and guide the eye to what matters most.
                                            </p>
                                        </div>
                                        <div className="w-full flex justify-center cursor-pointer" onClick={() => openLightbox([{ src: colors, alt: 'Color Guide' }], 0)}>
                                            <img
                                                src={colors}
                                                alt="Color Guide"
                                                className="rounded-sm w-full object-contain border-b border-ink"
                                                data-aos="fade-up"
                                            />
                                        </div>
                                    </div>

                                    {/* Conclusion */}
                                    <div className="mt-16 pb-8 pt-8">
                                        <p className="text-gray-800 text-body leading-relaxed">
                                            By treating logo, type, and color as distinct yet interlocking systems, Amalgm's visual identity delivers both consistency and creative freedom—perfectly aligning with the project's goal of celebrating individual artistry within a unified brand.
                                        </p>

                                    </div>
                                    <div data-aos="fade-left"
                                        data-aos-easing="ease-in-out"
                                        data-aos-offset="500"
                                        data-aos-duration="500">
                                        <img src={people} alt="Hand Drawn People" />
                                    </div>
                                </div>
                            </div>

                            {/* Prototyping and Mockups section continues here... */}
                        </section>



                        <section id="takeaways" className="">
                            <h3 className="p-8 text-hmax font-ppSupply text-gray-900 text-left">
                                Takeaways
                            </h3>
                            <div className="mb-16 px-8">
                                {/* Content Wrapper */}
                                <div className="max-w-full md:max-w-screen-2xl mx-auto">
                                    {/* Text Section */}
                                    <div className="">
                                        {/* Header */}
                                        <h3 className="text-h1 font-ppSupply text-gray-900 mb-4 text-left">
                                            Reflecting on the Project
                                        </h3>
                                        <p className="text-gray-800 text-body leading-relaxed mb-8">
                                            Amalgm challenged me to think beyond just aesthetics—to design for flexibility, cohesion, and real-world application. This project reinforced the importance of modular brand systems, scalable identity design, and storytelling through visuals.
                                        </p>
                                        <div className="space-y-6">
                                            <div>
                                                <h4 className="text-h4 font-bold font-ppSupply text-ink mb-2">
                                                    Design for Modularity
                                                </h4>
                                                <p className="text-gray-800 text-body leading-relaxed">
                                                    Building in "free zones" alongside core rules ensures your brand can evolve without losing its essence—critical when working with diverse contributors or changing campaigns.
                                                </p>
                                            </div>

                                            <div>
                                                <h4 className="text-h4 font-bold font-ppSupply text-ink mb-2">
                                                    Scale Through Testing
                                                </h4>
                                                <p className="text-gray-800 text-body leading-relaxed">
                                                    Real‑world mockups (from tote bags to digital banners) are non‑negotiable. Stress‑testing across media uncovers issues early and guarantees your system holds up in every context.
                                                </p>
                                            </div>

                                            <div>
                                                <h4 className="text-h4 font-bold font-ppSupply text-ink mb-2">
                                                    Storytelling by Design
                                                </h4>
                                                <p className="text-gray-800 text-body leading-relaxed">
                                                    A brand isn't just a logo—it's a narrative. Craft visual elements (typography, color, art‑tags) that communicate your values at a glance, guiding audiences through both emotion and information.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center  gap-4 mt-12">
                                            <img
                                                src={throwie}
                                                alt="Reflection and Learnings"
                                                className="animate-wiggle w-[30%]"
                                            />
                                        </div>
                                        {/* CTA */}
                                        {/* Invitation Caption */}
                                        <p className="text-body text-ink text-center mb-8 mt-12">
                                            <strong>Want the complete toolkit?</strong> Explore all assets, usage guidelines, and templates in the brand book.
                                        </p>

                                        <div className="text-center">
                                            <a
                                                href="/path-to-brand-book.pdf"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-default"
                                            >
                                                View Full Brand Book
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            {/* More Projects Section */}
            <div className="mx-auto mt-24 container px-8 max-w-full md:max-w-8xl">
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
                        className="btn-default"
                        aria-label="View more projects"
                    >
                        More Projects!
                    </a>
                </div>
                {/* Contact Section */}
                <div>
                    <Contact />
                </div>
            </div>

            {lightboxOpen && (
                <Lightbox
                    slides={lightboxImages}
                    open={lightboxOpen}
                    index={currentImageIndex}
                    close={() => setLightboxOpen(false)}
                />
            )}

        </div>
    );
}

export default Amalgm;