import { defineFlow } from '@genkit-ai/flow';
import * as z from 'zod';
export const memoryFlow = defineFlow({
    name: 'memoryFlow',
    inputSchema: z.string(),
    outputSchema: z.string(),
}, async (prompt) => {
    // For now, just return the prompt.
    // Later, we will add logic to interact with memory.
    return `You said: ${prompt}`;
});
