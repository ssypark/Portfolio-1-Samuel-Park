import React, { useState, useEffect } from "react";
import ProjectShowcase from "./ProjectShowcase";
import AOS from "aos";
import "aos/dist/aos.css";

//Image Imports
import ssImage from '../assets/ssi.png';
import amalgmImage from '../assets/amalgm.png';
import interactiveImage from '../assets/interactive.png';

function Portfolio() {
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
    ]);


    return (
        <div className="container mx-auto px-0 py-0 mb-8">
            <div className="bg-olive w-full">
            <h2 className="sm:text-4xl text-3xl font-syne font-bold p-4 mb-4 mt-0 text-offwhite">Featured Projects</h2>
            </div>
            <div className="grid gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        data-aos="fade-right" // Use the same animation type for all projects
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