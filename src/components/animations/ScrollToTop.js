import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// This component is used to scroll to the top of the page when a new route is loaded for a better user experience.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // I needed to ensure that the scroll happens only after the DOM has fully rendered the new route.
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    // I needed to add a slight delay for reliable DOM update because the scrolltotop was not 100% of the time
    }, 50); 
    
    return () => clearTimeout(timeout); // Clean up any lingering timeouts
  }, [pathname]);

  return null;
};

export default ScrollToTop;