"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 240);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      window.scrollTo(0, 0);
    }
  };

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={handleClick}
      className={`fixed bottom-6 right-6 z-50 inline-flex items-center justify-center rounded-full shadow-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60
      ${visible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-3"}
      `}
      style={{}}
    >
      <span className="inline-flex items-center justify-center rounded-full p-[2px] border border-white">
        <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-zinc-950 text-white overflow-hidden">
          <span
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(45deg, #ffffffff 12%, transparent 12%), linear-gradient(-45deg, #ffffffff 12%, transparent 12%), linear-gradient(0deg, #cf142bcc 6%, transparent 6%), linear-gradient(90deg, #cf142bcc 6%, transparent 6%)",
              opacity: 0.22,
              filter: "blur(1px)",
            }}
          />
          {/* Up Arrow Icon */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M12 5l-7 7m7-7l7 7M12 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </span>
    </button>
  );
}

