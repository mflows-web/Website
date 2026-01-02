import { useState, useEffect } from "react";
import { HERO_CONFIG } from "@/constants/hero";

type ImageState = 'loading' | 'loaded' | 'error';

interface OptimizedImageProps {
  className?: string;
  alt: string;
  onLoad?: () => void;
  onError?: () => void;
}

// Image placeholder component
const ImagePlaceholder = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-zinc-800 animate-pulse" />
);

// Error fallback component
const ErrorFallback = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-zinc-900 flex items-center justify-center">
    <div className="text-zinc-400 text-sm">Image unavailable</div>
  </div>
);

// Optimized background image component
const OptimizedBackgroundImage = ({ className, alt, onLoad, onError }: OptimizedImageProps) => {
  const [imageState, setImageState] = useState<ImageState>('loading');
  const [currentSrc, setCurrentSrc] = useState('');

  useEffect(() => {
    const img = new Image();
    
    const handleLoad = () => {
      setImageState('loaded');
      setCurrentSrc(img.src);
      onLoad?.();
    };

    const handleError = () => {
      setImageState('error');
      onError?.();
    };

    img.onload = handleLoad;
    img.onerror = handleError;

    // Use responsive image selection
    const selectOptimalImage = () => {
      const isHighDensity = window.devicePixelRatio > 1;
      const isLargeScreen = window.innerWidth >= 768;
      
      let src = '/logo.webp';
      
      // Select appropriate image based on screen size and density
      if (isLargeScreen && isHighDensity) {
        src = '/logo-large.webp';
      } else if (isLargeScreen) {
        src = '/logo-medium.webp';
      } else if (isHighDensity) {
        src = '/logo-mobile-hd.webp';
      }
      
      return src;
    };

    // Start loading the optimal image
    const optimalSrc = selectOptimalImage();
    img.src = optimalSrc;

    // Cleanup
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [onLoad, onError]);

  if (imageState === 'loading') {
    return <ImagePlaceholder />;
  }

  if (imageState === 'error') {
    return <ErrorFallback />;
  }

  return (
    <div
      className={className}
      style={{
        backgroundImage: `image-set(url('${currentSrc}') type('image/webp'), url('/logo.png?${HERO_CONFIG.LOGO_VERSION}') type('image/png'))`,
        backgroundColor: HERO_CONFIG.BACKGROUND_COLOR,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      role="img"
      aria-label={alt}
    />
  );
};

// Enhanced mobile hero with optimized image
export function OptimizedMobileHero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden">
      <OptimizedBackgroundImage
        className={`mx-auto block w-full max-w-[${HERO_CONFIG.LOGO_SIZES.mobile.width}px] h-auto select-none transition-opacity ${HERO_CONFIG.IMAGE_TRANSITION_DURATION} ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        alt="The Mersey Flows logo"
        onLoad={() => setImageLoaded(true)}
      />
    </div>
  );
}

// Enhanced hero background with optimized image
interface OptimizedHeroBackgroundProps {
  y: number;
  vh: number;
}

export function OptimizedHeroBackground({ y, vh }: OptimizedHeroBackgroundProps) {
  return (
    <div
      className="absolute inset-0"
      style={{
        transform: `translateY(${y * HERO_CONFIG.PARALLAX_Y_MULTIPLIER}px) scale(${HERO_CONFIG.INITIAL_SCALE - Math.min(y / HERO_CONFIG.SCALE_DIVISOR, HERO_CONFIG.MAX_SCALE_REDUCTION)})`,
        opacity: Math.max(0, 1 - (vh ? y / (vh * HERO_CONFIG.FADE_START_PERCENTAGE) : 0)),
        contain: 'layout style paint', // CSS containment for better performance
        willChange: 'transform, opacity',
      }}
    >
      <OptimizedBackgroundImage
        className="absolute inset-0"
        alt="The Mersey Flows band logo background"
      />
    </div>
  );
}
