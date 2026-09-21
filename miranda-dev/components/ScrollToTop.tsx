"use client";

import { useEffect } from "react";

/**
 * Forces the browser to always start at the very top of the page on load,
 * overriding any scroll restoration from the browser or Next.js router.
 */
export default function ScrollToTop() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return null;
}

