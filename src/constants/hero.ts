export const HERO_CONFIG = {
  // Parallax and animation
  PARALLAX_SPEED: 0.15,
  PARALLAX_SCALE_FACTOR: 0.08,
  PARALLAX_Y_MULTIPLIER: -0.25,
  MAX_SCALE_REDUCTION: 0.08,
  FADE_START_PERCENTAGE: 0.6,
  
  // Visual effects
  BLUR_AMOUNT: '0.4px',
  BRIGHTNESS: '1.05',
  CONTRAST: '0.95',
  SATURATE: '0.9',
  OVERLAY_OPACITY: 0.35,
  
  // Vignette and gradients
  VIGNETTE_START: '15%',
  VIGNETTE_END: '95%',
  GRADIENT_HEIGHT: 'h-24',
  
  // Responsive breakpoints
  MOBILE_BREAKPOINT: 640,
  TABLET_BREAKPOINT: 768,
  DESKTOP_BREAKPOINT: 1024,
  
  // Layout and spacing
  CONTAINER_MAX_WIDTH: 'max-w-6xl',
  CONTENT_MAX_WIDTH: 'max-w-3xl',
  HORIZONTAL_PADDING: 'px-4 sm:px-6',
  VERTICAL_PADDING: 'pb-0 sm:pb-4 md:pb-6',
  CONTENT_PADDING: 'px-4 py-3 sm:px-6 sm:py-5',
  BUTTON_GAP: 'gap-2 sm:gap-3',
  BUTTON_MARGIN: 'mt-2 sm:mt-4',
  
  // Images and assets - Responsive sizing
  LOGO_SIZES: {
    mobile: { width: 320, height: 180, quality: 60 },
    tablet: { width: 640, height: 360, quality: 75 },
    desktop: { width: 1200, height: 675, quality: 85 },
    large: { width: 1920, height: 1080, quality: 90 }
  },
  LOGO_MAX_WIDTH: 320, // Fallback for legacy components
  LOGO_VERSION: 'v=2',
  IMAGE_TRANSITION_DURATION: 'duration-300',
  
  // Colors and backgrounds
  BACKGROUND_COLOR: '#000',
  OVERLAY_COLOR: 'bg-black/35',
  CONTENT_BACKGROUND: 'bg-black/40',
  BORDER_COLOR: 'border-white/5',
  
  // Typography
  TEXT_SIZE_BASE: 'text-base md:text-lg',
  BUTTON_TEXT_SIZE: 'text-sm',
  
  // Shadows and effects
  CONTENT_SHADOW: 'shadow-[0_10px_30px_rgba(0,0,0,0.45)]',
  DIVIDER_SHADOW: 'shadow-[0_0_10px_rgba(207,20,43,0.35)]',
  
  // Button styling
  BUTTON_BORDER: 'border border-zinc-700',
  BUTTON_ROUNDED: 'rounded-md',
  BUTTON_HOVER: 'hover:bg-zinc-900',
  
  // Focus states
  FOCUS_RING: 'focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-black',
  
  // Scale and transform
  INITIAL_SCALE: 1.08,
  SCALE_DIVISOR: 1600,
} as const;
