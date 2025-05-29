import React from 'react';
import { cn } from '@/lib/utils';
import SidebarNav from '../Dashboard/SidebarNav';

interface SidebarProps {
  children?: React.ReactNode; // For potential extensions like a sidebar footer
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ children, className }) => {
  // This component defines the left sidebar region.
  // SidebarNav provides the navigation content.
  return (
    <aside
      className={cn(
        'fixed top-0 left-0 h-screen w-[260px]', // Positioning and sizing from Layout Requirements
        'bg-sidebarText text-white', // Background from Layout Requirements & tailwind.config.ts, default text color
        'flex flex-col', // Layout type from Layout Requirements
        'overflow-y-auto', // Ensures scrollability if content exceeds viewport height
        className
      )}
    >
      <SidebarNav /> {/* SidebarNav contains its own padding and styling */}
      {/* children can be used for additional fixed content within the sidebar, below SidebarNav */}
      {children}
    </aside>
  );
};

export default Sidebar;