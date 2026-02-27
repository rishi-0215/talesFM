"use client";

import { useEffect, useRef } from "react";
import { logUserEvent } from "./UserLogEvent";

/**
 * Measures time spent on a page (or any mounted component) between mount and unmount.
 * Logs a single event on unmount with the duration in milliseconds.
 */
export function useTimeOnPage(eventName = "ui_focus_time", params = {}) {
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    startTimeRef.current = performance.now();

    return () => {
      if (startTimeRef.current == null) return;
      const Duration_ms = Math.max(0, performance.now() - startTimeRef.current);
      logUserEvent(eventName, "UI/UX Heatmap", {
        duration_ms: Math.round(Duration_ms),
        screen_name: window.location?.pathname,
        ...params,
      });
    };
  }, [eventName, params]);
}