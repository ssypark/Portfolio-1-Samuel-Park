import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import AOS from "aos";
import "aos/dist/aos.css";

// Components
import Contact from "../../Contact";

// London Drugs Image Imports - Replace with your actual images later
import ldHero from "../../../assets/london-drugs/ld-hero.png"; // Placeholder - replace with actual image
import ldMockup from "../../../assets/london-drugs/ld-mb-mockup.png"; // Placeholder
import userTesting from "../../../assets/london-drugs/user-testing.png"; // Placeholder
import heuristicAudit from "../../../assets/london-drugs/heuristic-audit.png"; // Placeholder
import wireframes from "../../../assets/london-drugs/wireframes.png"; // Placeholder
import teamPhoto from "../../../assets/london-drugs/team-photo.png"; // Placeholder
import flowDiagram from "../../../assets/london-drugs/flow-diagram.png"; // Placeholder
import redesignHome from "../../../assets/london-drugs/redesign-home.png"; // Placeholder
import checkoutFlow from "../../../assets/london-drugs/checkout-flow.png"; // Placeholder

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
    { id: "context", label: "Context" },
    { id: "approach", label: "Approach" },
    { id: "outcome", label: "Outcome" },
    { id: "takeaways", label: "Takeaways" }
];

function LondonDrugs() {
    const [activeSection, setActiveSection] = useState('context');
    const bulletRefs = useRef({});
    const [modalOpen, setModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState("");

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
        initSideFrogAnimation();
    }, []);

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

    // Open modal function
    const openModal = (imagePath) => {
        setModalImage(imagePath);
        setModalOpen(true);
    };

    // Close modal function
    const closeModal = () => {
        setModalOpen(false);
        setModalImage("");
    };

    return (
        <div className="bg-olivewhite pb-24 min-h-screen">
            <Helmet>
                <title>London Drugs | UX Case Study</title>
                <meta
                    name="description"
                    content="Learn how our UX team improved the London Drugs website through research, testing, and design to create a more intuitive user experience."
                />
            </Helmet>

            {/* Hero Section */}
            <div
                className="relative min-h-screen p-8 bg-contain bg-center bg-no-repeat rounded-md  flex flex-col justify-end"
                style={{ backgroundImage: `url(${ldHero})` }}
            >


                {/* Bottom-Left Header */}
                <div className="text-left mb-8 relative z-10 mx-8">
                    <h1
                        className="text-h1 font-bold font-ppSupply text-ink"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        data-aos-delay="500"
                    >
                        Simplifying <br /> E-commerce Experiences
                    </h1>
                </div>

                {/* Role, Date, and Project Link */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8 p-8 bg-black bg-opacity-70 rounded-md relative z-10">
                    {/* Role and Date */}
                    <div className="flex flex-row gap-8">
                        <div>
                            <h2 className="text-body font-bold text-olivewhite">Role</h2>
                            <p className="text-base text-olivewhite">
                                UX Designer
                                <br />
                                Researcher
                            </p>
                        </div>
                        <div>
                            <h2 className="text-body font-bold text-olivewhite">Team</h2>
                            <p className="text-base text-olivewhite">
                                Tina
                                <br />
                                Izzy
                                <br />
                                Nancy
                                <br />
                                Samuel
                            </p>
                        </div>
                        <div>
                            <h2 className="text-body font-bold text-olivewhite">Date</h2>
                            <p className="text-base text-olivewhite">Feb-Mar 2025</p>
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
                                Maze
                                <br />
                                Google Forms
                                <br />
                                Miro
                            </p>
                        </div>
                    </div>

                    {/* View CTA */}
                    <div>
                        <a
                            href="/london_drugs-group_report.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-default"
                            aria-label="Download Report"
                        >
                            View Full Report <MdArrowOutward className="inline-block ml-1" />
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
                    <section id="context" className="">
                        {/* Context & Challenge */}
                        <div className="container mx-auto py-16 px-4 sm:px-8" data-aos="fade-up">
                            <h2 className="text-hmax font-ppSupply font-bold text-ink mb-12">Context</h2>
                            <div className="flex flex-col sm:flex-row gap-24 bg-olivewhite">
                                <div className="sm:w-1/2">
                                    <h3 className="text-h1 font-ppSupply font-bold text-ink mb-4">Project Overview</h3>
                                    <p className="text-body text-gray-700 leading-relaxed mb-8">
                                        London Drugs is a major Canadian retailer with a growing online presence, but users often face friction navigating its site—especially when accessing services like pharmacy or photolab, or during checkout. The site's density of options, inconsistent flows, and limited feedback mechanisms led to confusion and abandonment.
                                    </p>
                                    <p className="text-body text-gray-700 leading-relaxed mb-8">
                                        I initially approached this as a solo design proposal, conducting an expert heuristic audit and creating wireframes to improve core user flows. Later, I joined a team project where we collaboratively tested the experience with real users to uncover pain points and validate design opportunities.
                                    </p>
                                </div>
                                <div className="bg-neutral border-2 border-ink rounded-lg p-6 mt-12">
                                <h3 className="text-h4 font-ppSupply font-bold text-ink mb-4">
                                    Project Highlights:
                                </h3>
                                <ul className="list-none space-y-3">
                                    <li className="flex items-start gap-2">
                                        <span className="text-redOrange font-bold">•</span>
                                        <span className="text-body text-gray-700">
                                            Identified key usability gaps on London Drugs' website during initial solo audit
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-redOrange font-bold">•</span>
                                        <span className="text-body text-gray-700">
                                            Conducted moderated and unmoderated testing with 6 participants
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-redOrange font-bold">•</span>
                                        <span className="text-body text-gray-700">
                                            Co-created redesigned wireframes for account creation and checkout flows
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-redOrange font-bold">•</span>
                                        <span className="text-body text-gray-700">
                                            Proposed clearer coupon logic, simplified service discovery, and guest checkout
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-redOrange font-bold">•</span>
                                        <span className="text-body text-gray-700">
                                            Delivered findings in a group presentation and 20-page report with actionable recommendations
                                        </span>
                                    </li>
                                </ul>
                            </div>
                     

                            </div>
                            <div className="w-full mt-12 mx-auto items-center justify-center flex"> 
                                    <img
                                        src={ldMockup}
                                        alt="London Drugs Website Mockup"
                                        className="rounded-md "
                                    />
                                </div>
                        </div>
                    </section>

                    {/* Approach Section */}
                    <section id="approach">
                        <div className="container mx-auto py-16 px-4 sm:px-8" data-aos="fade-up">
                            <h2 className="text-hmax font-ppSupply font-bold text-ink mb-4">Approach</h2>
                            <p className="text-h6 text-gray-700 leading-relaxed mb-16">
                            With a solid foundation from my initial audit, I joined forces with three collaborators to take the project further through real user testing. Each of us brought a different strength to the table—research, strategy, design—and together we mapped out a process to validate assumptions and build better experiences. This section breaks down our methodology, from test planning to insight synthesis, and highlights where I contributed most along the way.
                            </p>

                            {/* Team Section */}
                            <h3 className="text-h1 font-ppSupply font-bold text-ink mb-4">Meet the Team</h3>
                            <div className="flex flex-col sm:flex-row gap-8 bg-olivewhite p-8 rounded-lg border border-sage mb-24">

                                <div className="">
                                    <div className="">
                                        <img
                                            src={teamPhoto}
                                            alt="Project Team"
                                            className="rounded-lg "
                                        />
                                    </div>
                                    <h3 className="text-h3 font-ppSupply font-bold text-ink mb-4 mt-12">Collaborative Expertise</h3>
                                    <p className="text-body text-gray-700 leading-relaxed">
                                        Our team combined diverse skills to tackle London Drugs' UX challenges. I led the heuristic evaluation and wireframing, while collaborating with:
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                                        <div className="bg-neutral p-4 rounded-lg hover:shadow-md transition-shadow">
                                            <a
                                                href="https://www.linkedin.com/in/tina-lin-000613b5/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group"
                                            >
                                                <h4 className="font-bold text-ink group-hover:text-redOrange transition-colors flex items-center">
                                                    Tina
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </h4>
                                                <p className="text-sm text-gray-700">Research Lead</p>
                                            </a>
                                        </div>

                                        <div className="bg-neutral p-4 rounded-lg hover:shadow-md transition-shadow">
                                            <a
                                                href="https://www.linkedin.com/in/isabel-vincent-374a8642/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group"
                                            >
                                                <h4 className="font-bold text-ink group-hover:text-redOrange transition-colors flex items-center">
                                                    Izzy
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </h4>
                                                <p className="text-sm text-gray-700">Design Collaborator</p>
                                            </a>
                                        </div>

                                        <div className="bg-neutral p-4 rounded-lg hover:shadow-md transition-shadow">
                                            <a
                                                href="https://www.linkedin.com/in/nancywz/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group"
                                            >
                                                <h4 className="font-bold text-ink group-hover:text-redOrange transition-colors flex items-center">
                                                    Nancy
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </h4>
                                                <p className="text-sm text-gray-700">Strategy Lead</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Approach Steps */}
                            <div className="space-y-24 mt-12">
                                {/* Step 1 */}
                                <div className="flex flex-col lg:flex-row gap-12 items-center">
                                    <div className="lg:w-1/2">
                                        <div className="bg-neutral inline-block px-3 py-1 rounded-full text-sm font-bold text-ink mb-4">01</div>
                                        <h3 className="text-h2 font-ppSupply font-bold text-ink mb-4">Heuristic Audit & Design Proposal</h3>
                                        <p className="text-body text-gray-700 leading-relaxed mb-4">
                                            I began with an in-depth heuristic evaluation of the existing London Drugs website. I focused on five key areas:
                                        </p>
                                        <ul className="list-none space-y-2 mb-6">
                                            <li className="flex items-start gap-2">
                                                <span className="text-redOrange font-bold">•</span>
                                                <span className="text-body text-gray-700">Clarity of checkout process</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-redOrange font-bold">•</span>
                                                <span className="text-body text-gray-700">Access to services (pharmacy, photolab)</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-redOrange font-bold">•</span>
                                                <span className="text-body text-gray-700">Navigation consistency</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-redOrange font-bold">•</span>
                                                <span className="text-body text-gray-700">Visibility of coupon code input</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-redOrange font-bold">•</span>
                                                <span className="text-body text-gray-700">Onboarding/account creation</span>
                                            </li>
                                        </ul>
                                        <p className="text-body text-gray-700 leading-relaxed">
                                            I mapped out the original flow and identified where users might hesitate or drop off. From there, I designed low-fidelity wireframes that addressed these gaps—prioritizing clarity, progressive disclosure, and visual hierarchy. I proposed guest checkout, more visible CTAs, and a clearer services homepage.
                                        </p>
                                    </div>
                                    <div className="lg:w-1/2">
                                        <img
                                            src={heuristicAudit}
                                            alt="Heuristic Audit Process"
                                            className="rounded-lg border border-ink w-full"
                                            onClick={() => openModal(heuristicAudit)}
                                        />
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="flex flex-col lg:flex-row gap-12 items-center">
                                    <div className="lg:w-1/2 order-2 lg:order-1">
                                        <img
                                            src={userTesting}
                                            alt="User Testing Sessions"
                                            className="rounded-lg border border-ink w-full"
                                            onClick={() => openModal(userTesting)}
                                        />
                                    </div>
                                    <div className="lg:w-1/2 order-1 lg:order-2">
                                        <div className="bg-neutral inline-block px-3 py-1 rounded-full text-sm font-bold text-ink mb-4">02</div>
                                        <h3 className="text-h2 font-ppSupply font-bold text-ink mb-4">User Research & Group Testing</h3>
                                        <p className="text-body text-gray-700 leading-relaxed mb-4">
                                            In the group phase, we created a detailed test plan with screener questions, hypotheses, and tasks. I collaborated with Tina and Nancy on designing the test protocol, while Izzy and I split design responsibilities.
                                        </p>
                                        <p className="text-body text-gray-700 leading-relaxed mb-4">
                                            We recruited 6 participants and conducted:
                                        </p>
                                        <ul className="list-none space-y-2 mb-6">
                                            <li className="flex items-start gap-2">
                                                <span className="text-redOrange font-bold">•</span>
                                                <span className="text-body text-gray-700">4 moderated Zoom sessions (note-taking and observation)</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-redOrange font-bold">•</span>
                                                <span className="text-body text-gray-700">2 unmoderated Maze tests</span>
                                            </li>
                                        </ul>
                                        <p className="text-body text-gray-700 leading-relaxed">
                                            We asked users to complete tasks like creating an account, locating the photolab, and applying a coupon. I compiled key quotes, pain points, and behavioral patterns from our findings.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="flex flex-col lg:flex-row gap-12 items-center">
                                    <div className="lg:w-1/2">
                                        <div className="bg-neutral inline-block px-3 py-1 rounded-full text-sm font-bold text-ink mb-4">03</div>
                                        <h3 className="text-h2 font-ppSupply font-bold text-ink mb-4">Synthesizing Insights</h3>
                                        <p className="text-body text-gray-700 leading-relaxed mb-4">
                                            We synthesized findings into an affinity map and outlined three main usability issues:
                                        </p>
                                        <div className="bg-neutral border-l-4 border-redOrange p-6 my-6 rounded-r-lg">
                                            <ul className="list-none space-y-3">
                                                <li className="flex items-start gap-2">
                                                    <span className="text-redOrange font-bold">1.</span>
                                                    <span className="text-body text-ink">Users struggled to find service pages from the homepage</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-redOrange font-bold">2.</span>
                                                    <span className="text-body text-ink">The checkout process felt mandatory, cluttered, and lacked guest options</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-redOrange font-bold">3.</span>
                                                    <span className="text-body text-ink">Coupon code entry was hidden and confusing</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <p className="text-body text-gray-700 leading-relaxed">
                                            I proposed redesign solutions for each issue. For example, replacing the homepage "departments" grid with prioritized service tiles, surfacing guest checkout earlier in the flow, and clarifying the promo field UI.
                                        </p>
                                    </div>
                                    <div className="lg:w-1/2">
                                        <img
                                            src={flowDiagram}
                                            alt="User Journey Flow Diagram"
                                            className="rounded-lg border border-ink w-full"
                                            onClick={() => openModal(flowDiagram)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Outcome Section */}
                    <section id="outcome">
                        <div className="container mx-auto py-16 px-4 sm:px-8">
                            <h2 className="text-hmax font-ppSupply font-bold text-ink mb-2">Outcome</h2>
                            <p className="text-h6 text-gray-700 leading-relaxed mb-16">
                            Research is only as valuable as the action it inspires. After identifying key friction points, I worked closely with Izzy to redesign core flows like the homepage, checkout, and service discovery. Every change was guided by what we heard from users—leading to cleaner interfaces, improved clarity, and a stronger sense of control throughout the experience. We delivered our research and wireframe concepts in both a formal report and a group presentation. Our solutions were grounded in user feedback and design principles.
                            </p>

                            <div className="space-y-24">
                                {/* Redesigned Homepage */}
                                <div className="flex flex-col lg:flex-row gap-12 items-center">
                                    <div className="lg:w-1/2">
                                        <h3 className="text-h2 font-ppSupply font-bold text-ink mb-4">Redesigned Homepage</h3>
                                        <p className="text-body text-gray-700 leading-relaxed mb-4">
                                            I prioritized service visibility by creating dedicated tiles for pharmacy, photo lab, and other key services. This addressed users' struggle to find these sections from the homepage.
                                        </p>
                                        <div className="bg-neutral p-4 rounded-lg border border-ink my-6">
                                            <h4 className="font-bold text-ink mb-2">User Quote:</h4>
                                            <p className="text-body text-gray-700 italic">
                                                "This version is way easier—I can actually find what I’m looking for without hunting around."
                                            </p>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/2">
                                        <img
                                            src={redesignHome}
                                            alt="Redesigned Homepage"
                                            className="rounded-lg border border-ink w-full"
                                            onClick={() => openModal(redesignHome)}
                                        />
                                    </div>
                                </div>

                                {/* Simplified Checkout */}
                                <div className="flex flex-col lg:flex-row gap-12 items-center">
                                    <div className="lg:w-1/2 order-2 lg:order-1">
                                        <img
                                            src={checkoutFlow}
                                            alt="Simplified Checkout Flow"
                                            className="rounded-lg border border-ink w-full"
                                            onClick={() => openModal(checkoutFlow)}
                                        />
                                    </div>
                                    <div className="lg:w-1/2 order-1 lg:order-2">
                                        <h3 className="text-h2 font-ppSupply font-bold text-ink mb-4">Simplified Checkout</h3>
                                        <p className="text-body text-gray-700 leading-relaxed mb-4">
                                            My solo and group efforts resulted in:
                                        </p>
                                        <ul className="list-none space-y-3 mb-6">
                                            <li className="flex items-start gap-2">
                                                <span className="text-redOrange font-bold">•</span>
                                                <span className="text-body text-gray-700">A redesigned homepage prioritizing services</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-redOrange font-bold">•</span>
                                                <span className="text-body text-gray-700">Optimized weekly flyer navigation and discoverability</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-redOrange font-bold">•</span>
                                                <span className="text-body text-gray-700">Clearer application of discounts and coupon codes</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-redOrange font-bold">•</span>
                                                <span className="text-body text-gray-700">Simplified service discovery for pharmacy and photo lab</span>
                                            </li>
                                        </ul>

                                        <div className="bg-neutral p-4 rounded-lg border border-ink my-6">
                                            <h4 className="font-bold text-ink mb-2">User Feedback:</h4>
                                            <p className="text-body text-gray-700 italic">
                                                "I can actually see my discounts being applied in real-time now! I never knew London Drugs had so many great promotions until I could clearly see them in my cart."
                                            </p>
                                        </div>
                                        <p className="text-body text-gray-700 leading-relaxed">
                                            These were showcased through wireframes I co-led with Izzy, balancing accessibility and brand familiarity.
                                        </p>
                                    </div>
                                </div>

                                {/* Wireframes */}
                                <div className="flex flex-col items-center">
                                    <h3 className="text-h2 font-ppSupply font-bold text-ink mb-8 text-center">Final Wireframes</h3>
                                    <div className="relative group">
                                        <img
                                            src={wireframes}
                                            alt="Final Wireframes Collection"
                                            className="w-full rounded-lg "
                                            onClick={() => openModal(wireframes)}
                                        />
                                        {/* Hover overlay with CTA */}
                                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col items-center justify-center">
                                            <button
                                                onClick={() => window.open("https://www.figma.com/design/LpvQEagcl4v5jGKDpphc2Q/UI-UX2_Wireframes?node-id=3-193&t=ntFnbiXsvwjpzltO-1", "_blank")}
                                                className="px-6 py-3 bg-florange text-ink text-lg font-bold rounded border-ink border-2 
                                                            hover:bg-ink hover:text-florange hover:border-florange 
                                                            transform transition-all duration-300 ease-out hover:scale-105 mb-4"
                                            >
                                                View in Figma
                                            </button>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    openModal(wireframes);
                                                }}
                                                className="px-6 py-3 bg-olivewhite text-ink text-lg font-bold rounded border-ink border-2 
                                                            hover:bg-ink hover:text-olivewhite hover:border-olivewhite 
                                                            transform transition-all duration-300 ease-out hover:scale-105"
                                            >
                                                View Image
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Takeaways Section */}
                    <section id="takeaways" className="container mx-auto pb-16 px-4 sm:px-8">
                        <h2 className="text-hmax font-ppSupply font-bold text-ink pt-16 mb-8">Takeaways</h2>
                        <div className="bg-neutral border-2 border-ink rounded-lg p-8">
                            <h3 className="text-h2 font-ppSupply font-bold text-ink mb-2">Reflection & Learnings</h3>
                            <p className="text-body text-gray-700 leading-relaxed mb-8">
                            This project pushed me to flex both independently and collaboratively. I sharpened my ability to spot UX issues, design with empathy, and synthesize research into real solutions. More than anything, it reinforced my belief that clear, thoughtful design can turn confusion into confidence—and that the best results come when you listen closely, test boldly, and adapt often.
                            </p>

                            <div className="space-y-8 mb-8">
                                <div className="flex items-start gap-4">
                                    <span className="text-redOrange font-bold text-2xl">•</span>
                                    <div>
                                        <h4 className="text-h4 font-bold text-ink mb-2">Trust Your Instincts, Validate With Users</h4>
                                        <p className="text-body text-gray-700">
                                            My initial heuristic evaluation identified key issues that were later validated through user testing. This reinforced the value of expert analysis as a starting point for user research.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <span className="text-redOrange font-bold text-2xl">•</span>
                                    <div>
                                        <h4 className="text-h4 font-bold text-ink mb-2">Balance Team Collaboration & Personal Accountability</h4>
                                        <p className="text-body text-gray-700">
                                            Working both independently and as part of a team taught me how to advocate for my design decisions while integrating others' perspectives and expertise.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <span className="text-redOrange font-bold text-2xl">•</span>
                                    <div>
                                        <h4 className="text-h4 font-bold text-ink mb-2">Practice Empathy & Clarity</h4>
                                        <p className="text-body text-gray-700">
                                            This case study showed me the value of being flexible, curious, and grounded in both empathy and clarity when solving complex design problems.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 text-center">
                                <p className="text-h4 font-ppSupply font-bold text-ink mb-6">
                                    Still curious?
                                </p>
                                <p className="text-body text-gray-700 mb-8">
                                    Download our full UX research report for a deep dive into our process and wireframes.
                                </p>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-default inline-block"
                                >
                                    View Full Report <MdArrowOutward className="inline-block ml-1" />
                                </a>
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
                            alt="London Drugs Project"
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

export default LondonDrugs;