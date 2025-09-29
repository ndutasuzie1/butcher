'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { getRecipes } from '@/app/actions';
import type { RecipeRecommendationsOutput } from '@/ai/flows/recipe-recommendations-from-meat-selection';
import { Sparkles, Loader2, UtensilsCrossed } from 'lucide-react';
import Image from 'next/image';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

type RecipeRecommendationDialogProps = {
  meatCut: string;
  image: ImagePlaceholder | undefined;
};

export default function RecipeRecommendationDialog({ meatCut, image }: RecipeRecommendationDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [recommendations, setRecommendations] = useState<RecipeRecommendationsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGetRecipes = async () => {
    setIsLoading(true);
    setError(null);
    setRecommendations(null);
    try {
      const result = await getRecipes(meatCut);
      setRecommendations(result);
    } catch (e) {
      setError('Sorry, we couldn-t fetch recipes at this time. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="bg-transparent shadow-neumorphic-out active:shadow-neumorphic-in-sm transition-all">
          <Sparkles className="mr-2 h-4 w-4" />
          Get Ideas
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-background shadow-neumorphic-out">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">Recipe Ideas for {meatCut}</DialogTitle>
          <DialogDescription>Let our AI chef inspire your next meal.</DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          {image && (
             <div className="aspect-video overflow-hidden rounded-lg shadow-neumorphic-in mb-4">
                <Image
                src={image.imageUrl}
                alt={meatCut}
                width={400}
                height={225}
                className="h-full w-full object-cover"
                data-ai-hint={image.imageHint}
                />
            </div>
          )}
          {!recommendations && !isLoading && !error && (
            <div className="text-center p-4">
              <p className="mb-4">Click the button below to get three delicious recipe recommendations for {meatCut}.</p>
              <Button onClick={handleGetRecipes} className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-neumorphic-out active:shadow-neumorphic-in-sm transition-all">
                <Sparkles className="mr-2 h-4 w-4" />
                Inspire Me
              </Button>
            </div>
          )}
          {isLoading && (
            <div className="flex flex-col items-center justify-center p-8 space-y-4">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="text-muted-foreground">Our chef is thinking...</p>
            </div>
          )}
          {error && <p className="text-destructive text-center p-4">{error}</p>}
          {recommendations && (
            <div className="space-y-4 animate-in fade-in-50">
              <div>
                <h4 className="font-headline text-lg font-bold flex items-center gap-2"><UtensilsCrossed className="h-5 w-5 text-primary"/>Recipes:</h4>
                <ul className="mt-2 list-disc list-inside space-y-1 text-foreground/80">
                  {recommendations.recipes.map((recipe, index) => (
                    <li key={index}>{recipe}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-headline text-lg font-bold">Chef's Reasoning:</h4>
                <p className="mt-2 text-sm text-foreground/80">{recommendations.reasoning}</p>
              </div>
              <Button onClick={handleGetRecipes} variant="ghost" className="w-full">
                <Sparkles className="mr-2 h-4 w-4" />
                Get New Ideas
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
