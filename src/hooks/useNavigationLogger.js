import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useUIBackNavigationLogger } from "./useUIBackNavigationLogger";
import { ensureUrlChangePatched } from "./urlChange";

export const useNavigationLogger = () => {
  const pathname = usePathname();
  const { logBackNavigation } = useUIBackNavigationLogger();
  const previousPathnameRef = useRef(pathname);

  useEffect(() => {
    ensureUrlChangePatched();

    const handleUrlChange = () => {
      const previousPathname = previousPathnameRef.current;
      const currentPathname = window.location.pathname;

      if (previousPathname !== currentPathname) {
        const fromScreen = previousPathname === "/" ? "home" : previousPathname.slice(1);
        const toScreen = currentPathname === "/" ? "home" : currentPathname.slice(1);
        logBackNavigation(fromScreen, toScreen);
        previousPathnameRef.current = currentPathname;
      }
    };

    window.addEventListener("urlchange", handleUrlChange);

    return () => {
      window.removeEventListener("urlchange", handleUrlChange);
    };
  }, [logBackNavigation]);

  useEffect(() => {
    const previousPathname = previousPathnameRef.current;
    if (previousPathname !== pathname) {
      const fromScreen = previousPathname === "/" ? "home" : previousPathname.slice(1);
      const toScreen = pathname === "/" ? "home" : pathname.slice(1);
      logBackNavigation(fromScreen, toScreen);
      previousPathnameRef.current = pathname;
    }
  }, [pathname, logBackNavigation]);
};
