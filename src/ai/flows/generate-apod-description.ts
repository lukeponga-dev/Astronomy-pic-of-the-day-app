import {ai} from 'genkit';
import {z} from 'zod';
import {googleAI} from '@genkit-ai/googleai';

const GenerateApodDescriptionInputSchema = z.object({
  imageUrl: z.string().describe('The URL of the APOD image.'),
  title: z.string().describe('The title of the APOD image.'),
});

export type GenerateApodDescriptionInput = z.infer<
  typeof GenerateApodDescriptionInputSchema
>;

const GenerateApodDescriptionOutputSchema = z.object({
  description: z.string().describe('AI-generated description of the APOD image.'),
});

export type GenerateApodDescriptionOutput = z.infer<
  typeof GenerateApodDescriptionOutputSchema
>;

const generateApodDescriptionFlow = ai.defineFlow(
  {
    name: 'generateApodDescriptionFlow',
    inputSchema: GenerateApodDescriptionInputSchema,
    outputSchema: GenerateApodDescriptionOutputSchema,
  },
  async input => {
    const {output} = await ai.generate({
      model: googleAI.geminiPro,
      prompt: `Generate a description for the Astronomy Picture of the Day. 
      The image title is: "${input.title}". 
      The image URL is: ${input.imageUrl}.
      The description should be engaging and informative, suitable for a general audience. 
      Focus on explaining the celestial object or phenomenon depicted, its significance, and any interesting facts. 
      Keep the description concise, around 150-200 words.`,
      output: {
        schema: GenerateApodDescriptionOutputSchema,
        format: 'json',
      },
    });
    return output!;
  }
);

export async function generateApodDescription(
  input: GenerateApodDescriptionInput
): Promise<GenerateApodDescriptionOutput> {
  return generateApodDescriptionFlow(input);
}
