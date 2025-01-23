import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

function ProjectShowcase({ image, title, description, tags, link }) {
    return (
        <Link to={link} className="relative border border-ink  group overflow-hidden rounded-lg transition-all duration-300 ease-in-out h-auto flex flex-col md:flex-row-reverse hover:scale-105">
            {/* Image Section */}
            <div className="w-full md:w-2/3 relative">
                <div className="relative pb-[56.25%] overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center transform transition-transform duration-300 ease-in-out group-hover:filter-none"
                        style={{ backgroundImage: `url(${image})` }}
                    ></div>
                </div>
            </div>

            {/* Text and CTA Section */}
            <div className="w-full md:w-1/3 bg-olivewhite p-8 flex flex-col justify-between">
                <div>
                    <h2 className="text-2xl sm:text-h3 font-syne font-bold text-ink">{title}</h2>
                    <p className="mt-2 text-sm sm:text-body text-ink font-workSans opacity-75">{description}</p>
                    {/* Skill Pills */}
                    <div className="flex gap-2 mt-4 flex-wrap">
                        {tags.map((tag, index) => (
                            <span key={index} className="px-2 py-1 text-xs border border-ink text-ink opacity-75 font-workSans rounded">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                {/* CTA */}
                <div className="mt-6">
                    <div className="flex items-center text-body gap-2 px-2 py-1 bg-olivewhite text-ink font-bold font-syne rounded border border-ink hover:bg-florange duration-300 w-max">
                        View Project <MdArrowOutward />
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ProjectShowcase;