import ProductCard from '@/components/product-card';
import { products } from '@/lib/data';

export default function ProductsPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-headline text-5xl font-bold">Our Meats</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80">
          From prime beef to succulent pork, all our meats are sourced from local farms and handled with expert care.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
