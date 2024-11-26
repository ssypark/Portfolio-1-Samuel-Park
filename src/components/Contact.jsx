import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

//Image Imports
import froggyFooter from "../assets/froggy-footer.svg";


function Contact() {

    useGSAP(() => {
        // Footer Frog Animation
        gsap.to(".footer-frog", {
            y: -15, //moves up the frog up and down by 15px
            duration: 0.6, // duration of the animation
            repeat: -1, // repeats the animation indefinitely
            yoyo: true, // reverses the animation on each repeat
            ease: "power3.inOut", // easing function
        });
    })


    return (
        <>
            {/* Main Contact Section */}
            <div className="bg-sage bg-water px-4 sm:px-16 py-8 sm:py-24 flex flex-col items-start rounded-b-xl relative">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-syne font-bold text-ink mb-8 pt-8">YOUR IDEAS MATTER</h2>
<p className="text-lg sm:text-xl lg:text-2xl text-ink font-workSans mb-4">
    I’m here to listen, collaborate, and create.
</p>
                <div className="flex flex-col space-y-2">
                    <a href="mailto:example@example.com" className="text-ink hover:text-redwood text-lg">
                        → EMAIL
                    </a>
                    <a href="mailto:example@example.com" className="text-ink hover:text-redwood text-lg">
                        → RESUME
                    </a>
                    <a href="mailto:example@example.com" className="text-ink hover:text-redwood text-lg">
                        → ARTIST CV
                    </a>
                </div>
                {/* Socials */}
                <div className="absolute bottom-6 right-6 flex space-x-4 text-2xl sm:text-4xl text-ink">
                <a
                    href="https://github.com/ssypark"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-redwood"
                    aria-label="GitHub" //For assistive technologies!
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

            {/* Footer Frog */}
            <div className="w-full">
    <img
        className="footer-frog w-20 sm:w-28 lg:w-36 h-auto absolute bottom-14 left-1/2 transform -translate-x-1/2 z-10"
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

export default Contact