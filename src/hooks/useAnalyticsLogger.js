
import { useRef, useEffect, useCallback } from 'react';
import { logUserEvent } from './UserLogEvent';

const useAnalyticsLogger = (element_id, screen_name) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          logUserEvent('impression', 'engagement', {
            element_id,
            screen_name,
          });
          // Disconnect after the first impression to avoid multiple logs
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Log when 50% of the element is visible
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [element_id, screen_name]);

  const logClick = useCallback(() => {
    logUserEvent('element_click', 'engagement', {
      element_id,
      screen_name,
    });
  }, [element_id, screen_name]);

  return [elementRef, logClick];
};

export default useAnalyticsLogger;
