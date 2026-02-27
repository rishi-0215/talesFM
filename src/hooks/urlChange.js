"use client";

let isPatched = false;

export function ensureUrlChangePatched() {
  if (typeof window === "undefined" || isPatched) return;

  try {
    const dispatch = () => {
      try {
        window.dispatchEvent(new Event("urlchange"));
      } catch {}
    };

    const wrap = (type) => {
      const orig = history[type];
      return function (...args) {
        const ret = orig.apply(this, args);
        dispatch();
        return ret;
      };
    };

    history.pushState = wrap("pushState");
    history.replaceState = wrap("replaceState");
    window.addEventListener("popstate", dispatch);
    isPatched = true;
  } catch {
    // ignore
  }
}

