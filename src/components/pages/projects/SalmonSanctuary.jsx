import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
// Components
import Contact from "../../Contact";

// Image Imports
import ssiIcon from "../../../assets/salmonsanctuary/ssi-icon.png";
import ssiLogo from "../../../assets/salmonsanctuary/ssi-logo.png";
import ssiMockup from "../../../assets/salmonsanctuary/ssi-mockup.png";
import ssiStyleGuide from "../../../assets/salmonsanctuary/ssi-styleguide.png";
import ssiCompetitive from "../../../assets/salmonsanctuary/psf-screenshot.png";
import userPersona from "../../../assets/salmonsanctuary/ssi-persona.png";
import userJourney from "../../../assets/salmonsanctuary/ssi-journey.png";
import froggySide from "../../../assets/froggy-side.svg";
import siteMap from "../../../assets/salmonsanctuary/ssi-sitemap.png";
import userFlow from "../../../assets/salmonsanctuary/ssi-userflow.png";

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
import logoBlack from "../../../assets/logo-darkblack.svg";

// Animation Imports
import { initSideFrogAnimation } from "../../animations/animations";
gsap.registerPlugin(ScrollTrigger);

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

    useEffect(() => {
        initSideFrogAnimation();
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
        });
    }, []);

    return (
        <div className="relative mt-18 px-4 sm:px-8 bg-olive">
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
            <div className="relative min-h-screen p-8 bg-offwhite bg-paper rounded-md shadow-md flex flex-col justify-between">
                {/* Centered Logo and Header */}
                <div className="flex items-center justify-center flex-grow">
                    {/* Logo */}
                    <div className="flex justify-center lg:justify-end p-8" data-aos="fade-left">
                        <img
                            src={ssiIcon}
                            alt="Salmon Sanctuary Icon"
                            className="w-64 h-64 object-contain"
                        />
                    </div>
                    {/* Header */}
                    <div data-aos="fade-right" className="text-left">
                        <h1 className="text-h1 font-bold font-syne text-ink">
                            Information Architecture for Salmon Sanctuary
                        </h1>
                    </div>
                </div>

                {/* Role, Date, and Visit Website */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8 p-8 border-t border-gray-300">
                    {/* Role and Date */}
                    <div className="flex flex-col sm:flex-row gap-8">
                        <div>
                            <h2 className="text-sm font-bold">Role</h2>
                            <p className="text-base">Lead UX/UI Designer<br />Information Architect</p>
                        </div>
                        <div>
                            <h2 className="text-sm font-bold">Date</h2>
                            <p className="text-base">2023</p>
                        </div>
                        <div>
                            <h2 className="text-sm font-bold">Duration</h2>
                            <p className="text-base">47 Hours</p>
                        </div>
                        <div>
                            <h2 className="text-sm font-bold text-offwhite">Tools</h2>
                            <p className="text-base text-offwhite">
                                Figma
                                <br />
                                Adobe Illustrator
                                <br />
                                Procreate
                            </p>
                        </div>
                        
                    </div>

                    {/* Visit Website */}
                    <div>
                        <a
                            href="https://salmonsanctuary.sampark.ca/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-6 py-3 bg-redwood text-offwhite text-lg rounded shadow-md hover:shadow-lg transition duration-300"
                        >
                            → VISIT WEBSITE
                        </a>
                    </div>
                </div>
            </div>
            {/* About Section */}
            <div className="container flex flex-col lg:flex-row justify-between items-center mx-auto mt-16 px-4 sm:px-8 mb-16 gap-8" data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out">
                {/* Logo */}
                <div className="lg:w-1/3 flex justify-center mb-8 lg:mb-0">
                    <img
                        src={ssiLogo}
                        alt="Salmon Sanctuary Logo"
                        className="rounded-lg mx-auto p-4 max-w-full h-auto"
                    />
                </div>

                {/* About */}
                <div className="lg:w-2/3 flex flex-col gap-4 text-left">
                    <h5 className="text-h4 font-bold font-syne text-offwhite mb-4">About</h5>
                    <p className="text-body text-offwhite leading-relaxed">
                        The Salmon Sanctuary Initiative is an interactive digital project
                        designed to educate users about Pacific salmon conservation. As the Lead
                        UX/UI Designer and Information Architect, I developed the website’s
                        structure, user flow, and visual elements to create an engaging and
                        accessible learning experience. The project combines clear navigation,
                        interactive resources, and impactful design to raise awareness and
                        inspire action for salmon habitat preservation.
                    </p>
                </div>
            </div>

            {/* Mockup */}
            <div>
                <img src={ssiMockup} alt="Mockup image" className="rounded-lg shadow-md mx-auto mb-16" data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out" />
            </div>

            {/* UX Research Section */}
            <div className="container mx-auto px-4 sm:px-8 my-16">
                {/* UX Research Header */}
                <h2 className="text-h1 font-syne font-bold text-offwhite mb-12">UX Research</h2>

                {/* Target Audience and Competitive Analysis */}
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Target Audience */}
                    <div className="lg:w-2/3" data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out">
                        <h3 className="text-h3 font-bold font-syne text-offwhite mb-6">Target Audience</h3>
                        <p className="text-base font-workSans text-offwhite leading-relaxed mb-8">
                            The Salmon Sanctuary Initiative was designed with a diverse target audience in mind, ensuring the content and features cater to both casual visitors and dedicated conservation advocates.
                        </p>
                        <h4 className="text-h5 font-bold font-syne text-offwhite mb-4">Key audience segments include:</h4>
                        <ul className="list-disc font-workSans text-offwhite text-body pl-6 space-y-4">
                            <li>
                                <span className="font-bold">Environmental Enthusiasts</span> – Nature lovers who want to learn more about salmon conservation and take action, whether through donations, volunteer work, or sharing educational resources.
                            </li>
                            <li>
                                <span className="font-bold">Conservation Volunteers</span> – Individuals eager to get involved directly, looking for clear pathways to sign up for habitat restoration projects, advocacy campaigns, and local events.
                            </li>
                            <li>
                                <span className="font-bold">Educators & Students</span> – Teachers and students interested in using the educational resources for research or school projects, with a focus on interactive learning about salmon habitats and sustainability.
                            </li>
                            <li>
                                <span className="font-bold">Conservationist Anglers</span> – Passionate anglers who are committed to sustainable fishing practices and want to stay informed about conservation efforts and regulations.
                            </li>
                            <li>
                                <span className="font-bold">Eco-conscious Donors</span> – Users motivated by conservation initiatives who are likely to contribute financially if the process is clear, transparent, and incentivized (e.g., with rewards like plushies).
                            </li>
                        </ul>
                        <p className="text-body font-workSans text-offwhite leading-relaxed mt-6">
                            The design and information architecture were crafted to ensure that each audience segment could easily find the content and resources that resonate with their interests and motivations.
                        </p>
                    </div>

                    {/* Competitive Analysis */}
                    <div className="lg:w-1/3 flex flex-col border-solid border-2 border-redwood bg-redwood bg-paper rounded-lg p-8" data-aos="fade-left" data-aos-easing="ease-in-out">
                        <h3 className="text-h4 font-bold font-syne text-offwhite mb-6">Competitive Analysis</h3>
                        <p className="text-body font-workSans text-offwhite leading-relaxed mb-8">
                            By studying competitor websites in terms of design, functionality, marketing, and technology, I gained valuable insights that shaped my design decisions for this project. This research helped me create a user experience that is both competitive and innovative, offering a unique value to the target audience.
                        </p>
                        <img
                            src={ssiCompetitive}
                            alt="Competitive Analysis"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>

            {/* Personas & Scenarios Section */}
            <div
                className="container mx-auto px-4 sm:px-8 my-16 pt-8"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
            >
                <h2 className="text-h3 font-syne font-bold text-offwhite mb-6">User Personas & Scenarios</h2>
                <p className="text-body font-workSans text-offwhite leading-relaxed mb-8">
                    Based on the interviews, I developed two primary personas:
                </p>
                <ul className="list-disc text-body font-workSans text-offwhite pl-6 mb-8 space-y-4">
                    <li>
                        <span className="font-bold">The Environmental Activist</span> – Prioritizes direct actions and educational resources.
                    </li>
                    <li>
                        <span className="font-bold">The Conservationist Angler</span> – Seeks information on sustainable fishing practices and volunteer opportunities.
                    </li>
                </ul>
                <p className="text-body font-workSans text-offwhite leading-relaxed mb-16">
                    User scenarios were crafted to simulate user journeys, focusing on tasks like finding volunteer opportunities, accessing educational materials, and making donations.
                </p>
                <div
                    className="flex flex-col lg:flex-row items-start gap-8 bg-paper p-8 rounded-lg shadow-md"
                    data-aos="fade-right"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                >
                    {/* Persona Image */}
                    <div className="w-full lg:w-1/3 relative group">
                        <img
                            src={userJourney}
                            alt="Environmental Activist Persona"
                            className="rounded-lg shadow-md cursor-pointer"
                            onClick={handleOpenPersonaModal} // Modal trigger
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                            <button
                                className="px-6 py-3 bg-redwood text-offwhite text-lg font-bold rounded shadow-md hover:scale-105 transform transition-transform duration-300"
                                onClick={handleOpenPersonaModal} // Modal trigger
                            >
                                Learn More About Maya
                            </button>
                        </div>
                    </div>
                    {/* Persona Details */}
                    <div className="w-full lg:w-2/3 text-offwhite">
                        <h3 className="text-h4 font-syne font-bold mb-4">The Environmental Activist</h3>
                        <p className="text-body font-workSans leading-relaxed mb-4">
                            Maya Patel, a 27-year-old environmental activist, is deeply passionate about protecting the planet and advocating for sustainability. She often finds herself seeking ways to make a meaningful impact on environmental issues and inspire others to join her cause.
                        </p>
                        <h4 className="text-h5 font-bold font-syne mb-2">Her Journey</h4>
                        <p className="text-body font-workSans leading-relaxed mb-4">
                            In her quest to support Pacific salmon conservation, Maya visits the charity's website to explore available resources and discover ways to get involved. She navigates the site with ease, finding comprehensive information on habitat restoration projects, volunteer opportunities, and advocacy campaigns focused on saving Pacific salmon. Maya also comes across engaging educational materials and interactive tools that deepen her understanding of the challenges facing salmon populations and empower her to take action.
                        </p>
                        <h4 className="text-h5 font-bold font-syne mb-2">The Result</h4>
                        <p className="text-body font-workSans leading-relaxed">
                            Feeling inspired and empowered by the wealth of resources and opportunities available on the charity's website, Maya eagerly signs up to volunteer for a habitat restoration project and makes a donation to support ongoing conservation efforts. She leaves the website with a renewed sense of purpose and optimism, knowing that her contributions, along with those of other passionate individuals, will make a positive impact on the future of Pacific salmon and the health of our oceans and river systems.
                        </p>
                    </div>
                </div>

                {/* Persona Modal */}
                {isPersonaModalOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center p-4 z-50"
                        onClick={handleClosePersonaModal}
                    >
                        <div
                            className="relative bg-white rounded-lg overflow-hidden max-h-[90vh] max-w-full"
                            onClick={handleClosePersonaModal}// Prevent background click from closing modal
                        >
                            {/* Close Button */}
                            <button
                                className="absolute top-4 right-4 text-offwhite text-2xl hover:text-redwood transition"
                                onClick={handleClosePersonaModal}
                            >
                                <FaTimes />
                            </button>

                            {/* Image */}
                            <img
                                src={userPersona}
                                alt="Environmental Activist Persona"
                                className="max-h-[85vh] w-auto object-contain"
                            />
                        </div>
                    </div>
                )}
            </div>

            {/* Divider */}
            <hr className="my-12 border-t border-gray-300" />

            {/* Web Design Section */}
            <div className="container mx-auto px-4 sm:px-8 mb-16" data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out">
                {/* Section Header */}
                <h2 className="text-h1 font-syne font-bold text-offwhite mb-6">Web Design</h2>
                <h3 className="text-h4 font-syne font-bold text-offwhite mb-4">User Flow & Site Map</h3>

                {/* Description */}
                <p className="text-body font-workSans text-offwhite leading-relaxed mb-8">
                    The Salmon Sanctuary Initiative is an interactive digital project designed to educate users
                    about Pacific salmon conservation. As the Lead UX/UI Designer and Information Architect, I
                    developed the website’s structure, user flow, and visual elements to create an engaging and
                    accessible learning experience. The project combines clear navigation, interactive resources,
                    and impactful design to raise awareness and inspire action for salmon habitat preservation.
                </p>

                {/* Site Map Image */}
                <h5 className="text-h5 font-syne font-bold text-offwhite mb-4">Site Map</h5>
                <div className="relative group">
                    <img
                        src={siteMap} // Replace with the actual path to your site map image
                        alt="Salmon Sanctuary Site Map"
                        className="rounded-lg shadow-md mx-auto"
                    />
                </div>

                {/* Description of Site Map */}
                <p className="text-body font-workSans text-offwhite leading-relaxed mt-4 mb-16">
                    The Site Map illustrates the website's content structure, showing how information is organized
                    across sections like "Our Work," "Learn," "Take Action," and "Donate." Each category contains
                    sub-pages to ensure users can quickly find educational materials, volunteering opportunities,
                    or ways to contribute.
                </p>

                {/* User Flow Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mx-auto">
                    {/* User Flow Text */}
                    <div className="w-full lg:col-span-1 text-offwhite">
                        {/* Description of User Flow */}
                        <h5 className="text-h5 font-syne font-bold text-offwhite mb-4">User Flow</h5>
                        <p className="text-body font-workSans text-offwhite leading-relaxed mb-4">
                            The User Flow diagram outlines the donation process, detailing each step users take from selecting a donation option to finalizing their contribution. It was designed to ensure seamless interaction while meeting specific client requirements for user experience, such as encouraging larger donations with incentives (e.g., free plushies) and offering multiple payment options.
                        </p>
                    </div>
                    {/* User Flow Image */}
                    <div className="relative group pt-12 lg:col-span-2">

                        <img
                            src={userFlow}
                            alt="Salmon Sanctuary User Flow"
                            className="mx-auto min-w-full p-4 bg-white rounded-md shadow-md"
                            data-aos="fade-left"
                        />
                    </div>
                </div>

                {/* Concluding Text */}
                <p className="text-body font-workSans text-offwhite leading-relaxed pt-8">
                    Together, the User Flow and Site Map reflect a well-designed information architecture aimed at
                    facilitating intuitive navigation, enhancing user engagement, and achieving client goals for
                    Pacific salmon conservation.
                </p>
            </div>

            {/* Divider */}
            <hr className="my-12 border-t border-gray-300" />

            {/* Style Guide & Wireframes Section */}
            <div className="container mx-auto px-4 sm:px-8 mb-16" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
                <h2 className="text-h1 font-syne font-bold text-offwhite mb-6">Style Guide & Wireframes</h2>
                <p className="text-body font-workSans text-offwhite leading-relaxed mb-8">
                    The visual and structural elements of the Salmon Sanctuary Initiative were carefully crafted to ensure a seamless user experience while reflecting the mission of salmon conservation. The design approach was rooted in a comprehensive style guide and strategic wireframes.
                </p>
            </div>

            {/* Style Guide Section */}
            <div className="container mx-auto px-4 sm:px-8 mb-16" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
                <h2 className="text-h3 font-syne font-bold text-offwhite mb-6">Style Guide</h2>
                <p className="text-body font-workSans text-offwhite leading-relaxed mb-8">
                    The Salmon Sanctuary Initiative's style guide was created to maintain consistency in visual design, ensuring the website reflects the conservation mission with clarity and professionalism.
                </p>
                <div
                    className="relative group cursor-pointer"
                    onClick={() => handleOpenModal("styleGuide", 0)} // Open modal for style guide
                >
                    <img
                        src={ssiStyleGuide}
                        alt="Style Guide Cover"
                        className="rounded-lg shadow-md p-4 mx-auto bg-white"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                    <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="px-6 py-3 bg-redwood text-offwhite text-lg font-bold rounded shadow-md hover:scale-105 transform transition-transform duration-300">
                            View Style Guide
                        </button>
                    </div>
                </div>
            </div>

            {/* Wireframes Section */}
            <div className="container mx-auto px-4 sm:px-8 mb-32">
                <h2 className="text-h3 font-syne font-bold text-offwhite mb-6">Wireframes</h2>
                <div
                    className="relative group cursor-pointer"
                    onClick={() => handleOpenModal("wireframes", 0)} // Open modal for wireframes
                >
                    <img
                        src={wireframe2}
                        alt="Wireframe Design"
                        className="rounded-lg shadow-md mx-auto"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                    <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="px-6 py-3 bg-redwood text-offwhite text-lg font-bold rounded shadow-md hover:scale-105 transform transition-transform duration-300">
                            View Wireframes
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal Carousel */}
            {(isWireframeModalOpen || isStyleGuideModalOpen) && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
                    onClick={handleCloseModal}
                >
                    {/* Carousel Container */}
                    <div
                        className="relative max-w-[90%] max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-8 right-8 text-offwhite text-2xl hover:text-redwood transition"
                            onClick={handleCloseModal}
                        >
                            <FaTimes />
                        </button>

                        {/* Display Images */}
                        <img
                            src={isWireframeModalOpen ? wireframes[currentIndex] : styleGuide[currentIndex]}
                            alt={`Slide ${currentIndex + 1}`}
                            className="rounded-lg mx-auto max-w-full max-h-full"
                        />

                        {/* Navigation Buttons */}
                        <button
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-75 text-offwhite text-2xl p-3 rounded-full transition"
                            onClick={() => goToPrev()}
                            disabled={currentIndex === 0}
                        >
                            <FaChevronLeft />
                        </button>
                        <button
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-75 text-offwhite text-2xl p-3 rounded-full transition"
                            onClick={() => goToNext(isWireframeModalOpen ? wireframes : styleGuide)}
                            disabled={currentIndex === (isWireframeModalOpen ? wireframes.length : styleGuide.length) - 1}
                        >
                            <FaChevronRight />
                        </button>
                    </div>
                </div>
            )}
            {/* Divider */}
            <hr className="my-12 border-t border-gray-300" />
            {/* What I Learned & What's Next Section */}
            <div className="container mx-auto px-4 sm:px-8 my-16 p-8 rounded-md shadow-md bg-redwood" data-aos="fade-up">
                <h2 className="text-h2 font-syne font-bold text-offwhite mb-6">Closing Thoughts</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* What I Learned */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-h4 font-bold font-syne text-offwhite">What I Learned</h3>
                        <p className="text-body font-workSans text-offwhite leading-relaxed">
                            Throughout the Salmon Sanctuary Initiative, I enhanced my skills in information architecture, user research, and interactive design. I learned the importance of creating clear navigation and engaging educational materials to foster user engagement. Additionally, this project helped me understand how user personas and journey maps can guide impactful design decisions.
                        </p>
                    </div>
                    {/* What's Next */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-h4 font-bold font-syne text-offwhite">What's Next</h3>
                        <p className="text-body font-workSans text-offwhite leading-relaxed">
                            I plan to apply the knowledge and insights gained from this project to improve future endeavors. By building on my strengths in user-centered design and research, I aim to deliver even more impactful and innovative solutions. Additionally, I will seek opportunities to refine my processes and ensure that every project benefits from a more thoughtful and effective approach.
                        </p>
                    </div>
                </div>
            </div>
            {/* Divider */}
            <hr className="my-12 border-t border-gray-300" />
            {/* More Projects Section */}
            <div className="container min-w-screen mx-auto px-4 sm:px-8 mb-0">
                <h2 className="text-h3 font-syne font-bold text-offwhite mb-6">View More of My Work!</h2>

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
    );
}
// test
export default SalmonSanctuary;