import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);
import AOS from "aos";
import "aos/dist/aos.css";
import { MdArrowOutward } from "react-icons/md";

import { use } from "react";

// IMAGE IMPORTS
import fullMockup from "../../../assets/conscious-connections/full-mockup.png";
import mbMockup from "../../../assets/conscious-connections/mb-mockup.png";
import phoneMockup from "../../../assets/conscious-connections/phone-mockup.png";

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
      <div
        className="relative min-h-screen p-8 bg-cover bg-center bg-olivewhite bg-no-repeat rounded-md border-b border-ink flex flex-col justify-end"
        style={{
          backgroundImage: `url(${fullMockup})`,
          backgroundSize: "80%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        {/* Bottom-Left Header */}
        <div className="text-left mb-8 z-10">
          <h1
            className="text-h1 font-bold font-syne text-ink"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            Reimagining Digital Dating
          </h1>
        </div>

        {/* Role, Date, and Project Details */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8 pb-8 rounded-md">
          {/* Role and Date */}
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-8">
            <div className="mb-4 sm:mb-0">
              <h2 className="text-body font-workSans font-bold text-ink">Goal</h2>
              <p className="text-base font-workSans text-ink">
                Website Redesign <br />for Conscious Connections
              </p>
            </div>
            <div className="mb-4 sm:mb-0">
              <h2 className="text-body font-workSans font-bold text-ink">Role</h2>
              <p className="text-base font-workSans text-ink">
                Product Designer
                <br />
                UI/UX Designer
              </p>
            </div>
            <div className="mb-4 sm:mb-0">
              <h2 className="text-body font-workSans font-bold text-ink">Date</h2>
              <p className="text-base text-ink">2025</p>
            </div>
            <div className="mb-4 sm:mb-0">
              <h2 className="text-body font-workSans font-bold text-ink">Duration</h2>
              <p className="text-base font-workSans text-ink">3 Days</p>
            </div>
            <div className="mb-4 sm:mb-0">
              <h2 className="text-body font-workSans font-bold text-ink">Tools</h2>
              <p className="text-base font-workSans text-ink">
                Figma
                <br />
                Adobe Illustrator
                <br />
                Procreate
              </p>
            </div>
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
        <div className="flex-1 space-y-20 p-8">
          <div className="max-w-4xl text-left pt-16 col-span-3">
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

          <section id="challenge" className="min-h-screen pt-24">
            <h2 className="text-h2 font-bold text-redwood">The Challenge</h2>


            <p className="mt-2">It was a crisp morning when our team gathered for the FLUI Hackathon, faced with a challenge that went beyond typical design projects:</p>
            <p className="my-8 font-bold text-h6">How do you transform a dating app from a swipe-and-forget experience to a meaningful connection platform?</p>
            <p className="mt-4">Conscious Connections wasn’t just another dating app—it was a vision of intentional relationships in a world of superficial digital interactions.</p>


            <img className="mt-8 mx-auto" src={phoneMockup} alt="" />

          </section>


          <section id="research" className="min-h-screen pt-24">
            <h2 className="text-h2 font-bold  text-redwood">Research & Strategy</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-2/3">
                <p className="mt-2">
                  Our team started by analyzing the biggest problem in online dating:
                  <strong> superficial connections</strong>. We conducted competitive analysis, user research,
                  and persona mapping to uncover the pain points that Conscious Connections aimed to solve.
                </p>
                <p className="my-8 font-bold text-h6">
                  How do you transform a dating app from a swipe-and-forget experience
                  to a platform for deep, intentional relationships?
                </p>
                <p className="mt-4">
                  Our goal was to rethink the experience from the ground up,
                  designing for <strong>meaningful engagement</strong>, not just attraction.
                </p>
              </div>
              <div className="w-1/3">
                <img src="https://placehold.co/600x400" alt="Research & Strategy" />
              </div>
            </div>
          </section>

          <section id="branding" className="min-h-screen pt-24">
            <h2 className="text-h2 font-bold">Branding & Visual Identity</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-2/3">
                <p className="mt-2">
                  We wanted the app to evoke <strong>luxury, authenticity, and warmth</strong>.
                  The visual identity needed to feel <strong>exclusive yet inviting</strong>, balancing elegance
                  with emotional depth.
                </p>
                <p className="my-8 font-bold text-h6">The Concept</p>
                <p className="mt-4">
                  We designed a color palette of <strong>earthy, warm tones</strong> and selected typography
                  that conveyed both intimacy and sophistication.
                </p>
              </div>
              <div className="w-1/3">
                <img src="https://placehold.co/600x400" alt="Branding & Visual Identity" />
              </div>
            </div>
          </section>

          <section id="ui-design" className="min-h-screen pt-24">
            <h2 className="text-h2 font-bold">UI Design & Prototyping</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-2/3">
                <p className="mt-2">
                  The UI needed to feel <strong>effortless, immersive, and premium</strong>. We
                  designed with a <strong>mobile-first approach</strong>, ensuring seamless interactions
                  across devices.
                </p>
                <p className="mt-8 font-bold text-h6">The Process</p>
                <p className="mt-4">
                  We iterated quickly, using <strong>Crazy 8s brainstorming</strong> and wireframing
                  sessions to refine the layout. The final prototype was tested for usability and
                  optimized for <strong>high engagement</strong>.
                </p>
              </div>
              <div className="w-1/3">
                <img src="https://placehold.co/600x400" alt="UI Design & Prototyping" />
              </div>
            </div>
          </section>

          <section id="outcome" className="min-h-screen pt-24">
            <h2 className="text-h2 font-bold">Final Prototype & Takeaways</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-2/3">
                <p className="mt-2">
                  Our final prototype redefined the dating experience. Every interaction
                  was designed to <strong>foster real connections</strong>, from the onboarding
                  process to AI-powered matchmaking.
                </p>
                <p className="my-8 font-bold text-h6">Lessons Learned</p>
                <ul className="list-disc ml-6 text-body">
                  <li><strong>Holistic Thinking:</strong> Every design decision matters.</li>
                  <li><strong>Collaborative Creativity:</strong> Leveraging each team member’s strengths.</li>
                  <li><strong>Adaptability:</strong> Solving real user problems beyond aesthetics.</li>
                </ul>
              </div>
              <div className="w-1/3">
                <img src="https://placehold.co/600x400" alt="Final Prototype & Takeaways" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ConsciousConnections;