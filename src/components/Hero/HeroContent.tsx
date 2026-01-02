import { HERO_CONFIG } from "@/constants/hero";
import { HeroActions } from "./HeroButton";

export function HeroContent() {
  return (
    <>
      {/* Gradient masks top/bottom for smooth fade */}
      <div className={`pointer-events-none absolute inset-x-0 top-0 ${HERO_CONFIG.GRADIENT_HEIGHT} bg-gradient-to-b from-black to-transparent`} />
      <div className={`pointer-events-none absolute inset-x-0 bottom-0 ${HERO_CONFIG.GRADIENT_HEIGHT} bg-gradient-to-t from-black to-transparent`} />

      {/* Dark overlay + vignette to blend background with dark theme */}
      <div className={`pointer-events-none absolute inset-0 ${HERO_CONFIG.OVERLAY_COLOR}`} />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at center, rgba(0,0,0,0) ${HERO_CONFIG.VIGNETTE_START}, rgba(0,0,0,0.95) ${HERO_CONFIG.VIGNETTE_END})`,
        }}
      />

      {/* Content (desktop/tablet) */}
      <div className={`relative mx-auto ${HERO_CONFIG.CONTAINER_MAX_WIDTH} ${HERO_CONFIG.HORIZONTAL_PADDING} min-h-screen flex items-end`}>
        <div className={`flex w-full flex-col items-center text-center ${HERO_CONFIG.VERTICAL_PADDING}`}>
          <div className={`mx-auto ${HERO_CONFIG.CONTENT_MAX_WIDTH} ${HERO_CONFIG.BUTTON_ROUNDED} ${HERO_CONFIG.CONTENT_BACKGROUND} ${HERO_CONFIG.CONTENT_PADDING} backdrop-blur-sm supports-[backdrop-filter]:backdrop-blur-sm ${HERO_CONFIG.BORDER_COLOR} ${HERO_CONFIG.CONTENT_SHADOW}`}>
            <p className={`text-zinc-100 ${HERO_CONFIG.TEXT_SIZE_BASE}`}>
              North-West England's premier 90s Britpop band. From Oasis to Travis and Paul Weller to Space, we deliver a night of hit anthems for weddings, events and venues.
            </p>
            <HeroActions />
          </div>
        </div>
      </div>
    </>
  );
}
