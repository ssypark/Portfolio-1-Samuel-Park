import React from "react";
import { Link } from "react-router-dom";
import construction from "../../assets/construction-froggy.png";

function ComingSoon({ projectName }) {
    return (
        <div className="w-full text-center py-20 mt-28 bg-sage min-h-screen">
            <h1 className="text-4xl font-bold text-h1 font-syne">Coming Soon: {projectName}</h1>
            <img src={construction} alt="Coming Soon" className="w-72 mx-auto animate-wiggle" />
            <p className="text-lg mt-4 text-h4 font-workSans">
                I'm working hard to finish this project. Check back soon!
            </p>
            <div className="mt-12">
                <Link
                    to="/work"
                    className="px-6 py-3 bg-redwood text-offwhite text-lg rounded shadow-lg hover:shadow-xl hover:bg-florange transition-shadow duration-300 font-workSans"
                >
                    See Other Projects
                </Link>
            </div>
        </div>
    );
}

export default ComingSoon;