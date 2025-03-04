import React from "react";

const FigmaEmbed = () => {
    return (
        <div className="figma-embed-container" style={{ textAlign: "center" }}>
            <iframe
                style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                width="800"
                height="800"
                src="https://www.figma.com/proto/gCVW1snYrr66F7o51z2MCb/Flydex?page-id=1237%3A1002&node-id=1237-1003&p=f&viewport=-1013%2C857%2C0.61&t=rUMsKMUYNatJdhAC-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1237%3A1003&embed-host=share"
                allowFullScreen
                title="FlyDex Wireframe"
            ></iframe>
        </div>
    );
};

export default FigmaEmbed;

