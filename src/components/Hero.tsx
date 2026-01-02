"use client";

import { HERO_CONFIG } from "@/constants/hero";
import { useResponsive, useMediaQuery, useParallax } from "@/hooks/useHero";
import { MobileHero } from "./Hero/MobileHero";
import { DesktopHero } from "./Hero/DesktopHero";
import { HeroDivider } from "./Hero/HeroDivider";
import { HeroErrorBoundary, SimplifiedHero } from "./Hero/ErrorBoundary";
import { AccessibilityWrapper } from "./Hero/AccessibilityComponents";

export default function Hero() {
  const { isMobile, viewportHeight } = useResponsive(HERO_CONFIG.MOBILE_BREAKPOINT);
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const y = prefersReducedMotion ? 0 : useParallax(HERO_CONFIG.PARALLAX_SPEED);

  return (
    <AccessibilityWrapper>
      <HeroErrorBoundary fallback={<SimplifiedHero />}>
        <section className="relative" aria-label="The Mersey Flows hero">
          {isMobile ? (
            <>
              <MobileHero />
              <HeroDivider />
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
