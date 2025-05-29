import React from 'react';
import { cn } from '@/lib/utils';

interface FooterProps {
  children: React.ReactNode; // Mandatory children prop
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ children, className }) => {
  return (
    <footer
      className={cn(
        'py-6 px-4 text-center text-sm text-muted-foreground border-t bg-background',
        className
      )}
    >
      {children ? children : (
        // Default content if no children are provided.
        // For the Facebook clone, a prominent global footer is not typical.
        // The ChatWidget functionality is part of the SidebarRight as per requirements.
        <p>&copy; {new Date().getFullYear()} Facebook Dashboard Clone. All rights reserved.</p>
      )}
    </footer>
  );
};

export default Footer;