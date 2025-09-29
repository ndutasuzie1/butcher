'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useCart } from '@/hooks/use-cart';
import { useRouter } from 'next/navigation';
import { CreditCard, Lock } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  address: z.string().min(10, { message: 'Address must be at least 10 characters.' }),
  cardNumber: z.string().regex(/^\d{16}$/, { message: 'Card number must be 16 digits.' }),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, { message: 'Use MM/YY format.' }),
  cvv: z.string().regex(/^\d{3,4}$/, { message: 'CVV must be 3 or 4 digits.' }),
});

export default function CheckoutPage() {
    const { cartTotal, clearCart } = useCart();
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            address: '',
            cardNumber: '',
            expiryDate: '',
            cvv: '',
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log("Processing payment for:", values);
        clearCart();
        router.push('/order-success');
    }

  return (
    <div className="container mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-headline text-5xl font-bold">Checkout</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80">
          Complete your order by providing your payment details.
        </p>
      </div>

      <div className="mt-12 rounded-2xl bg-background p-8 shadow-neumorphic-out">
        <div className="flex justify-between items-baseline mb-8">
            <h2 className="font-headline text-2xl font-bold">Total Amount</h2>
            <p className="text-3xl font-bold text-primary">KES {cartTotal.toLocaleString()}</p>
        </div>

        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                 <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                            <Input placeholder="John Doe" {...field} className="bg-background shadow-neumorphic-in-sm"/>
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                 <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                            <Input placeholder="you@example.com" {...field} className="bg-background shadow-neumorphic-in-sm"/>
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                 <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Shipping Address</FormLabel>
                        <FormControl>
                            <Input placeholder="123 Butcher Lane, Meat-town" {...field} className="bg-background shadow-neumorphic-in-sm"/>
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                
                <div className="border-t border-dashed pt-6">
                    <h3 className="font-headline text-xl font-bold mb-4 flex items-center gap-2"><CreditCard /> Payment Details</h3>
                    <FormField
                        control={form.control}
                        name="cardNumber"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Card Number</FormLabel>
                            <FormControl>
                                <Input placeholder="**** **** **** ****" {...field} className="bg-background shadow-neumorphic-in-sm"/>
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="grid grid-cols-2 gap-4 mt-4">
                         <FormField
                            control={form.control}
                            name="expiryDate"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Expiry (MM/YY)</FormLabel>
                                <FormControl>
                                    <Input placeholder="MM/YY" {...field} className="bg-background shadow-neumorphic-in-sm"/>
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                         <FormField
                            control={form.control}
                            name="cvv"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>CVV</FormLabel>
                                <FormControl>
                                    <Input placeholder="123" {...field} className="bg-background shadow-neumorphic-in-sm"/>
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                <Button type="submit" className="w-full text-lg bg-primary text-primary-foreground shadow-neumorphic-out active:shadow-neumorphic-in-sm transition-all">
                    <Lock className="mr-2 h-5 w-5" />
                    Pay KES {cartTotal.toLocaleString()}
                </Button>
            </form>
        </Form>
      </div>
    </div>
  );
}
