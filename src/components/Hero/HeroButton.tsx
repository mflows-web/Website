import { HERO_CONFIG } from "@/constants/hero";

interface HeroButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  key?: string; // Add key prop to interface
}

// Reusable button component with consistent styling
export const HeroButton = ({ href, children, className = "", ...props }: HeroButtonProps) => {
  // Destructure key separately to avoid passing it to the DOM element
  const { key, ...restProps } = props;
  
  return (
    <a
      href={href}
      className={`inline-flex items-center ${HERO_CONFIG.BUTTON_ROUNDED} ${HERO_CONFIG.BUTTON_BORDER} px-4 py-2 ${HERO_CONFIG.BUTTON_TEXT_SIZE} font-medium ${HERO_CONFIG.BUTTON_HOVER} ${HERO_CONFIG.FOCUS_RING} ${className}`}
      {...restProps}
    >
      {children}
    </a>
  );
};

// Hero actions component with button composition
export const HeroActions = () => {
  const actions = [
    { href: '#setlist', label: 'Setlist' },
    { href: '#videos', label: 'Performance videos' },
    { href: '#contact', label: 'Book the band' }
  ];
  
  return (
    <div className={`${HERO_CONFIG.BUTTON_MARGIN} flex justify-center ${HERO_CONFIG.BUTTON_GAP}`}>
      {actions.map((action) => (
        <HeroButton key={action.href} href={action.href}>
          {action.label}
        </HeroButton>
      ))}
    </div>
  );
};
