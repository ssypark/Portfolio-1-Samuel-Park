import React, { useEffect, useRef, useState } from "react";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import { Captions } from "yet-another-react-lightbox/plugins";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);
import AOS from "aos";
import "aos/dist/aos.css";
import { MdArrowOutward } from "react-icons/md";

import { use } from "react";

// IMAGE IMPORTS
import fullMockup from "../../../assets/conscious-connections/full-mockup.png";
import phoneMockup from "../../../assets/conscious-connections/phone-mockup.png";
import mbMockup from "../../../assets/conscious-connections/mb-mockup.png";
import clientTakeaway from "../../../assets/conscious-connections/client-takeaway.png";
import datingApp from "../../../assets/conscious-connections/dating-app.jpg";
import SWOT from "../../../assets/conscious-connections/swot.png";
import persona from "../../../assets/conscious-connections/user-research.png";
import hmw from "../../../assets/conscious-connections/hmw.png";
import matrix from "../../../assets/conscious-connections/design-matrix.png";
import moodboard from "../../../assets/conscious-connections/moodboard.png";
import logoDraft from "../../../assets/conscious-connections/logo-drafts.png";
import logoAi from "../../../assets/conscious-connections/ai-drafts.png";
import logoFinal from "../../../assets/conscious-connections/logo-simple-CC.png";
import sitemap from "../../../assets/conscious-connections/site-map.png";
import userflow from "../../../assets/conscious-connections/userflow.png";
import crazy8 from "../../../assets/conscious-connections/crazy-8.png";
import prototype from "../../../assets/conscious-connections/hifi-wireframes.png";

const topics = [

  { id: "challenge", label: "The Challenge" },
  { id: "research", label: "Research & Strategy" },
  { id: "branding", label: "Branding & Visual Identity" },
  { id: "ui-design", label: "UI Design & Prototyping" },
  { id: "outcome", label: "Final Prototype & Takeaways" },
];



function ConsciousConnections() {
  const bulletRefs = useRef({});
  const [activeSection, setActiveSection] = useState(null);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);


  // Define image sources for lightbox
  const lightboxImages = [
    { src: hmw, title: "How Might We Statements" },
    { src: SWOT, title: "SWOT Analysis" },
    { src: matrix, title: "Design Matrix" },
    { src: persona, title: "User Persona" },
    { src: sitemap, title: "Site Map" },
    { src: userflow, title: "User Flow" },
    { src: moodboard, title: "Moodboard" },
    { src: logoDraft, title: "Logo Drafts" },
    { src: logoAi, title: "Ai Generated Logos" },
    { src: logoFinal, title: "Finalized Logo" },
    { src: crazy8, title: "Crazy 8s Exercise" },
    { src: clientTakeaway, title: "Client Takeaway" },
    { src: prototype, title: "Hifi Wireframes" }
  ];

  // Function to open lightbox at a specific index
  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: true,
    });
  }, []);


  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const highlightSection = () => {
      let scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", highlightSection);
    return () => window.removeEventListener("scroll", highlightSection);
  }, []);

  useEffect(() => {
    topics.forEach((topic) => {
      const bulletEl = bulletRefs.current[topic.id];

      if (bulletEl) {
        if (activeSection === topic.id) {
          gsap.fromTo(
            bulletEl,
            {
              x: -20,  // Start from far left
              opacity: 0,
              scale: 0.5
            },
            {
              x: 0,    // Slide to original position
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

  const handleScroll = (e, id) => {
    e.preventDefault();
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: `#${id}`, offsetY: 0 },
      ease: "power2.out"
    });
  };

  return (
    <div>
      {/* HERO SECTION */}
      <div style={{ backgroundColor: '#8F1523' }}
        className="relative pt-24 p-8 bg-no-repeat border-b border-ink flex flex-col justify-end">

        {/* Hero Image */}
        <div className="mt-8 w-full flex justify-center">
          <img
            src={mbMockup}
            alt="Conscious Connections Mockup"
            className="w-[50%] mb-8"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
          />
        </div>

        {/* Bottom-Left Header */}
        <div className="text-left mb-8 z-10">
          <h1
            className="text-h1 font-bold font-ppSupply text-offwhite"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            Reimagining Digital Dating
          </h1>
        </div>

        {/* Role, Date, and Project Details */}
        <div className="flex sm:flex-row items-center sm:items-start justify-between gap-8 pb-8 rounded-md">
          {/* Role and Date */}
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-8">
            <div className="mb-4 sm:mb-0">
              <h2 className="text-body   font-bold text-offwhite">Goal</h2>
              <p className="text-base   text-offwhite">
                Website Redesign <br />for Conscious Connections
              </p>
            </div>
            <div className="mb-4 sm:mb-0">
              <h2 className="text-body   font-bold text-offwhite">Role</h2>
              <p className="text-base   text-offwhite">
                Product Designer
                <br />
                UI/UX Designer
              </p>
            </div>
            <div className="mb-4 sm:mb-0">
              <h2 className="text-body   font-bold text-offwhite">Date</h2>
              <p className="text-base text-offwhite">2025</p>
            </div>
            <div className="mb-4 sm:mb-0">
              <h2 className="text-body   font-bold text-offwhite">Duration</h2>
              <p className="text-base   text-offwhite">3 Days</p>
            </div>
            <div className="mb-4 sm:mb-0">
              <h2 className="text-body   font-bold text-offwhite">Tools</h2>
              <p className="text-base   text-offwhite">
                Figma
                <br />
                Adobe Illustrator
                <br />
                Procreate
              </p>
            </div>
          </div>

          {/* View Prototype CTA */}
          <div className="mt-4 sm:mt-0">
            <a
              href="https://www.figma.com/proto/IltuxfmJxR7Ox5LduXSGmu/FLUI-Hackathon---Conscious-Connections?page-id=418%3A12564&node-id=418-15554&p=f&viewport=446%2C605%2C0.05&scaling=scale-down&content-scaling=fixed&starting-point-node-id=418%3A15554&embed-host=share"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3  text-ink bg-offwhite font-bold text-body rounded border border-ink hover:bg-florange transition duration-300"
              aria-label="View Prototype" 
            >
              View Prototype <MdArrowOutward size={18} />
            </a>
          </div>

        </div>
      </div>

      <div className="flex max-w-container mx-auto md:gap-14 p-4 bg-olivewhite ">
        {/* Sidebar Navigation */}
        <div className="hidden md:block md:sticky md:top-10 md:h-fit md:py-12 md:pr-10 ">
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
        {/* Content Sections */}
        <div className="flex-1 space-y-20  border-ink p-8 pt-16">
          <div className="max-w-4xl text-left col-span-3 border p-8 rounded-md">
            <h2 className="text-h2 font-bold text-ink mb-4">
              Overview
            </h2>

            <p className="text-body text-gray-700">
              <strong>How can we make online dating more meaningful? </strong>
              The client’s vision for <strong>Conscious Connections</strong> was to create
              <strong> an intentional, premium dating platform</strong> that fosters deeper
              relationships—moving beyond superficial swiping.
            </p>
            <p className="text-body text-gray-700 mt-4">
              Our goal was to <strong>design an engaging, seamless experience</strong> that
              <strong> educates users on compatibility</strong>, simplifies onboarding, and encourages
              long-term engagement through a carefully crafted UI.
            </p>
          </div>
          {/* THE CHALLENGE */}
          <section id="challenge" className=" pt-16">
            <h2 className="text-h2 font-bold text-redwood">The Challenge</h2>
            <div className="flex flex-col items-center gap-8 mt-8 lg:flex-row">
              {/* Text Block */}
              <div className="">
                <p className="mt-2 text-body">
                  Modern dating apps focus on <strong>quantity over quality</strong>, leading to
                  <strong> superficial interactions</strong> and fleeting connections. Conscious Connections aimed to
                  <strong> redefine the dating experience</strong>, prioritizing <strong>emotional intelligence, shared values,
                    and deep compatibility</strong>.
                </p>
                <p className="my-8 font-bold text-h6">
                  How do we create a platform that fosters intentional, meaningful relationships instead of fast-paced,
                  swipe-based connections?
                </p>
                <p className="mt-4 text-body">
                  Our team was tasked with designing an experience that <strong> inspires trust </strong> while balancing
                  <strong> luxury, accessibility, and usability</strong>. The goal was to create a premium dating platform
                  that <strong>resonates emotionally</strong> while being approachable and intuitive.
                </p>
                {/* Image Below */}
                <div className="w-full text-right justify-center py-8">
                  <img src={datingApp} alt="A Person Lying on Sofa Holding a Smartphone with a Person's Profile on Screen" className="" />
                  <figcaption className="text-sm text-gray-500 mt-2">
                    Photo by <a href="https://www.pexels.com/@cottonbro/" target="_blank" className="underline" aria-label="Cottonbro Studio" >Cottonbro Studio</a> on Pexels.
                  </figcaption>
                </div>
              </div>

            </div>

          </section>

          {/* RESEARCH & STRATEGY */}
          <section id="research" className="pt-16">
            <h2 className="text-h2 font-bold text-redwood">Research & Strategy</h2>
            <div className="flex flex-col gap-8">
              {/* Text Content */}
              <div className="w-full">
                <p className="mt-2 text-body">
                  Our team started by analyzing the biggest problem in online dating:
                  <strong> superficial connections</strong>. We conducted competitive analysis, user research,
                  and persona mapping to uncover the pain points that Conscious Connections aimed to solve.
                </p>
                <p className="my-8 font-bold text-h6">
                  How do you transform a dating app from a swipe-and-forget experience
                  to a platform for deep, intentional relationships?
                </p>
                <p className="mt-4 text-body">
                  Our goal was to rethink the experience from the ground up,
                  designing for <strong>meaningful engagement</strong>, not just attraction.
                </p>
              </div>

              {/* Image Section */}
              {/* Combined Caption */}
              <div className="w-full text-left text-ink mt-4">
                <p className="text-body leading-relaxed">
                  The <strong>How Might We (HMW) statements</strong> guided our design process by framing key challenges in a way that encouraged
                  innovative problem-solving. These helped us refine our approach to <strong>onboarding, branding, and long-term engagement</strong>,
                  ensuring the platform fosters <strong>intentional, meaningful connections</strong>.
                </p>
                <p className="text-body leading-relaxed mt-4">
                  Meanwhile, the <strong>SWOT analysis</strong> provided a strategic foundation by evaluating <strong>strengths, weaknesses,
                    opportunities, and threats</strong>. This allowed us to position <strong>Conscious Connections</strong> as a
                  <strong> premium yet accessible dating platform</strong> while addressing core user pain points and competitive challenges.
                </p>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 place-items-center">

                {/* HMW Statements */}
                <div className="w-full max-w-[500px] md:max-w-[600px] flex flex-col items-end">
                  <img
                    src={hmw}
                    alt="How Might We Statements"
                    className="w-full cursor-pointer"
                    onClick={() => openLightbox(0)}
                  />
                  <figcaption className="text-sm text-gray-500 mt-2 text-right w-full max-w-[500px] md:max-w-[600px]">
                    <strong>HMW Statements</strong> – Guided our design process by framing key challenges in a way
                    that encouraged <strong>innovative problem-solving</strong>.
                  </figcaption>
                </div>

                {/* SWOT Analysis */}
                <div className="w-full max-w-[500px] md:max-w-[600px] flex flex-col items-end">
                  <img
                    src={SWOT}
                    alt="SWOT Analysis"
                    className="w-full cursor-pointer"
                    onClick={() => openLightbox(1)}
                  />
                  <figcaption className="text-sm text-gray-500 mt-2 text-right w-full max-w-[500px] md:max-w-[600px]">
                    <strong>SWOT Analysis</strong> – Evaluated <strong>strengths, weaknesses, opportunities, and threats</strong>
                    to strategically position Conscious Connections.
                  </figcaption>
                </div>

              </div>

              {/* Content Section */}
              <div className="w-full text-left text-ink mt-16">
                <p className="text-body leading-relaxed">
                  The <strong>Design Matrix</strong> played a crucial role in structuring our design decisions. By mapping out key user needs,
                  business goals, and functional requirements, we were able to evaluate various approaches and prioritize solutions that
                  aligned with both <strong>usability and brand vision</strong>.
                </p>
                <p className="text-body leading-relaxed mt-4">
                  Meanwhile, the <strong>User Personas</strong> provided an essential framework for understanding our audience.
                  By defining detailed user archetypes, we could tailor the platform’s onboarding, UI, and features to foster deeper,
                  <strong> more meaningful connections</strong>—ensuring the design catered to real user needs rather than assumptions.
                </p>
              </div>

              {/* Image Grid */}
              <div className="py-8 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 ">
                {/* User Personas */}
                <div className="w-full max-w-[500px] text-right">
                  <img
                    src={persona}
                    alt="User Personas"
                    className="w-full max-w-[500px] md:max-w-[600px] cursor-pointer"
                    onClick={() => openLightbox(3)}
                  />
                  <figcaption className="text-sm text-gray-500 mt-2">
                    <strong>User Personas</strong>
                  </figcaption>
                </div>

                {/* Design Matrix */}
                <div className="w-full max-w-[500px] text-right">
                  <img
                    src={matrix}
                    alt="Design Matrix"
                    className="w-full max-w-[500px] md:max-w-[600px] cursor-pointer"
                    onClick={() => openLightbox(2)}
                  />
                  <figcaption className="text-sm text-gray-500 mt-2">
                    <strong>Design Matrix</strong>
                  </figcaption>
                </div>
              </div>
              {/* Refining the User Experience */}
              <div className="w-full text-left text-ink mt-16">
                <p className="text-body leading-relaxed">
                  After identifying key pain points through <strong>competitive analysis</strong> and <strong>user research</strong>,
                  we mapped out a <strong>structured navigation system</strong> to ensure a seamless and intuitive experience.
                  Our goal was to create a <strong>clear, engaging, and efficient flow</strong> that aligns with the
                  <strong> platform’s premium and intentional dating approach</strong>.
                </p>
                <p className="text-body leading-relaxed mt-4">
                  To achieve this, we developed:
                </p>
                <ul className="list-disc ml-6 text-body">
                  <li><strong>A Site Map</strong> – Organizing core sections to define how users navigate the platform.</li>
                  <li><strong>A User Flow</strong> – Mapping out essential interactions, such as onboarding, profile setup, and engagement touchpoints.</li>
                </ul>
                <p className="text-body leading-relaxed mt-4">
                  These foundational documents helped us refine <strong>UI decisions, optimize accessibility, and ensure a frictionless user journey</strong>.
                </p>
              </div>
              {/* Image Grid for Site Map & User Flow */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 mx-auto">

                {/* User Flow */}
                <div className="w-full max-w-[500px] md:max-w-[600px] flex flex-col items-end">
                  <img
                    src={userflow}
                    alt="User Flow"
                    className="w-full cursor-pointer"
                    onClick={() => openLightbox(5)}
                  />
                  <figcaption className="text-sm text-gray-500 mt-2 text-right w-full max-w-[500px] md:max-w-[600px]">
                    <strong>User Flow</strong> – Mapping essential interactions to optimize <strong>user engagement</strong>.
                  </figcaption>
                </div>

                {/* Site Map */}
                <div className="w-full max-w-[500px] md:max-w-[600px] flex flex-col items-end">
                  <img
                    src={sitemap}
                    alt="Site Map"
                    className="w-full cursor-pointer"
                    onClick={() => openLightbox(4)}
                  />
                  <figcaption className="text-sm text-gray-500 mt-2 text-right w-full max-w-[500px] md:max-w-[600px]">
                    <strong>Site Map</strong> – Structuring the navigation for an <strong>intuitive user experience</strong>.
                  </figcaption>
                </div>
              </div>
            </div>
          </section>

          {/* Branding & Visual Identity Section */}
          <section id="branding" className="min-h-screen pt-24">
            <h2 className="text-h2 font-bold text-redwood">Branding & Visual Identity</h2>

            {/* Content Block */}
            <div className="w-full text-left text-ink mt-4">
              <p className="text-body leading-relaxed">
                Conscious Connections' branding needed to evoke a sense of <strong>luxury, authenticity, and warmth</strong>.
                The visual identity had to balance <strong>exclusivity and approachability</strong>, ensuring it remained
                <strong> premium yet inviting</strong>.
              </p>
              <p className="text-body leading-relaxed mt-4">
                To establish the brand’s <strong>tone and direction</strong>, we created a <strong>mood board</strong> that explored
                variations of <strong>elegance, warmth, and sophistication</strong>. This helped define the
                <strong> visual narrative</strong> before moving into logo development.
              </p>
              <p className="text-body leading-relaxed mt-4">
                The <strong>logo design</strong> process involved multiple <strong>drafting stages</strong>. I first created
                initial sketches, refining them in <strong>Illustrator</strong> to explore different design directions. To expand on these ideas,
                <strong> AI-assisted exploration</strong> was used to generate additional forms and styles.
              </p>
              <p className="text-body leading-relaxed mt-4">
                Ultimately, the <strong>final logo</strong> was crafted entirely in <strong>Illustrator</strong>, ensuring
                that it aligned with the brand’s <strong>personality, scalability, and digital usability</strong>.
              </p>
            </div>

            {/* Mood Board */}
            <div className="w-full flex flex-col items-end py-8 max-w-[500px] md:max-w-[800px] mx-auto">
              <img
                src={moodboard}
                alt="Mood Board"
                className="w-full cursor-pointer"
                onClick={() => openLightbox(6)}
              />
              <figcaption className="text-sm text-gray-500 mt-2 text-right">
                A curated <strong>mood board</strong> to explore variations in <strong>tone, style, and brand direction</strong>.
              </figcaption>
            </div>

            {/* Logo Draft & AI Concepts (Side by Side) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
              {/* My Logo Draft */}
              <div className="w-full flex flex-col items-right">
                <img
                  src={logoDraft}
                  alt="Initial Logo Draft"
                  className=" cursor-pointer "
                  onClick={() => openLightbox(7)}
                />
                <figcaption className="text-sm text-gray-500 mt-2 text-right">
                  My <strong>initial logo draft</strong>, created in <strong>Illustrator</strong>.
                </figcaption>
              </div>

              {/* AI-Assisted Concept Exploration */}
              <div className="w-full flex flex-col items-right">
                <img
                  src={logoAi}
                  alt="AI-Assisted Logo Concepts"
                  className=" cursor-pointer"
                  onClick={() => openLightbox(8)}
                />
                <figcaption className="text-sm text-gray-500 mt-2 text-right">
                  <strong>AI-assisted logo concepts</strong> used for additional exploration.
                </figcaption>
              </div>
            </div>

            {/* Final Logo Section */}
            <div className="w-full flex flex-col items-center py-8">
              <img
                src={logoFinal}
                alt="Final Logo Design"
                className="w-full max-w-[500px] cursor-pointer "
                onClick={() => openLightbox(9)}
              />
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                The <strong>final logo</strong>, designed in <strong>Illustrator</strong>, refined to align with the
                brand's <strong>identity and usability</strong>.
              </figcaption>
            </div>
          </section>

          {/* UI DESIGN & PROTOTYPING */}
          <section id="ui-design" className="w-full pt-24">
            <h2 className="text-h2 font-bold text-redwood">UI Design & Prototyping</h2>
            <div className="flex flex-col gap-8">

              {/* Text Content */}
              <div className="w-full">
                <p className="mt-2 text-body">
                  The UI needed to feel <strong>effortless, immersive, and premium</strong>. We designed with a
                  <strong> mobile-first approach</strong>, ensuring seamless interactions across devices.
                </p>
                <p className="mt-8 font-bold text-h6">The Process</p>
                <p className="mt-4 text-body">
                  The night before our <strong>client meeting</strong>, we conducted a <strong>Crazy 8s brainstorming session</strong> to rapidly generate
                  diverse layout ideas. This exercise allowed us to explore multiple directions and identify <strong>key design patterns</strong> before presenting
                  our concepts. The following morning, we synthesized our strongest ideas into <strong>low-fidelity wireframes</strong> and discussed them with
                  the client. Their feedback guided our <strong>high-fidelity prototyping</strong>, ensuring alignment with <strong>user needs and business goals</strong>.
                </p>
              </div>

              {/* Image Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 mx-auto">

                {/* Crazy 8s Sketches */}
                <div className="w-full flex flex-col items-end">
                  <img
                    src={crazy8}
                    alt="Crazy 8s Brainstorming"
                    className="w-full max-w-[500px] md:max-w-[600px] cursor-pointer "
                    onClick={() => openLightbox(10)}
                  />
                  <figcaption className="text-sm text-gray-500 mt-2 text-right">
                    <strong>Crazy 8s sketches</strong> from our <strong>night-before brainstorming session</strong>.
                  </figcaption>
                </div>

                {/* Client Takeaways */}
                <div className="w-full flex flex-col items-end">
                  <img
                    src={clientTakeaway}
                    alt="Client Meeting Takeaways"
                    className="w-full max-w-[500px] md:max-w-[600px] cursor-pointer "
                    onClick={() => openLightbox(11)}
                  />
                  <figcaption className="text-sm text-gray-500 mt-2 text-right">
                    <strong>Key takeaways</strong> from our <strong>client meeting</strong>, influencing our <strong>design decisions</strong>.
                  </figcaption>
                </div>

              </div>

            </div>
          </section>

          {/* FINAL PROTOTYPE & TAKEAWAYS */}
          <section id="outcome" className="min-h-screen pt-24">
            <h2 className="text-h2 font-bold text-redwood">Final Prototype & Takeaways</h2>
            <div className="flex flex-col gap-8">

              {/* Text Content */}
              <div className="w-full">
                <p className="mt-2 text-body">
                  With our <strong>client meeting takeaways</strong> in mind and the submission deadline rapidly approaching,
                  our team focused on aligning the <strong>high-fidelity prototype</strong> with the client’s expectations.
                  We aimed to design an interface that would <strong>instantly captivate users</strong>, balancing <strong>visual elegance and functionality</strong>.
                </p>
                <p className="mt-4 text-body">
                  This final stage involved refining <strong>typography, color schemes, and interactive elements</strong> to ensure
                  a <strong>premium yet intuitive experience</strong>. Every design decision was made with the goal of enhancing <strong>usability </strong>
                  while maintaining the brand’s identity and vision.
                </p>
              </div>

              {/* Image Section */}
              <div className="w-full flex flex-col items-center py-8">
                <div className="relative w-full max-w-[900px] md:max-w-[1200px]">
                  <img
                    src={prototype}
                    alt="Final Hi-Fi Wireframes"
                    className="w-full cursor-pointer "
                    onClick={() => openLightbox(12)}
                  />
                  <figcaption className="text-sm text-gray-500 mt-2 text-right max-w-full">
                    <strong>Final high-fidelity prototype</strong>, designed to create a <strong>seamless, intuitive, and engaging user experience</strong>.
                  </figcaption>
                </div>
              </div>
            </div>

            {/* Conclusion Section */}
            <div id="conclusion" className="pt-24 items-center">
              {/* Centered Header */}
              <div className="w-full flex justify-center">
                <h2 className="text-h2 font-bold text-ink text-center">Reflections & Key Takeaways</h2>
              </div>
              <div className="max-w-full md:max-w-3xl mx-auto text-body text-gray-700 mt-4">
                <p>
                  This project pushed us to think critically about how to balance
                  <strong> emotional engagement with seamless usability</strong>.
                  Working under tight constraints, we embraced an iterative approach,
                  refining ideas through rapid brainstorming, testing, and feedback loops.
                </p>
                <p className="mt-4">
                  From understanding user pain points to translating insights into a
                  <strong> visually and functionally compelling experience</strong>,
                  we navigated challenges by staying flexible, collaborative, and
                  focused on delivering an experience that felt both
                  <strong> meaningful and intuitive</strong>.
                </p>
              </div>

              {/* Key Insights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12 text-left">

                {/* User-Centered Thinking */}
                <div>
                  <h3 className="text-h6 font-bold text-ink">Designing for Depth</h3>
                  <p className="text-body text-gray-700 mt-2">
                    Creating a dating platform that prioritizes <strong>quality over quantity</strong> meant shifting
                    away from surface-level interactions. Every design choice was made with the goal of fostering
                    <strong> deeper, more intentional connections</strong>.
                  </p>
                </div>

                {/* Collaboration Under Pressure */}
                <div>
                  <h3 className="text-h6 font-bold text-ink">From Sketch to Screen</h3>
                  <p className="text-body text-gray-700 mt-2">
                    Our <strong>Crazy 8s session</strong> the night before the client meeting allowed us to explore
                    <strong> multiple directions quickly</strong>. By synthesizing insights, we built
                    a strong foundation for high-fidelity prototyping in a limited timeframe.
                  </p>
                </div>

                {/* Adaptability & Growth */}
                <div>
                  <h3 className="text-h6 font-bold text-ink">Evolving in Real Time</h3>
                  <p className="text-body text-gray-700 mt-2">
                    Adapting to feedback, unexpected scope changes, and tight deadlines reinforced
                    the importance of <strong>flexibility in design</strong>. Staying open to iteration
                    led to stronger, more refined solutions.
                  </p>
                </div>

              </div>
            </div>
            {/* Prototype Embed Section */}
            <div className="w-full flex flex-col items-center py-16 ">
              <h2 className="text-h2 font-bold text-ink text-center mb-6">
                Interactive Prototype
              </h2>
              <p className="text-body text-gray-700 text-center max-w-2xl">
                Explore the final <strong>high-fidelity prototype</strong>, designed to create a
                <strong> seamless, intuitive, and engaging user experience</strong>.
              </p>

              {/* Embedded Figma Prototype */}
              <div className="w-full flex justify-center mt-8">
                <iframe
                  style={{ border: "1px solid rgba(0, 0, 0, 0.1)", borderRadius: "8px" }}
                  width="800"
                  height="450"
                  src="https://embed.figma.com/proto/IltuxfmJxR7Ox5LduXSGmu/FLUI-Hackathon---Conscious-Connections?page-id=418%3A12564&node-id=418-15554&p=f&viewport=446%2C605%2C0.05&scaling=scale-down&content-scaling=fixed&starting-point-node-id=418%3A15554&embed-host=share"
                  allowFullScreen
                  className="w-full max-w-[900px] rounded-lg shadow-md"
                ></iframe>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Lightbox Component */}
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={lightboxImages}
          index={currentIndex}
          plugins={[Captions]}
        />
      )}
    </div>
  );
}

export default ConsciousConnections;