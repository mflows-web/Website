"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const [y, setY] = useState(0);
  const [vh, setVh] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setY(window.scrollY * 0.15); // subtle parallax
        raf = 0;
      });
    };
    // initialize viewport height
    setVh(window.innerHeight);
    setIsMobile(window.innerWidth < 640);
    const onResize = () => setVh(window.innerHeight);
    const onResizeMobile = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("resize", onResizeMobile);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("resize", onResizeMobile);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative" aria-label="The Mersey Flows hero">
      <div className="relative overflow-hidden min-h-screen">
        {/* Background image with parallax (high-res logo) */}
        <div
          ref={bgRef}
          className="absolute inset-0 will-change-transform"
          style={{
            // heavier parallax
            transform: isMobile ? "none" : `translateY(${y * -0.25}px) scale(${1.08 - Math.min(y / 1600, 0.08)})`,
            // on mobile, keep it fully visible; desktop fades at ~60% vh
            opacity: isMobile ? 1 : Math.max(0, 1 - (vh ? y / (vh * 0.6) : 0)),
            backgroundImage: "url('/logo.png?v=2')",
            backgroundColor: '#000',
            backgroundSize: isMobile ? 'contain' : 'cover',
            backgroundPosition: isMobile ? 'center top' : 'center',
            backgroundRepeat: 'no-repeat',
            filter: isMobile ? 'none' : 'brightness(1.05) contrast(0.95) saturate(0.9) blur(0.4px)',
          }}
        />

        {/* Gradient masks top/bottom for smooth fade */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-12 sm:h-24 bg-gradient-to-b from-black to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 sm:h-24 bg-gradient-to-t from-black to-transparent" />

        {/* Dark overlay + vignette to blend background with dark theme */}
        <div className="pointer-events-none absolute inset-0 bg-black/35" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 15%, rgba(0,0,0,0.95) 100%)',
          }}
        />

        {/* Accents removed from hero to avoid clashing with background */}

        {/* Content */}
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 min-h-[60vh] sm:min-h-screen flex items-end">
          <div className="flex w-full flex-col items-center text-center pb-0 sm:pb-4 md:pb-6">
            <div className="mx-auto max-w-3xl rounded-xl bg-black/40 px-4 py-3 sm:px-6 sm:py-5 backdrop-blur-sm supports-[backdrop-filter]:backdrop-blur-sm border border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
              <p className="text-zinc-100 text-base md:text-lg">
                North-West England’s premier 90s Britpop band. From Oasis to Travis and Paul Weller to Space, we deliver a night of hit anthems for weddings, events and venues.
              </p>
              <div className="mt-2 sm:mt-4 flex justify-center gap-2 sm:gap-3">
                <a
                  href="#setlist"
                  className="inline-flex items-center rounded-md border border-zinc-700 px-4 py-2 text-sm font-medium hover:bg-zinc-900"
                >
                  Setlist
                </a>
                <a
                  href="#videos"
                  className="inline-flex items-center rounded-md bg-zinc-900 text-white px-4 py-2 text-sm font-medium hover:bg-zinc-800 border border-zinc-800"
                >
                  Performance videos
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-md border border-zinc-700 px-4 py-2 text-sm font-medium hover:bg-zinc-900"
                >
                  Book the band
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Thin accent bar under hero */}
      <div className="h-2 w-full bg-gradient-to-r from-white via-[#cf142b] to-white shadow-[0_0_10px_rgba(207,20,43,0.35)]" />
    </section>
  );
}
