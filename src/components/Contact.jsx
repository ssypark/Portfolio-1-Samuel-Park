import React, { useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { initFooterArrowAnimation } from "./animations/animations";

// Image Imports
import arrowUp from "../assets/arrow-up.png";

function Contact() {
    useEffect(() => {
        initFooterArrowAnimation(); // Initialize the Footer Frog Animation
    }, []);

    return (
        <>
            {/* Main Contact Section */}
            <div className="bg-olivewhite border-2 border-ink px-4 sm:px-16 py-8 sm:py-16 pb-32 flex flex-col items-start rounded-b-xl relative">
                <h2 className="text-h1 font-ppSupply font-bold text-ink mb-2 ">YOUR IDEAS MATTER</h2>
                <p className="text-h3 text-ink font-workSans mb-8">
                    I’m here to listen, collaborate, and create.
                </p>
                {/* Main Content Area with Links and Socials */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full mt-auto">
                    {/* Links */}
                    <div className="flex flex-col font-workSans space-y-4">
                        <a href="mailto:hello@sampark.ca" className="text-ink hover:text-redOrange duration-300 text-h6">
                            → EMAIL
                        </a>
                        <a href="/park_samuel_resume.pdf" className="text-ink hover:text-redOrange duration-300 text-h6">
                            → RESUME
                        </a>
                        <a href="/park_samuel_artist_cv.pdf" className="text-ink hover:text-redOrange duration-300 text-h6">
                            → ARTIST CV
                        </a>
                    </div>

                    {/* Socials */}
                    <div className="flex justify-start sm:justify-end items-end space-x-4 text-h2 text-ink">
                        <a
                            href="https://github.com/ssypark"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-redOrange duration-300"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/samuelpark89"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-redOrange duration-300"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://www.instagram.com/samparkart/?hl=en"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-redOrange duration-300"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>
                    </div>
                </div>

                {/* Footer Arrow! */}
                <img
                    className="footer-arrow w-16 h-auto absolute -bottom-16 left-1/2 transform -translate-x-1/2 z-10"
                    src={arrowUp}
                    alt="Up Arrow"
                    title="Back to the Top"
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