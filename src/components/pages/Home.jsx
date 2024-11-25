import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//Image Imports
import logo from "../../assets/logo-black.svg";
import logoBlack from "../../assets/logo-darkblack.svg";
import froggy from "../../assets/froggy.svg";
import froggySide from "../../assets/froggy-side.svg";
import dragonfly from "../../assets/dragonfly.svg";
import Portfolio from "../Porfolio";
import Contact from "../Contact";
import { FaFishFins } from "react-icons/fa6";
import { parse } from "postcss";

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger for GSAP
function Home() {
    useGSAP(() => {
        // Logo Animation
        // Initial Animation starts with my logo. 
        gsap.fromTo(
            ".logo",
            { scale: 0.5, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1, ease: "power3.out" }
        );

        // Hero Frog Animation
        gsap.to(".hero-frog", {
            y: -15, //moves up the frog up and down by 15px
            duration: 0.6, // duration of the animation
            repeat: -1, // repeats the animation indefinitely
            yoyo: true, // reverses the animation on each repeat
            ease: "power1.inOut", // easing function
        });

        // Side Frog Animation
        gsap.fromTo(
            ".side-frog",
            { x: "-100%", opacity: 0 }, // initial position and opacity for when the user scrolls down to the section
            {
                x: "-35%", // final position for when the user scrolls down to the section
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".more-projects", // this class triggers the animation
                    start: "top 80%", // this sets the starting point of the animation
                    end: "bottom 20%", // this sets the ending point of the animation
                    scrub: true, // this makes the animation smoother

                },
            }
        );

        // Dragonfly Animation
        // gsap.utils.toArray('.dragonfly').forEach((dragonfly) => {
        //     const animateDragonfly = () => {
        //         gsap.to(dragonfly, {
        //             x: gsap.utils.random(-50, 50),
        //             y: gsap.utils.random(-100, 100),
        //             rotation: gsap.utils.random(-50, 50),
        //             duration: gsap.utils.random(1, 2),
        //             ease: "power1.inOut",
        //             onComplete: animateDragonfly,
        //         });
        //     };
        //     animateDragonfly();
        // });

        // Fish Animation    
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e; // This gets the coordinates of the mouse
            const fishElements = document.querySelectorAll(".fish"); // This selects all the fish

            // This loops through all the fish to get their position and direction
            fishElements.forEach((fish, index) => {
                //in order to rotate the fish properly, we first need to get the center point of the fish
                // This gets the position of the fish by binding the fish in a rectangle via "getBoundingClientRect"
                const rect = fish.getBoundingClientRect(); 
                // This gets the center of each fish. "rect" 
                const fishX = rect.left + rect.width / 2; //the distance from the left to the right (x-coordinate) of the fish 'rectangle' divided by 2 to get the center
                const fishY = rect.top + rect.height / 2; // same as above but vertically

                // Calculate direction and distance to the mouse
                //  using clientX and clientY (from above), along with the fish coordinates (fishX and fishY),
                //  we can calculate the distance and direction between the mouse and the fish
                // this is necessary for the animation of the fish to move towards the mouse
                const dx = clientX - fishX; 
                const dy = clientY - fishY;
                // Using pythagorean theorem (Mathematical!), we can calculate the distance (straight line distance) for the fish's center to the mouse
                const distance = Math.sqrt(dx * dx + dy * dy);

                // Calculate the angle for rotation
                // with dx/dy, using the arctangent function (atan), we can calculate the angle between the fish and the mouse
                // Math.atan2(dy, dx) returns the angle in radians 
                // Then we need to multiply it by (180 / Math.PI) converts radians to degrees
                // This is necessary for the rotation of the fish since radians will not work with CSS
                const angle = Math.atan2(dy, dx) * (180 / Math.PI);

                // Repulsion Function
                // To keep the fish from congregating into one point, this part of the code checks if the fish is close to another fish
                fishElements.forEach((otherFish, otherIndex) => { // This loops through all the 'other' fish
                    if (index !== otherIndex) { // This is so that the condition ensures that the fish doesn't repel itself
                        const otherRect = otherFish.getBoundingClientRect(); // this gets the position of the other fish
                        const otherX = otherRect.left + otherRect.width / 2; // this gets the center (horizontally) of the other fish
                        const otherY = otherRect.top + otherRect.height / 2; // this gets the center (vertically) of the other fish

                        // We then need to call a function to calculate the distance between the two fish
                        // odx/ody is the represent the direction from one fish to another
                        const odx = otherX - fishX; // calculates the horizontal distance between the fish
                        const ody = otherY - fishY; // calculates the vertical distance between the fish
                        const otherDistance = Math.sqrt(odx * odx + ody * ody); // once again using Pythagorean theorem, we can calculate the distance to determine how far apart the fish are

                        // This is to ensure that the fish doesn't get too close or too far
                        if (otherDistance < 50) { // I set the distance to be a minimum of 50 pixels

                            // Repulsion force - to move the fish away from the other fish
                            // Finally, after getting the constants for the distance between the fish (odx/ody) and otherfish(otherX/otherY), we can calculate the repulsion force
                            gsap.to(fish, {
                                // This is to animate the fish to move proportionally
                                // We need to 'normalize' the vector of the fish to a "unit vector" = odx/y. This allows us to represent the direction from one fish to the others
                                // This is done by dividing the unit vector by the distance between the fish and the other fish
                                x: `-=${odx / otherDistance * 10}`, // Move away from the other fish (X-axis) multiplied by 10 (to control how far apart they should repel each other)
                                y: `-=${ody / otherDistance * 10}`, // Move away from the other fish (Y-axis) (see comment above )
                                duration: 0.5,
                                ease: "power3.out",
                            });
                        }
                    }
                });

                // Animate fish towards the mouse
                gsap.to(fish, {
                    x: `+=${dx / distance * 20}`, // Move horizontally towards the mouse. dividing the "dx" constant by the distance to ensure that the movement is proportional and this more realistic.
                    y: `+=${dy / distance * 20}`, // += adds the calculated value to the fish's current position, this makes it move relative rather than absolute.
                    rotation: angle, // Rotate animate the fish towards the mouse
                    duration: 1.5,
                    ease: "power3.out",
                });
            });
        };
        // This is to listens for the mouse movement by the user
        window.addEventListener("mousemove", handleMouseMove);

        // This is to clean up the event listener when the component is unmounted, it also prevents memory leaks and other unwanted behavior
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="relative bg-olive">
            {/* Main Content */}
            <div className="container mx-auto">
                {/* Hero Section */}
                <div className="relative min-h-screen px-16 mt-0 flex items-center justify-center bg-sage text-ink p-8">
                    <div className="flex flex-col md:flex-row items-center md:items-start text-left space-y-8 md:space-y-0 md:space-x-8 z-20 mb-12">
                        <img
                            className="logo w-36 sm:w-72 mr-8 animate-pulse"
                            src={logo}
                            alt="Samuel Park Logo"
                        />
                        <div className="text-left">
                            <h1 className="sm:text-h1 text-3xl font-bold font-syne tracking-wide mb-4">
                                Hello, I'm Samuel Park
                            </h1>

                            <p className="text-md md:text-2xl max-w-2xl font-workSans">
                                I'm a UI and visual designer with a
                                background in fine arts, blending creativity
                                with digital innovation to create impactful designs.
                            </p>
                        </div>
                    </div>
                    {/* Dragonflies */}
                    {/* {[...Array(4)].map((_, i) => (
                        <img
                            key={i}
                            src={dragonfly}
                            alt="Dragonfly"
                            className="dragonfly absolute w-16 h-16"
                            style={{
                                top: `${gsap.utils.random(10, 90)}%`,
                                left: `${gsap.utils.random(10, 90)}%`,
                            }}
                        />
                    ))} */}
                    {/* Hero Frog */}
                    <div className="absolute bottom-0 left-0 w-full h-10 bg-olive z-20"></div>
                    <img
                        className="hero-frog w-40 h-40 absolute -bottom-10 left-1/2 transform -translate-x-1/2 z-10"
                        src={froggy}
                        alt="Frog"
                    />

                    {/* Fish */}
                    {/*  This creates and displays an array of10 fish icons from Font Awesome */}
                    {/* .map() is used to create an array of 10 fish icons */}
                    {[...Array(10)].map((_, i) => (
                        <FaFishFins
                            key={i} // A key is necessary to assign a unique identifier to each fish icon
                            className="fish absolute text-slate-600" // Class name for the fish icon for the animation along with styling
                            data-speed={Math.random() * 1 + 0.5} // Random speed multiplier to create a more natural movement
                            style={{
                                fontSize: `${Math.random() * 30 + 20}px`, // Random sizes to create depth and variation
                                top: `${Math.random() * 80 + 10}%`, // Random position to ensure the fish are spread out more evenly (vertically)
                                left: `${Math.random() * 80 + 10}%`, // Random position to ensure the fish are spread out more evenly (horizontally)
                                transform: "rotate(0deg)", // Initial rotation so the fish start out facing correctly
                            }}
                        />
                    ))}



                </div>

                {/* Projects */}
                <Portfolio />

                {/* More Projects Section */}
                <div className="more-projects relative bg-ink py-16 px-16 flex items-center gap-8 rounded-t-xl z-50"
                    style={{
                        backgroundImage: `url(${logoBlack})`,
                        backgroundSize: "400px",
                        backgroundPosition: "right center",
                        backgroundRepeat: "no-repeat",
                    }}>
                    <img
                        className="side-frog w-48 h-48 absolute top-1/2 -translate-y-1/2 -left-8 z-20"
                        src={froggySide}
                        alt="Frog"
                    />
                    <button className="px-6 py-3 bg-redwood text-offwhite font-syne font-bold rounded hover:bg-opacity-90 transition z-20">
                        More Projects
                    </button>
                </div>

                {/* Contact Section */}
                <div>
                    <Contact />
                </div>

            </div>
        </div>
    );
}

export default Home;