import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

// Error boundary for hero section
export class HeroErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log to error tracking service
    console.error('Hero section error:', error, errorInfo);
    
    // In production, you might want to send this to an error reporting service
    // Note: gtag may not be available, so we check for it first
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'exception', {
        description: error.message,
        fatal: false
      });
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="relative min-h-screen bg-black flex items-center justify-center">
          <div className="text-center text-zinc-400">
            <h2 className="text-xl font-semibold mb-4">Something went wrong</h2>
            <p className="mb-4">We're having trouble loading this section.</p>
            <button 
              onClick={() => this.setState({ hasError: false })}
              className="px-4 py-2 bg-zinc-800 text-white rounded hover:bg-zinc-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Fallback hero component for low-end devices
export const SimplifiedHero = () => (
  <section className="relative bg-black min-h-screen flex items-center justify-center" aria-label="The Mersey Flows hero">
    <div className="text-center text-zinc-100 px-4">
      <h1 className="text-4xl font-bold mb-6">The Mersey Flows</h1>
      <p className="text-lg mb-8 max-w-2xl mx-auto">
        North-West England's premier 90s Britpop band for weddings, events and venues.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#setlist" className="px-6 py-3 bg-zinc-800 text-white rounded hover:bg-zinc-700 transition-colors">
          Setlist
        </a>
        <a href="#contact" className="px-6 py-3 border border-zinc-600 text-white rounded hover:bg-zinc-800 transition-colors">
          Book the Band
        </a>
      </div>
    </div>
  </section>
);
