"use client";

import { useEffect, useRef } from "react";
import { ensureUrlChangePatched } from "./urlChange";
import { logUserEvent } from "./UserLogEvent";

/**
 * Measures total time an element stays in viewport. Starts timing when it enters view,
 * pauses when it leaves, and logs on unmount.
*/
export function useTimeInView(ref, eventName = "ui_focus_time", params = {}, options = {}) {
  const { logOnHide = true, minVisibleMs = 500, threshold = 0.25, rootMargin } = options; // Increased thresholds to reduce observer calls
  const visibleStartRef = useRef(null);
  const accumulatedMsRef = useRef(0);
  const observerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !ref?.current) return;
    ensureUrlChangePatched();

    const handleVisibleStart = () => {
      if (visibleStartRef.current == null) {
        visibleStartRef.current = performance.now();
      }
    };
    const handleVisibleStop = () => {
      if (visibleStartRef.current != null) {
        accumulatedMsRef.current += performance.now() - visibleStartRef.current;
        visibleStartRef.current = null;
        // Optionally flush when element leaves view
        if (logOnHide && accumulatedMsRef.current >= minVisibleMs) {
          const Duration_ms = Math.max(0, Math.round(accumulatedMsRef.current));
          logUserEvent(eventName, "UI/UX Heatmap", {
            duration_ms: Duration_ms,
            ...params,
          });
          accumulatedMsRef.current = 0;
        }
      }
    };

    const tryInit = () => {
      if (observerRef.current || !ref?.current) return false;
      observerRef.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            handleVisibleStart();
          } else {
            handleVisibleStop();
          }
        });
      }, { threshold, rootMargin });
      observerRef.current.observe(ref.current);
      return true;
    };

    // Attempt immediate init; if ref not ready, retry fewer times
    if (!tryInit()) {
      let attempts = 0;
      const maxAttempts = 6; // Reduced from 12 to ~1s with 160ms step
      const interval = setInterval(() => {
        attempts += 1;
        if (tryInit() || attempts >= maxAttempts) {
          clearInterval(interval);
        }
      }, 160);
      // Also try next animation frame quickly
      requestAnimationFrame(() => {
        tryInit();
      });
    }

    return () => {
      try {
        observerRef.current?.disconnect();
      } catch {}
      // finalize any in-progress visibility
      if (visibleStartRef.current != null) {
        accumulatedMsRef.current += performance.now() - visibleStartRef.current;
        visibleStartRef.current = null;
      }
      const Duration_ms = Math.max(0, Math.round(accumulatedMsRef.current));
      if (Duration_ms > 0) {
        logUserEvent(eventName, "UI/UX Heatmap", {
          duration_ms: Duration_ms,
          ...params,
        });
      }
    };
  }, [ref, eventName, logOnHide, minVisibleMs, params, rootMargin, threshold]);
}