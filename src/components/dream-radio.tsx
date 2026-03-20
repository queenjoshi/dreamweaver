'use client';

import { generateEnyaMusic } from '@/ai/flows/generate-enya-music';
import { useToast } from '@/hooks/use-toast';
import { LoaderCircle, Music, Play, Pause, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { Slider } from './ui/slider';

export default function DreamRadio() {
  const [audioSrc, setAudioSrc] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { toast } = useToast();

  const handleFetchMusic = async () => {
    setIsLoading(true);
    try {
      const result = await generateEnyaMusic({
        prompt: 'A flowing, peaceful, and atmospheric soundscape with gentle choirs and soft piano.',
      });
      setAudioSrc(result.audioDataUri);
    } catch (error) {
      console.error('Failed to generate music:', error);
      toast({
        title: 'Dream Radio Error',
        description: 'Could not generate ambient music. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (audioSrc && audioRef.current) {
        audioRef.current.play();
        setIsPlaying(true);
    }
  }, [audioSrc]);

  useEffect(() => {
    if (audioRef.current) {
        audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } else if (!isLoading) {
        handleFetchMusic();
    }
  };

  return (
    <div className="fixed bottom-24 right-4 z-50">
        {isExpanded ? (
             <div className="bg-card/80 backdrop-blur-lg border border-accent/30 rounded-lg p-4 w-64 shadow-lg animate-in fade-in-50 slide-in-from-bottom-4 duration-300">
                <div className='flex justify-between items-center'>
                    <h4 className="font-semibold text-accent">Dream Radio</h4>
                    <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setIsExpanded(false)}><X className="w-4 h-4" /></Button>
                </div>
                <div className="flex items-center gap-4 mt-2">
                    <Button variant="ghost" size="icon" onClick={togglePlay} disabled={isLoading}>
                    {isLoading ? (
                        <LoaderCircle className="w-6 h-6 animate-spin text-primary" />
                    ) : isPlaying ? (
                        <Pause className="w-6 h-6 text-primary" />
                    ) : (
                        <Play className="w-6 h-6 text-primary" />
                    )}
                    </Button>
                    <Slider
                        value={[volume * 100]}
                        onValueChange={(value) => setVolume(value[0] / 100)}
                        className="w-full"
                    />
                </div>
                {audioSrc && (
                    <audio
                    ref={audioRef}
                    src={audioSrc}
                    loop
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    />
                )}
             </div>
        ) : (
            <Button
                size="icon"
                className={cn("rounded-full h-14 w-14 bg-accent/80 text-accent-foreground backdrop-blur-lg hover:bg-accent", isPlaying && "animate-pulse-glow")}
                onClick={() => setIsExpanded(true)}
            >
                <Music className="w-7 h-7" />
            </Button>
        )}
    </div>
  );
}
