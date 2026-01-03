"use client";

import { HERO_CONFIG } from "@/constants/hero";
import { useResponsive, useMediaQuery, useParallax } from "@/hooks/useHero";
import { MobileHero } from "./Hero/MobileHero";
import { DesktopHero } from "./Hero/DesktopHero";
import { HeroDivider } from "./Hero/HeroDivider";
import { HeroErrorBoundary, SimplifiedHero } from "./Hero/ErrorBoundary";
import { AccessibilityWrapper } from "./Hero/AccessibilityComponents";
import IntroMobile from "@/components/IntroMobile";

export default function Hero() {
  const { isMobile, viewportHeight } = useResponsive(HERO_CONFIG.MOBILE_BREAKPOINT);
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const y = prefersReducedMotion ? 0 : useParallax(HERO_CONFIG.PARALLAX_SPEED);

  // Use a more precise mobile detection for landscape mode
  const isMobileView = isMobile || (typeof window !== 'undefined' && window.innerWidth < 768 && window.innerHeight < 600);

  return (
    <AccessibilityWrapper>
      <HeroErrorBoundary fallback={<SimplifiedHero />}>
        <section className="relative" aria-label="The Mersey Flows hero">
          {isMobileView ? (
            <>
              <MobileHero />
              <HeroDivider />
              <IntroMobile />
            </>
          ) : (
            <>
              <DesktopHero y={y} vh={viewportHeight} />
              <HeroDivider />
            </>
          )}
        </section>
      </HeroErrorBoundary>
    </AccessibilityWrapper>
  );
}
