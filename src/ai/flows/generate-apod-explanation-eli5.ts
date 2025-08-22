'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating a simplified, "Explain Like I'm Five" (ELI5)
 * description of NASA's Astronomy Picture of the Day (APOD).
 *
 * - generateApodExplanationELI5 - A function that takes an image URL and title and returns a simple explanation.
 * - GenerateApodExplanationELI5Input - The input type for the generateApodExplanationELI5 function.
 * - GenerateApodExplanationELI5Output - The return type for the generateApodExplanationELI5 function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateApodExplanationELI5InputSchema = z.object({
  imageUrl: z.string().describe('URL of the APOD image.'),
  title: z.string().describe('Title of the APOD image.'),
});
export type GenerateApodExplanationELI5Input = z.infer<
  typeof GenerateApodExplanationELI5InputSchema
>;

const GenerateApodExplanationELI5OutputSchema = z.object({
  explanation: z.string().describe('AI-generated ELI5 explanation of the APOD image.'),
});
export type GenerateApodExplanationELI5Output = z.infer<
  typeof GenerateApodExplanationELI5OutputSchema
>;

export async function generateApodExplanationELI5(
  input: GenerateApodExplanationELI5Input
): Promise<GenerateApodExplanationELI5Output> {
  return generateApodExplanationELI5Flow(input);
}

const prompt = ai.definePrompt({
  name: 'apodExplanationELI5Prompt',
  input: {schema: GenerateApodExplanationELI5InputSchema},
  output: {schema: GenerateApodExplanationELI5OutputSchema},
  prompt: `You are a friendly and enthusiastic science teacher who loves explaining complex space topics to young children. Your task is to explain an astronomy picture in a very simple and fun way, as if you were talking to a five-year-old. Use simple words, short sentences, and fun analogies.\n\n  Title: {{{title}}}\n  Image: {{media url=imageUrl}}\n\n  Simple Explanation:`,
  config: {
    cache: {
        // Cache results for 1 hour to avoid excessive calls for the same image.
        ttl: 3600,
    }
  }
});

const generateApodExplanationELI5Flow = ai.defineFlow(
  {
    name: 'generateApodExplanationELI5Flow',
    inputSchema: GenerateApodExplanationELI5InputSchema,
    outputSchema: GenerateApodExplanationELI5OutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
