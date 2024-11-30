import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


// Hero Frog Animation
export const initHeroFrogAnimation = () => {
    gsap.to(".hero-frog", {
        y: -15, //moves up the frog up and down by 15px
        duration: 0.6, // duration of the animation
        repeat: -1, // repeats the animation indefinitely
        yoyo: true, // reverses the animation on each repeat
        ease: "power1.inOut", // easing function
    });
};

// Side Frog Animation
export const initSideFrogAnimation = () => {
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
                start: "top 90%", // this sets the starting point of the animation
                end: "bottom 30%", // this sets the ending point of the animation
                scrub: true, // this makes the animation smoother
            },
        });  
};

// Footer Frog Animation
export const initFooterFrogAnimation = () => {
    gsap.to(".footer-frog", {
        y: -15, //moves up the frog up and down by 15px
        duration: 0.6, // duration of the animation
        repeat: -1, // repeats the animation indefinitely
        yoyo: true, // reverses the animation on each repeat
        ease: "power3.inOut", // easing function
    });
};

//Fish Animation
export const initFishAnimation = () => {
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
                duration: 0.5,
                ease: "power3.out",
            });
        });
    };
    // This is to listens for the mouse movement by the user
    window.addEventListener("mousemove", handleMouseMove);

    // This is to clean up the event listener when the component is unmounted, it also prevents memory leaks and other unwanted behavior
    // NOTE: Since GSAP ScrollTrigger animations clean up automatically, we don't need to do anything for the other animations (ie. Side Frog animation)
    return () => {
        window.removeEventListener("mousemove", handleMouseMove);
    };
};