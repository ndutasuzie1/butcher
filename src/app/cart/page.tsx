'use client';

import { useCart } from '@/hooks/use-cart';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Trash2, ShoppingBag } from 'lucide-react';

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, cartCount } = useCart();

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-headline text-5xl font-bold">Your Cart</h1>
      </div>

      {cartCount === 0 ? (
        <div className="mt-12 flex flex-col items-center justify-center text-center">
            <ShoppingBag className="h-24 w-24 text-muted-foreground/50" />
            <p className="mt-4 text-lg text-foreground/80">Your cart is empty.</p>
            <Button asChild className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90 transition-transform active:scale-95">
                <Link href="/products">Start Shopping</Link>
            </Button>
        </div>
      ) : (
        <div className="mt-12">
          <ul className="space-y-6">
            {cartItems.map((item) => {
              const image = PlaceHolderImages.find((img) => img.id === item.imageId);
              return (
                <li key={item.id} className="flex items-center gap-4 rounded-2xl bg-background p-4 shadow-neumorphic-out">
                  <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg shadow-neumorphic-in">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={item.name}
                        width={100}
                        height={100}
                        className="h-full w-full object-cover"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-headline text-xl font-bold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">Unit Price: KES {item.price.toLocaleString()}</p>
                     <div className="mt-2 flex items-center gap-2">
                        <label htmlFor={`quantity-${item.id}`} className="text-sm font-medium">Qty:</label>
                        <Input
                            id={`quantity-${item.id}`}
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                            className="h-9 w-20 bg-background shadow-neumorphic-in-sm"
                        />
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <p className="text-lg font-bold text-primary">KES {(item.price * item.quantity).toLocaleString()}</p>
                    <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)} aria-label="Remove item">
                        <Trash2 className="h-5 w-5 text-destructive" />
                    </Button>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-12 text-right">
            <div className="text-2xl font-bold">
              <span className="font-headline">Total: </span>
              <span className="text-primary">KES {cartTotal.toLocaleString()}</span>
            </div>
            <p className="text-sm text-muted-foreground">Shipping & taxes calculated at checkout.</p>
            <Button asChild size="lg" className="mt-6 w-full md:w-auto bg-primary text-primary-foreground shadow-neumorphic-out active:shadow-neumorphic-in-sm transition-all">
                <Link href="/checkout">Proceed to Checkout</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
