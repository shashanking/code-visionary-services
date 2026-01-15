"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Tawk_API?: any;
    Tawk_LoadStart?: Date;
  }
}

export default function TawkChat() {
  useEffect(() => {
    if (window.Tawk_API) return;

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const s = document.createElement("script");
    s.src = 'https://embed.tawk.to/6968c557c03c961980f0097f/1jf0k5nj7';
    s.async = true;
    s.charset = "UTF-8";
    s.setAttribute("crossorigin", "*");

    document.body.appendChild(s);

    return () => {
      document.body.removeChild(s);
    };
  }, []);

  return null;
}

