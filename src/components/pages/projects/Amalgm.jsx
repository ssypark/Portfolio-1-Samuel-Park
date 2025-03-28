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

import logoBlack from "../../../assets/logo-black.svg";
import arrowSide from "../../../assets/arrow-side.png";


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const topics = [
    { id: "ideation", label: "Inspiration and Ideation" },
    { id: "crafting", label: "Crafting the Visual Identity" },
    { id: "prototyping", label: "Prototyping and Mockups" },
    { id: "reflecting", label: "Reflecting on the Project" },
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
        { src: logoSketch, alt: 'Iterating on logo concepts' },
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
                    <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="3000" className="text-center pb-12">
                        <h2 className="text-h1 font-bold font-ppSupply text-ink">
                            A Collaborative Brand Identity
                        </h2>
                        <h2 className="text-h4 font-bold font-ppSupply mt-16 text-ink">
                            How can branding celebrate individuality while maintaining cohesion?
                        </h2>
                        <p className="text-lg mt-4 text-gray-700 max-w-3xl mx-auto">
                            Amalgm was created to explore this challenge—developing a flexible yet structured brand system that balances creative expression, sustainability, and artistic collaboration. The goal was to craft an identity that feels raw yet refined, allowing artists to showcase their work while keeping the brand recognizable across digital, print, and merchandise applications.
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
                            className="inline-block px-6 py-3 bg-redwood text-offwhite text-lg rounded  hover:shadow-lg transition duration-300"
                            aria-label="View Brand Book" 
                        >
                            → VIEW BRAND BOOK
                        </a>
                    </div>
                </div>
            </div>

            <div className="container max-w-full md:max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-8 py-16 border-ink">
                {/* Left Column: Project Overview */}
                <div className="lg:col-span-1 p-8 bg-olivewhite border border-ink rounded-sm" data-aos="fade-left">
                    <h2 className="text-h2 font-bold font-ppSupply text-ink">Project Overview</h2>
                    <p className="text-body text-ink mt-4 leading-relaxed">
                        Amalgm is a conceptual branding project that merges artistic freedom with a cohesive identity. Inspired by creative collectives and eco-conscious design, it was built to be modular and adaptive, ensuring it could scale across print, digital, and product applications without losing its essence.
                    </p>
                </div>

                {/* Right Column: Challenges & Accomplishments */}
                <div className="lg:col-span-2 space-y-4 rounded-sm bg-olivewhite">
                    {/* Challenges Section */}
                    <div className="p-8">
                        <h2 className="text-h2 font-bold font-ppSupply text-ink">Challenges & Approach</h2>
                        <p className="text-h5  text-ink mt-8 leading-relaxed">
                            <strong>Balancing Structure & Expression</strong>
                        </p>
                        <p className="text-body  text-ink mt-2 leading-relaxed">
                            A key challenge was creating a visual system that adapts to individual artists’ styles while keeping Amalgm’s brand recognizable. I explored modular typography, adaptable layouts, and flexible brand assets to achieve this.
                        </p>

                        <p className="text-h5  text-ink mt-8 leading-relaxed">
                            <strong>Creating a Distinct Yet Versatile Logo</strong>
                        </p>
                        <p className="text-body  text-ink mt-2 leading-relaxed">
                            The logo needed to feel bold yet organic, reflecting Amalgm’s identity as both an artistic and sustainable brand. Through hand-drawn iterations and refined vector work, I crafted a mark that represents connection, individuality, and fluidity.
                        </p>

                        <p className="text-h5  text-ink mt-8 leading-relaxed">
                            <strong>Seamless Cross-Platform Integration</strong>
                        </p>
                        <p className="text-body  text-ink mt-2 leading-relaxed">
                            A strong brand lives beyond a logo. The system had to be scalable—working across apparel, packaging, and digital media. I tested the identity across real-world applications to ensure consistency and impact across all touchpoints.
                        </p>
                    </div>


                </div>
            </div>

            {/* Divider */}
            <hr className="my-0 border-t border-ink" />


            <div className="flex max-w-container mx-auto md:gap-14 px-8 bg-olivewhite">

                {/* Sidebar Navigation */}
                <div className="hidden md:block md:sticky md:top-10 md:h-fit md:py-12 ">
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
                                            bg-redwood 
                                            border-2 border-redwood
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
                                                group-hover:text-redwood 
                                                transition-all 
                                                duration-300 
                                                text-lg 
                                                relative
                                                ${activeSection === topic.id
                                            ? 'text-redwood font-bold translate-x-2'
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

                    <div className="relative bg-olivewhite border-l border-gray-500 mx-auto">

                        <h3 className="p-8 text-hmax font-ppSupply text-gray-900 mb-4 text-left">
                            Design Process
                        </h3>
                        {/* Inspiration and Ideation */}
                        <section id="ideation" className="min-h-screen pt-16">
                            <div className="mb-16 px-8">
                                {/* Content Wrapper */}

                                <div className="max-w-full md:max-w-screen-2xl mx-auto">
                                    {/* Text Section */}

                                    <div className="">
                                        {/* Header */}
                                        <h3 className="text-h1 font-ppSupply text-gray-900 mb-4 text-left">
                                            1. Inspiration and Ideation
                                        </h3>
                                        <p className="text-gray-800 text-body  leading-relaxed mb-8">
                                            Amalgm was conceived as a personal project to explore branding at the intersection of creativity and sustainability. During the brainstorming phase, I imagined a brand that celebrates individuality while fostering collaboration between artists and eco-conscious consumers. Concepts were sketched, and mood boards were created to envision a cohesive story and aesthetic for the brand.
                                        </p>
                                    </div>

                                    {/* Slider Section */}
                                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                                        {ideationImages.map((image, index) => (
                                            <div
                                                key={index}
                                                className="cursor-pointer flex flex-col items-center"
                                                onClick={() => openLightbox(ideationImages, index)}
                                            >
                                                <img
                                                    src={image.src}
                                                    alt={image.alt}
                                                    className="rounded-sm object-contain max-h-full mx-auto"
                                                />
                                                <p className="text-center mt-4 text-lg">{image.alt}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </section>

                        {/* Divider */}
                        <hr className="my-12 border-t border-gray-300" />

                        {/* Crafting the Visual Identity */}
                        <section id="crafting" className="">
                            <div className="mb-16 px-8">
                                {/* Content Wrapper */}
                                <div className="max-w-full md:max-w-screen-2xl mx-auto">
                                    {/* Text Section */}
                                    <div className="">
                                        {/* Header */}
                                        <h3 className="text-h1 font-ppSupply text-gray-900 mb-4 text-left">
                                            2. Crafting the Visual Identity
                                        </h3>
                                        <p className="text-gray-800 text-body leading-relaxed mb-8">
                                            The logo design was inspired by themes of connection and collaboration. Typography choices balanced boldness and elegance, reflecting the brand's vision of individuality and professionalism. The earthy yet vibrant color palette symbolized the intersection of sustainability and creative energy, resulting in a unified and distinctive visual identity.
                                        </p>
                                    </div>

                                    {/* Slider Section */}
                                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                                        {craftingImages.map((image, index) => (
                                            <div
                                                key={index}
                                                className="cursor-pointer flex flex-col items-center"
                                                onClick={() => openLightbox(craftingImages, index)}
                                            >
                                                <img
                                                    src={image.src}
                                                    alt={image.alt}
                                                    className="rounded-sm object-contain max-h-full mx-auto"
                                                />
                                                <p className="text-center mt-4 text-lg">{image.alt}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Divider */}
                        <hr className="my-12 border-t border-gray-300" />

                        <section id="prototyping" className="min-h-screen">
                            {/* Prototyping and Mockups */}
                            <div className="mb-16 px-8">
                                {/* Content Wrapper */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-screen-2xl mx-auto">
                                    {/* Text Section */}
                                    <div className="lg:col-span-2 lg:mb-0">
                                        <h3 className="text-h1 font-ppSupply text-gray-900 mb-4">3. Prototyping and Mockups</h3>
                                        <p className="text-gray-800 text-body  leading-relaxed mb-8">
                                            To bring the concept to life, I developed mockups showcasing how Amalgm's branding could translate across various applications. From product labels and apparel tags to digital advertisements, these prototypes demonstrated the flexibility and cohesiveness of the brand's visual identity.
                                        </p>
                                    </div>
                                    {/* Images */}
                                    <img
                                        src={tagMockup}
                                        alt="Product Labels and Tags"
                                        className="rounded-sm  w-full object-contain"
                                    />
                                    <img
                                        src={sketchBook}
                                        alt="Sketchbooks and Concepts"
                                        className="rounded-sm  w-full object-contain"
                                    />
                                    <img
                                        src={shirtMockup}
                                        alt="Apparel Mockup"
                                        className=" w-full object-contain"
                                    />
                                </div>
                            </div>
                        </section>
                        {/* Divider */}
                        <hr className="my-12 border-t border-gray-300" />

                        <section id="reflecting" className="min-h-screen pt-24">
                            {/* Reflecting on the Project */}
                            <div className="flex flex-col gap-4 mb-24 items-center">
                                <div className="max-w-screen-md text-center lg:text-left">
                                    <h3 className="text-h1 font-ppSupply text-gray-900 mb-4">4. Reflecting on the Project</h3>
                                    <p className="text-gray-800 text-body  leading-relaxed">
                                        Amalgm challenged me to think beyond just aesthetics—to design for flexibility, cohesion, and real-world application. This project reinforced the importance of modular brand systems, scalable identity design, and storytelling through visuals.
                                    </p>
                                </div>
                                <img
                                    src={throwie}
                                    alt="Reflection and Learnings"
                                    className="animate-wiggle w-[30%] mx-auto"
                                />
                                <p className="text-center mt-4 text-body ">Thank you for reading!</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            {/* More Projects Section */}
            <div className="mx-auto container px-8 max-w-full md:max-w-8xl">
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