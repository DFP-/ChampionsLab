"use client";

import { useEffect } from "react";

export function ThemeInit() {
  // Apply theme synchronously to prevent flash of wrong theme
  if (typeof window !== "undefined") {
    try {
      const stored = localStorage.getItem("championslab-theme");
      if (stored) {
        const isDark = stored === "dark";
        document.documentElement.classList.toggle("dark", isDark);
        document.documentElement.style.colorScheme = isDark ? "dark" : "light";
      }
    } catch (e) {
      // ignore
    }
  }

  useEffect(() => {
    try {
      const stored = localStorage.getItem("championslab-theme");
      if (stored) {
        const isDark = stored === "dark";
        document.documentElement.classList.toggle("dark", isDark);
        document.documentElement.style.colorScheme = isDark ? "dark" : "light";
        document.cookie = `cl-theme=${stored};path=/;max-age=31536000;SameSite=Lax`;
      }
    } catch (e) {
      // ignore
    }
  }, []);

  return null;
}
