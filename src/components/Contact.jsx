import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
            ease: "power1.inOut", // easing function
        });
    })


    return (
        <>

            <div className="bg-sage px-16 py-48 flex flex-col items-start rounded-b-xl relative">
                <h2 className="text-5xl font-syne font-bold text-ink mb-8">YOUR IDEAS MATTER</h2>
                <p className="text-xl text-ink font-workSans mb-4">
                    I’m here to listen, collaborate, and create.
                </p>
                <div className="flex flex-col space-y-2">
                    <a href="mailto:example@example.com" className="text-ink hover:text-redwood text-lg">
                        → EMAIL
                    </a>
                    <a href="mailto:example@example.com" className="text-ink hover:text-redwood text-lg">
                        → RESUME
                    </a>
                </div>
                {/* Socials */}
                <div className="absolute bottom-4 right-4 flex space-x-4 text-4xl text-ink">
                <a
                    href="https://github.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-redwood"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-redwood"
                >
                    <FaLinkedin />
                </a>
                </div>
            </div>
            <div>
                {/* Footer Frog */}
                <img
                    className="footer-frog w-40 h-40 absolute bottom-14 left-1/2 transform -translate-x-1/2 z-10"
                    src={froggyFooter}
                    alt="Frog"
                    title="Hop Back to the Top"
                    onClick={() => // See hero frog on Home.jsx for explanation
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