import React from "react";

const FigmaEmbed = () => {
    return (
        <div className="figma-embed-container" style={{ textAlign: "center" }}>
            <iframe
                style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                width="800"
                height="800"
                src="https://embed.figma.com/proto/gCVW1snYrr66F7o51z2MCb/Flydex?page-id=1136%3A1151&node-id=1136-1152&node-type=canvas&viewport=494%2C647%2C0.17&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1136%3A1152&embed-host=share"
                allowFullScreen
                title="FlyDex Wireframe"
            ></iframe>
        </div>
    );
};

export default FigmaEmbed;

