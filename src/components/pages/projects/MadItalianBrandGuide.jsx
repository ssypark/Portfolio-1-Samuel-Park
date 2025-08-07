import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import AOS from "aos";
import "aos/dist/aos.css";
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import '../../../css/lightbox.css';
import { MdArrowOutward } from "react-icons/md";
import Contact from "../../Contact";

// Mad Italian Image Imports
import madItalianHero from "../../../assets/mad-italian/mad-italian-hero.png";
import madItalianExterior from "../../../assets/mad-italian/maditalian-exterior.jpeg";
import madItalianWordmark from "../../../assets/mad-italian/wordmark.png";
import madItalianLogo from "../../../assets/mad-italian/logo.png";
import madItalianSplatter from "../../../assets/mad-italian/splatter.png";
import madItalianMoodboard from "../../../assets/mad-italian/moodboard.png";
import madItalianOldLogo from "../../../assets/mad-italian/old-logo.jpg";
import kilnRegular from "../../../assets/mad-italian/kiln-regular.png";
import antonio from "../../../assets/mad-italian/antonio.png";
import inter from "../../../assets/mad-italian/inter-regular.png";


import logoBlack from "../../../assets/logo-black.svg";
import arrowSide from "../../../assets/arrow-side.png";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const topics = [
    { id: "context", label: "Context" },
    { id: "approach", label: "Approach" },
    { id: "outcome", label: "Outcome" },
    { id: "takeaways", label: "Takeaways" },
];

function MadItalianBrandGuide() {
    const bulletRefs = useRef({});
    const [activeSection, setActiveSection] = useState('context');
    const sidebarRef = useRef(null);


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
    useEffect(() => {
  if (!sidebarRef.current) return;

  gsap.fromTo(
    sidebarRef.current,
    { x: -100, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sidebarRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    }
  );
}, []);
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

    const ColorSwatch = ({ name, hex, rgb, cmyk, textColor }) => (
        <div className={`border border-[${hex}] rounded overflow-hidden`}>
            <div className="h-24 flex items-center justify-center px-3" style={{ backgroundColor: hex }}>
                <p className="font-bold text-base" style={{ color: textColor }}>{name}</p>
            </div>
            <div className="bg-white p-3 text-xs text-ink leading-snug">
                <p><strong>C:</strong> {cmyk}</p>
                <p><strong>RGB:</strong> {rgb}</p>
                <p><strong>Hex:</strong> {hex}</p>
            </div>
        </div>
    );
    return (
        <div className="bg-olivewhite pb-24 min-h-screen">
            <Helmet>
                <title>The Mad Italian Brand Guide | Samuel Park</title>
                <meta
                    name="description"
                    content="A comprehensive brand identity system for The Mad Italian pizza restaurant, featuring custom typography, color palette, and logo variations."
                />
                <meta name="author" content="Samuel Park" />
            </Helmet>

            {/* Hero Section */}
            <div className="relative bg-gradient-to-b from-gray-100 to-olivewhite">
                {/* Hero Image */}
                <div className="container mx-auto pt-48 pb-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-8">
                        <img
                            src={madItalianHero}
                            alt="The Mad Italian Brand Guide"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                {/* Project Title, Description and Details */}
                <div className="container mx-auto pb-16">
                    <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto px-4 sm:px-8">
                        {/* Left Column - Title and Description */}
                        <div className="lg:w-2/3">
                            <h1 className="text-6xl font-bold font-ppSupply text-ink mb-4">
                                The Mad Italian
                            </h1>
                            <h2 className="text-2xl font-bold font-ppSupply text-ink mb-4">
                                Brand Style Guide
                            </h2>
                            <p className="text-xl text-gray-600 mb-8">
                                A comprehensive brand identity system for Langley's neighborhood pizza restaurant, capturing rustic authenticity with contemporary appeal through custom typography, flexible logo variations, and warm color palette.
                            </p>

                            {/* CTA Button */}
                            <div>
                                <a
                                    href="https://www.figma.com/slides/XytWlhM7wyWWrZFqP3rRoJ/The-Mad-Italian?node-id=1-42&t=HuZL0qA8RI8njhfI-1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-default inline-flex items-center gap-2"
                                    aria-label="View Brand Guide PDF"
                                >
                                    View Brand Guide <MdArrowOutward size={18} />
                                </a>
                            </div>
                        </div>

                        {/* Right Column - Project Details */}
                        <div className="lg:w-1/3">
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-sm font-bold text-ink mb-2">Duration</h3>
                                    <p className="text-gray-600">3 Weeks</p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-ink mb-2">Date</h3>
                                    <p className="text-gray-600">Spring 2025</p>
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-ink mb-2">Role</h3>
                                    <div className="text-gray-600 space-y-1">
                                        <p>Art Direction</p>
                                        <p>Brand Strategy</p>
                                    </div>
                                </div>
                       
                                <div>
                                    <h3 className="text-sm font-bold text-ink mb-2">Client</h3>
                                    <div className="text-gray-600 space-y-1">
                                        <p>The Mad Italian</p>
                                        <p>Restaurant</p>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-ink mb-2">Disciplines</h3>
                                    <div className="text-gray-600 space-y-1">
                                        <p>Brand strategy</p>
                                        <p>Logo design</p>
                                        <p>Typography</p>
                                        <p>Brand guidelines</p>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-ink mb-2">Tools</h3>
                                    <div className="text-gray-600 space-y-1">
                                        <p>Adobe Illustrator</p>
                                        <p>Figma</p>
                                        <p>Procreate</p>
                                        <p>Adobe Photoshop</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section with Sidebar */}
            <div className="flex container mx-auto md:gap-8 px-2 bg-olivewhite">
               <div
  className="hidden md:block md:sticky md:top-10 md:h-fit md:py-12 pl-8"
  ref={sidebarRef}
>
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
          className={`sidebar pl-2 text-gray-500 group-hover:text-redOrange transition-all duration-300 text-md relative
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
                            <div className="flex flex-col lg:flex-row gap-12 items-start bg-olivewhite">
                                <div className="lg:w-2/3">
                                    <p className="text-body text-gray-700 leading-relaxed mb-8">
                                        The Mad Italian's owner reached out to our team knowing his restaurant had great pizza, but his online presence wasn't telling that story. His logo was made in Canva, his colors felt random, and he wasn't sure how to talk to customers in a way that felt authentically him.
                                    </p>
                                    <p className="text-body text-gray-700 leading-relaxed mb-8">
                                        Over three weeks, we spent time with the owner understanding his vision through multiple meetings and feedback sessions. I focused on the brand system—creating logo variations, a cohesive color palette, typography that felt handcrafted but professional, and most importantly, a voice that captured what made The Mad Italian special: that neighborly, easygoing pride you feel when you know you're serving the best pizza in town.
                                    </p>
                                    <p className="text-body text-gray-700 leading-relaxed mb-8">
                                        Through several iterations and client reviews, we refined the system to balance our design vision with his comfort level. The goal wasn't to reinvent the restaurant, but to give him tools that would help him show up consistently and confidently across all touchpoints.
                                    </p>
                                </div>
                                <div className="lg:w-1/3">
                                    <img
                                        src={madItalianExterior}
                                        alt="The Mad Italian restaurant exterior"
                                        className="rounded-lg border border-ink w-full"
                                    />
                                    <p className="text-sm text-gray-500 mt-2 text-center">
                                        The Mad Italian's Langley location
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Approach Section */}
                    <section id="approach">
                        <div className="container mx-auto py-16 px-4 sm:px-8" data-aos="fade-up">
                            <h2 className="text-hmax font-ppSupply font-bold text-ink mb-4">Approach</h2>
                            <p className="text-h6 text-gray-700 leading-relaxed mb-16">
                                I started by establishing The Mad Italian's personality: neighborly, easygoing, reliable, and proud. This voice needed to feel like talking with friends while maintaining professionalism across all customer touchpoints—from social media to in-store signage.
                            </p>

                            <div className="space-y-16">
                                <div>
                                    <div className="bg-neutral inline-block px-3 py-1 rounded-full text-sm font-bold text-ink mb-4">
                                        Brand Voice
                                    </div>
                                    <h3 className="text-h3 font-ppSupply font-bold text-ink mb-4">
                                        How We Wanted the Brand to Talk
                                    </h3>
                                    <p className="text-body text-gray-700 leading-relaxed mb-8">
                                        The voice had to feel like a conversation at the counter — casual but clear, confident but never pushy. We defined four traits and wrote clear guidelines so the tone would hold up across every customer interaction.
                                    </p>

                                    {/* Voice Table */}
                                    <div className="overflow-x-auto">
                                        <div className="min-w-full border-t border-b border-ink divide-y divide-gray-300 text-left">
                                            {/* Table Header */}
                                            <div className="grid grid-cols-4 font-bold text-ink py-3 px-2 text-sm uppercase tracking-wider">
                                                <div>Voice</div>
                                                <div>Description</div>
                                                <div>Do</div>
                                                <div>Don't</div>
                                            </div>

                                            {/* Voice Traits */}
                                            {[
                                                {
                                                    label: "NEIGHBOURLY",
                                                    desc: "Warm, inviting, approachable",
                                                    do: "Speak in a friendly, upbeat, and welcoming way",
                                                    dont: "Come off as stiff or insincere",
                                                },
                                                {
                                                    label: "EASYGOING",
                                                    desc: "Fun, relaxed, easy to talk to",
                                                    do: "Treat everyone like a friend",
                                                    dont: "Sound indifferent or disinterested",
                                                },
                                                {
                                                    label: "RELIABLE",
                                                    desc: "Dependable, consistent, trustworthy",
                                                    do: "Be helpful, honest, and consistent",
                                                    dont: "Be overly serious or rigid",
                                                },
                                                {
                                                    label: "PROUD",
                                                    desc: "Confident, spirited, authentic",
                                                    do: "Be genuine and proudly ourselves",
                                                    dont: "Be arrogant or sarcastic",
                                                },
                                            ].map((trait) => (
                                                <div
                                                    key={trait.label}
                                                    className="grid grid-cols-4 py-4 px-2 text-gray-700 text-sm"
                                                >
                                                    <div className="font-bold text-redOrange">{trait.label}</div>
                                                    <div>{trait.desc}</div>
                                                    <div>{trait.do}</div>
                                                    <div>{trait.dont}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Deliverables Section */}
                    <section id="outcome">
                        <div className="container mx-auto py-16 px-4 sm:px-8">
                            <h2 className="text-hmax font-ppSupply font-bold text-ink mb-2">Outcome</h2>
                            <p className="text-h6 text-gray-700 leading-relaxed mb-16">
                                The final brand system provides The Mad Italian with all the tools needed to maintain consistent, engaging communication across every customer touchpoint—from storefront signage to social media.
                            </p>

                            <div className="space-y-24">
                                {/* Logo System */}
                                <div className="space-y-12">
                                      
                                    <div>
                                        <div className="bg-neutral inline-block px-3 py-1 rounded-full text-sm font-bold text-ink mb-4">
                                        Logo System
                                    </div>
                                        <h3 className="text-h3 font-ppSupply font-bold text-ink mb-4">What Goes on the Pizza Box Matters</h3>
                                        <p className="text-body text-gray-700 leading-relaxed mb-6 max-w-3xl">
                                            We created a flexible logo system with three variations—each designed for different uses, all keeping the same recognizable identity.
                                        </p>
                                    </div>

                                    {/* Logo Layout - Large Primary Left, Stacked Right */}
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                        {/* Left Column - Primary Logo Large */}
                                        <div className="flex flex-col items-center">
                                            <img
                                                src={madItalianLogo}
                                                alt="Primary Tomato Logo"
                                                className="w-full max-w-[450px] mb-6"
                                            />
                                            <h4 className="text-h5 font-bold text-ink mb-2">Primary tomato mark</h4>
                                            <p className="text-sm text-gray-600 text-center">
                                                Used for signage, packaging, and any high-impact placement.
                                            </p>
                                        </div>

                                        {/* Right Column - Secondary Logos Stacked */}
                                        <div className="space-y-8">
                                            {/* Splatter Logo */}
                                            <div className="flex flex-col items-center">
                                                <img
                                                    src={madItalianSplatter}
                                                    alt="Splatter Logo"
                                                    className="w-full max-w-[200px] mb-4"
                                                />
                                                <h4 className="text-h6 font-bold text-ink mb-1">Splatter version</h4>
                                                <p className="text-sm text-gray-600 text-center">
                                                    A playful option used for promos and branded swag.
                                                </p>
                                            </div>

                                            {/* Wordmark */}
                                            <div className="flex flex-col items-center">
                                                <img
                                                    src={madItalianWordmark}
                                                    alt="Wordmark Logo"
                                                    className="w-full max-w-[240px] mb-4"
                                                />
                                                <h4 className="text-h6 font-bold text-ink mb-1">Clean wordmark</h4>
                                                <p className="text-sm text-gray-600 text-center">
                                                    Works best in minimal layouts, footers, or tight spaces.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Color Palette */}
                                <div className="order-2 lg:order-1">
                                    <div className="p-6">
                                        <div className="bg-neutral inline-block px-3 py-1 rounded-full text-sm font-bold text-ink mb-4">
                                        Color Palette
                                    </div>
                                        {/* Section Text */}
                                        <h3 className="text-h3 font-ppSupply font-bold text-ink mb-4">A Palette That Feels Like Pizza Night</h3>
                                        <p className="text-body text-gray-700 leading-relaxed mb-8">
                                            We picked colors that felt like sauce, fire, and flour. Nothing that screamed tech startup. Just something that smelled like crust and char.
                                        </p>

                                        {/* Section Label */}
                                        <h4 className="text-h4 font-bold text-ink mb-6">Colour Palette</h4>

                                        {/* Primary Colors */}
                                        <h5 className="text-h5 font-bold text-redOrange mb-4">Primary</h5>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                                            {/* Milano Red */}
                                            <ColorSwatch
                                                name="Milano Red"
                                                hex="#B51A00"
                                                rgb="181 26 0"
                                                cmyk="0 85 100 29"
                                                textColor="white"
                                            />
                                            {/* Yukon Gold */}
                                            <ColorSwatch
                                                name="Yukon Gold"
                                                hex="#6F7608"
                                                rgb="111 118 8"
                                                cmyk="6 0 93 54"
                                                textColor="white"
                                            />
                                            {/* Alfredo White */}
                                            <ColorSwatch
                                                name="Alfredo White"
                                                hex="#FDF8ED"
                                                rgb="253 248 237"
                                                cmyk="0 2 6 1"
                                                textColor="#B51A00"
                                            />
                                        </div>

                                        {/* Secondary Colors */}
                                        <h5 className="text-h5 font-bold text-redOrange mb-4">Secondary</h5>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                            <ColorSwatch
                                                name="Pickled Bean"
                                                hex="#5E331C"
                                                rgb="94 51 28"
                                                cmyk="0 44 70 63"
                                                textColor="white"
                                            />
                                            <ColorSwatch
                                                name="Muddy Waters"
                                                hex="#BC8F60"
                                                rgb="188 143 96"
                                                cmyk="0 24 49 26"
                                                textColor="white"
                                            />
                                            <ColorSwatch
                                                name="Squid Ink"
                                                hex="#33312B"
                                                rgb="51 49 43"
                                                cmyk="0 4 16 80"
                                                textColor="white"
                                            />
                                        </div>
                                    </div>
                                </div>
                        
{/* Typography System */}
<div className=" gap-12 items-start">
  <div>
    <div className="bg-neutral inline-block px-3 py-1 rounded-full text-sm font-bold text-ink mb-4">
      Typography
    </div>
    <h3 className="text-h3 font-ppSupply font-bold text-ink mb-4">
      Fonts That Say Pizza Without Saying Pizza
    </h3>
    <p className="text-body text-gray-700 leading-relaxed mb-8">
      We chose a trio of typefaces that felt like they could belong on a menu, a window sign, or a branded tee. Each one plays a specific role in the system, balancing personality and clarity across every medium.
    </p>

    <div className=" p-6 space-y-6">
      <div>
        <img src={kilnRegular} alt="Kiln Regular Display" className="w-auto h-13 " />
        <p className="text-xs text-gray-500 mb-2">Used for large display text and expressive accents.</p>
        <p className="text-sm text-gray-700 mb-2">
          Our display typeface. Kiln adds warmth and handcrafted energy to headlines and titles. Think chalkboard signs or wood-fired menus.
        </p>
        
      </div>

      <div>
        <img src={antonio} alt="Antonio Display" className="w-auto h-13" />
        <p className="text-xs mb-2 text-gray-500">Used for section headers, CTAs, and accent text.</p>
        <p className="text-sm text-gray-700 mb-2">
          This bold, condensed sans in all caps gives hierarchy to key headlines and section markers. It keeps the system clean, confident, and modern.
        </p>
        
      </div>

      <div>
        <img src={inter} alt="Inter Display" className="w-auto h-13 -mb-2" />
        <p className="text-xs mb-2 text-gray-500">Used for paragraphs, details, and general content.</p>
        <p className="text-sm text-gray-700 mb-2">
          A versatile sans-serif for everything else. Inter handles body text with legibility and ease—perfect for menus, descriptions, and captions.
        </p>
        
      </div>
    </div>

 
  </div>

  {/* You can include a moodboard or type pairings preview here if you'd like */}
</div>
                                {/* Photography Direction */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                                    <div>
                                        <div className="bg-neutral inline-block px-3 py-1 rounded-full text-sm font-bold text-ink mb-4">
                                        Photography Direction
                                    </div>
                                        <h3 className="text-h3 font-ppSupply font-bold text-ink mb-4">
                                            Photos That Feel Like the Last Slice Is Still Warm
                                        </h3>
                                        <p className="text-body text-gray-700 leading-relaxed mb-8">
                                            The photography needed to feel honest and inviting—less about perfectly plated food, more about the energy around it. We focused on real moments: communal tables, flour-dusted prep counters, and the kind of warmth you remember long after the meal.
                                        </p>
                                        <div className="bg-neutral border-2 border-ink rounded-lg p-6">
                                            <h4 className="text-h4 font-bold text-ink mb-4">Visual Direction:</h4>
                                            <ul className="list-none space-y-3">
                                                <li className="flex items-start gap-2">
                                                    <span className="text-redOrange font-bold">•</span>
                                                    <span className="text-body text-gray-700">Real moments, not staged perfection</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-redOrange font-bold">•</span>
                                                    <span className="text-body text-gray-700">Behind-the-scenes kitchen energy</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-redOrange font-bold">•</span>
                                                    <span className="text-body text-gray-700">Warm, communal dining moments</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div>
                                        <img
                                            src={madItalianMoodboard}
                                            alt="Photography Moodboard"
                                            className="w-full"
                                        />
                                        <p className="text-sm text-gray-500 mt-2 text-right">
                                            Photography style guide and moodboard
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Takeaways Section */}
                    <section id="takeaways" className="container mx-auto pb-48 px-4 sm:px-8">
                        <h2 className="text-hmax font-ppSupply font-bold text-ink pt-16 mb-8">Takeaways</h2>
                        
          

                        <div className="bg-neutral border-2 border-ink rounded-lg p-8">
                            <h3 className="text-h2 font-ppSupply font-bold text-ink mb-4">Sometimes the best design work happens when clients say no.</h3>
                            <p className="text-body text-gray-700 leading-relaxed mb-8">
                                After multiple meetings and iterations, the owner ultimately kept our voice guidelines and typography choices but decided to stick with his existing logo. At first, I was disappointed—we'd created what I thought was a stronger visual system. But watching him confidently use the parts that felt right taught me something important about collaboration and client relationships.
                            </p>
<div className="flex flex-col items-center mb-8">
  <img
    src={madItalianOldLogo}
    alt="The Mad Italian Original Logo"
    className="w-auto rounded-full max-w-[220px] mb-2"
  />
  <p className="text-sm text-gray-500 text-center">
    The original logo the client chose to keep
  </p>
</div>
                            <div className="space-y-8 mb-8">
                                <div className="flex items-start gap-4">
                                    <span className="text-redOrange font-bold text-2xl">•</span>
                                    <div>
                                        <h4 className="text-h4 font-bold text-ink mb-2">Client comfort matters more than design perfection</h4>
                                        <p className="text-body text-gray-700">
                                            The owner knew his customers and his business better than we did. His attachment to his existing logo wasn't stubbornness—it was authenticity. Our job was to enhance his vision, not replace it with ours.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <span className="text-redOrange font-bold text-2xl">•</span>
                                    <div>
                                        <h4 className="text-h4 font-bold text-ink mb-2">Partial adoption can still create meaningful impact</h4>
                                        <p className="text-body text-gray-700">
                                            The voice guidelines and typography system we created are still helping him communicate consistently across his website and social media. Sometimes that's exactly the impact a project needs to have—strategic foundation rather than complete transformation.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <span className="text-redOrange font-bold text-2xl">•</span>
                                    <div>
                                        <h4 className="text-h4 font-bold text-ink mb-2">Iteration builds trust, even when ideas don't stick</h4>
                                        <p className="text-body text-gray-700">
                                            The multiple meetings and feedback rounds showed the client we valued his input. This collaborative approach built a relationship based on understanding rather than convincing, leading to a successful project despite not adopting every recommendation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                                      {/* Add CTA here - after title, before reflection */}
                        <div className="text-center mb-12">
                            <p className="text-body text-gray-700 pt-16 mb-6">
                                Ready to see the complete brand system in action?
                            </p>
                            <a
                                href="https://www.figma.com/slides/XytWlhM7wyWWrZFqP3rRoJ/The-Mad-Italian?node-id=1-42&t=HuZL0qA8RI8njhfI-1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-default inline-flex items-center gap-2 text-lg px-8 py-4"
                                aria-label="View Complete Brand Guide"
                            >
                                View Complete Brand Guide <MdArrowOutward size={20} />
                            </a>
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
        </div>
    );
}

export default MadItalianBrandGuide;