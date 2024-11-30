import React, { useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { initFooterFrogAnimation } from "./animations/animations";

// Image Imports
import froggyFooter from "../assets/froggy-footer.svg";

function Contact() {
    useEffect(() => {
        initFooterFrogAnimation(); // Initialize the Footer Frog Animation
    }, []);

    return (
        <>
            {/* Main Contact Section */}
            <div className="bg-sage bg-water px-4 sm:px-16 py-8 sm:py-24 pb-32 flex flex-col items-start rounded-b-xl relative">
                <h2 className="text-h1 font-syne font-bold text-ink mb-2 pt-8">YOUR IDEAS MATTER</h2>
                <p className="text-h3 text-ink font-workSans mb-8">
                    I’m here to listen, collaborate, and create.
                </p>
                {/* Main Content Area with Links and Socials */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full mt-auto">
                    {/* Links */}
                    <div className="flex flex-col space-y-4">
                        <a href="mailto:example@example.com" className="text-ink hover:text-redwood text-h6">
                            → EMAIL
                        </a>
                        <a href="mailto:example@example.com" className="text-ink hover:text-redwood text-h6">
                            → RESUME
                        </a>
                        <a href="mailto:example@example.com" className="text-ink hover:text-redwood text-h6">
                            → ARTIST CV
                        </a>
                    </div>

                    {/* Socials */}
                    <div className="flex justify-start sm:justify-end items-end space-x-4 text-h2 text-ink">
                        <a
                            href="https://github.com/ssypark"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-redwood"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/samuelpark89"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-redwood"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://www.instagram.com/samparkart/?hl=en"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-redwood"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>
                    </div>
                </div>

                {/* Footer Frog! */}
                <img
                    className="footer-frog w-36 h-auto absolute -bottom-16 left-1/2 transform -translate-x-1/2 z-10"
                    src={froggyFooter}
                    alt="Frog"
                    title="Hop Back to the Top"
                    onClick={() =>
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        })
                    }
                />
            </div>
        </>
    );
}

export default Contact;