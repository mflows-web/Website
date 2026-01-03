import { HERO_CONFIG } from "@/constants/hero";

export function HeroDivider() {
  return (
    <div className="my-4 sm:my-2">
      <div className={`h-2 w-full bg-gradient-to-r from-white via-[#cf142b] to-white ${HERO_CONFIG.DIVIDER_SHADOW}`} />
    </div>
  );
}
