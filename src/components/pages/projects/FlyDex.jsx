import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import AOS from "aos";
import "aos/dist/aos.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Components
import Contact from "../../Contact";
import FlyDexTable from "../../FlydexTable";
import FlyDexSWOT from "../../FlyDexSWOT";

// FlyDex Image Imports
import flyDexLogo from "../../../assets/flydex/flydex-logo.png";
import flyDexLogo2 from "../../../assets/flydex/flydex-logo-w.png";
import lesson from "../../../assets/flydex/flydex-lesson-mockup.png";
import splashMockup from "../../../assets/flydex/flydex-login-mockup.jpg";
import lessonVideo from "../../../assets/flydex/flydex-lessonvideo.png";
import justin from "../../../assets/flydex/justin.png";
import tangled from "../../../assets/flydex/tangled.jpg";
import persona from "../../../assets/flydex/persona.png";
import empathy from "../../../assets/flydex/empathymap.png";
import journey from "../../../assets/flydex/journey.png";
import coho from "../../../assets/flydex/coho.png";

// Logo Imports
import logoBlack from "../../../assets/logo-black.svg";
import arrowSide from "../../../assets/arrow-side.png";
import { MdArrowOutward } from "react-icons/md";

// Animation Imports
import { initSideFrogAnimation } from "../../animations/animations";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Define navigation topics
const topics = [
    { id: "Context", label: "Context" },
    { id: "Approach", label: "Approach" },
    { id: "outcome", label: "Outcome" },
    { id: "takeaways", label: "Takeaways" }
];

function FlyDex() {
    const [activeSection, setActiveSection] = useState('challenge');
    const bulletRefs = useRef({});

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
        initSideFrogAnimation();
    })

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight * 0.3;

            topics.forEach(({ id }) => {
                const element = document.getElementById(id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= window.innerHeight * 0.3 && rect.bottom >= window.innerHeight * 0.3) {
                        setActiveSection(id);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
        <div className="bg-olivewhite pb-24 min-h-screen">
            <Helmet>
                <title>FlyDex | UX/UI Design</title>
                <meta
                    name="description"
                    content="Dive into the UX/UI design process of FlyDex, an app that makes fly fishing accessible for beginners."
                />
            </Helmet>

            {/* Hero Section */}
            <div
                className="relative min-h-screen p-8 bg-cover bg-center bg-no-repeat rounded-md border border-ink flex flex-col justify-end"
                style={{ backgroundImage: `url(${splashMockup})` }}
            >
                {/* Overlay to darken the image */}
                <div className="absolute inset-0 bg-black opacity-40 rounded-md"></div>
                
                {/* Bottom-Left Header */}
                <div className="text-left mb-8 relative z-10">
                    <h1
                        className="text-h1 font-bold font-ppSupply text-olivewhite"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        data-aos-delay="500"
                    >
                        Simplifying <br /> Fly Fishing
                    </h1>
                </div>

                {/* Role, Date, and Project Link */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8 p-8 bg-black bg-opacity-70 rounded-md relative z-10">
                    {/* Role and Date */}
                    <div className="flex flex-row gap-8">
                        <div>
                            <h2 className="text-body font-bold text-olivewhite">Role</h2>
                            <p className="text-base text-olivewhite">
                                UX/UI Designer
                                <br />
                                Product Designer
                            </p>
                        </div>
                        <div>
                            <h2 className="text-body font-bold text-olivewhite">Date</h2>
                            <p className="text-base text-olivewhite">2024</p>
                        </div>
                        <div>
                            <h2 className="text-body font-bold text-olivewhite">Duration</h2>
                            <p className="text-base text-olivewhite">4 Weeks</p>
                        </div>
                        <div>
                            <h2 className="text-body font-bold text-olivewhite">Tools</h2>
                            <p className="text-base text-olivewhite">
                                Figma
                                <br />
                                Adobe Illustrator
                                <br />
                                Procreate
                            </p>
                        </div>
                    </div>

                    {/* View CTA */}
                    <div>
                        <a
                            href="https://embed.figma.com/design/gCVW1snYrr66F7o51z2MCb/Flydex?node-id=1237-1002&embed-host=share"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-default"
                            aria-label="View Prototype" 
                        >
                            View Prototype <MdArrowOutward className="inline-block ml-1" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Content Section with Sidebar */}
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
                                        ${activeSection === topic.id ? 'text-redOrange font-bold  translate-x-2' : 'hover:translate-x-1'}`}
                                >
                                    {topic.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Main Content */}
                <div className="flex-1 mt-12 max-w-full">
                    <section id="Context" className="">
                        {/* Challenge */}
                        <div className="container mx-auto py-16 px-4 sm:px-8" data-aos="fade-up">
                            <h2 className="text-hmax font-ppSupply font-bold text-ink mb-12">Context</h2>
                            <div className="flex flex-col sm:flex-row gap-24 bg-olivewhite ">
                                <div className="sm:w-1/2">
                                    <p className="text-body  text-gray-700 leading-relaxed mb-24">
                                        Fly fishing is rewarding, serene, and adventurous—but daunting for newcomers. The steep learning curve, confusing jargon, and fragmented online resources leave many aspiring anglers overwhelmed. No centralized, user-friendly app existed to simplify this learning journey, creating frustration and discouraging beginners from fully embracing the sport.
                                    </p>
                                    <div className="bg-neutral border-2 border-ink rounded-lg p-6 mt-12">
                                        <h3 className="text-h4 font-ppSupply font-bold text-ink mb-4">
                                            The Problem at a Glance:
                                        </h3>
                                        <ul className="list-none space-y-3">
                                            <li className="flex items-start gap-2">
                                                <span className="text-redOrange font-bold">•</span>
                                                <span className="text-body  text-gray-700">
                                                    Overwhelming complexity for beginners
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-redOrange font-bold">•</span>
                                                <span className="text-body  text-gray-700">
                                                    Disorganized and outdated online information
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-redOrange font-bold">•</span>
                                                <span className="text-body  text-gray-700">
                                                    Lack of beginner-friendly digital resources
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="sm:w-1/2">
                                    <img
                                        src={tangled}
                                        alt="Frustrated Fisherman"
                                        className="rounded-md border border-ink"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* understanding the user */}
                    <section id="Approach">
                        <div className="container mx-auto py-16 px-4 sm:px-8" data-aos="fade-up">
                            <h2 className="text-hmax font-ppSupply font-bold text-ink mb-8">Approach</h2>
                            <h3 className="text-h1 font-ppSupply font-bold text-ink mb-2">From Pain Points to Purpose</h3>
                            <p className="text-body  text-gray-700 leading-relaxed mb-24">For me, design is about turning complex challenges into clear, engaging experiences that empower users—a principle I learned from my years of teaching. My process always begins with user research, pinpointing real-world pain points and transforming them into intuitive solutions that build confidence and inspire action.</p>

                            <h3 className="text-h1 font-ppSupply font-bold text-ink mb-2">The Target User</h3>
                            <div className="flex flex-col sm:flex-row gap-8 bg-olivewhite p-8 rounded-lg border border-sage mb-24">
                                <div className="sm:w-1/3">
                                    <img
                                        src={justin}
                                        alt="Target User"
                                        className="rounded-full border border-ink"
                                    />
                                </div>
                                <div className="sm:w-2/3">
                                    <h3 className="text-h3 font-ppSupply font-bold text-ink mb-2">Meet Justin</h3>
                                    <div className="bg-neutral border-l-4 border-redOrange p-6 my-8 rounded-r-lg">
                                        <blockquote className="relative">
                                            <span className="text-redOrange text-4xl absolute -top-4 left-0">"</span>
                                            <p className="text-body text-ink italic pl-6 mb-2">
                                                I love the idea of fly fishing, but I have no clue where to start. Every website I visit confuses me more.
                                            </p>
                                            <footer className="text-right">
                                                <cite className="text-sm font-bold text-ink not-italic">
                                                    – Justin
                                                </cite>
                                            </footer>
                                        </blockquote>
                                    </div>
                                    <p className="text-body  text-gray-700 leading-relaxed">
                                        Justin, a 34-year-old outdoor enthusiast new to fly fishing, represents FlyDex's primary user group. Enthusiastic but frustrated by scattered online resources and the absence of structured guidance, Justin needed a user-friendly companion to streamline his learning experience and build his confidence in fly fishing.
                                    </p>

                                    {/* CTAs */}
                                    <p className="text-h6 mt-12 font-bold text-gray-700 leading-relaxed">
                                        Learn More
                                    </p>
                                    <div className="mt-4 flex flex-col sm:flex-row gap-4">
                                        
                                        <button
                                            className="btn-grey"
                                            onClick={() => openJustinModal(persona)}
                                        >
                                            Story
                                        </button>
                                        <button
                                            className="btn-grey"
                                            onClick={() => openJustinModal(empathy)}
                                        >
                                           Thoughts
                                        </button>
                                        <button
                                            className="btn-grey"
                                            onClick={() => openJustinModal(journey)}
                                        >
                                            Journey
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="py-16">
                                <h2 className="text-h1 font-bold text-ink mb-4">Gaining Insight Through Competitive Analysis</h2>
                                <p className="text-body text-gray-700 leading-relaxed">
                                    To refine my design strategy, I began by diving deep into the competitive landscape. By comparing industry leaders, I identified key gaps and opportunities that would directly inform the improvements needed for FlyDex. The insights I gathered—ranging from user engagement hurdles to underutilized educational features—became the foundation for a design that not only simplifies fly fishing for beginners but also drives meaningful action.
                                </p>
                                <p className="text-body text-gray-700 leading-relaxed mt-4 mb-16">
                                    The SWOT charts below summarize the strengths, weaknesses, opportunities, and threats of two major players. These analyses played a critical role in shaping a user-centric solution that addresses real-world challenges and delivers a truly engaging experience.
                                </p>
                                <FlyDexSWOT />
                                <h2 className="text-h5 font-bold text-ink mt-12 mb-4">Takeaway</h2>
                                <p className="text-body text-gray-700 leading-relaxed mt-4 mb-16">
                                
                                The SWOT revealed a shared gap in beginner education and highlighted strong community and AI features to emulate. FlyDex’s design will bridge this gap with guided learning, smart fly identification, and engaging social tools—making it ideal for anglers at every skill level.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Design Vision and goals */}
                    <section id="outcome">
                        <h2 className="container mx-auto pb-4 px-4 sm:px-8 text-hmax font-ppSupply font-bold text-ink ">Outcome</h2>
                        <p className="container mx-auto pb-12 px-4 sm:px-8 text-body   text-ink ">Every user interview, journey map, and competitive insight sharpened my design vision: build a step‑by‑step guide that meets beginners where they struggle. By iterating on low‑fi flows and testing interactive lessons, we transformed FlyDex into a confidence‑boosting companion—delivering the right tip at the right time within a calm, nature‑inspired interface.</p>
                        <div className="container mx-auto flex flex-col lg:flex-row  gap-24 pb-16 px-4 sm:px-8">
                        
                            <div className="lg:w-1/2 order-2 lg:order-1">
                                <img
                                    src={lesson}
                                    alt="Solution Design"
                                    className="rounded-lg border border-ink"
                                />
                            </div>
                            <div className="lg:w-1/2 order-1 lg:order-2">
                                <h2 className="text-h2 font-ppSupply font-bold text-ink mb-4">Design Vision & Goals</h2>
                                <p className="text-body text-ink leading-relaxed mb-4">
                                    FlyDex was envisioned as an approachable, engaging companion for anglers at any skill level, focusing especially on beginners. The design aimed to:
                                </p>
                                <ul className="list-none space-y-3">
                                    <li className="flex items-start gap-2">
                                        <span className="text-redOrange font-bold">•</span>
                                        <span className="text-body text-ink">
                                            Simplify complex fly fishing techniques and information
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-redOrange font-bold">•</span>
                                        <span className="text-body text-ink">
                                            Support intuitive navigation and exploration
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-redOrange font-bold">•</span>
                                        <span className="text-body text-ink">
                                            Create a serene yet adventurous visual identity
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-redOrange font-bold">•</span>
                                        <span className="text-body text-ink">
                                            Empower users through practical guidance and personalized tools
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Visual Identity Section */}
                        <div className="container mx-auto py-16 px-4 sm:px-8">
                            <div className="flex flex-col lg:flex-row gap-12">
                                {/* Text Content */}
                                <div className="lg:w-1/2">
                                    <h2 className="text-h2 font-ppSupply font-bold text-ink mb-4">Visual Identity & System Design</h2>
                                    <p className="text-body text-ink mb-6">
                                        The visual design of FlyDex needed to balance clarity with the adventurous spirit of fly fishing:
                                    </p>

                                    <div className="space-y-6">
                                        <div className="flex items-start gap-3">
                                            <span className="text-redOrange font-bold text-xl">•</span>
                                            <div>
                                                <h3 className="text-h5 font-bold text-ink mb-2">Calm, Earthy Colors</h3>
                                                <p className="text-body text-ink">
                                                    Echo the tranquility and natural surroundings inherent to fly fishing.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <span className="text-redOrange font-bold text-xl">•</span>
                                            <div>
                                                <h3 className="text-h5 font-bold text-ink mb-2">Clean Typography</h3>
                                                <p className="text-body text-ink">
                                                    Ensures readability and helps demystify complex topics.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <span className="text-redOrange font-bold text-xl">•</span>
                                            <div>
                                                <h3 className="text-h5 font-bold text-ink mb-2">Minimalistic Icons & Illustrations</h3>
                                                <p className="text-body text-ink">
                                                    Provides visual clarity without overwhelming the user.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-body text-ink mt-6">
                                        This cohesive visual identity was thoughtfully refined, resulting in a welcoming and intuitive user experience.
                                    </p>
                                </div>

                                {/* Image */}
                                <div className="lg:w-1/2">
                                    <img
                                        src={lessonVideo}
                                        alt="FlyDex Visual Design System"
                                        className="w-full h-auto rounded-lg border-2 border-ink"
                                    />
                                </div>
                            </div>
                        </div>


                        {/* Features and Iterations Section */}
                        <div className="container mx-auto py-16 px-4 sm:px-8">
                            <h2 className="text-h2 font-ppSupply font-bold text-ink mb-4">Core Features</h2>
                            <p className="text-body text-ink mb-8">
                                Throughout the iterative process, user feedback shaped several impactful features designed specifically to enhance ease of use and accessibility:
                            </p>

                            {/* Features Table */}
                            <FlyDexTable />
                            
                            <p className="text-body text-ink mt-6">
                                These iterations continuously refined FlyDex, creating a clear, engaging, and supportive user experience tailored precisely to beginners' needs.
                            </p>

                            {/* Conclusion Section */}
                            <div className="w-full mx-auto overflow-hidden flex flex-col items-center gap-12 pt-16 px-4 sm:px-8 
                    max-w-[390px] md:max-w-[600px] lg:max-w-[900px]"
                                >
                                <h1 className="text-h1 font-ppSupply font-bold text-ink text-center">Try out Flydex</h1>
                                <div className="relative w-full max-w-[500px] mx-auto" style={{ paddingBottom: "100%" }}>
                                    <iframe
                                        src="https://embed.figma.com/proto/gCVW1snYrr66F7o51z2MCb/Flydex?node-id=1237-1002&embed-host=share"
                                        className="absolute top-0 left-0 w-full h-full"
                                        style={{ border: "none", backgroundColor: "transparent" }}
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="takeaways" className="container mx-auto pb-16 px-4 sm:px-8">
                        <h2 className="container mx-auto py-16 px-4 sm:px-8 text-hmax font-ppSupply font-bold text-ink mb-12">Takeaways</h2>
                        <div className="container mx-auto pb-16 px-4 sm:px-8">
                            <div className="bg-neutral border-2 border-ink rounded-lg p-8">
                                <h2 className="text-h2 font-ppSupply font-bold text-ink mb-4">Impact & Future Directions</h2>
                                <p className="text-body text-ink mb-8">
                                    Designing FlyDex was a meaningful exploration into how empathetic, user-centered design can effectively address complex challenges. Key lessons include:
                                </p>

                                    <div className="space-y-6 mb-8">
                                        <div className="flex items-start gap-3">
                                            <span className="text-redOrange font-bold text-xl">•</span>
                                            <div>
                                                <h3 className="text-h5 font-bold text-ink mb-2"><strong>Start with User Pain Points</strong></h3>
                                                <p className="text-body text-ink">
                                                    Deep user understanding reveals subtle opportunities for meaningful interventions.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <span className="text-redOrange font-bold text-xl">•</span>
                                            <div>
                                                <h3 className="text-h5 font-bold text-ink mb-2"><strong>Clarity is Crucial</strong></h3>
                                                <p className="text-body text-ink">
                                                    A clear visual hierarchy and intuitive interfaces significantly improve engagement and reduce user frustration.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <span className="text-redOrange font-bold text-xl">•</span>
                                            <div>
                                                <h3 className="text-h5 font-bold text-ink mb-2"><strong>Iterate on User Feedback</strong></h3>
                                                <p className="text-body text-ink">
                                                    Continuous user input throughout the design process creates truly valuable, user-friendly outcomes.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                <p className="text-body text-ink italic mb-8">
                                    FlyDex reinforced my passion for creating inclusive, intuitive digital experiences that empower and inspire users.
                                </p>

                                <h3 className="text-h3 font-ppSupply font-bold text-ink mb-2">Looking Ahead</h3>
                                <p className="text-body text-ink">
                                    Moving forward, I plan to explore advanced features like a fly-casting coach using gyroscope data for real-time casting feedback and implementing smart recommendations based on users’ logged catches and fishing habits. These enhancements will further transform FlyDex into a comprehensive companion for anglers.
                                </p>

                            </div>
                        </div>
                    </section>

                    
                </div>
            </div>
                        {/* More Projects Section */}
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