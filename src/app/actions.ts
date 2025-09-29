'use server';

import {
  getRecipeRecommendations,
  type RecipeRecommendationsInput,
  type RecipeRecommendationsOutput,
} from '@/ai/flows/recipe-recommendations-from-meat-selection';

export async function getRecipes(
  meatCut: string
): Promise<RecipeRecommendationsOutput> {
  const input: RecipeRecommendationsInput = { meatCut };
  try {
    const output = await getRecipeRecommendations(input);
    return output;
  } catch (error) {
    console.error('Error getting recipe recommendations:', error);
    throw new Error('Failed to get recipe recommendations.');
  }
}
