import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import * as PIXI from "pixi.js";
import { PixiPlugin } from "gsap/PixiPlugin";

gsap.registerPlugin(PixiPlugin);

const Transition = ({ children }) => {
  const location = useLocation();
  const transitionRef = useRef(null);
  const appRef = useRef(null);

  useEffect(() => {
    const app = new PIXI.Application({
      width: window.innerWidth,
      height: window.innerHeight,
      transparent: true,
    });
    appRef.current = app;
    transitionRef.current.appendChild(app.view);

    const graphics = new PIXI.Graphics();
    graphics.beginFill(0xffffff);
    graphics.drawRect(0, 0, app.screen.width, app.screen.height);
    graphics.endFill();
    app.stage.addChild(graphics);

    const pixelateFilter = new PIXI.filters.PixelateFilter();
    graphics.filters = [pixelateFilter];

    const tl = gsap.timeline({
      onComplete: () => {
        app.stage.removeChild(graphics);
      },
    });

    tl.to(pixelateFilter, {
      duration: 0.5,
      size: 50,
      ease: "power2.inOut",
    });

    tl.to(pixelateFilter, {
      duration: 0.5,
      size: 0,
      ease: "power2.inOut",
      delay: 0.5,
    });

    return () => {
      tl.kill();
      app.destroy(true, true);
    };
  }, [location]);

  return (
    <div ref={transitionRef} className="fixed inset-0 z-50 pointer-events-none">
      {children}
    </div>
  );
};

export default Transition;