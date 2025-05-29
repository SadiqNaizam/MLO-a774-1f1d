import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Newspaper,
  MessageCircle,
  Clapperboard, // Using Clapperboard for Watch as PlaySquare is less common and Youtube is not a generic icon type
  Store,
  Gamepad2,
  CalendarDays,
  Flag,
  Users,
  ListChecks,
  HeartHandshake,
  ChevronDown,
  PlusCircle,
  Megaphone,
  CalendarPlus,
  UserCircle
} from 'lucide-react';

interface SidebarNavItemProps {
  icon: React.ElementType;
  label: string;
  href?: string;
  isActive?: boolean;
  count?: number;
  isUser?: boolean;
  avatarSrc?: string;
}

const SidebarNavItem: React.FC<SidebarNavItemProps> = ({ icon: Icon, label, href = '#', isActive, count, isUser, avatarSrc }) => {
  return (
    <a
      href={href}
      className={cn(
        'flex items-center space-x-3 px-3 py-2.5 rounded-md text-sm font-medium',
        isActive
          ? 'bg-blue-600 text-white'
          : 'text-gray-200 hover:bg-gray-700 hover:text-white',
        isUser && 'mb-2'
      )}
    >
      {isUser ? (
        <Avatar className="h-7 w-7">
          <AvatarImage src={avatarSrc} alt={label} />
          <AvatarFallback>{label.charAt(0)}</AvatarFallback>
        </Avatar>
      ) : (
        <Icon className="h-5 w-5" />
      )}
      <span>{label}</span>
      {count && (
        <span className="ml-auto inline-block py-0.5 px-2 text-xs rounded-full bg-red-500 text-white">
          {count}
        </span>
      )}
    </a>
  );
};

interface SidebarNavProps {
  className?: string;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ className }) => {
  const mainNavItems = [
    { icon: UserCircle, label: 'Olenna Mason', isUser: true, avatarSrc: 'https://via.placeholder.com/40' },
    { icon: Newspaper, label: 'News Feed', isActive: true },
    { icon: MessageCircle, label: 'Messenger', count: 5 },
    { icon: Clapperboard, label: 'Watch' },
    { icon: Store, label: 'Marketplace' },
  ];

  const shortcutsItems = [
    { icon: Gamepad2, label: 'FarmVille 2' },
    // Add more shortcuts here
  ];

  const exploreItems = [
    { icon: CalendarDays, label: 'Events' },
    { icon: Flag, label: 'Pages' },
    { icon: Users, label: 'Groups' },
    { icon: ListChecks, label: 'Friend Lists' },
    { icon: HeartHandshake, label: 'Fundraisers' },
    { icon: ChevronDown, label: 'See More...' },
  ];

  const createItems = [
    { icon: Megaphone, label: 'Ad' },
    { icon: Flag, label: 'Page' },
    { icon: Users, label: 'Group' },
    { icon: CalendarPlus, label: 'Event' },
    { icon: HeartHandshake, label: 'Fundraiser' },
  ];

  return (
    <nav className={cn('p-4 space-y-1 text-white', className)}>
      {mainNavItems.map((item) => (
        <SidebarNavItem key={item.label} {...item} />
      ))}

      <div className="pt-4 pb-2">
        <h3 className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Shortcuts</h3>
        <div className="mt-1 space-y-1">
          {shortcutsItems.map((item) => (
            <SidebarNavItem key={item.label} {...item} />
          ))}
        </div>
      </div>

      <div className="pt-4 pb-2">
        <h3 className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Explore</h3>
        <div className="mt-1 space-y-1">
          {exploreItems.map((item) => (
            <SidebarNavItem key={item.label} {...item} />
          ))}
        </div>
      </div>

      <div className="pt-4 pb-2">
        <h3 className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Create</h3>
        <div className="mt-1 space-y-1">
          {createItems.map((item) => (
            <SidebarNavItem key={item.label} {...item} icon={PlusCircle} /> // All create items use PlusCircle then specific icon text, or use their specific icon
            // The image shows generic icons next to "Create Ad, Page..." but it's common to have specific icons.
            // For now, using their specific icons as defined in items array
            // <SidebarNavItem key={item.label} icon={item.icon} label={item.label} /> - This is better
          ))}
        </div>
      </div>
    </nav>
  );
};

export default SidebarNav;
