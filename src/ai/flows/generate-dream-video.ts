'use server';
/**
 * @fileOverview Generates a short video from an image and a prompt.
 *
 * - generateDreamVideo - A function that animates a static image.
 * - GenerateDreamVideoInput - The input type for the generateDreamVideo function.
 * - GenerateDreamVideoOutput - The return type for the generateDreamVideo function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { googleAI } from '@genkit-ai/google-genai';
import { MediaPart } from 'genkit';
import * as fs from 'fs';
import { Readable } from 'stream';


const GenerateDreamVideoInputSchema = z.object({
  prompt: z.string().describe("A text description of how to animate the image."),
  photoDataUri: z.string().describe(
      "The photo to animate, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type GenerateDreamVideoInput = z.infer<typeof GenerateDreamVideoInputSchema>;

const GenerateDreamVideoOutputSchema = z.object({
  videoDataUri: z
    .string()
    .describe(
      'The generated video as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:video/mp4;base64,<encoded_data>\'.'
    ),
});
export type GenerateDreamVideoOutput = z.infer<typeof GenerateDreamVideoOutputSchema>;

export async function generateDreamVideo(
  input: GenerateDreamVideoInput
): Promise<GenerateDreamVideoOutput> {
  return generateDreamVideoFlow(input);
}

const generateDreamVideoFlow = ai.defineFlow(
  {
    name: 'generateDreamVideoFlow',
    inputSchema: GenerateDreamVideoInputSchema,
    outputSchema: GenerateDreamVideoOutputSchema,
  },
  async ({ prompt, photoDataUri }) => {
    let { operation } = await ai.generate({
        model: googleAI.model('veo-2.0-generate-001'),
        prompt: [
            { text: prompt },
            { media: { url: photoDataUri } },
        ],
        config: {
            durationSeconds: 5,
            aspectRatio: '16:9',
            personGeneration: 'allow_adult',
        },
    });

    if (!operation) {
        throw new Error('Expected the model to return an operation');
    }

    // Poll for completion
    while (!operation.done) {
        await new Promise((resolve) => setTimeout(resolve, 5000)); // wait 5 seconds
        operation = await ai.checkOperation(operation);
    }

    if (operation.error) {
        throw new Error('Failed to generate video: ' + operation.error.message);
    }

    const videoPart = operation.output?.message?.content.find((p) => !!p.media && p.media.contentType?.startsWith('video/'));

    if (!videoPart?.media?.url) {
        throw new Error('Failed to find the generated video in the operation result.');
    }
    
    // The URL returned from Veo needs an API key to be downloaded.
    const videoDownloadResponse = await fetch(
        `${videoPart.media.url}&key=${process.env.GEMINI_API_KEY}`
    );

    if (!videoDownloadResponse.ok || !videoDownloadResponse.body) {
        throw new Error(`Failed to download video file. Status: ${videoDownloadResponse.status}`);
    }

    const videoBuffer = await videoDownloadResponse.arrayBuffer();
    const videoBase64 = Buffer.from(videoBuffer).toString('base64');
    
    return {
      videoDataUri: `data:video/mp4;base64,${videoBase64}`,
    };
  }
);
