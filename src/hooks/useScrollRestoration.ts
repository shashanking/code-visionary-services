import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export const useScrollRestoration = () => {
  const location = useLocation();
  const navigationType = useNavigationType();
  const scrollPositions = useRef<Record<string, number>>({});
  const isPop = useRef(false);

  useEffect(() => {
    // Save scroll position before leaving
    const saveScrollPosition = () => {
      scrollPositions.current[location.pathname] = window.scrollY;
    };

    window.addEventListener("beforeunload", saveScrollPosition);

    return () => {
      window.removeEventListener("beforeunload", saveScrollPosition);
      saveScrollPosition();
    };
  }, [location]);

  useEffect(() => {
    // Check if this is a back/forward navigation
    isPop.current = navigationType === "POP";

    if (isPop.current) {
      // Restore scroll position for back/forward navigation
      const savedPosition = scrollPositions.current[location.pathname];
      if (savedPosition !== undefined) {
        // Use setTimeout to ensure DOM is ready
        setTimeout(() => {
          window.scrollTo(0, savedPosition);
        }, 0);
        return;
      }
    }

    // For new navigation (PUSH/REPLACE), scroll to top
    window.scrollTo(0, 0);
  }, [location, navigationType]);
};
