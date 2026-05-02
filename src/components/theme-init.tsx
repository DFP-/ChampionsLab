"use client";

import { useEffect } from "react";

export function ThemeInit() {
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
