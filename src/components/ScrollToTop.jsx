import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Petit délai pour s'assurer que le DOM est rendu
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  }, [location.pathname, location.hash]);

  return null;
};

export default ScrollToTop;
