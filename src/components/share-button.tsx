'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from './ui/button';
import { Share2, Twitter, Copy, Download, MessageCircle } from 'lucide-react';
import { Dream } from '@/lib/data';
import { toast } from '@/hooks/use-toast';

interface ShareButtonProps {
  dream: Dream;
  dreamUrl: string;
}

// Simple Telegram icon SVG
const TelegramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M22 2L11 13" />
        <path d="M22 2L15 22L11 13L2 9L22 2Z" />
    </svg>
);


export default function ShareButton({ dream, dreamUrl }: ShareButtonProps) {
  const shareText = `Check out this dream I created with DreamWeaver: "${dream.title}"`;

  const handleShare = (platform: 'twitter' | 'telegram' | 'farcaster') => {
    let url = '';
    const encodedText = encodeURIComponent(shareText);
    const encodedUrl = encodeURIComponent(dreamUrl);
    const encodedImageUrl = encodeURIComponent(dream.artUrl);

    switch (platform) {
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
        break;
      case 'telegram':
        url = `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`;
        break;
      case 'farcaster':
        url = `https://warpcast.com/~/compose?text=${encodedText}&embeds[]=${encodedUrl}&embeds[]=${encodedImageUrl}`;
        break;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(dreamUrl);
    toast({
      title: 'Link Copied!',
      description: 'The link to this dream has been copied to your clipboard.',
    });
  };
  
  const handleDownload = async () => {
    try {
        const response = await fetch(dream.artUrl);
        if (!response.ok) throw new Error('Network response was not ok.');
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${dream.title.replace(/ /g, '_')}.png`; // Suggest a filename
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
        toast({ title: 'Download Started', description: 'Your image is being downloaded.'});
    } catch (error) {
        console.error("Download failed:", error);
        // If fetch fails due to CORS, fallback to opening in new tab for manual save
        window.open(dream.artUrl, '_blank');
        toast({ title: 'Download Failed', description: 'Could not automatically download. Your image has been opened in a new tab for you to save manually.', variant: 'destructive'});
    }
  };


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Share2 className="h-5 w-5 text-muted-foreground" />
          <span className="sr-only">Share</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleShare('twitter')}>
          <Twitter className="mr-2" /> Share on X
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleShare('farcaster')}>
          <MessageCircle className="mr-2" /> Share on Farcaster
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleShare('telegram')}>
          <TelegramIcon className="mr-2" /> Share on Telegram
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleCopyLink}>
          <Copy className="mr-2" /> Copy Link
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleDownload}>
          <Download className="mr-2" /> Download Image
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
