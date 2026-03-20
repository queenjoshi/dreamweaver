
'use server';
/**
 * @fileOverview A flow to convert text to speech.
 *
 * - speakSummary - Converts text to an audio data URI.
 * - SpeakSummaryInput - The input type for the speakSummary function.
 * - SpeakSummaryOutput - The return type for the speakSummary function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { googleAI } from '@genkit-ai/google-genai';

const SpeakSummaryInputSchema = z.object({
  text: z.string().describe('The text to be converted to speech.'),
});
export type SpeakSummaryInput = z.infer<typeof SpeakSummaryInputSchema>;

const SpeakSummaryOutputSchema = z.object({
  audioDataUri: z
    .string()
    .describe(
      "The generated audio as a data URI. Expected format: 'data:audio/wav;base64,<encoded_data>'."
    ),
});
export type SpeakSummaryOutput = z.infer<typeof SpeakSummaryOutputSchema>;

export async function speakSummary(
  input: SpeakSummaryInput
): Promise<SpeakSummaryOutput> {
  return speakSummaryFlow(input);
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

const speakSummaryFlow = ai.defineFlow(
  {
    name: 'speakSummaryFlow',
    inputSchema: SpeakSummaryInputSchema,
    outputSchema: SpeakSummaryOutputSchema,
  },
  async ({ text }) => {
    const { media } = await ai.generate({
      model: googleAI.model('gemini-2.5-flash-preview-tts'),
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Nova' },
          },
        },
      },
      prompt: text,
    });

    if (!media?.url) {
      throw new Error('Text-to-speech generation failed to produce audio.');
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
