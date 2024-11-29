import React, { useState, useEffect } from "react";
import ProjectShowcase from "./ProjectShowcase";
import AOS from "aos";
import "aos/dist/aos.css";

//Image Imports
import ssImage from '../assets/ssi.png';
import amalgmImage from '../assets/amalgm.png';
import interactiveImage from '../assets/interactive.png';
import flyDexImage from '../assets/flydex.png';
import introBumperImage from '../assets/intro-bumper.png';

// destructuring is used to include the limit prop that is passed from the parent component. This is used to limit the number of projects to display.
function Portfolio({ limit}) {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
        });
    }, []);
    
    const [projects, setProjects] = useState([
        {
            image: ssImage,
            title: 'The Salmon Sanctuary',
            description: 'A user-centric charity website that effectively communicates the mission while enhancing user engagement and the donation process.',
            tags: ['UX Research', 'Website Design', 'UX/UI'],
        },
        {
            image: amalgmImage,
            title: 'Amalgm Brand Book',
            description: 'This brand book outlines Amalgm’s commitment to sustainable, collaborative, and artistic apparel, emphasizing individuality and ethical design.',
            tags: ['Branding', 'Graphic Design', 'Product Design'],
        },
        {
            image: interactiveImage,
            title: 'Interactive Document',
            description: 'An interactive document designed to educate readers about the diverse species of the Thompson River through engaging visuals and intuitive navigation.',
            tags: ['Interaction Design', 'Graphic Design'],
        },
        {
            image: flyDexImage,
            title: 'FlyDex App',
            description: 'FlyDex is an educational app designed to help fly fishing enthusiasts of all levels learn about techniques, find fishing spots, and connect with other anglers through an intuitive, all-in-one digital resource.',
            tags: ['UX/UI', 'UX Research', 'Wireframing'],
        },
        {
            image: introBumperImage,
            title: 'Intro Bumper Video',
            description: 'Utilizing After Effects, I animated an intro bumper that showcases the different aspects of myself as a visual artist.',
            tags: ['Animation', 'Video Editing', 'Graphic Design'],
        },
    ]);

    //In order to limit the number of projects displayed on the home page vs projects page, we need to add a limit prop and use that to slice the projects array. 
    const displayProjects = limit ? projects.slice(0, limit) : projects;

    return (
        <div className="container mx-auto px-0 py-0 mb-8">
            <div className="grid gap-8">
                {displayProjects.map((project, index) => (
                    <div
                        key={index}
                        data-aos="fade-right" // the animation class for aos so that each project slides in from the left as the user scrolls
                    >
                        <ProjectShowcase
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            tags={project.tags}
                        />
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Portfolio;