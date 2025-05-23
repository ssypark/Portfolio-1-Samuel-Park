import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";


function ProjectShowcase({ image, title, description, tags, link }) {
    return (
        
        <Link to={link} className="relative border border-ink  group overflow-hidden rounded-lg transition-all duration-300 ease-in-out h-auto flex flex-col md:flex-row-reverse hover:scale-105">
            {/* Image Section */}
            <div className="w-full md:w-2/3 relative md:border-l md:border-b-0 border-b">
                <div className="relative aspect-video md:aspect-auto w-full h-full overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 ease-in-out group-hover:filter-none"
                        style={{ backgroundImage: `url(${image})` }}
                    ></div>
                </div>
            </div>

            {/* Text and CTA Section */}
            <div className="w-full py-16 md:w-1/3 bg-olivewhite p-8 flex flex-col justify-between">
                <div>
                    <h2 className="text-2xl sm:text-h3 font-ppSupply  text-ink">{title}</h2>
                                        {/* Skill Pills */}
                    <div className="flex gap-2 mb-4 mt-2 flex-wrap">
                        {tags.map((tag, index) => (
                            <span key={index} className="px-2 py-1 text-sm border-[1px] border-ink text-ink opacity-90 font-ppFraktion rounded">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <p className="mt-2 text-sm sm:text-body text-ink font-ppFraktion opacity-75">{description}</p>

                </div>
                {/* CTA */}
                <div className="mt-12">
                    <div className="flex items-center btn-grey gap-2 px-2 py-1 bg-olivewhite text-ink  font-ppSupply rounded border border-ink hover:bg-florange duration-300 w-max" aria-label="View Project">
                        View Project <MdArrowOutward />
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ProjectShowcase;