'use client';

import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/use-cart';
import { useRouter } from 'next/navigation';
import { Smartphone, ShieldCheck } from 'lucide-react';

export default function CheckoutPage() {
    const { cartTotal, clearCart } = useCart();
    const router = useRouter();

    if (cartTotal === 0 && typeof window !== 'undefined') {
        router.push('/products');
        return null;
    }

    function handlePaymentConfirmation() {
        console.log("Payment confirmed for KES:", cartTotal);
        // In a real application, you would verify the M-Pesa transaction here.
        clearCart();
        router.push('/order-success');
    }

  return (
    <div className="container mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-headline text-5xl font-bold">Checkout</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80">
          Complete your order using Lipa na M-Pesa.
        </p>
      </div>

      <div className="mt-12 rounded-2xl bg-background p-8 shadow-neumorphic-out">
        <div className="flex justify-between items-baseline mb-6 border-b border-dashed pb-6">
            <h2 className="font-headline text-2xl font-bold">Total Amount</h2>
            <p className="text-3xl font-bold text-primary">KES {cartTotal.toLocaleString()}</p>
        </div>

        <div className="space-y-6">
            <div className="text-center">
                <h3 className="font-headline text-xl font-bold flex items-center justify-center gap-2">
                    <Smartphone />
                    Lipa na M-Pesa Instructions
                </h3>
            </div>
            
            <ol className="list-decimal list-inside space-y-3 text-lg text-foreground/90 bg-secondary/50 p-6 rounded-xl shadow-neumorphic-in">
                <li>Go to your M-Pesa Menu</li>
                <li>Select <strong>Lipa na M-PESA</strong></li>
                <li>Select <strong>Buy Goods and Services</strong></li>
                <li>
                    Enter Till Number: <strong className="text-primary font-mono text-xl tracking-wider">956273</strong>
                </li>
                <li>
                    Enter Amount: <strong className="text-primary font-mono text-xl tracking-wider">KES {cartTotal.toLocaleString()}</strong>
                </li>
                <li>Enter your M-PESA PIN and confirm the payment</li>
            </ol>

            <div className="border-t border-dashed pt-6">
                <Button 
                    onClick={handlePaymentConfirmation}
                    className="w-full text-lg bg-primary text-primary-foreground shadow-neumorphic-out active:shadow-neumorphic-in-sm transition-all"
                >
                    <ShieldCheck className="mr-2 h-5 w-5" />
                    Complete Order
                </Button>
                <p className="text-center text-xs text-muted-foreground mt-4">
                    Click "Complete Order" after you have received the M-Pesa confirmation message.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}
