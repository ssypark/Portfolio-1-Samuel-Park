import React, { useState, useEffect } from "react";
import ProjectShowcase from "./ProjectShowcase";
import AOS from "aos";
import "aos/dist/aos.css";

//Image Imports
import ssImage from '../assets/ssi.png';
import amalgmImage from '../assets/amalgm.png';
import interactiveImage from '../assets/interactive.png';
import flyDexImage from '../assets/flydex/flydex-login-mockup.jpg';
import introBumperImage from '../assets/intro-bumper.png';
import ccMockup from '../assets/conscious-connections/full-mockup.png';
import ldHero from '../assets/ld-hero-showcase.png';

// destructuring is used to include the limit prop that is passed from the parent component. This is used to limit the number of projects to display on the page.
// This is done to allow us to limit the number of projects displayed on the home page vs projects page.
function Portfolio({ limit}) {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
        });
    }, []);
    
    // This state is used to store the projects array for the Portfolio component
    const [projects, setProjects] = useState([
        {
            image: flyDexImage,
            title: 'FlyDex App',
            description: 'FlyDex is an educational app designed to help fly fishing enthusiasts of all levels learn about techniques, find fishing spots, and connect with other anglers through an intuitive, all-in-one digital resource.',
            tags: ['UX/UI', 'UX Research', 'Wireframing'],
            link: '/work/flydex-app',
        },
        {
            image: ssImage,
            title: 'The Salmon Sanctuary',
            description: 'A user-centric charity website that effectively communicates the mission while enhancing user engagement and the donation process.',
            tags: ['UX Research', 'Website Design', 'UX/UI'],
            link: '/work/salmon-sanctuary',
        },
        {
            image: amalgmImage,
            title: 'Amalgm Equipment',
            description: 'This brand book outlines Amalgm’s commitment to sustainable, collaborative, and artistic apparel and equipment, emphasizing individuality and ethical design.',
            tags: ['Branding', 'Graphic Design', 'Product Design'],
            link: '/work/amalgm-brand-book',
        },
        {
            image: ccMockup,
            title: 'Conscious Connections',
            description: 'Instead of designing just another dating app, we aimed to craft an immersive relationship experience that fosters meaningful connections.',
            tags: ['Product Design', 'Graphic Design', 'Interaction Design', 'UX/UI'],
            link: '/work/conscious-connections',
        },
        {
            image: ldHero,
            title: 'London Drugs Website Redesign',
            description: 'A UX overhaul of London Drugs website aimed at reducing friction in key user flows and increasing user confidence through more intuitive interfaces.',
            tags: ['UX Research', 'UX/UI', 'Wireframing', 'User Testing'],
            link: '/work/london-drugs',
        },
        
        {
            image: introBumperImage,
            title: 'Intro Bumper Video',
            description: 'Utilizing After Effects, I animated an intro bumper that showcases the different aspects of myself as a visual artist.',
            tags: ['Animation', 'Video Editing', 'Graphic Design'],
            link: '/work/intro-bumper-video',
        },
    ]);

    //In order to limit the number of projects displayed on the home page vs projects page, we need to add a limit prop and use that to slice the projects array. 
    const displayProjects = limit ? projects.slice(0, limit) : projects;

    return (
        <div className="container mx-auto px-0 py-0 mb-8">
            <div className="grid gap-12 text-left">
                {/* This maps over the projects array and displays each project in a ProjectShowcase component */}
                {displayProjects.map((project, index) => (
                    <div
                        key={index}
                        data-aos="fade-right" // the animation class for aos so that each project slides in from the left as the user scrolls
                    >
                        <ProjectShowcase
                            // we set the image, title, description, and tags props for each project
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            tags={project.tags}
                            link={project.link}
                        />
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Portfolio;