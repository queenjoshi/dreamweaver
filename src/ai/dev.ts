'use server';
/**
 * @fileoverview A development server for Genkit.
 *
 * This file is used to start the Genkit development server, which provides a
 * UI for inspecting and running flows.
 *
 * It is not intended for production use.
 */

import { config } from 'dotenv';
config();

import '@/ai/flows/summarize-dream-journal-entry.ts';
import '@/ai/flows/generate-surreal-dream-art.ts';
import '@/ai/flows/upload-to-ipfs.ts';
import '@/ai/flows/speak-summary.ts';
import '@/ai/flows/generate-dream-video.ts';
import '@/ai/flows/generate-meme.ts';
import '@/ai/flows/generate-music.ts';
import '@/ai/flows/generate-horoscope.ts';
import '@/ai/flows/generate-enya-music.ts';
