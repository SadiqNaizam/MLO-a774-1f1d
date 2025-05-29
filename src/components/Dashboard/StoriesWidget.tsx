import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlusCircle, Archive, Settings } from 'lucide-react';

interface StoryItem {
  id: string;
  userName: string;
  avatarSrc: string;
  storyImageSrc: string; // For preview, not used in this simplified avatar list
  viewed?: boolean;
}

interface StoriesWidgetProps {
  className?: string;
}

const storiesData: StoryItem[] = [
  { id: '1', userName: 'Alice', avatarSrc: 'https://i.pravatar.cc/150?img=1', storyImageSrc: '', viewed: true },
  { id: '2', userName: 'Bob', avatarSrc: 'https://i.pravatar.cc/150?img=2', storyImageSrc: '' },
  { id: '3', userName: 'Charlie', avatarSrc: 'https://i.pravatar.cc/150?img=3', storyImageSrc: '' },
  { id: '4', userName: 'Diana', avatarSrc: 'https://i.pravatar.cc/150?img=4', storyImageSrc: '', viewed: true },
  { id: '5', userName: 'Edward', avatarSrc: 'https://i.pravatar.cc/150?img=5', storyImageSrc: '' },
];

const StoriesWidget: React.FC<StoriesWidgetProps> = ({ className }) => {
  return (
    <Card className={cn('w-full', className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold">Stories</CardTitle>
        <div className="space-x-2">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:bg-muted">
            <Archive className="h-4 w-4 mr-1" /> Archive
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:bg-muted">
            <Settings className="h-4 w-4 mr-1" /> Settings
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-4">
          <Button variant="outline" className="w-full justify-start py-6">
            <PlusCircle className="h-10 w-10 text-primary mr-3" />
            <div>
              <p className="font-semibold text-md text-foreground">Add to Your Story</p>
              <p className="text-xs text-muted-foreground">Share a photo, video or write something</p>
            </div>
          </Button>

          <div className="flex space-x-3 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
            {storiesData.map((story) => (
              <div key={story.id} className="flex flex-col items-center space-y-1 flex-shrink-0 w-20">
                <Avatar className={cn(
                  'h-16 w-16 border-2',
                  story.viewed ? 'border-gray-300' : 'border-primary'
                )}>
                  <AvatarImage src={story.avatarSrc} alt={story.userName} />
                  <AvatarFallback>{story.userName.charAt(0)}</AvatarFallback>
                </Avatar>
                <p className="text-xs text-center text-muted-foreground truncate w-full">{story.userName}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StoriesWidget;
