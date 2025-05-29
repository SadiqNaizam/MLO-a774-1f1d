import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Users, X } from 'lucide-react';

interface GroupSuggestion {
  id: string;
  name: string;
  members: number;
  coverImageSrc: string;
  mutualFriendsAvatars?: string[]; // URLs of avatars for mutual friends display
}

interface SuggestedGroupsWidgetProps {
  className?: string;
}

const suggestedGroupsData: GroupSuggestion[] = [
  {
    id: '1',
    name: 'Mad Men (MADdicts)',
    members: 6195,
    coverImageSrc: 'https://via.placeholder.com/300x100/FFA500/FFFFFF?Text=Mad+Men+Cover',
    mutualFriendsAvatars: ['https://i.pravatar.cc/150?img=6', 'https://i.pravatar.cc/150?img=7', 'https://i.pravatar.cc/150?img=8'],
  },
  {
    id: '2',
    name: 'Dexter Morgan Fans',
    members: 6984,
    coverImageSrc: 'https://via.placeholder.com/300x100/FF0000/FFFFFF?Text=Dexter+Cover',
    mutualFriendsAvatars: ['https://i.pravatar.cc/150?img=9', 'https://i.pravatar.cc/150?img=10'],
  },
  {
    id: '3',
    name: 'Tech Innovators Hub',
    members: 12030,
    coverImageSrc: 'https://via.placeholder.com/300x100/007BFF/FFFFFF?Text=Tech+Hub',
    mutualFriendsAvatars: [],
  },
];

const SuggestedGroupsWidget: React.FC<SuggestedGroupsWidgetProps> = ({ className }) => {
  const [groups, setGroups] = React.useState(suggestedGroupsData);

  const handleDismiss = (groupId: string) => {
    setGroups(prevGroups => prevGroups.filter(group => group.id !== groupId));
  };

  return (
    <Card className={cn('w-full', className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold">Suggested Groups</CardTitle>
        <Button variant="link" size="sm" className="text-primary hover:underline px-0">
          See All
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {groups.map((group) => (
          <Card key={group.id} className="overflow-hidden relative group/item">
            <div className="absolute top-1 right-1 z-10 opacity-0 group-hover/item:opacity-100 transition-opacity">
                <Button variant="ghost" size="icon" className="h-6 w-6 bg-black/30 hover:bg-black/50 text-white rounded-full" onClick={() => handleDismiss(group.id)}>
                    <X className="h-3 w-3" />
                </Button>
            </div>
            <img src={group.coverImageSrc} alt={`${group.name} cover`} className="w-full h-24 object-cover" />
            <div className="p-3">
              {group.mutualFriendsAvatars && group.mutualFriendsAvatars.length > 0 && (
                <div className="flex -space-x-2 mb-2 overflow-hidden">
                  {group.mutualFriendsAvatars.slice(0, 5).map((avatarSrc, index) => (
                    <Avatar key={index} className="h-6 w-6 border-2 border-card ring-1 ring-card">
                      <AvatarImage src={avatarSrc} />
                      <AvatarFallback>{index}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              )}
              <h4 className="font-semibold text-sm text-foreground truncate">{group.name}</h4>
              <p className="text-xs text-muted-foreground flex items-center">
                <Users className="h-3 w-3 mr-1" /> {group.members.toLocaleString()} members
              </p>
              <Button variant="outline" size="sm" className="w-full mt-3 hover:bg-secondary">
                <Plus className="h-4 w-4 mr-1" /> Join Group
              </Button>
            </div>
          </Card>
        ))}
        {groups.length === 0 && (
            <p className="text-sm text-muted-foreground text-center py-4">No more group suggestions for now.</p>
        )}
      </CardContent>
    </Card>
  );
};

export default SuggestedGroupsWidget;
