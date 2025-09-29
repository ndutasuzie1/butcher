import Image from 'next/image';
import type { Product } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Beef, Drumstick, CookingPot } from 'lucide-react';
import { PorkIcon } from './icons';
import { Badge } from '@/components/ui/badge';
import { Button } from './ui/button';
import RecipeRecommendationDialog from './recipe-recommendation-dialog';

type ProductCardProps = {
  product: Product;
};

const categoryIcons = {
  Pork: <PorkIcon className="h-4 w-4" />,
  Beef: <Beef className="h-4 w-4" />,
  Poultry: <Drumstick className="h-4 w-4" />,
  Lamb: <PorkIcon className="h-4 w-4" />, // Using PorkIcon as a placeholder for lamb
  Gear: <CookingPot className="h-4 w-4" />,
};

export default function ProductCard({ product }: ProductCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === product.imageId);

  return (
    <div className="group flex flex-col rounded-2xl bg-background p-4 shadow-neumorphic-out transition-all duration-300 hover:shadow-neumorphic-in">
      <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-neumorphic-in">
        {image && (
          <Image
            src={image.imageUrl}
            alt={product.name}
            width={600}
            height={400}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={image.imageHint}
          />
        )}
      </div>
      <div className="mt-4 flex flex-grow flex-col">
        <div className="flex items-center justify-between">
          <h3 className="font-headline text-xl font-bold">{product.name}</h3>
          <Badge variant="secondary" className="flex items-center gap-1.5 bg-secondary text-secondary-foreground shadow-sm">
            {categoryIcons[product.category]}
            {product.category}
          </Badge>
        </div>
        <p className="mt-2 flex-grow text-sm text-foreground/70">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</span>
          {product.category !== 'Gear' ? (
            <RecipeRecommendationDialog meatCut={product.name} image={image} />
          ) : (
            <Button size="sm" className="bg-primary text-primary-foreground shadow-neumorphic-out active:shadow-neumorphic-in-sm transition-all">Add to Cart</Button>
          )}
        </div>
      </div>
    </div>
  );
}
