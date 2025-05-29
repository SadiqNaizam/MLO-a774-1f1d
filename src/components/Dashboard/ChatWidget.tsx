import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { PenSquare, Users, Settings2, Search, Dot } from 'lucide-react';

interface ActiveChat {
  id: string;
  name: string;
  avatarSrc: string;
  lastMessage?: string;
  timestamp?: string;
  isOnline: boolean;
}

interface ChatWidgetProps {
  className?: string;
}

const activeChatsData: ActiveChat[] = [
  {
    id: '1',
    name: 'Alice Wonderland',
    avatarSrc: 'https://i.pravatar.cc/150?img=11',
    lastMessage: 'See you tomorrow!',
    timestamp: '10m',
    isOnline: true,
  },
  {
    id: '2',
    name: 'Bob The Builder',
    avatarSrc: 'https://i.pravatar.cc/150?img=12',
    lastMessage: 'Okay, sounds good.',
    timestamp: '2h',
    isOnline: false,
  },
  {
    id: '3',
    name: 'Charlie Chaplin',
    avatarSrc: 'https://i.pravatar.cc/150?img=13',
    lastMessage: 'Haha, that was funny!',
    timestamp: '1d',
    isOnline: true,
  },
  {
    id: '4',
    name: 'Diana Prince',
    avatarSrc: 'https://i.pravatar.cc/150?img=14',
    lastMessage: 'Can you send the file?',
    timestamp: '3d',
    isOnline: false,
  },
];

const ChatWidget: React.FC<ChatWidgetProps> = ({ className }) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const filteredChats = activeChatsData.filter(chat => 
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className={cn('w-full', className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center">
          <Dot className="h-6 w-6 text-green-500 -ml-2" /> 
          <CardTitle className="text-lg font-semibold">Chat</CardTitle>
        </div>
        <div className="flex items-center space-x-1">
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:bg-muted">
            <PenSquare className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:bg-muted">
            <Users className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:bg-muted">
            <Settings2 className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="p-2 border-b">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input 
              type="text"
              placeholder="Search Messenger"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-sm rounded-md border border-input bg-transparent focus:ring-1 focus:ring-ring"
            />
          </div>
        </div>
        <ScrollArea className="h-[200px] p-2">
          {filteredChats.length > 0 ? (
            filteredChats.map((chat) => (
              <Button
                key={chat.id}
                variant="ghost"
                className="w-full justify-start h-auto py-2 px-2 mb-1 hover:bg-muted"
              >
                <div className="relative mr-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={chat.avatarSrc} alt={chat.name} />
                    <AvatarFallback>{chat.name.substring(0, 1)}</AvatarFallback>
                  </Avatar>
                  {chat.isOnline && (
                    <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-card" />
                  )}
                </div>
                <div className="flex-grow text-left overflow-hidden">
                  <p className="text-sm font-medium text-foreground truncate">{chat.name}</p>
                  {chat.lastMessage && (
                    <p className="text-xs text-muted-foreground truncate">
                      {chat.lastMessage} 
                      {chat.timestamp && <span className="ml-1">&middot; {chat.timestamp}</span>}
                    </p>
                  )}
                </div>
              </Button>
            ))
          ) : (
            <p className="text-sm text-muted-foreground text-center py-4">No chats found.</p>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default ChatWidget;
