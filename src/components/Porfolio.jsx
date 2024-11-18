import React, { useState } from "react";
import ProjectShowcase from "./ProjectShowcase";
import ssImage from '../assets/ssi.png';
import amalgmImage from '../assets/amalgm.png';
import interactiveImage from '../assets/interactive.png';

function Portfolio() {
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
        <div className="container mx-auto p-8">
            <div className="bg-olive w-full">
            <h2 className="text-3xl font-syne font-bold p-4 text-offwhite">Featured Projects</h2>
            </div>
            <div className="grid gap-8">
                {projects.map((project, index) => (
                    <ProjectShowcase
                        key={index}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        tags={project.tags}
                    />
                ))}
            </div>

        </div>
    );
}

export default Portfolio;