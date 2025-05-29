import React from 'react';
import { cn } from '@/lib/utils';
import HeaderNav from '../Dashboard/HeaderNav';

interface HeaderProps {
  children?: React.ReactNode; // To allow for potential future additions alongside HeaderNav
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  // This component defines the main header region as per layout requirements.
  // HeaderNav provides the specific content and detailed styling for the Facebook clone header.
  // Since HeaderNav itself uses fixed positioning and full-width styling, this
  // Header component acts as a semantic wrapper and adheres to the z-index layering
  // specified in the layout requirements.
  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-10', // Core positioning from Layout Requirements (header.position)
        'h-[60px] bg-header', // Height and background from Layout Requirements (header.sizing, header.layout)
        // The `flex items-center justify-between px-4` from header.layout are effectively handled by HeaderNav,
        // as HeaderNav is fixed and overlays this container.
        className
      )}
    >
      <HeaderNav />
      {/* children can be used if other global fixed elements need to be part of the header conceptually */}
      {children}
    </header>
  );
};

export default Header;