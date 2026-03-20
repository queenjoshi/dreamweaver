'use client';

import { useActionState, useEffect, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { HoroscopeState, getHoroscopeAction } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { LoaderCircle, WandSparkles } from 'lucide-react';
import { Skeleton } from './ui/skeleton';

const zodiacSigns = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

const initialState: HoroscopeState = {};

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
          <LoaderCircle className="mr-2 h-5 w-5 animate-spin" />
          Consulting the stars...
        </>
      ) : (
        <>
          <WandSparkles className="mr-2 h-5 w-5" />
          Get My Horoscope
        </>
      )}
    </Button>
  );
}

export default function HoroscopeSelector() {
  const [state, formAction] = useActionState(getHoroscopeAction, initialState);
  const { toast } = useToast();
  const [selectedSign, setSelectedSign] = useState<string>('');

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
  
  // This gets the pending status for the form this component is in.
  // We need to use this to show loading states, but since we have a separate
  // form for the selector, we can't just use `useFormStatus` at the top level.
  // We can wrap the form content in a component that uses it.
  function FormContent() {
      const { pending } = useFormStatus();
      return (
        <>
            <Select name="zodiacSign" required value={selectedSign} onValueChange={setSelectedSign}>
              <SelectTrigger className="w-full text-lg py-6">
                <SelectValue placeholder="Select your Zodiac sign" />
              </SelectTrigger>
              <SelectContent>
                {zodiacSigns.map(sign => (
                  <SelectItem key={sign} value={sign}>{sign}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg font-bold"
              disabled={pending || !selectedSign}
            >
              {pending ? (
                <>
                  <LoaderCircle className="mr-2 h-5 w-5 animate-spin" />
                  Consulting the stars...
                </>
              ) : (
                <>
                  <WandSparkles className="mr-2 h-5 w-5" />
                  Get My Horoscope
                </>
              )}
            </Button>

            {pending && (
                <Card className="bg-card border-accent/20 overflow-hidden">
                    <CardHeader>
                        <Skeleton className="h-8 w-1/3 mb-2" />
                        <Skeleton className="h-6 w-full" />
                        <Skeleton className="h-6 w-3/4" />
                    </CardHeader>
                </Card>
            )}

            {state.horoscope && !pending && (
                <Card className="bg-card border-accent/20 overflow-hidden animate-in fade-in-50 duration-500">
                <CardHeader>
                    <CardTitle className="text-2xl text-accent">Your Daily Horoscope for {state.sign}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg text-foreground/90 italic">
                        &quot;{state.horoscope}&quot;
                    </p>
                </CardContent>
                </Card>
            )}
        </>
      )
  }

  return (
    <div className="space-y-8">
      <form action={formAction} className="space-y-6">
        <FormContent/>
      </form>
    </div>
  );
}
