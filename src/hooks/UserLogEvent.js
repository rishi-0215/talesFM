// logUserEvent.js
import { logEvent } from "firebase/analytics";
import { analytics } from "../lib/firebase";

/**
 * Logs a GA4 user event with optional parameters.
 *
 * @param {string} eventName - The GA4 event name (e.g. 'login', 'purchase').
 * @param {string} category - Event category (stored as `event_category` for GA4).
 * @param {object} params - Additional event parameters.
 */
export const logUserEvent = (eventName, category, params = {}) => {
  // Skip logging in development to reduce memory usage
  if (process.env.NODE_ENV === "development") {
    return;
  }

  try {
    if (analytics) {
      const analyticsParams = { ...params, event_category: category };
      logEvent(analytics, eventName, analyticsParams);
    }
  } catch (error) {
    console.error("❌ Analytics_Log_Failed:", error);
  }
};
