import React, {useState} from "react";

function ProjectShowcase({ image, title, description, tags }) {
    const  [isExpanded, setIsExpanded] = useState(false);

    const handleMouseEnter = () => {
        setIsExpanded(true);
    };
    const handleMouseLeave = () => {
        setIsExpanded(false);
    };


    return (
        <div className={`relative group overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out 
        ${isExpanded ? 'h-96' : 'h-60'}`} 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-top transform filter grayscale transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:filter-none"
                style={{ backgroundImage: `url(${image})` }}
            ></div>
            
            {/* Overlay with text */}
            <div className="absolute inset-0 bg-ink opacity-90 group-hover:opacity-0 transition-opacity duration-300 ease-in-out"></div>
            
            {/* Content */}
            <div className="relative p-8 z-10 flex flex-col items-end text-right ">
                <h2 className="text-2xl font-syne font-bold text-offwhite ">{title}</h2>
                <p className="mt-2 text-sm text-offwhite font-workSans opacity-75">{description}</p>
                {/* Skill Pills */}
                <div className="flex gap-2 mt-4">
                    {tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 text-xs border border-offwhite text-offwhite rounded">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            
            {/* CTA */}
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <button className="px-4 py-2 bg-redwood text-offwhite font-bold font-syne rounded shadow-lg hover:shadow-xl transition-shadow duration-300">
                    View Project
                </button>
            </div>
        </div>
    );
}

export default ProjectShowcase;