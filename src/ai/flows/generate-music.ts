'use server';
/**
 * @fileOverview A flow to convert text to a musical audio track.
 *
 * - generateMusic - Converts text to an audio data URI.
 * - GenerateMusicInput - The input type for the generateMusic function.
 * - GenerateMusicOutput - The return type for the generateMusic function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { googleAI } from '@genkit-ai/google-genai';

const GenerateMusicInputSchema = z.object({
  prompt: z.string().describe('The text to be converted to music.'),
});
export type GenerateMusicInput = z.infer<typeof GenerateMusicInputSchema>;

const GenerateMusicOutputSchema = z.object({
  audioDataUri: z
    .string()
    .describe(
      "The generated audio as a data URI. Expected format: 'data:audio/wav;base64,<encoded_data>'."
    ),
});
export type GenerateMusicOutput = z.infer<typeof GenerateMusicOutputSchema>;

export async function generateMusic(
  input: GenerateMusicInput
): Promise<GenerateMusicOutput> {
  return generateMusicFlow(input);
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

const generateMusicFlow = ai.defineFlow(
  {
    name: 'generateMusicFlow',
    inputSchema: GenerateMusicInputSchema,
    outputSchema: GenerateMusicOutputSchema,
  },
  async ({ prompt }) => {
    // Using a creative voice for a more 'musical' feel.
    const { media } = await ai.generate({
      model: googleAI.model('gemini-2.5-flash-preview-tts'),
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Synthwave' }, // A more stylized voice
          },
        },
      },
      prompt: `Create a short, spoken-word piece from this: ${prompt}. Infuse it with a rhythmic, slightly melodic cadence.`,
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
