import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import AOS from "aos";
import "aos/dist/aos.css";

// Components
import Contact from "../../Contact";

// PackRat Image Imports - Using placeholder images
import packratHero from "../../../assets/packrat/packrat-mockup.png";
import packratMb from "../../../assets/packrat/packrat-mockup.png";
import packratUi from "../../../assets/packrat/packrat-ui.png";
import packratDesign from "../../../assets/packrat/botw.jpg";
import packratArchitecture from "../../../assets/packrat/app-architecture.png";
import packratAuth from "../../../assets/packrat/auth-flow.png";

// Logo Imports
import logoBlack from "../../../assets/logo-black.svg";
import arrowSide from "../../../assets/arrow-side.png";
import { MdArrowOutward } from "react-icons/md";
import BallpitBackground from "../../animations/react-bits/Ballpit";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Define navigation topics
const topics = [
    { id: "context", label: "Context" },
    { id: "approach", label: "Approach" },
    { id: "deliverables", label: "Deliverables" },
    { id: "takeaways", label: "Takeaways" }
];

function PackRat() {
    const bulletRefs = useRef({});
    const [activeSection, setActiveSection] = useState('context');
    const [modalOpen, setModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState("");

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    // Set up scroll tracking
    useEffect(() => {
        const sections = topics.map(topic => document.getElementById(topic.id));

        sections.forEach(section => {
            if (!section) return;

            ScrollTrigger.create({
                trigger: section,
                start: "top center",
                end: "bottom center",
                onEnter: () => setActiveSection(section.id),
                onEnterBack: () => setActiveSection(section.id),
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    // Bullet animation effect
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

    // Scroll handler
    const handleScroll = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    };

    // Modal functions
    const openModal = (imagePath) => {
        setModalImage(imagePath);
        setModalOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setModalOpen(false);
        document.body.style.overflow = "auto";
    };

    return (
        <div className="bg-olivewhite pb-24 min-h-screen">
            <Helmet>
                <title>PackRat - A Visual Inventory App | Samuel Park</title>
                <meta name="description" content="PackRat is a visual inventory application designed for hobbyists to track their gear and supplies across multiple interests." />
            </Helmet>

            {/* Wrapper div with shared background */}
            <div className="relative">
                {/* Ballpit Background - Now wrapping both sections */}
                <BallpitBackground
                    className="absolute inset-0 z-0"
                    count={90}
                    gravity={1.5}
                    friction={0.8}
                    wallBounce={0.95}
                    followCursor={true}
                    colors={['#805AD5', '#4FD1C5', '#F6AD55']}
                />

                {/* Hero Section with Floating Mockup */}
                <div className="relative min-h-[50vh] md:min-h-[60vh] flex flex-col items-center justify-center p-8 overflow-hidden">
                    {/* Centered Mockup with Animation - Now properly centered */}
                    <div 
                        className="relative z-10 w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto mb-10"
                        data-aos="fade-down"
                        data-aos-duration="800"
                        data-aos-delay="200"
                    >
                        <img
                            src={packratMb}
                            alt="PackRat Interface Mockup"
                            className="w-full h-auto mt-14"
                        />
                    </div>
                    
                    {/* Bottom-Left Header */}
                    <div className="relative z-20 self-start max-w-2xl">
                        <h1
                            className="text-h1 font-bold font-ppSupply text-ink"
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-delay="100"
                        >
                            PackRat
                        </h1>
                        <h2
                            className="text-h3 font-ppSupply text-ink"
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-delay="400"
                        >
                            A Visual Inventory App for People with Too Many Hobbies
                        </h2>
                    </div>
                </div>

                {/* Role, Date, and Project Details - With full-width gradient background */}
                <div className="relative z-10 w-full before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-t from-olivewhite/90 via-olivewhite/50 to-transparent before:-z-[1] border-b border-gray-200">
                    <div className="container mx-auto px-8 pb-10">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                            {/* Role, Date, Duration and Tools */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
                                <div>
                                    <h2 className="text-body font-bold text-ink">Role</h2>
                                    <p className="text-base text-gray-700">
                                        UX/UI Designer
                                        <br />
                                        Full-stack Developer
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-body font-bold text-ink">Date</h2>
                                    <p className="text-base text-gray-700">
                                        Spring 2023
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-body font-bold text-ink">Duration</h2>
                                    <p className="text-base text-gray-700">
                                        4 Weeks
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-body font-bold text-ink">Tools</h2>
                                    <p className="text-base text-gray-700">
                                        React
                                        <br />
                                        Tailwind CSS
                                        <br />
                                        MAMP
                                        <br />
                                        MySQL
                                        <br />
                                        Express
                                    </p>
                                </div>
                            </div>

                            {/* View Website CTA */}
                            <div className="mt-6 md:mt-0">
                                <a
                                    href="https://packrat.sampark.ca"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-default flex items-center gap-2"
                                    aria-label="Visit PackRat Website"
                                >
                                    Visit Website <MdArrowOutward size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section with Sidebar - Matching London Drugs styling */}
            <div className="flex container mx-auto md:gap-8 px-2 bg-olivewhite">
                {/* Sidebar Navigation */}
                <div className="hidden md:block md:sticky md:top-10 md:h-fit md:py-12 pl-8">
                    <ul className="flex flex-col space-y-4 pl-4 pt-16">
                        {topics.map((topic) => (
                            <li key={topic.id} className="relative group flex items-center">
                                {activeSection === topic.id && (
                                    <div
                                        ref={(el) => bulletRefs.current[topic.id] = el}
                                        className="absolute -left-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-redOrange border-2 border-redOrange origin-center"
                                    ></div>
                                )}
                                <a
                                    href={`#${topic.id}`}
                                    onClick={(e) => handleScroll(e, topic.id)}
                                    className={`sidebar pl-2 text-gray-500 group-hover:text-redOrange transition-all duration-300 text-h5 relative
                                        ${activeSection === topic.id ? 'text-redOrange font-bold translate-x-2' : 'hover:translate-x-1'}`}
                                >
                                    {topic.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Main Content */}
                <div className="flex-1 mt-12 max-w-full">
                    {/* Context Section */}
                    <section id="context" className="">
                        <div className="container mx-auto py-16 px-4 sm:px-8" data-aos="fade-up">
                            <h2 className="text-hmax font-ppSupply font-bold text-ink mb-12">Context</h2>
                            <div className="flex flex-col sm:flex-row gap-12 bg-olivewhite">
                                <div className="sm:w-2/3">
                                    <p className="text-body text-gray-700 leading-relaxed mb-8">
                                        I've always had a hard time keeping track of my gear. Fly fishing supplies, tubes of paint, cycling tools, gardening equipment. It's like they all pile up. Most inventory apps feel like they're made for managing warehouses, not messy personal collections. I needed something simple, flexible, and visual to help me keep track of my gear. I couldn't find something I'd actually want to use.
                                    </p>
                                    <p className="text-body text-gray-700 leading-relaxed mb-8">
                                        PackRat started as a personal tool to solve that problem. I designed and built a full-stack inventory app where I could sort my items by category, upload images, and browse through them in a way that felt more like a game than a spreadsheet. Later, I expanded it with user authentication so each person could manage their own private collections.
                                    </p>
                                </div>
                                <div className="sm:w-1/3 bg-neutral border-2 border-ink rounded-lg p-6">
                                    <h3 className="text-h4 font-ppSupply font-bold text-ink mb-4">
                                        Project Overview:
                                    </h3>
                                    <ul className="list-none space-y-3">
                                        <li className="flex items-start gap-2">
                                            <span className="text-redOrange font-bold">•</span>
                                            <span className="text-body text-gray-700">
                                                Personal inventory system for multi-hobby users
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-redOrange font-bold">•</span>
                                            <span className="text-body text-gray-700">
                                                Visual orb-based UI inspired by video games
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-redOrange font-bold">•</span>
                                            <span className="text-body text-gray-700">
                                                Full CRUD functionality with file upload and filtering
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-redOrange font-bold">•</span>
                                            <span className="text-body text-gray-700">
                                                User authentication with JWT and bcrypt
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-redOrange font-bold">•</span>
                                            <span className="text-body text-gray-700">
                                                Custom categories to support personalized organization
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-12">
                                <div
                                    className="rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                                    onClick={() => openModal(packratMb)}
                                >
                                    <img
                                        src={packratMb}
                                        alt="PackRat Interface Mockup"
                                        className="w-full h-auto"
                                    />
                                </div>
                                <p className="text-sm text-gray-500 mt-2 text-center">
                                    The PackRat interface with its orb-based visual inventory system
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Approach Section */}
                    <section id="approach">
                        <div className="container mx-auto py-16 px-4 sm:px-8" data-aos="fade-up">
                            <h2 className="text-hmax font-ppSupply font-bold text-ink mb-4">Approach</h2>
                            <p className="text-h6 text-gray-700 leading-relaxed mb-16">
                                The challenge was to build something that balanced structure and freedom. It needed to be secure, responsive, and functional — but still feel fun to use. I started by designing a backend that supports two related tables: one for items, one for categories. From there, I built out the React front end with filtering, upload, and item detail views.
                            </p>

                            <div className="space-y-16">
                                <div className="flex flex-col lg:flex-row gap-12 items-center">
                                    <div className="lg:w-1/2">
                                        <div className="bg-neutral inline-block px-3 py-1 rounded-full text-sm font-bold text-ink mb-4">Design Inspiration</div>
                                        <h3 className="text-h2 font-ppSupply font-bold text-ink mb-4">Game-Inspired Interface</h3>
                                        <p className="text-body text-gray-700 leading-relaxed">
                                            I didn't want the interface to look or feel like a database. Instead of a list or grid, I designed a floating orb system inspired by game inventories like Zelda: Breath of the Wild and the memory orbs from Inside Out. It's a UI metaphor that invites exploration and helps users recognize items at a glance.
                                        </p>
                                    </div>
                                    <div className="lg:w-1/2">
                                        <img
                                            src={packratDesign}
                                            alt="The Legend of Zelda: Breath of the Wild inventory system"
                                            className="rounded-lg border border-ink w-full"
                                            onClick={() => openModal(packratDesign)}
                                        />
                                        <p className="text-sm text-gray-500 mt-2 text-center">
                                            Image from <a href="https://zelda.fandom.com/wiki/Inventory" target="_blank" rel="noopener noreferrer" className="text-redOrange hover:underline">The Legend of Zelda: Breath of the Wild</a> © Nintendo. Used for design reference.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Deliverables Section */}
                    <section id="deliverables">
                        <div className="container mx-auto py-16 px-4 sm:px-8">
                            <h2 className="text-hmax font-ppSupply font-bold text-ink mb-2">Deliverables</h2>
                            <p className="text-h6 text-gray-700 leading-relaxed mb-16">
                                The final product is a full-stack application that combines a visual inventory system with secure user authentication. Each component was designed to balance functionality with visual appeal.
                            </p>

                            <div className="space-y-16">
                                {/* Technical Architecture */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start justify-center">
                                    <div>
                                        <h3 className="text-h2 font-ppSupply font-bold text-ink mb-4">Technical Architecture</h3>
                                        <p className="text-body text-gray-700 leading-relaxed mb-12">
                                            The application consists of a React frontend paired with a Node/Express backend. Using JWT for authentication and MySQL for data storage, I built a secure system where users can only access their own content. The architecture connects through RESTful API endpoints that handle everything from image uploads to category management.
                                        </p>
                                        <img
                                            src={packratArchitecture}
                                            alt="PackRat Architecture Diagram"
                                            className=" w-full"
                                            onClick={() => openModal(packratArchitecture)}
                                        />
                                        <p className="text-sm text-gray-500 mt-2 text-center">
                                            Application Architecture Diagram
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-h2 font-ppSupply font-bold text-ink mb-4">Authentication System</h3>
                                        <p className="text-body text-gray-700 leading-relaxed mb-12">
                                            User security was implemented through JWT tokens and bcrypt password hashing. The authentication flow handles registration, login, token verification, and session management—ensuring that only verified users can access their own inventory data.
                                        </p>
                                        <img
                                            src={packratAuth}
                                            alt="Authentication Flow"
                                            className=" w-full"
                                            onClick={() => openModal(packratAuth)}
                                        />
                                        <p className="text-sm text-gray-500 mt-2 text-center">
                                            Authentication Flow Diagram
                                        </p>
                                    </div>
                                </div>

                                {/* Key Features & Components */}
                                <div>
                                    <h3 className="text-h2 font-ppSupply font-bold text-ink mb-8">Key Features & Components</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="bg-neutral border-2 border-ink rounded-lg p-6">
                                            <h4 className="text-h4 font-bold text-ink mb-4">Front-End</h4>
                                            <ul className="list-none space-y-3">
                                                <li className="flex items-start gap-2">
                                                    <span className="text-redOrange font-bold">•</span>
                                                    <span className="text-body text-gray-700">
                                                        Single Page Application built with React and Vite
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-redOrange font-bold">•</span>
                                                    <span className="text-body text-gray-700">
                                                        Orb-based visual inventory interface using custom animations
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-redOrange font-bold">•</span>
                                                    <span className="text-body text-gray-700">
                                                        Dynamic filtering by categories and search term
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-redOrange font-bold">•</span>
                                                    <span className="text-body text-gray-700">
                                                        Responsive layout optimized for both desktop and mobile
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-redOrange font-bold">•</span>
                                                    <span className="text-body text-gray-700">
                                                        Custom drag-and-drop category management
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-neutral border-2 border-ink rounded-lg p-6">
                                            <h4 className="text-h4 font-bold text-ink mb-4">Back-End</h4>
                                            <ul className="list-none space-y-3">
                                                <li className="flex items-start gap-2">
                                                    <span className="text-redOrange font-bold">•</span>
                                                    <span className="text-body text-gray-700">
                                                        RESTful API built with Express.js
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-redOrange font-bold">•</span>
                                                    <span className="text-body text-gray-700">
                                                        MySQL database with normalized tables and foreign key relationships
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-redOrange font-bold">•</span>
                                                    <span className="text-body text-gray-700">
                                                        JWT-based token authentication system
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-redOrange font-bold">•</span>
                                                    <span className="text-body text-gray-700">
                                                        File upload handling with Multer for item images
                                                    </span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-redOrange font-bold">•</span>
                                                    <span className="text-body text-gray-700">
                                                        User-scoped database queries for content security
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Design Highlights */}
                                <div>
                                    <h3 className="text-h2 font-ppSupply font-bold text-ink mb-8">Design Highlights</h3>

                                    {/* Image First - Full Width */}
                                    <div className="mt-12">
                                        <div
                                            className="rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity shadow-lg border border-ink"
                                            onClick={() => openModal(packratUi)}
                                        >
                                            <img
                                                src={packratUi}
                                                alt="PackRat Interface Mockup"
                                                className="w-full h-auto"
                                            />
                                        </div>
                                        <p className="text-sm text-gray-500 mt-2 text-center">
                                            The PackRat interface with its orb-based visual inventory system
                                        </p>
                                    </div>

                                    {/* Text Content Below */}
                                    <ul className="list-none space-y-5 text-body">
                                        <li className="flex items-start gap-3">
                                            <span className="text-redOrange font-bold text-xl">•</span>
                                            <div>
                                                <span className="font-bold">Orb-Based UI:</span> Items are displayed as interactive orbs on a floating shelf, making the inventory feel more like a game than a database.
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-redOrange font-bold text-xl">•</span>
                                            <div>
                                                <span className="font-bold">Custom Categories:</span> Users can create and manage their own organizational system, adapting the app to their specific needs.
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-redOrange font-bold text-xl">•</span>
                                            <div>
                                                <span className="font-bold">Visual Filtering:</span> Categories visually highlight and filter relevant items, making sorting intuitive and playful.
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-redOrange font-bold text-xl">•</span>
                                            <div>
                                                <span className="font-bold">Component Architecture:</span> Modular design ensures the application is maintainable and easy to extend with new features.
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Takeaways Section */}
                    <section id="takeaways" className="container mx-auto pb-16 px-4 sm:px-8">
                        <h2 className="text-hmax font-ppSupply font-bold text-ink pt-16 mb-8">Takeaways</h2>
                        <div className="bg-neutral border-2 border-ink rounded-lg p-8">
                            <h3 className="text-h2 font-ppSupply font-bold text-ink mb-2">Built for myself, but designed for anyone like me.</h3>
                            <p className="text-body text-gray-700 leading-relaxed mb-8">
                                PackRat gave me the chance to work through real authentication flows, database relationships, and full-stack architecture — all while staying grounded in a user experience I actually care about.
                            </p>

                            <div className="space-y-8 mb-8">
                                <div className="flex items-start gap-4">
                                    <span className="text-redOrange font-bold text-2xl">•</span>
                                    <div>
                                        <h4 className="text-h4 font-bold text-ink mb-2">Implementing JWT Auth</h4>
                                        <p className="text-body text-gray-700">
                                            Working with JWT taught me how to think about session flow and protected routes in a real-world application.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <span className="text-redOrange font-bold text-2xl">•</span>
                                    <div>
                                        <h4 className="text-h4 font-bold text-ink mb-2">Designing with Metaphors</h4>
                                        <p className="text-body text-gray-700">
                                            Using the orb metaphor helped the UI feel approachable and familiar, guiding my design decisions throughout the process.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <span className="text-redOrange font-bold text-2xl">•</span>
                                    <div>
                                        <h4 className="text-h4 font-bold text-ink mb-2">Data Relationship Complexity</h4>
                                        <p className="text-body text-gray-700">
                                            Linking users and content forced me to think deeply about data relationships and privacy considerations.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <span className="text-redOrange font-bold text-2xl">•</span>
                                    <div>
                                        <h4 className="text-h4 font-bold text-ink mb-2">Personal Connection to UX</h4>
                                        <p className="text-body text-gray-700">
                                            Building something I'd actually use meant I could test and iterate naturally throughout development.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* More Projects Section - Matching other pages */}
            <div className="mx-12 mb-16">
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

            {/* Image Modal */}
            {modalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                    onClick={closeModal}
                >
                    <div className="relative bg-white p-6 rounded-lg shadow-lg"
                        onClick={(e) => e.stopPropagation()}>
                        {/* Modal Image */}
                        <img
                            src={modalImage}
                            alt="PackRat Project"
                            className="rounded"
                            style={{
                                maxWidth: "80vw",
                                maxHeight: "80vh",
                                objectFit: "contain",
                            }}
                        />
                        <button
                            className="absolute top-2 right-2 text-ink p-2 rounded-full"
                            onClick={closeModal}
                        >
                            X
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PackRat;