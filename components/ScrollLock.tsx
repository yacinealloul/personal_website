"use client";

import { useEffect } from "react";

export default function ScrollLock() {
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const apply = () => {
      if (mq.matches) {
        document.documentElement.style.height = "100%";
        document.documentElement.style.overflow = "hidden";
        document.body.style.height = "100%";
        document.body.style.overflow = "hidden";
      } else {
        document.documentElement.style.height = "";
        document.documentElement.style.overflow = "";
        document.body.style.height = "";
        document.body.style.overflow = "";
      }
    };
    apply();
    mq.addEventListener("change", apply);
    return () => {
      mq.removeEventListener("change", apply);
      document.documentElement.style.height = "";
      document.documentElement.style.overflow = "";
      document.body.style.height = "";
      document.body.style.overflow = "";
    };
  }, []);
  return null;
}
