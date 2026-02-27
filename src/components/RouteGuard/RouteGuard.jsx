 "use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const allowedPaths = new Set([
  "/",
  "/about-us",
  "/contact-us",
  "/privacy-policy",
  "/terms",
  "/blog",
  "/author",
]);

const normalizePath = (path) => {
  if (!path || path === "") return "/";
  const trimmed = path.replace(/\/+$/, "");
  return trimmed === "" ? "/" : trimmed;
};

const isBlogRoute = (path) => {
  return path.startsWith("/blog");
};

const resetUrl = () => {
  if (typeof window === "undefined") {
    return;
  }

  if (window.location.pathname !== "/") {
    window.history.replaceState(null, "", "/");
  }
};

export default function RouteGuard() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const currentPath = normalizePath(window.location.pathname);
    
    // Allow blog routes (including /blog and /blog/[slug])
    if (isBlogRoute(currentPath)) {
      return;
    }
    
    if (!allowedPaths.has(currentPath)) {
      
    }
  }, [pathname, router]);

  return null;
}

