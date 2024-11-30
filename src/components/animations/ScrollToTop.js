import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// This component is used to scroll to the top of the page when a new route is loaded for a better user experience.
const ScrollToTop = () => {
    // we use the useLocation hook to get the current pathname this is important because we want to scroll to the top of the page when a new route is loaded
  const { pathname } = useLocation();

  useEffect(() => {
    // I needed to ensure that the scroll happens only after the DOM has fully rendered the new route.
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    // I needed to add a slight delay for reliable DOM update because the scrolltotop was not running 100% of the time
    }, 50); 
    
    return () => clearTimeout(timeout); // Clean up any lingering timeouts for the scroll
  }, [pathname]);
  // we also return null because we don't want to render anything for this component
  return null;
};

export default ScrollToTop;