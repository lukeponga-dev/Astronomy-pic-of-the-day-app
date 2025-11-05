import {genkit, Plugin} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';
import {next} from '@genkit-ai/next';

export const ai: Plugin<{}> = genkit({
  plugins: [
    googleAI(),
    next({
      // We don't specify a directory here, because we want to use the default
      // directory, which is src/ai/generated-flows.
    }),
  ],
  logLevel: 'debug',
  enableTracingAndMetrics: true,
});
