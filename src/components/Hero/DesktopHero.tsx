import { HERO_CONFIG } from "@/constants/hero";

interface DesktopHeroProps {
  y: number;
  vh: number;
}

export function DesktopHero({ y, vh }: DesktopHeroProps) {
  return (
    <div className="relative overflow-hidden min-h-screen">
      <HeroBackground y={y} vh={vh} />
      <HeroContent />
    </div>
  );
}

// Import the other components
import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";
