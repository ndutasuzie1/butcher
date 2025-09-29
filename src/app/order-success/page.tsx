import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

export default function OrderSuccessPage() {
  return (
    <div className="container mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-2xl bg-background p-8 shadow-neumorphic-out text-center">
        <div className="flex justify-center">
            <CheckCircle2 className="h-24 w-24 text-green-500" />
        </div>
        <h1 className="mt-6 font-headline text-4xl font-bold">Order Confirmed!</h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-foreground/80">
          Thank you for your purchase. Your order is being prepared and will be with you shortly.
        </p>
        <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 transition-transform active:scale-95">
          <Link href="/products">Continue Shopping</Link>
        </Button>
      </div>
    </div>
  );
}
