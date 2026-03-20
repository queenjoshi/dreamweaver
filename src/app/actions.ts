'use server';

import { generateSurrealDreamArt } from "@/ai/flows/generate-surreal-dream-art";
import { summarizeDreamJournalEntry } from "@/ai/flows/summarize-dream-journal-entry";
import { speakSummary } from "@/ai/flows/speak-summary";
import { generateDreamVideo } from "@/ai/flows/generate-dream-video";
import { generateMeme } from "@/ai/flows/generate-meme";
import { generateMusic } from "@/ai/flows/generate-music";
import { generateHoroscope } from "@/ai/flows/generate-horoscope";
import { z } from "zod";

const PostSchema = z.object({
  textEntry: z.string().min(1, { message: 'Text entry cannot be empty.'}).optional().or(z.literal('')),
  photoDataUri: z.string().optional(),
});

export type WeaveState = {
  title?: string;
  summary?: string;
  artDataUri?: string;
  audioDataUri?: string;
  videoDataUri?: string;
  memeDataUri?: string;
  musicDataUri?: string;
  error?: string;
  message?: string;
}

export type ArtGenerationState = {
    artDataUri?: string;
    error?: string;
    message?: string;
}

export type HoroscopeState = {
    horoscope?: string;
    sign?: string;
    error?: string;
    message?: string;
}

export async function weaveDreamAction(
  prevState: WeaveState,
  formData: FormData
): Promise<WeaveState> {

  const textEntry = formData.get('textEntry');
  const photoDataUri = formData.get('photoDataUri');

  if (!textEntry && !photoDataUri) {
     const validatedFields = PostSchema.safeParse({
      textEntry: textEntry,
      photoDataUri: photoDataUri,
    });

    if (!validatedFields.success) {
      return {
        error: validatedFields.error.flatten().fieldErrors.textEntry?.[0] || 'An entry is required if no photo is provided.',
      };
    }
  }

  if (!textEntry && !photoDataUri) {
    return {};
  }
  
  const validatedFields = PostSchema.safeParse({
    textEntry: textEntry,
    photoDataUri: photoDataUri,
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.textEntry?.[0],
    };
  }

  const { textEntry: entry, photoDataUri: pdu } = validatedFields.data;

  try {
    const [summaryResult, artResult] = await Promise.all([
      summarizeDreamJournalEntry({ content: entry || 'A surreal scene' }),
      generateSurrealDreamArt({ mainSubject: entry || 'A surreal scene', photoDataUri: pdu }),
    ]);

    if (!summaryResult.summary || !artResult.artDataUri || !summaryResult.title) {
        throw new Error("AI generation failed. Please try again.");
    }
    
    // Generate audio from the summary in parallel
    const audioResult = await speakSummary({ text: summaryResult.summary });

    if (!audioResult.audioDataUri) {
        // We can consider this a non-critical failure and still return the rest of the data.
        console.warn("Audio generation failed, but proceeding without audio.");
    }

    return {
      title: summaryResult.title,
      summary: summaryResult.summary,
      artDataUri: artResult.artDataUri,
      audioDataUri: audioResult?.audioDataUri,
      message: 'Post weaved successfully!',
    };
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : 'An unexpected error occurred.';
    return {
      error: `Failed to weave post: ${errorMessage}`,
    };
  }
}

export async function generateArtAction(
  prevState: ArtGenerationState,
  formData: FormData
): Promise<ArtGenerationState> {
    const prompt = formData.get('prompt') as string;

    if (!prompt) {
        return { error: 'Please enter a prompt to generate art.' };
    }

    try {
        const artResult = await generateSurrealDreamArt({ mainSubject: prompt });
        if (!artResult.artDataUri) {
            throw new Error("AI art generation failed to produce an image.");
        }
        return {
            artDataUri: artResult.artDataUri,
            message: 'Art generated successfully!',
        };
    } catch (e) {
        console.error(e);
        const errorMessage = e instanceof Error ? e.message : 'An unexpected error occurred.';
        return {
            error: `Failed to generate art: ${errorMessage}`,
        };
    }
}

export async function generateVideoAction(prevState: WeaveState, formData: FormData): Promise<WeaveState> {
    const artDataUri = formData.get('artDataUri') as string;
    const prompt = formData.get('prompt') as string;
    if (!artDataUri) {
        return { ...prevState, error: 'Original art is missing.' };
    }

    try {
        const { videoDataUri } = await generateDreamVideo({
            photoDataUri: artDataUri,
            prompt: prompt || 'Animate this image, making it cinematic and surreal.'
        });
        return { ...prevState, videoDataUri };
    } catch (e: any) {
        return { ...prevState, error: `Video generation failed: ${e.message}` };
    }
}

export async function generateMemeAction(prevState: WeaveState, formData: FormData): Promise<WeaveState> {
    const artDataUri = formData.get('artDataUri') as string;
    const topText = formData.get('topText') as string;
    const bottomText = formData.get('bottomText') as string;

    if (!artDataUri) {
        return { ...prevState, error: 'Original art is missing.' };
    }
    if (!topText && !bottomText) {
        return { ...prevState, error: 'Please provide text for the meme.' };
    }

    try {
        const { memeDataUri } = await generateMeme({
            photoDataUri: artDataUri,
            topText,
            bottomText,
        });
        return { ...prevState, memeDataUri };
    } catch(e: any) {
        return { ...prevState, error: `Meme generation failed: ${e.message}` };
    }
}

export async function generateMusicAction(prevState: WeaveState, formData: FormData): Promise<WeaveState> {
    const summary = formData.get('summary') as string;

    if (!summary) {
        return { ...prevState, error: 'Cannot generate music without a summary.' };
    }

    try {
        const { audioDataUri } = await generateMusic({
            prompt: summary,
        });
        return { ...prevState, musicDataUri: audioDataUri };
    } catch (e: any) {
        return { ...prevState, error: `Music generation failed: ${e.message}` };
    }
}

export async function getHoroscopeAction(prevState: HoroscopeState, formData: FormData): Promise<HoroscopeState> {
    const zodiacSign = formData.get('zodiacSign') as string;
    if (!zodiacSign) {
        return { error: 'Please select a zodiac sign.' };
    }

    try {
        const { horoscope } = await generateHoroscope({ zodiacSign });
        return { horoscope, sign: zodiacSign, message: 'Horoscope generated!' };
    } catch (e: any) {
        return { error: `Failed to generate horoscope: ${e.message}`, sign: zodiacSign };
    }
}
