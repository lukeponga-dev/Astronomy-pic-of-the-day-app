import {genkit, Plugin} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';
import genkitNextPlugin from '@genkit-ai/next';

export const ai: Plugin<{}> = genkit({
  plugins: [
    googleAI({
      apiVersion: 'v1beta',
      model: 'gemini-pro',
    }),
    genkitNextPlugin(),
  ],
  logLevel: 'debug',
  enableTracingAndMetrics: true,
});
