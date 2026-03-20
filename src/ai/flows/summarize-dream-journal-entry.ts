'use server';
/**
 * @fileOverview Summarizes a piece of content using AI.
 *
 * - summarizeDreamJournalEntry - A function that summarizes the content.
 * - SummarizeDreamJournalEntryInput - The input type for the summarizeDreamJournalEntry function.
 * - SummarizeDreamJournalEntryOutput - The return type for the summarizeDreamJournalEntry function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeDreamJournalEntryInputSchema = z.object({
  content: z
    .string()
    .describe('The content to summarize.'),
});
export type SummarizeDreamJournalEntryInput = z.infer<
  typeof SummarizeDreamJournalEntryInputSchema
>;

const SummarizeDreamJournalEntryOutputSchema = z.object({
  title: z.string().describe('A short, catchy, 3-5 word title for the content.'),
  summary: z.string().describe('A one-sentence summary of the content.'),
});
export type SummarizeDreamJournalEntryOutput = z.infer<
  typeof SummarizeDreamJournalEntryOutputSchema
>;

export async function summarizeDreamJournalEntry(
  input: SummarizeDreamJournalEntryInput
): Promise<SummarizeDreamJournalEntryOutput> {
  return summarizeDreamJournalEntryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeContentPrompt',
  input: {schema: SummarizeDreamJournalEntryInputSchema},
  output: {schema: SummarizeDreamJournalEntryOutputSchema},
  prompt: `You are a creative assistant. Generate a short, catchy, 3-5 word title and a one-sentence summary for the following content. If the content seems like a meme, make the title and summary funny. If it's a dream, make it mystical. Adapt to the user's input.\n\n{{content}}`,
});

const summarizeDreamJournalEntryFlow = ai.defineFlow(
  {
    name: 'summarizeContentFlow',
    inputSchema: SummarizeDreamJournalEntryInputSchema,
    outputSchema: SummarizeDreamJournalEntryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
