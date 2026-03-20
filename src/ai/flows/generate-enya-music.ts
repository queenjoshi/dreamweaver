'use server';
/**
 * @fileOverview A flow to generate an ambient music track.
 *
 * - generateEnyaMusic - Generates an Enya-style audio track.
 * - GenerateEnyaMusicInput - The input type for the generateEnyaMusic function.
 * - GenerateEnyaMusicOutput - The return type for the generateEnyaMusic function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { googleAI } from '@genkit-ai/google-genai';

const GenerateEnyaMusicInputSchema = z.object({
  prompt: z.string().describe('A prompt to inspire the music.'),
});
export type GenerateEnyaMusicInput = z.infer<typeof GenerateEnyaMusicInputSchema>;

const GenerateEnyaMusicOutputSchema = z.object({
  audioDataUri: z
    .string()
    .describe(
      "The generated audio as a data URI. Expected format: 'data:audio/wav;base64,<encoded_data>'."
    ),
});
export type GenerateEnyaMusicOutput = z.infer<typeof GenerateEnyaMusicOutputSchema>;

export async function generateEnyaMusic(
  input: GenerateEnyaMusicInput
): Promise<GenerateEnyaMusicOutput> {
  return generateEnyaMusicFlow(input);
}

async function toWav(
  pcmData: Buffer,
  channels = 1,
  rate = 24000,
  sampleWidth = 2
): Promise<string> {
  const wav = (await import('wav')).default;
  return new Promise((resolve, reject) => {
    const writer = new wav.Writer({
      channels,
      sampleRate: rate,
      bitDepth: sampleWidth * 8,
    });

    const bufs: any[] = [];
    writer.on('error', reject);
    writer.on('data', function (d) {
      bufs.push(d);
    });
    writer.on('end', function () {
      resolve(Buffer.concat(bufs).toString('base64'));
    });

    writer.write(pcmData);
    writer.end();
  });
}

const generateEnyaMusicFlow = ai.defineFlow(
  {
    name: 'generateEnyaMusicFlow',
    inputSchema: GenerateEnyaMusicInputSchema,
    outputSchema: GenerateEnyaMusicOutputSchema,
  },
  async ({ prompt }) => {
    const { media } = await ai.generate({
      model: googleAI.model('gemini-2.5-flash-preview-tts'),
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Algenib' },
          },
        },
      },
      // Prompt engineered to produce an atmospheric, musical piece rather than just speech.
      prompt: `(Soundtrack, ambient music, Enya-style, dreamy, ethereal, atmospheric, no spoken words) ${prompt}`,
    });

    if (!media?.url) {
      throw new Error('Music generation failed to produce audio.');
    }

    const audioBuffer = Buffer.from(
      media.url.substring(media.url.indexOf(',') + 1),
      'base64'
    );

    const wavBase64 = await toWav(audioBuffer);

    return {
      audioDataUri: 'data:audio/wav;base64,' + wavBase64,
    };
  }
);
