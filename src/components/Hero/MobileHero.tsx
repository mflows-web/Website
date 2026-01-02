import { useState } from "react";
import { HERO_CONFIG } from "@/constants/hero";

export function MobileHero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden">
      <picture>
        <source srcSet="/logo.webp" type="image/webp" />
        <img
          onLoad={() => setImageLoaded(true)}
          className={`mx-auto block w-full max-w-[${HERO_CONFIG.LOGO_MAX_WIDTH}px] h-auto select-none transition-opacity ${HERO_CONFIG.IMAGE_TRANSITION_DURATION} ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          src={`/logo.png?${HERO_CONFIG.LOGO_VERSION}`}
          alt="The Mersey Flows logo"
          draggable={false}
        />
      </picture>
    </div>
  );
}
