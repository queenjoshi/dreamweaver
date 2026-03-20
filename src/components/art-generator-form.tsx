'use client';

import { useActionState, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Sparkles, Bot } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import Image from 'next/image';
import { useToast } from '@/hooks/use-toast';
import { ArtGenerationState, generateArtAction } from '@/app/actions';
import { Skeleton } from './ui/skeleton';

const initialState: ArtGenerationState = {};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      size="lg"
      className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg font-bold"
      disabled={pending}
    >
      {pending ? (
        <>
          <Sparkles className="mr-2 h-5 w-5 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Bot className="mr-2 h-5 w-5" />
          Generate Art
        </>
      )}
    </Button>
  );
}

export default function ArtGeneratorForm() {
  const [state, formAction] = useActionState(generateArtAction, initialState);
  const { toast } = useToast();
  const { pending } = useFormStatus();

  useEffect(() => {
    if (state.message) {
      toast({ title: 'Success', description: state.message });
    }
    if (state.error) {
      toast({
        title: 'Error',
        description: state.error,
        variant: 'destructive',
      });
    }
  }, [state, toast]);

  return (
    <div className="space-y-8">
      <form action={formAction} className="space-y-6">
        <div className="grid w-full gap-2">
          <Label htmlFor="prompt" className="text-lg">
            Enter your prompt
          </Label>
          <Textarea
            id="prompt"
            name="prompt"
            placeholder="A futuristic cityscape at sunset, with flying cars and neon signs..."
            rows={5}
            className="bg-input border-border focus:ring-primary text-base"
          />
        </div>
        <SubmitButton />
      </form>

      {pending && (
         <Card className="bg-card border-accent/20 overflow-hidden">
            <CardHeader>
                <Skeleton className="h-8 w-3/4" />
            </CardHeader>
            <CardContent>
                <Skeleton className="w-full aspect-square" />
            </CardContent>
         </Card>
      )}

      {state.artDataUri && !pending && (
        <Card className="bg-card border-accent/20 overflow-hidden animate-in fade-in-50 duration-500">
          <CardHeader>
            <CardTitle className="text-2xl text-accent">Generation Complete!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border border-accent rounded-lg p-1 shadow-lg shadow-accent/20">
              <Image
                src={state.artDataUri}
                alt="Generated art"
                width={512}
                height={512}
                className="rounded-md w-full h-auto object-contain"
              />
            </div>
            {/* Future buttons like "Save" or "Mint" could go here */}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
