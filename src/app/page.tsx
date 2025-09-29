import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { products, cutOfTheWeek } from '@/lib/data';
import ProductCard from '@/components/product-card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-1');
  const cutOfTheWeekProduct = products.find((p) => p.id === cutOfTheWeek.productId);
  const featuredProducts = products.slice(0, 3);

  if (!cutOfTheWeekProduct || !heroImage) {
    return null;
  }

  const cutOfTheWeekImage = PlaceHolderImages.find((img) => img.id === cutOfTheWeekProduct.imageId);

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full text-white">
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="font-headline text-5xl font-bold tracking-tight text-white md:text-7xl">
            The King's Pork House
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            Experience the finest, ethically sourced meats, curated by our expert butchers.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 transition-transform active:scale-95">
            <Link href="/products">Shop All Meats</Link>
          </Button>
        </div>
      </section>

      {/* Cut of the Week Section */}
      <section className="w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-4xl font-bold">Cut of the Week</h2>
          <p className="mx-auto mt-2 max-w-2xl text-lg text-foreground/80">
            Each week, our butchers select a standout cut to feature. Don't miss this week's special.
          </p>
        </div>
        <div className="mt-12 rounded-2xl bg-background p-6 shadow-neumorphic-out transition-shadow duration-300 hover:shadow-neumorphic-in">
          <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-12">
            <div className="aspect-video overflow-hidden rounded-lg shadow-neumorphic-in">
              {cutOfTheWeekImage && (
                <Image
                  src={cutOfTheWeekImage.imageUrl}
                  alt={cutOfTheWeekProduct.name}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  data-ai-hint={cutOfTheWeekImage.imageHint}
                />
              )}
            </div>
            <div>
              <h3 className="font-headline text-3xl font-bold">{cutOfTheWeekProduct.name}</h3>
              <p className="mt-4 text-foreground/80">{cutOfTheWeekProduct.description}</p>
              <div className="mt-6 flex items-baseline gap-4">
                <span className="text-4xl font-bold text-primary">KES {cutOfTheWeek.promoPrice.toLocaleString()}</span>
                <span className="text-xl text-muted-foreground line-through">KES {cutOfTheWeekProduct.price.toLocaleString()}</span>
              </div>
              <p className="mt-2 text-accent">This week only!</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
           <h2 className="font-headline text-4xl font-bold">Our Finest Selection</h2>
            <Button asChild variant="link" className="text-accent">
                <Link href="/products">View All <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
