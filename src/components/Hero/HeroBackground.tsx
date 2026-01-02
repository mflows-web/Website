import { HERO_CONFIG } from "@/constants/hero";

interface HeroBackgroundProps {
  y: number;
  vh: number;
}

export function HeroBackground({ y, vh }: HeroBackgroundProps) {
  return (
    <div
      className="absolute inset-0 will-change-transform"
      style={{
        transform: `translateY(${y * HERO_CONFIG.PARALLAX_Y_MULTIPLIER}px) scale(${HERO_CONFIG.INITIAL_SCALE - Math.min(y / HERO_CONFIG.SCALE_DIVISOR, HERO_CONFIG.MAX_SCALE_REDUCTION)})`,
        opacity: Math.max(0, 1 - (vh ? y / (vh * HERO_CONFIG.FADE_START_PERCENTAGE) : 0)),
        backgroundImage: "image-set(url('/logo.webp') type('image/webp'), url('/logo.png?v=2') type('image/png'))",
        backgroundColor: HERO_CONFIG.BACKGROUND_COLOR,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        filter: `brightness(${HERO_CONFIG.BRIGHTNESS}) contrast(${HERO_CONFIG.CONTRAST}) saturate(${HERO_CONFIG.SATURATE}) blur(${HERO_CONFIG.BLUR_AMOUNT})`,
      }}
    />
  );
}
