/**
 * Memory optimization utilities for the TalesFM website
 * These utilities help reduce memory footprint and prevent memory leaks
 */

// Throttle function to limit function calls
export const throttle = (func, delay) => {
  let timeoutId;
  let lastExecTime = 0;
  
  return function (...args) {
    const currentTime = Date.now();
    
    if (currentTime - lastExecTime > delay) {
      func.apply(this, args);
      lastExecTime = currentTime;
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  };
};

// Debounce function to delay function calls
export const debounce = (func, delay) => {
  let timeoutId;
  
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};

// Memory-efficient event listener cleanup
export const createEventListener = (element, event, handler, options = {}) => {
  const optimizedHandler = throttle(handler, 16); // ~60fps
  element.addEventListener(event, optimizedHandler, { passive: true, ...options });
  
  return () => {
    element.removeEventListener(event, optimizedHandler);
  };
};

// Optimized resize handler
export const createResizeHandler = (callback, delay = 100) => {
  const debouncedCallback = debounce(callback, delay);
  return createEventListener(window, 'resize', debouncedCallback);
};

// Memory-efficient intersection observer
export const createIntersectionObserver = (callback, options = {}) => {
  const defaultOptions = {
    threshold: 0.25,
    rootMargin: '0px',
    ...options
  };
  
  return new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback(entry);
      }
    });
  }, defaultOptions);
};

// Cleanup utility for GSAP animations
export const cleanupGSAPAnimations = (elements) => {
  if (typeof window !== 'undefined' && window.gsap) {
    window.gsap.killTweensOf(elements);
  }
};

// Memory usage monitor (development only)
export const logMemoryUsage = () => {
  if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined' && window.performance?.memory) {
    const memory = window.performance.memory;
    console.log('Memory Usage:', {
      used: Math.round(memory.usedJSHeapSize / 1024 / 1024) + 'MB',
      total: Math.round(memory.totalJSHeapSize / 1024 / 1024) + 'MB',
      limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024) + 'MB'
    });
  }
};

// Optimized RAF loop with cleanup
export const createRAF = (callback) => {
  let rafId;
  
  const loop = (time) => {
    callback(time);
    rafId = requestAnimationFrame(loop);
  };
  
  rafId = requestAnimationFrame(loop);
  
  return () => {
    if (rafId) {
      cancelAnimationFrame(rafId);
    }
  };
};
