import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
// Components
import Contact from "../../Contact";

// Image Imports
import ssiIcon from "../../../assets/salmonsanctuary/ssi-icon.png";
import ssiLogo from "../../../assets/salmonsanctuary/ssi-logo.png";
import ssiMockup from "../../../assets/salmonsanctuary/mb-mockup-ssi.png";
import ssiStyleGuide from "../../../assets/salmonsanctuary/ssi-styleguide.png";
import ssiCompetitive from "../../../assets/salmonsanctuary/psf-screenshot.png";
import siteMap from "../../../assets/salmonsanctuary/ssi-sitemap.png";
import userFlow from "../../../assets/salmonsanctuary/ssi-userflow.png";
import logo from "../../../assets/logo-black.svg";
import arrowSide from "../../../assets/arrow-side.png";
// Style Guide Imports
import styleGuide1 from "../../../assets/salmonsanctuary/style1.png";
import styleGuide2 from "../../../assets/salmonsanctuary/style2.png";
import styleGuide3 from "../../../assets/salmonsanctuary/style3.png";
import styleGuide4 from "../../../assets/salmonsanctuary/style4.png";
import styleGuide5 from "../../../assets/salmonsanctuary/style5.png";
import styleGuide6 from "../../../assets/salmonsanctuary/style6.png";


// Wireframe Carousel
import wireframe1 from "../../../assets/salmonsanctuary/wireframe1.png";
import wireframe2 from "../../../assets/salmonsanctuary/wireframe2.png";
import wireframe3 from "../../../assets/salmonsanctuary/wireframe3.png";
import wireframe4 from "../../../assets/salmonsanctuary/wireframe4.png";
import wireframe5 from "../../../assets/salmonsanctuary/wireframe5.png";
import wireframe6 from "../../../assets/salmonsanctuary/wireframe6.png";
import wireframe7 from "../../../assets/salmonsanctuary/wireframe7.png";
import wireframe8 from "../../../assets/salmonsanctuary/wireframe8.png";
import wireframe9 from "../../../assets/salmonsanctuary/wireframe9.png";
import wireframe10 from "../../../assets/salmonsanctuary/wireframe10.png";


// Animation Imports
import { initSideFrogAnimation } from "../../animations/animations";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Update the topics array to match the correct sections
const topics = [
    { id: "research", label: "Understanding the Users" },
    { id: "design", label: "Structuring a Seamless Experience" },
    { id: "styleguide-wireframes", label: "Crafting a Cohesive Visual Identity" },
    { id: "conclusion", label: "Reflections & Next Steps" }
];

// Add this import at the top with other image imports
import mayaPatel from "../../../assets/salmonsanctuary/maya-patel.jpg";

function SalmonSanctuary() {
    const [isWireframeModalOpen, setIsWireframeModalOpen] = useState(false);
    const [isStyleGuideModalOpen, setIsStyleGuideModalOpen] = useState(false);
    const [isPersonaModalOpen, setIsPersonaModalOpen] = useState(false);


    const [currentIndex, setCurrentIndex] = useState(0);

    const wireframes = [wireframe1, wireframe2, wireframe3, wireframe4, wireframe5, wireframe6, wireframe7, wireframe8, wireframe9, wireframe10];
    const styleGuide = [styleGuide1, styleGuide2, styleGuide3, styleGuide4, styleGuide5, styleGuide6];

    const handleOpenModal = (type, index) => {
        setCurrentIndex(index);
        if (type === "wireframes") {
            setIsWireframeModalOpen(true);
        } else if (type === "styleGuide") {
            setIsStyleGuideModalOpen(true);
        }
    };

    const handleCloseModal = () => {
        setIsWireframeModalOpen(false);
        setIsStyleGuideModalOpen(false);
    };
    const handleOpenPersonaModal = () => {
        setIsPersonaModalOpen(true);
    };

    const handleClosePersonaModal = () => {
        setIsPersonaModalOpen(false);
    };
    const goToNext = (images) => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const goToPrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    // Add these state variables
    const bulletRefs = useRef({});
    const [activeSection, setActiveSection] = useState(null);
    const [openAccordions, setOpenAccordions] = useState({});

    // Add the toggle function
    const toggleAccordion = (id) => {
        setOpenAccordions(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    // Update the scroll spy effect
    useEffect(() => {
        initSideFrogAnimation();
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });

        const sections = document.querySelectorAll("section");

        const highlightSection = () => {
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                const sectionId = section.getAttribute("id");

                // Check if section is in viewport (30% from top)
                if (rect.top <= window.innerHeight * 0.3 && rect.bottom >= window.innerHeight * 0.3) {
                    setActiveSection(sectionId);
                }
            });
        };

        window.addEventListener("scroll", highlightSection);
        return () => window.removeEventListener("scroll", highlightSection);
    }, []);

    // Add bullet animation effect
    useEffect(() => {
        topics.forEach((topic) => {
            const bulletEl = bulletRefs.current[topic.id];

            if (bulletEl && activeSection === topic.id) {
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
        });
    }, [activeSection]);

    // Add scroll handler
    const handleScroll = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        const offset = 100; // Adjust this value to control how far from the top the section stops
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    };




    
    return (
        <div className="relative mt-18 px-4 sm:px-8 bg-olivewhite">
            {/* Metadata */}
            <Helmet>
                <title>Salmon Sanctuary Initiative | UX/UI Case Study</title>
                <meta
                    name="description"
                    content="Explore the Salmon Sanctuary Initiative: a UX/UI case study focused on Pacific salmon conservation, information architecture, and interactive design."
                />
                <meta
                    name="keywords"
                    content="Salmon conservation, UX/UI design, information architecture, case study, user flow, site map, user personas, wireframes"
                />
                <meta name="author" content="Samuel Park" />
                <meta property="og:title" content="Salmon Sanctuary Initiative | UX/UI Case Study" />
                <meta
                    property="og:description"
                    content="Dive into the UX/UI design process of the Salmon Sanctuary Initiative, focused on conservation efforts and user-centered design."
                />
                <meta property="og:image" content="../../../assets/salmonsanctuary/ssi-icon.png" />
                <meta property="og:url" content="https://sampark.ca/work/salmon-sanctuary" />

            </Helmet>

            {/* Header Section */}

            <div className="relative min-h-screen p-8 bg-neutral rounded-md border-2 border-ink flex flex-col justify-between mb-32">
                {/* Hero Section */}
                <div className="flex flex-col lg:flex-row items-center justify-center text-left flex-grow gap-12">
                    {/* Left Section: Logo and Mission Statement */}
                    <div className="max-w-xl">
                        {/* Logo */}
                        <div className="mb-6">
                            <img
                                src={ssiLogo}
                                alt="Salmon Sanctuary Logo"
                                className="w-full h-auto object-contain"
                            />
                        </div>

                        {/* Mission Statement */}
                        <h1 className="text-h2 font-bold font-ppSupply text-ink">
                            Turning Awareness into Action
                        </h1>
                        <p className="text-body text-ink mt-4">
                            A thoughtfully designed platform that makes conservation accessible—helping users donate, volunteer, and advocate for Pacific salmon preservation.
                        </p>
                    </div>

                    {/* Right Section: Mockup Image */}
                    <div className="w-full max-w-6xl" data-aos="fade-up">
                        <img
                            src={ssiMockup}
                            alt="Salmon Sanctuary Website Mockup"
                            className="w-full object-contain"
                        />
                    </div>
                </div>
                {/* Role, Date, and Visit Website */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8 p-8 border-t border-gray-300">
                    {/* Role and Date */}
                    <div className="flex flex-col sm:flex-row gap-8 text-ink">
                        <div>
                            <h2 className="text-md font-bold">Role</h2>
                            <p className="text-sm ">Lead UX/UI Designer<br />Information Architect<br />Brand Designer</p>
                        </div>
                        <div>
                            <h2 className="text-md font-bold ">Date</h2>
                            <p className="text-sm ">2023</p>
                        </div>
                        <div>
                            <h2 className="text-md font-bold ">Duration</h2>
                            <p className="text-sm ">47 Hours</p>
                        </div>
                        <div>
                            <h2 className="text-md font-bold  ">Tools</h2>
                            <p className="text-sm  ">
                                Figma
                                <br />
                                Adobe Illustrator
                                <br />
                                Procreate
                                <br />
                                Wordpress
                            </p>
                        </div>

                    </div>

                    {/* Visit Website */}
                    <div>
                        <a
                            href="https://salmonsanctuary.sampark.ca/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-body gap-2 px-8 py-4 bg-olivewhite text-ink font-bold font-ppSupply border border-ink rounded hover:shadow-xl hover:bg-florange transition-shadow duration-300 w-max"
                        >
                            VISIT WEBSITE <MdArrowOutward />
                        </a>
                    </div>
                </div>
            </div>
            {/* About Section */}
            <div className="container flex flex-col lg:flex-row justify-between items-center mx-auto px-4 sm:px-8 mb-32">
                {/* Logo */}
                <div className="lg:w-1/3 flex justify-center mb-8 lg:mb-0">
                    <img
                        src={ssiIcon}
                        alt="Salmon Sanctuary Logo"
                        className="rounded-lg mx-auto p-4 max-w-full h-auto"
                    />
                </div>

                {/* About */}
                <div className="lg:w-2/3 flex flex-col gap-4 text-left">
                    <h2 className="text-h2 font-bold font-ppSupply text-ink mb-4">How can design turn awareness into action?</h2>
                    <p className="text-h6 text-ink leading-relaxed">
                        Pacific salmon populations are in crisis, yet many conservation efforts fail to translate knowledge into meaningful change. Information alone isn't enough—users need clear, engaging pathways to participate.
                    </p>
                    <p className="text-h6 text-ink leading-relaxed">
                        This project explored how strategic UX/UI design can bridge the gap between education and action. The goal was to create a site that not only informs but also motivates users—making it easier to donate, volunteer, and engage with conservation efforts in a tangible way.
                    </p>
                </div>
            </div>

            {/* Divider */}
            <hr className="my-0 border-t border-gray-300" />

            {/* Add the sidebar and content wrapper */}
            <div className="flex max-w-container mx-auto md:gap-14 px-2 bg-olivewhite">
                {/* Sidebar Navigation */}
                <div className="hidden md:block md:sticky md:top-10 md:h-fit md:py-12">
                    <ul className="flex flex-col space-y-4 pl-4 pt-16">
                        {topics.map((topic) => (
                            <li key={topic.id} className="relative group flex items-center">
                                {activeSection === topic.id && (
                                    <div
                                        ref={(el) => bulletRefs.current[topic.id] = el}
                                        className="absolute -left-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-redwood border-2 border-redwood origin-center"
                                    ></div>
                                )}
                                <a
                                    href={`#${topic.id}`}
                                    onClick={(e) => handleScroll(e, topic.id)}
                                    className={`sidebar pl-2 text-gray-500 group-hover:text-redwood transition-all duration-300 text-lg relative
                                        ${activeSection === topic.id ? 'text-redwood font-bold translate-x-2' : 'hover:translate-x-1'}`}
                                >
                                    {topic.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Main Content */}
                <div className="flex-1 ">
                    <div className="relative bg-olivewhite  border-gray-500 mx-auto ">
                        <section id="research">
                            {/* UX Research Section content including personas */}
                            <div className="container mx-auto px-4 sm:px-8 mb-32 mt-24">
                                {/* UX Research Header */}
                                <h2 className="text-h1 font-ppSupply font-bold text-ink mb-12">Understanding the Users</h2>

                                {/* Target Audience and Competitive Analysis */}
                                <div className="flex flex-col lg:flex-row gap-16 mb-24">
                                    {/* Target Audience */}
                                    <div className="lg:w-2/3" data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out">
                                        <h3 className="text-h3 font-bold font-ppSupply text-ink mb-2">Problem</h3>
                                        <p className="text-body  text-ink leading-relaxed mb-16">
                                            Conservation websites often present too much information without clear calls to action, overwhelming users and reducing engagement.
                                        </p>

                                        <h3 className="text-h3 font-bold font-ppSupply text-ink mb-2">Solution</h3>
                                        <p className="text-body  text-ink leading-relaxed mb-4">
                                            I focused on making complex information digestible and actionable by defining key user groups and structuring the site to serve their specific needs.
                                        </p>
                                        <ul className="list-disc  text-ink text-body pl-6 space-y-4">
                                            <li>
                                                <span className="font-bold">Environmental Enthusiasts</span> – Need engaging content that turns awareness into action.
                                            </li>
                                            <li>
                                                <span className="font-bold">Conservation Volunteers</span> – Require clear paths to sign up for projects.
                                            </li>
                                            <li>
                                                <span className="font-bold">Educators & Students</span> – Seek well-structured research materials.
                                            </li>
                                            <li>
                                                <span className="font-bold">Conservationist Anglers</span> – Are more likely to contribute if the donation process is transparent and impactful.
                                            </li>
                                            <li>
                                                <span className="font-bold">Eco-conscious Donors</span> – More likely to contribute if the donation process is transparent, impactful, and incentivized.
                                            </li>
                                        </ul>
                                        <p className="text-body  text-ink leading-relaxed mt-6">
                                            By mapping user motivations, I designed a clear, conversion-driven experience that prioritizes seamless navigation and engagement.
                                        </p>
                                    </div>

                                    {/* Competitive Analysis */}
                                    <div className="lg:w-1/3 flex flex-col border-solid border-2 border-redwood bg-olivewhite rounded-lg p-8" data-aos="fade-left" data-aos-easing="ease-in-out">
                                        <h3 className="text-h2 font-bold font-ppSupply text-ink mb-6">Key Insights from Competitive Analysis</h3>

                                        <p className="text-h6 font-bold text-ink mb-4">Reviewing PSF.ca revealed barriers that limited engagement:</p>
                                        <ul className="list-disc pl-6 space-y-2 text-body mb-6">
                                            <li>Buried donation and volunteer options made it difficult to take action.</li>
                                            <li>Dense, text-heavy content created friction in navigation.</li>
                                            <li>No clear engagement strategies beyond static information.</li>
                                        </ul>

                                        <p className="font-bold text-h6 text-ink mb-4">How I Improved On This:</p>
                                        <ul className="list-none space-y-2 mb-6 text-body ">
                                            <li className="flex items-start gap-2">
                                                <span className="text-redwood">✔</span>
                                                <span>A streamlined user journey makes taking action effortless.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-redwood">✔</span>
                                                <span>Action-driven prompts encourage deeper participation.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-redwood">✔</span>
                                                <span>Visual storytelling conveys urgency and impact more effectively.</span>
                                            </li>
                                        </ul>

                                        <img
                                            src={ssiCompetitive}
                                            alt="Competitive Analysis"
                                            className="rounded-lg shadow-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Personas & Scenarios Section */}
                        <div
                            className="container mx-auto px-4 sm:px-8 mb-32"
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-easing="ease-in-out"
                        >
                            <h2 className="text-h3 font-ppSupply font-bold text-ink mb-2">Building for Real Users</h2>
                            <p className="text-body  text-ink leading-relaxed mb-2">
                                To ensure the platform met real user needs, I developed two key personas:
                            </p>
                            <ul className="list-disc text-body  text-ink pl-6 mb-5 space-y-2">
                                <li>
                                    <span className="font-bold">The Environmental Activist</span> – Motivated by direct action, they seek educational resources and ways to participate in conservation efforts.
                                </li>
                                <li>
                                    <span className="font-bold">The Conservationist Angler</span> – Passionate about sustainable fishing, they look for best practices, regulations, and volunteer opportunities.
                                </li>
                            </ul>
                            <p className="text-body  text-ink leading-relaxed mb-8">
                                Mapping out these user journeys helped identify pain points and refine the experience. For example, I optimized the donation process by making impact-driven messaging more prominent, added frictionless signups for volunteer opportunities, and structured content to guide users naturally from learning to action.
                            </p>
                            <div
                                className="p-8 rounded-lg border-ink border-2"
                                data-aos="fade-right"
                                data-aos-duration="500"
                                data-aos-easing="ease-in-out"
                            >
                                <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                                    <img
                                        src={mayaPatel}
                                        alt="Maya Patel"
                                        className="w-72 h-72 rounded-full border-2 border-ink object-cover"
                                    />
                                    <div>
                                        <h3 className="text-h4 font-ppSupply font-bold mb-2">Maya - The Environmental Activist</h3>
                                        <p className="text-body leading-relaxed">
                                            Maya Patel, a 27-year-old environmental activist, is deeply passionate about protecting the planet and advocating for sustainability. She often finds herself seeking ways to make a meaningful impact on environmental issues and inspire others to join her cause.
                                        </p>
                                    </div>
                                </div>

                                {/* Journey Accordion */}
                                <div className="mb-4">
                                    <button
                                        onClick={() => toggleAccordion('journey')}
                                        className="w-full flex justify-between items-center p-4  rounded-lg  bg-neutral  border-2 hover:border-redwood transition-colors"
                                    >
                                        <h4 className="text-h5 font-bold font-ppSupply text-left">Her Journey</h4>
                                        <span className={`transform transition-transform ${openAccordions['journey'] ? 'rotate-180' : ''}`}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-8 h-8"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </button>

                                    {openAccordions['journey'] && (
                                        <div className="p-4 rounded-b-lg border-t border-gray-200">
                                            <p className="text-body leading-relaxed">
                                                In her quest to support Pacific salmon conservation, Maya visits the charity's website to explore available resources and discover ways to get involved. She navigates the site with ease, finding comprehensive information on habitat restoration projects, volunteer opportunities, and advocacy campaigns focused on saving Pacific salmon. Maya also comes across engaging educational materials and interactive tools that deepen her understanding of the challenges facing salmon populations and empower her to take action.
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Result Accordion */}
                                <div className="mb-4">
                                    <button
                                        onClick={() => toggleAccordion('result')}
                                        className="w-full flex justify-between items-center p-4 bg-neutral rounded-lg border-2 hover:border-redwood transition-colors"
                                    >
                                        <h4 className="text-h5 font-bold font-ppSupply text-left">The Result</h4>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-8 h-8"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>

                                    {openAccordions['result'] && (
                                        <div className="p-4 rounded-b-lg border-t border-neutral">
                                            <p className="text-body leading-relaxed">
                                                Feeling inspired and empowered by the wealth of resources and opportunities available on the charity's website, Maya eagerly signs up to volunteer for a habitat restoration project and makes a donation to support ongoing conservation efforts. She leaves the website with a renewed sense of purpose and optimism, knowing that her contributions, along with those of other passionate individuals, will make a positive impact on the future of Pacific salmon and the health of our oceans and river systems.
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <hr className="my-16 border-t border-gray-300" />

                        <section id="design">
                            {/* Web Design Section content */}
                            <div className="container mx-auto px-4 sm:px-8 mb-32" data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out">
                                {/* Section Header */}
                                <h2 className="text-h1 font-ppSupply font-bold text-ink mb-6">Structuring a Seamless Experience</h2>
                                <h3 className="text-h4 font-ppSupply font-bold text-ink mb-4">User Flow & Site Map</h3>

                                {/* Description */}
                                <p className="text-body  text-ink leading-relaxed mb-16">
                                    A well-structured website is key to ensuring users find what they need quickly and take action effortlessly. By refining the information architecture, I eliminated friction points that could cause users to drop off before donating, volunteering, or learning more about salmon conservation.
                                </p>

                                {/* Site Map Image */}
                                <h5 className="text-h5 font-ppSupply font-bold text-ink mb-4">Site Map</h5>
                                {/* Description of Site Map */}
                                <p className="text-body  text-ink leading-relaxed mt-4 mb-8">
                                    The site map provided a clear content hierarchy, organizing key sections like Our Work, Learn, Take Action, and Donate into an intuitive structure. Instead of overwhelming users with dense information, I prioritized progressive disclosure, allowing visitors to explore content at their own pace while always keeping action-oriented pathways visible. This approach made the site more navigable, engaging, and purpose-driven.
                                </p>
                                <div className="relative group">
                                    <img
                                        src={siteMap} // Replace with the actual path to your site map image
                                        alt="Salmon Sanctuary Site Map"
                                        className="rounded-lg border-ink border-2 mx-auto mb-24"
                                    />
                                </div>



                                {/* User Flow Section */}
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mx-auto mb-48">
                                    {/* User Flow Text */}
                                    <div className="w-full lg:col-span-1 text-ink">
                                        {/* Description of User Flow */}
                                        <h5 className="text-h5 font-ppSupply font-bold text-ink mb-4">User Flow</h5>
                                        <p className="text-body text-ink leading-relaxed mb-4">
                                            Optimizing the donation process was crucial to ensuring users felt confident and motivated to contribute.
                                            The user flow diagram mapped out the journey from awareness to action, addressing common drop-off points
                                            and refining the experience to increase engagement.
                                        </p>

                                        {/* Enhancing the Donation Experience */}
                                        <div className="w-full text-left text-ink mt-4">
                                            <p className="text-body leading-relaxed">
                                                To create a more intuitive and action-driven user experience, I implemented key refinements:
                                            </p>

                                            <ul className="list-disc pl-6 mt-4 space-y-2 text-body">
                                                <li>
                                                    <strong>Streamlined the steps</strong> to reduce cognitive load and make donating frictionless.
                                                </li>
                                                <li>
                                                    <strong>Incorporated impact-based incentives</strong> (e.g., conservation-themed rewards for larger contributions) to encourage engagement.
                                                </li>
                                                <li>
                                                    <strong>Designed multiple payment options</strong> to accommodate diverse user preferences.
                                                </li>
                                            </ul>

                                            <p className="text-body leading-relaxed mt-4">
                                                These refinements ensured that every visitor could easily understand their impact and take meaningful action in conservation efforts.
                                            </p>
                                        </div>
                                    </div>
                                    {/* User Flow Image */}
                                    <div className="relative group pt-12 lg:col-span-2">

                                        <img
                                            src={userFlow}
                                            alt="Salmon Sanctuary User Flow"
                                            className="mx-auto min-w-full p-4 bg-white rounded-md border-ink border-2"
                                            data-aos="fade-left"
                                        />
                                    </div>

                                </div>


                            </div>
                        </section>
                        {/* Divider */}
                        <hr className="my-16 border-t border-gray-300" />
                        <section id="styleguide-wireframes">
                            {/* Combined Style Guide & Wireframes Section */}
                            <div className="container mx-auto px-4 sm:px-8 mb-32" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
                                <h2 className="text-h1 font-ppSupply font-bold text-ink mb-2">Crafting a Cohesive Visual Identity</h2>
                                <p className="text-body  text-ink leading-relaxed mb-8">
                                    To create a sense of trust and authenticity, I established a style guide that balanced professionalism with warmth, using a natural, conservation-inspired color palette. Typography choices were made to ensure readability across all devices, and UI elements were designed to feel approachable yet structured.
                                </p>
                                <p className="text-body  text-ink leading-relaxed mb-8">
                                    Wireframes were developed and tested to refine interactions before moving into high-fidelity designs. This iterative approach ensured that the final product was not only visually compelling but also highly functional, with a seamless flow that kept users engaged.
                                </p>


                                {/* Style Guide */}
                                <div className="mt-16">
                                    <h3 className="text-h3 font-ppSupply font-bold text-ink mb-2">Style Guide</h3>

                                    <div
                                        className="relative group cursor-pointer"
                                        onClick={() => handleOpenModal("styleGuide", 0)}
                                    >
                                        <img
                                            src={ssiStyleGuide}
                                            alt="Style Guide Cover"
                                            className="rounded-lg border-ink border-2 p-4 mx-auto bg-white"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                                        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button className="px-6 py-3 bg-florange text-ink text-lg font-bold rounded border-ink border-2 
                   hover:bg-ink hover:text-florange hover:border-florange 
                   transform transition-all duration-300 ease-out hover:scale-105">
                                                View Style Guide
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Wireframes */}
                                <div className="my-16">
                                    <h3 className="text-h3 font-ppSupply font-bold text-ink mb-6">Wireframes</h3>
                                    <div
                                        className="relative group cursor-pointer"
                                        onClick={() => handleOpenModal("wireframes", 0)}
                                    >
                                        <img
                                            src={wireframe2}
                                            alt="Wireframe Design"
                                            className="rounded-lg border-ink border-2 mx-auto"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                                        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <button className="px-6 py-3 bg-florange text-ink text-lg font-bold rounded border-ink border-2 
                   hover:bg-ink hover:text-florange hover:border-florange 
                   transform transition-all duration-300 ease-out hover:scale-105">
                                                View Wireframes
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Divider */}
                        <hr className="my-16 border-t border-gray-300" />

                        <section id="conclusion">
                            {/* Closing Thoughts Section */}
                            <div className="container mx-auto px-4 sm:px-8 pb-16 ">
                                <h2 className="text-h1 font-ppSupply font-bold text-ink mb-4">Reflections & Next Steps</h2>
                                <div className="container mx-auto px-4 pt-8 pb-16 sm:px-8  rounded-md border-2 border-ink bg-neutral">
                                    <h2 className="text-h1 font-ppSupply font-bold text-ink mb-6"></h2>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                                        {/* What I Learned */}
                                        <div className="flex flex-col gap-4">
                                            <h3 className="text-h4 font-bold font-ppSupply text-ink">What I Learned</h3>
                                            <p className="leading-relaxed">
                                                This project challenged me to think critically about how <strong>UX/UI design</strong>
                                                can drive <strong>meaningful engagement</strong> beyond aesthetics. Balancing education
                                                with <strong>seamless usability</strong> pushed me to refine my problem-solving process,
                                                ensuring that design decisions aligned with <strong>real user motivations</strong>.
                                            </p>
                                            <p className="leading-relaxed">
                                                The iterative workflow—research, testing, and refinement—reinforced
                                                the <strong>importance of adaptability</strong>, especially when working with evolving
                                                stakeholder feedback and tight constraints.
                                            </p>
                                        </div>
                                        {/* What's Next */}
                                        <div className="flex flex-col gap-4">
                                            <h3 className="text-h4 font-bold font-ppSupply text-ink">What's Next</h3>
                                            <p className="leading-relaxed">
                                                Moving forward, I plan to refine my approach to <strong>designing for conversion</strong>—
                                                finding new ways to balance <strong>user education with action-driven UX</strong>.
                                            </p>
                                            <p className="leading-relaxed">
                                                Additionally, I want to explore how <strong>gamification and interactive storytelling</strong>
                                                can further enhance engagement in non-profit and advocacy-based design.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
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
                        className="btn-default"
                    >
                        More Projects!
                    </a>
                </div>
                {/* Contact Section */}
                <div>
                    <Contact />
                </div>
            </div>
            {/* Modal Carousel */}
            {(isWireframeModalOpen || isStyleGuideModalOpen) && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
                    onClick={handleCloseModal}
                >
                    <div
                        className="relative max-w-[90%] max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-8 right-8 text-ink text-2xl hover:text-redwood transition"
                        >
                            <FaTimes />
                        </button>
                        <img
                            src={isWireframeModalOpen ? wireframes[currentIndex] : styleGuide[currentIndex]}
                            alt={`Slide ${currentIndex + 1}`}
                            className="rounded-lg mx-auto max-w-full max-h-full"
                        />
                        <button
                            onClick={() => goToPrev()}
                            disabled={currentIndex === 0}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
                        >
                            <FaChevronLeft />
                        </button>
                        <button
                            onClick={() => goToNext(isWireframeModalOpen ? wireframes : styleGuide)}
                            disabled={currentIndex === (isWireframeModalOpen ? wireframes.length : styleGuide.length) - 1}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
                        >
                            <FaChevronRight />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
// test
export default SalmonSanctuary;