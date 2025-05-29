import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal, Users, MapPin, Globe, ThumbsUp, MessageSquare, Share2, BookmarkPlus, Edit, Trash2, Flag } from 'lucide-react';

interface PostCardProps {
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
  className?: string;
}

const PostCard: React.FC<PostCardProps> = ({
  authorName,
  authorAvatarSrc,
  timestamp,
  audience = 'Friends' as const,
  postText,
  imageUrl,
  mapPreviewUrl,
  locationName,
  locationDetails,
  taggedPeople,
  className,
}) => {
  const AudienceIcon = audience === 'Public' ? Globe : Users;

  return (
    <Card className={cn('w-full max-w-xl mx-auto bg-card shadow-lg rounded-lg overflow-hidden', className)}>
      <CardHeader className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src={authorAvatarSrc} alt={authorName} />
              <AvatarFallback>{authorName.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-sm text-foreground">{authorName}
                {taggedPeople && taggedPeople.length > 0 && (
                  <span className="font-normal text-muted-foreground"> is with {taggedPeople.join(', ')}</span>
                )}
                {locationName && (
                  <span className="font-normal text-muted-foreground"> is in <span className="font-semibold text-foreground">{locationName}</span></span>
                )}
              </p>
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                <span>{timestamp}</span>
                <span>&middot;</span>
                <AudienceIcon className="h-3 w-3" />
              </div>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-muted">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-card">
              <DropdownMenuItem className="hover:bg-muted">
                <BookmarkPlus className="mr-2 h-4 w-4" /> Save post
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-muted">
                <Edit className="mr-2 h-4 w-4" /> Edit post
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-muted">
                <Flag className="mr-2 h-4 w-4" /> Report post
              </DropdownMenuItem>
              <DropdownMenuItem className="text-destructive hover:bg-muted hover:text-destructive-foreground">
                <Trash2 className="mr-2 h-4 w-4" /> Delete post
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>

      <CardContent className="px-4 pb-2">
        <p className="text-sm text-foreground mb-3 whitespace-pre-wrap">
          {postText}
        </p>
        {imageUrl && <img src={imageUrl} alt="Post content" className="rounded-lg w-full object-cover max-h-[400px]" />} 
        {mapPreviewUrl && (
          <div className="border rounded-lg overflow-hidden">
            <img src={mapPreviewUrl} alt={locationName || 'Map preview'} className="w-full h-auto object-cover" />
            {locationName && (
              <div className="p-3 bg-gray-50 dark:bg-gray-800">
                <p className="font-semibold text-sm text-foreground">{locationName}</p>
                {locationDetails && <p className="text-xs text-muted-foreground">{locationDetails}</p>}
              </div>
            )}
          </div>
        )}
      </CardContent>

      <CardFooter className="p-4 border-t">
        <div className="flex justify-around w-full">
          <Button variant="ghost" className="text-muted-foreground hover:bg-muted w-full">
            <ThumbsUp className="mr-2 h-5 w-5" /> Like
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:bg-muted w-full">
            <MessageSquare className="mr-2 h-5 w-5" /> Comment
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:bg-muted w-full">
            <Share2 className="mr-2 h-5 w-5" /> Share
          </Button>
          {locationName && (
            <Button variant="ghost" className="text-muted-foreground hover:bg-muted w-full">
               Save
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
