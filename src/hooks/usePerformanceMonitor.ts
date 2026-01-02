import { useEffect, useState, useRef } from "react";

interface PerformanceMetrics {
  fps: number;
  frameTime: number;
  isLowPerformance: boolean;
}

interface PerformanceMonitorOptions {
  targetFPS?: number;
  sampleSize?: number;
  checkInterval?: number;
  disableThreshold?: number;
}

export function usePerformanceMonitor(options: PerformanceMonitorOptions = {}) {
  const {
    targetFPS = 60,
    sampleSize = 30,
    checkInterval = 2000,
    disableThreshold = 45
  } = options;

  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: targetFPS,
    frameTime: 1000 / targetFPS,
    isLowPerformance: false
  });

  const [isMonitoring, setIsMonitoring] = useState(false);
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const frameTimesRef = useRef<number[]>([]);
  const rafIdRef = useRef<number>();

  useEffect(() => {
    if (!isMonitoring) return;

    const measureFrame = () => {
      const now = performance.now();
      const deltaTime = now - lastTimeRef.current;
      lastTimeRef.current = now;

      frameTimesRef.current.push(deltaTime);
      frameCountRef.current++;

      // Keep only recent samples
      if (frameTimesRef.current.length > sampleSize) {
        frameTimesRef.current.shift();
      }

      // Calculate metrics every sampleSize frames
      if (frameCountRef.current >= sampleSize) {
        const avgFrameTime = frameTimesRef.current.reduce((a, b) => a + b, 0) / frameTimesRef.current.length;
        const currentFPS = Math.round(1000 / avgFrameTime);
        const isLowPerf = currentFPS < disableThreshold;

        setMetrics({
          fps: currentFPS,
          frameTime: avgFrameTime,
          isLowPerformance: isLowPerf
        });

        frameCountRef.current = 0;
        frameTimesRef.current = [];
      }

      rafIdRef.current = requestAnimationFrame(measureFrame);
    };

    rafIdRef.current = requestAnimationFrame(measureFrame);

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [isMonitoring, sampleSize, disableThreshold]);

  const startMonitoring = () => setIsMonitoring(true);
  const stopMonitoring = () => setIsMonitoring(false);

  return {
    metrics,
    startMonitoring,
    stopMonitoring,
    isMonitoring
  };
}

export function useAdaptiveParallax(speed = 0.15, options?: PerformanceMonitorOptions) {
  const [y, setY] = useState(0);
  const [parallaxEnabled, setParallaxEnabled] = useState(true);
  const { metrics, startMonitoring, stopMonitoring, isMonitoring } = usePerformanceMonitor(options);
  const elementRef = useRef<HTMLElement>(null);
  const isVisibleRef = useRef(true);

  // Intersection Observer for visibility-based optimization
  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        isVisibleRef.current = entry.isIntersecting;
        
        // Start monitoring when visible, stop when hidden
        if (entry.isIntersecting && !isMonitoring) {
          startMonitoring();
        } else if (!entry.isIntersecting && isMonitoring) {
          stopMonitoring();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [startMonitoring, stopMonitoring, isMonitoring]);

  // Disable parallax if performance is poor
  useEffect(() => {
    if (metrics.isLowPerformance && parallaxEnabled) {
      console.log('Performance threshold reached, disabling parallax effect');
      setParallaxEnabled(false);
    } else if (!metrics.isLowPerformance && !parallaxEnabled && isVisibleRef.current) {
      // Re-enable when performance improves
      console.log('Performance recovered, re-enabling parallax effect');
      setParallaxEnabled(true);
    }
  }, [metrics.isLowPerformance, parallaxEnabled]);

  // Parallax scroll handler
  useEffect(() => {
    if (!parallaxEnabled) return;

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setY(window.scrollY * speed);
        raf = 0;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed, parallaxEnabled]);

  return {
    y,
    parallaxEnabled,
    metrics,
    elementRef
  };
}
