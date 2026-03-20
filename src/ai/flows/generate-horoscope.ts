'use server';
/**
 * @fileOverview Generates a daily horoscope for a given zodiac sign.
 *
 * - generateHoroscope - A function that generates a horoscope.
 * - GenerateHoroscopeInput - The input type for the generateHoroscope function.
 * - GenerateHoroscopeOutput - The return type for the generateHoroscope function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const GenerateHoroscopeInputSchema = z.object({
  zodiacSign: z.string().describe('The zodiac sign for which to generate the horoscope.'),
});
export type GenerateHoroscopeInput = z.infer<typeof GenerateHoroscopeInputSchema>;

const GenerateHoroscopeOutputSchema = z.object({
  horoscope: z.string().describe('The generated horoscope text.'),
});
export type GenerateHoroscopeOutput = z.infer<typeof GenerateHoroscopeOutputSchema>;

export async function generateHoroscope(
  input: GenerateHoroscopeInput
): Promise<GenerateHoroscopeOutput> {
  return generateHoroscopeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateHoroscopePrompt',
  input: { schema: GenerateHoroscopeInputSchema },
  output: { schema: GenerateHoroscopeOutputSchema },
  prompt: `You are a mystical astrologer who writes for the DreamWeaver app. 
  
  Generate a short, insightful, and slightly mystical horoscope for the zodiac sign: {{{zodiacSign}}}. 
  
  The tone should be positive and encouraging, connecting the astrological insight to themes of dreams, creativity, and self-discovery. Keep it to 2-3 sentences.`,
});

const generateHoroscopeFlow = ai.defineFlow(
  {
    name: 'generateHoroscopeFlow',
    inputSchema: GenerateHoroscopeInputSchema,
    outputSchema: GenerateHoroscopeOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
