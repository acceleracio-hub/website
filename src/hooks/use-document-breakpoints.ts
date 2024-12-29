import { useState, useEffect } from "react";

export function useDocumentBreakpoints() {
  const [windowWidth, setWindowWidth] = useState(() => (typeof window !== "undefined" ? window.innerWidth : 0));

  useEffect(() => {
    if (typeof window === "undefined") {
      // Возвращаем undefined в серверной среде
      return undefined;
    }

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    windowWidth,
    isMobile: windowWidth < 767,
    isTablet: windowWidth >= 767 && windowWidth < 1279,
    isDesktop: windowWidth >= 1279,
  };
}
