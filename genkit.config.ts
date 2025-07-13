import { configureGenkit } from '@genkit-ai/core';
import { firebase } from '@genkit-ai/firebase';
import { googleAI } from '@genkit-ai/googleai';
import { memoryFlow } from './src/flows/memoryFlow';

export default configureGenkit({
  plugins: [
    firebase(),
    googleAI({
      // apiKey: 'YOUR_GOOGLE_AI_API_KEY', // Specify your API key
    }),
  ],
  logLevel: 'debug',
  enableTracingAndMetrics: true,
});
