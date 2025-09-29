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
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  request: z.string().min(20, { message: 'Please provide more detail about your request (at least 20 characters).' }),
});

export default function SpecialOrdersPage() {
    const { toast } = useToast();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            request: '',
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast({
            title: "Special Order Request Sent!",
            description: "Thank you! Our butchers will review your request and contact you shortly.",
        });
        form.reset();
    }

  return (
    <div className="container mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-headline text-5xl font-bold">Special Orders</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80">
          Looking for something you don't see in our case? A specific cut, size, or preparation? Let us know, and our butchers will do their best to accommodate.
        </p>
      </div>

      <div className="mt-12 rounded-2xl bg-background p-8 shadow-neumorphic-out">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input placeholder="Your Name" {...field} className="bg-background shadow-neumorphic-in-sm"/>
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
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input placeholder="your.email@example.com" {...field} className="bg-background shadow-neumorphic-in-sm"/>
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                 <FormField
                    control={form.control}
                    name="request"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Your Special Request</FormLabel>
                        <FormControl>
                            <Textarea placeholder="e.g., 'A 10lb bone-in prime rib roast for Christmas' or 'Thinly sliced pork belly for shabu-shabu'" {...field} className="bg-background shadow-neumorphic-in-sm" rows={6}/>
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full bg-primary text-primary-foreground shadow-neumorphic-out active:shadow-neumorphic-in-sm transition-all">Submit Request</Button>
            </form>
        </Form>
      </div>
    </div>
  );
}
