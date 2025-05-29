import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Facebook,
  Search,
  Home,
  Users,
  MessageCircle,
  Bell,
  HelpCircle,
  ChevronDown,
  Settings,
  LogOut,
} from 'lucide-react';

interface HeaderNavProps {
  className?: string;
}

const HeaderNav: React.FC<HeaderNavProps> = ({ className }) => {
  const [searchQuery, setSearchQuery] = React.useState<string>('');

  return (
    <header
      className={cn(
        'flex items-center justify-between px-4 h-[60px] bg-header text-white fixed top-0 left-0 right-0 z-50 shadow-md',
        className
      )}
    >
      {/* Left Section: Logo and Search */}
      <div className="flex items-center space-x-2">
        <Facebook className="h-10 w-10 text-white" />
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="search"
            placeholder="Search Facebook"
            className="pl-10 pr-3 py-2 h-10 w-[240px] rounded-full bg-gray-700 border-transparent text-white placeholder-gray-400 focus:bg-gray-600 focus:ring-0"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Center Section (Traditionally for main navigation, empty based on provided image) */}
      <div className="flex-grow"></div>

      {/* Right Section: Profile, Links, Icons */}
      <div className="flex items-center space-x-2">
        <Button variant="ghost" className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-white/10">
          <Avatar className="h-7 w-7">
            <AvatarImage src="https://via.placeholder.com/40" alt="Olenna Mason" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <span className="font-semibold text-sm">Olenna</span>
        </Button>

        <Button variant="ghost" className="px-3 py-2 rounded-md text-sm font-semibold hover:bg-white/10">
          Home
        </Button>
        <Button variant="ghost" className="px-3 py-2 rounded-md text-sm font-semibold hover:bg-white/10">
          Find Friends
        </Button>

        <div className="flex items-center space-x-1">
          {[ 
            { icon: MessageCircle, count: 8, ariaLabel: 'Messenger' },
            { icon: Bell, count: 36, ariaLabel: 'Notifications' },
            { icon: HelpCircle, ariaLabel: 'Help' },
          ].map((item, index) => (
            <Button key={index} variant="ghost" size="icon" className="relative rounded-full hover:bg-white/10" aria-label={item.ariaLabel}>
              <item.icon className="h-5 w-5" />
              {item.count && (
                <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 min-w-5 justify-center p-0.5 text-xs">
                  {item.count > 99 ? '99+' : item.count}
                </Badge>
              )}
            </Button>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10" aria-label="Account Settings">
                <ChevronDown className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-card text-foreground mt-2">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="hover:bg-muted">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings & Privacy</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-muted">
                <HelpCircle className="mr-2 h-4 w-4" />
                <span>Help & Support</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-500 hover:bg-muted hover:text-red-600">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log Out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
