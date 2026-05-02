"use client";

import { useEffect } from "react";

export function MobileNavInit() {
  useEffect(() => {
    const b = document.getElementById("mobile-nav-toggle");
    const toggle = () => document.body.classList.toggle("mobile-open");
    const closeOnNav = (e: MouseEvent) => {
      if (
        document.body.classList.contains("mobile-open") &&
        (e.target as Element).closest(".mobile-nav-panel a")
      ) {
        document.body.classList.remove("mobile-open");
      }
    };

    if (b) b.addEventListener("click", toggle);
    document.addEventListener("click", closeOnNav);

    return () => {
      if (b) b.removeEventListener("click", toggle);
      document.removeEventListener("click", closeOnNav);
    };
  }, []);

  return null;
}
