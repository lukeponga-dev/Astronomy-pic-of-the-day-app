'use server';

import { getApod } from '@/services/nasa';
import { type ApodData } from '@/lib/types';
import { generateApodDescription as generateApodDescriptionFlow } from '@/ai/flows/generate-apod-description';
import { generateApodExplanationELI5 as generateApodExplanationELI5Flow } from '@/ai/flows/generate-apod-explanation-eli5';

export async function getApodAction(date: Date): Promise<{data: ApodData | null, error: string | null}> {
  try {
    const apodData = await getApod(date);
    return { data: apodData, error: null };
  } catch (e: any) {
    console.error('Failed to fetch APOD in action:', e);
    return { data: null, error: e.message || 'Failed to fetch new image.' };
  }
}

export async function generateApodDescriptionAction(
  imageUrl: string,
  title: string
): Promise<{ description: string | null; error: string | null }> {
  try {
    const result = await generateApodDescriptionFlow({
      imageUrl,
      title,
    });
    return { description: result.description, error: null };
  } catch (e: any) {
    console.error('Error generating AI description in action:', e);
    return { description: null, error: e.message || 'Failed to generate description.' };
  }
}

export async function generateApodExplanationELI5Action(
  imageUrl: string,
  title: string
): Promise<{ explanation: string | null; error: string | null }> {
  try {
    const result = await generateApodExplanationELI5Flow({
      imageUrl,
      title,
    });
    return { explanation: result.explanation, error: null };
  } catch (e: any) {
    console.error('Error generating ELI5 explanation in action:', e);
    return { explanation: null, error: e.message || 'Failed to generate ELI5 explanation.' };
  }
}
