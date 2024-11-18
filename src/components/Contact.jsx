import React from "react";

function Contact() {
    return (
        <>
        <div className="bg-sage py-16 px-16 flex flex-col items-start">
        <h2 className="text-5xl font-syne font-bold text-ink mb-8">YOUR IDEAS MATTER</h2>
        <p className="text-xl text-ink font-workSans mb-4">
            I’m here to listen, collaborate, and create.
        </p>
        <div className="flex flex-col space-y-2">
            <a href="mailto:example@example.com" className="text-ink hover:text-redwood text-lg">
                → EMAIL
            </a>
            <a href="https://linkedin.com/in/yourprofile" className="text-ink hover:text-redwood text-lg">
                → LINKEDIN
            </a>
        </div>
    </div>

    <div className="bg-olive py-4 text-center">
        <button className="px-4 py-2 bg-redwood text-offwhite rounded font-syne font-bold">
            extras!
        </button>
    </div>
    </>
    );
}

export default Contact