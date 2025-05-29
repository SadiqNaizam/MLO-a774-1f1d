import React from 'react';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import PostCard from '../components/Dashboard/PostCard';
import StoriesWidget from '../components/Dashboard/StoriesWidget';
import SuggestedGroupsWidget from '../components/Dashboard/SuggestedGroupsWidget';
import ChatWidget from '../components/Dashboard/ChatWidget';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Image, SmilePlus, Video } from 'lucide-react';

// Interface for Post data, matching PostCardProps
interface PostData {
  id: string;
  authorName: string;
  authorAvatarSrc: string;
  timestamp: string;
  audience?: 'Public' | 'Friends' | 'Only Me';
  postText: string;
  imageUrl?: string;
  mapPreviewUrl?: string;
  locationName?: string;
  locationDetails?: string;
  taggedPeople?: string[];
}

const IndexPage: React.FC = () => {
  const postsData: PostData[] = [
    {
      id: 'post-1',
      authorName: 'Julia Fillory',
      authorAvatarSrc: 'https://i.pravatar.cc/150?img=25',
      timestamp: '2 hrs ago',
      audience: 'Friends' as const,
      postText: 'Checking out some new stores downtown! 🛍️ Found some amazing deals and unique items. Raleigh is full of surprises!',
      mapPreviewUrl: 'https://source.unsplash.com/random/600x300/?map,city,Raleigh',
      locationName: 'Raleigh, North Carolina',
      locationDetails: 'Exploring the city vibes',
      taggedPeople: ['Bryan Durand', 'Anna Lee'],
    },
    {
      id: 'post-2',
      authorName: 'Alex Wanderer',
      authorAvatarSrc: 'https://i.pravatar.cc/150?img=26',
      timestamp: '5 hrs ago',
      audience: 'Public' as const,
      postText: 'Just finished a 10km hike! The view from the top was absolutely worth it. Nature is the best therapy. ⛰️ #hiking #naturelover #adventure',
      imageUrl: 'https://source.unsplash.com/random/600x400/?nature,mountains,hiking',
    },
    {
      id: 'post-3',
      authorName: 'Chef Maria',
      authorAvatarSrc: 'https://i.pravatar.cc/150?img=27',
      timestamp: 'Yesterday at 8:30 PM',
      audience: 'Friends' as const,
      postText: 'Homemade pizza night! 🍕 Turned out surprisingly well. What are your favorite toppings?',
      imageUrl: 'https://source.unsplash.com/random/600x400/?food,pizza',
    },
    {
      id: 'post-4',
      authorName: 'TechSavvy Tom',
      authorAvatarSrc: 'https://i.pravatar.cc/150?img=28',
      timestamp: 'Jan 15 at 11:00 AM',
      audience: 'Public' as const,
      postText: 'Really excited about the upcoming advancements in AI. The future is now! What are your thoughts on the latest AI models? #AI #Tech #Future',
    },
  ];

  const currentUser = {
    name: 'Olenna Mason',
    avatarSrc: 'https://via.placeholder.com/40', // Consistent with SidebarNav and HeaderNav
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Sidebar />

      {/* Main Content Area */}
      <main
        className="ml-[260px] mr-[300px] mt-[60px] p-4 flex flex-col gap-4 overflow-y-auto min-w-0"
        style={{ height: 'calc(100vh - 60px)' }}
      >
        {/* Create Post Section */}
        <Card className="shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3 mb-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={currentUser.avatarSrc} alt={currentUser.name} />
                <AvatarFallback>{currentUser.name.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              {/* This is a styled div to look like an input field, as per typical FB UI for initiating a post */}
              <div className="flex-1 h-10 px-4 py-2 rounded-full bg-muted/50 hover:bg-muted/80 cursor-pointer text-muted-foreground">
                What's on your mind, {currentUser.name.split(' ')[0]}?
              </div>
            </div>
            <Separator className="my-3 bg-border" />
            <div className="flex justify-around">
              <Button variant="ghost" className="text-muted-foreground hover:bg-muted flex-1">
                <Video className="mr-2 h-5 w-5 text-red-500" /> Live Video
              </Button>
              <Button variant="ghost" className="text-muted-foreground hover:bg-muted flex-1">
                <Image className="mr-2 h-5 w-5 text-green-500" /> Photo/Video
              </Button>
              <Button variant="ghost" className="text-muted-foreground hover:bg-muted flex-1">
                <SmilePlus className="mr-2 h-5 w-5 text-yellow-500" /> Feeling/Activity
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Posts Feed */}
        <div className="space-y-4">
          {postsData.map((post) => (
            <PostCard 
              key={post.id} 
              {...post} 
              className="w-full max-w-none mx-0 shadow-sm" // Override default PostCard max-width and centering
            />
          ))}
        </div>
      </main>

      {/* Right Sidebar */}
      <aside
        className="fixed top-[60px] right-0 w-[300px] p-4 space-y-4 overflow-y-auto bg-background"
        style={{ height: 'calc(100vh - 60px)' }}
      >
        <StoriesWidget className="shadow-sm"/>
        <SuggestedGroupsWidget className="shadow-sm"/>
        <ChatWidget className="shadow-sm"/>
      </aside>
    </div>
  );
};

export default IndexPage;
