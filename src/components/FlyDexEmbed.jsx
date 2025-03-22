import React from "react";

const FlyDexEmbed = () => {
    return (
        <div className="relative w-full max-w-[500px] mx-auto" style={{ paddingBottom: "100%" }}>
        <iframe
          src="https://embed.figma.com/proto/gCVW1snYrr66F7o51z2MCb/Flydex?node-id=1237-1002&embed-host=share"
          className="absolute top-0 left-0 w-full h-full"
          style={{ border: "none", backgroundColor: "transparent" }}
          allowFullScreen
        />
      </div>
    );
};

export default FlyDexEmbed;

