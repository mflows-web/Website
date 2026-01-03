import { useState } from "react";
import { HERO_CONFIG } from "@/constants/hero";

export function MobileHero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden pb-4 landscape:pb-2">
      <picture>
        <source srcSet="/logo.webp" type="image/webp" />
        <img
          onLoad={() => setImageLoaded(true)}
          className={`mx-auto block w-full max-w-[${HERO_CONFIG.LOGO_SIZES.mobile.width}px] h-auto select-none transition-opacity ${HERO_CONFIG.IMAGE_TRANSITION_DURATION} ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          src={`/logo.png?${HERO_CONFIG.LOGO_VERSION}`}
          alt="The Mersey Flows - Britpop 90s Band Logo"
          title="The Mersey Flows - Britpop 90s Band"
          draggable={false}
          loading="eager"
          decoding="async"
        />
      </picture>
    </div>
  );
}
