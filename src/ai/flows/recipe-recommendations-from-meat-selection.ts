'use server';

/**
 * @fileOverview A recipe recommendation AI agent based on meat selection.
 *
 * - getRecipeRecommendations - A function that generates recipe recommendations based on the selected cut of meat.
 * - RecipeRecommendationsInput - The input type for the getRecipeRecommendations function.
 * - RecipeRecommendationsOutput - The return type for the getRecipeRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecipeRecommendationsInputSchema = z.object({
  meatCut: z.string().describe('The specific cut of meat selected by the user.'),
});
export type RecipeRecommendationsInput = z.infer<
  typeof RecipeRecommendationsInputSchema
>;

const RecipeRecommendationsOutputSchema = z.object({
  recipes: z
    .array(z.string())
    .describe('An array of recipe recommendations for the selected meat cut.'),
  reasoning: z
    .string()
    .describe(
      'Reasoning that explains the recipe recommendations based on the selected meat cut.'
    ),
});
export type RecipeRecommendationsOutput = z.infer<
  typeof RecipeRecommendationsOutputSchema
>;

export async function getRecipeRecommendations(
  input: RecipeRecommendationsInput
): Promise<RecipeRecommendationsOutput> {
  return recipeRecommendationsFlow(input);
}

const recipeRecommendationsPrompt = ai.definePrompt({
  name: 'recipeRecommendationsPrompt',
  input: {schema: RecipeRecommendationsInputSchema},
  output: {schema: RecipeRecommendationsOutputSchema},
  prompt: `You are a world-class chef specializing in meat dishes. A user has selected the following cut of meat: {{{meatCut}}}.

  Recommend 3 different recipes that would be suitable for this cut of meat. Provide a brief reasoning for each recipe based on the characteristics of the meat cut, such as tenderness, flavor profile, and best cooking methods.

  Format your response as a JSON object that can be parsed with JSON.parse(). The JSON object should have two keys:

  1.  recipes: An array of recipe names suitable for the meat cut.
  2.  reasoning: A string that explains the recipe recommendations based on the meat cut.\n`,
});

const recipeRecommendationsFlow = ai.defineFlow(
  {
    name: 'recipeRecommendationsFlow',
    inputSchema: RecipeRecommendationsInputSchema,
    outputSchema: RecipeRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await recipeRecommendationsPrompt(input);
    return output!;
  }
);
