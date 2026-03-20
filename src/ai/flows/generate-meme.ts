'use server';
/**
 * @fileOverview Creates a meme by adding text to an image.
 *
 * - generateMeme - A function that adds text to an image to create a meme.
 * - GenerateMemeInput - The input for the generateMeme function.
 * - GenerateMemeOutput - The return type for the generateMeme function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const GenerateMemeInputSchema = z.object({
  photoDataUri: z.string().describe(
    "The photo to add text to, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
  ),
  topText: z.string().optional().describe('Text to add to the top of the image.'),
  bottomText: z.string().optional().describe('Text to add to the bottom of the image.'),
});
export type GenerateMemeInput = z.infer<typeof GenerateMemeInputSchema>;

const GenerateMemeOutputSchema = z.object({
  memeDataUri: z.string().describe(
    'The generated meme as a data URI that must include a MIME type and use Base64 encoding.'
  ),
});
export type GenerateMemeOutput = z.infer<typeof GenerateMemeOutputSchema>;

export async function generateMeme(input: GenerateMemeInput): Promise<GenerateMemeOutput> {
  return generateMemeFlow(input);
}

const generateMemeFlow = ai.defineFlow(
  {
    name: 'generateMemeFlow',
    inputSchema: GenerateMemeInputSchema,
    outputSchema: GenerateMemeOutputSchema,
  },
  async ({ photoDataUri, topText, bottomText }) => {
    const prompt: (string | any)[] = [
      "You are a meme generator. Add the following text to the image provided. Use a classic, bold, white meme font (like Impact) with a black outline for maximum readability. Place the text at the top and/or bottom as specified.",
    ];

    if (topText) {
      prompt.push(`Top Text: "${topText}"`);
    }
    if (bottomText) {
      prompt.push(`Bottom Text: "${bottomText}"`);
    }

    prompt.push({ media: { url: photoDataUri } });

    const { media } = await ai.generate({
      model: 'googleai/gemini-2.5-flash-image-preview',
      prompt: prompt,
      config: {
        responseModalities: ['IMAGE'],
      },
    });

    if (!media?.url) {
      throw new Error('Meme generation failed to return an image.');
    }

    return { memeDataUri: media.url };
  }
);
