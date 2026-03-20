'use server';
/**
 * @fileOverview Generates art from text and an optional image.
 *
 * - generateSurrealDreamArt - A function that generates art from a text description.
 * - GenerateSurrealDreamArtInput - The input type for the generateSurrealDreamArt function.
 * - GenerateSurrealDreamArtOutput - The return type for the generateSurrealDreamArt function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateSurrealDreamArtInputSchema = z.object({
  mainSubject: z
    .string()
    .describe('The main subject or theme for the art.'),
  photoDataUri: z.string().optional().describe(
    "An optional photo to provide context for the art, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
  ),
});
export type GenerateSurrealDreamArtInput = z.infer<
  typeof GenerateSurrealDreamArtInputSchema
>;

const GenerateSurrealDreamArtOutputSchema = z.object({
  artDataUri: z
    .string()
    .describe(
      'The generated art as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.'
    ),
});
export type GenerateSurrealDreamArtOutput = z.infer<
  typeof GenerateSurrealDreamArtOutputSchema
>;

export async function generateSurrealDreamArt(
  input: GenerateSurrealDreamArtInput
): Promise<GenerateSurrealDreamArtOutput> {
  return generateSurrealDreamArtFlow(input);
}

const systemPrompt = `You are a versatile AI artist. Create a visually compelling image based on the user's text. 
- If the text seems like a dream, create a surrealist piece with a luxurious, cyber-luxe aesthetic, metallic gold borders, and vibrant neon glows.
- If the text seems like a meme, create a funny, shareable image in a modern internet meme style.
- Otherwise, create a beautiful piece of digital art that captures the essence of the text.
- If a reference photo is provided, use it as the primary visual inspiration, blending its elements with the text description to create a cohesive piece.`;

const generateSurrealDreamArtFlow = ai.defineFlow(
  {
    name: 'generateArtFlow',
    inputSchema: GenerateSurrealDreamArtInputSchema,
    outputSchema: GenerateSurrealDreamArtOutputSchema,
  },
  async ({ mainSubject, photoDataUri }) => {

    const prompt: (string | any)[] = [
      systemPrompt,
      `User text: ${mainSubject}`,
    ];

    if (photoDataUri) {
      prompt.push({ media: { url: photoDataUri } });
    }

    const { media } = await ai.generate({
      prompt: prompt,
      model: 'googleai/gemini-2.5-flash-image-preview',
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });

    if (!media) {
      // Fallback to text-to-image if image-to-image fails or returns no image
      const { media: textToImageMedia } = await ai.generate({
        model: 'googleai/imagen-4.0-fast-generate-001',
        prompt: `${systemPrompt}\n\nUser text: ${mainSubject}`,
      });
      return { artDataUri: textToImageMedia!.url! };
    }

    return { artDataUri: media!.url! };
  }
);
