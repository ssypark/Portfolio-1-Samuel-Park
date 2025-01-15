import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

function ProjectShowcase({ image, title, description, tags, link }) {
    return (
        <Link to={link} className="relative group overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out h-auto flex flex-col md:flex-row-reverse">
            {/* Image Section */}
            <div
                className="w-full md:w-2/3 h-64 md:h-auto bg-cover bg-top transform transition-transform duration-300 ease-in-out group-hover:filter-none"
                style={{ backgroundImage: `url(${image})` }}
            ></div>

            {/* Text and CTA Section */}
            <div className="w-full md:w-1/3 bg-ink p-8 flex flex-col justify-between">
                <div>
                    <h2 className="text-2xl font-syne font-bold text-offwhite">{title}</h2>
                    <p className="mt-2 text-sm text-offwhite font-workSans opacity-75">{description}</p>
                    {/* Skill Pills */}
                    <div className="flex gap-2 mt-4 flex-wrap">
                        {tags.map((tag, index) => (
                            <span key={index} className="px-2 py-1 text-xs border border-offwhite text-offwhite rounded">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                {/* CTA */}
                <div className="mt-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-redwood text-offwhite font-bold font-syne rounded shadow-lg hover:shadow-xl hover:bg-florange transition-shadow duration-300 w-max">
                        Dive In <MdArrowOutward />
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ProjectShowcase;