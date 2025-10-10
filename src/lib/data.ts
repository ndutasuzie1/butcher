
import type { Product, CutOfTheWeek, BlogPost } from './types';

export const products: Product[] = [
  {
    id: 'chips-mix',
    name: 'Chips Mix',
    category: 'Pork',
    description: 'Rich, fatty, and full of flavor. Perfect for slow roasting, braising, or making homemade bacon.',
    price: 600,
    imageId: 'chips-mix-1',
  },
  {
    id: 'ribeye-steak',
    name: 'Ribeye Steak',
    category: 'Beef',
    description: 'A classic cut known for its exceptional marbling, tenderness, and rich, beefy taste.',
    price: 400,
    imageId: 'ribeye-steak-1',
  },
  {
    id: 'mishkakiz',
    name: 'Mishkakiz',
    category: 'Poultry',
    description: 'Juicy and flavorful chicken pieces on a skewer, perfect for grilling. Price is per skewer.',
    price: 150,
    imageId: 'chicken-thighs-1',
  },
  {
    id: 'pork-chops',
    name: 'Pork Chops',
    category: 'Pork',
    description: 'Versatile and lean, these pork chops are great for grilling, pan-searing, or baking. Price is per kg.',
    price: 900,
    imageId: 'pork-chops-1',
  },
  {
    id: 'pork-shoulder',
    name: 'Pork Shoulder',
    category: 'Pork',
    description: 'Ideal for pulled pork, this cut becomes incredibly tender and flavorful with slow cooking.',
    price: 150,
    imageId: 'pork-shoulder-1',
  },
  {
    id: 'butcher-knife-set',
    name: 'Butcher Knife Set',
    category: 'Gear',
    description: 'A 9-piece razor sharp butcher knife set, featuring a forged iron cleaver and heavy-duty steel blades.',
    price: 0,
    imageId: 'butcher-knife-set-1',
  },
  {
    id: 'butchery-grill',
    name: 'The Butchery Grill',
    category: 'Gear',
    description: 'Master the art of barbecue with this versatile dual-function grill, perfect for both quick searing and slow smoking.',
    price: 0,
    imageId: 'butchery-grill-1',
  },
  {
    id: 'food-grinder',
    name: 'Multi-Food Grinder',
    category: 'Gear',
    description: 'Perfect for making freshly minced meat and homemade sausages. A versatile attachment for any chef.',
    price: 0,
    imageId: 'food-grinder-1',
  },
];

export const blogPosts: BlogPost[] = [
    {
        slug: 'how-to-sear-a-steak',
        title: 'How to Perfectly Sear a Steak',
        author: 'Chef John',
        date: '2024-05-15',
        excerpt: 'Unlock the secrets to achieving that coveted, delicious crust on your steak every single time. We cover everything from choosing the pan to managing heat.',
        content: `
<p>Searing a steak is an art form, but with the right technique, it's one you can master in your own kitchen. The goal is the Maillard reaction, a chemical reaction between amino acids and reducing sugars that gives browned food its distinctive flavor.</p>
<h3 class="font-headline text-xl font-bold mt-4 mb-2">Step 1: Choose Your Cut</h3>
<p>Start with a good quality, thick-cut steak. A thickness of at least 1.5 inches is ideal. Cuts like Ribeye, New York Strip, or Sirloin work wonderfully.</p>
<h3 class="font-headline text-xl font-bold mt-4 mb-2">Step 2: Pat It Dry</h3>
<p>This is the most crucial step. Moisture is the enemy of a good sear. Pat your steak completely dry with paper towels. A dry surface allows the crust to form quickly and evenly.</p>
<h3 class="font-headline text-xl font-bold mt-4 mb-2">Step 3: Season Generously</h3>
<p>Season your steak with a liberal amount of coarse salt and freshly ground black pepper on all sides. The salt helps draw out any remaining moisture from the surface.</p>
<h3 class="font-headline text-xl font-bold mt-4 mb-2">Step 4: Get the Pan Screaming Hot</h3>
<p>Use a heavy-bottomed pan, like cast iron or stainless steel. Add a high-smoke-point oil (like canola or grapeseed) and heat it over high heat until it just begins to smoke.</p>
<h3 class="font-headline text-xl font-bold mt-4 mb-2">Step 5: Sear and Finish</h3>
<p>Carefully place the steak in the pan. Let it sear, untouched, for 2-3 minutes per side for a perfect medium-rare. For a final touch of flavor, add a knob of butter, garlic, and thyme to the pan in the last minute of cooking and baste the steak. Let it rest for 10 minutes before slicing to allow the juices to redistribute.</p>
`,
        imageId: 'blog-sear-steak-1'
    },
    {
        slug: 'the-ultimate-guide-to-smoking-ribs',
        title: 'The Ultimate Guide to Smoking Ribs',
        author: 'Pitmaster Jane',
        date: '2024-05-08',
        excerpt: 'From choosing the right wood to mastering the 3-2-1 method, this guide will walk you through the process of making fall-off-the-bone tender smoked ribs.',
        content: `
<p>Smoked ribs are a barbecue staple, and for good reason. When done right, they're a smoky, savory, and tender delight. This guide will help you achieve barbecue greatness.</p>
<h3 class="font-headline text-xl font-bold mt-4 mb-2">Choosing Your Ribs</h3>
<p>You can use either spare ribs or baby back ribs. Baby backs are leaner and more tender, while spare ribs have more fat, which means more flavor.</p>
<h3 class="font-headline text-xl font-bold mt-4 mb-2">The Prep</h3>
<p>Start by removing the membrane from the bone-side of the ribs. This allows the smoke and rub to penetrate the meat more effectively. Then, apply a binder (like mustard) and your favorite BBQ rub generously on all sides.</p>
<h3 class="font-headline text-xl font-bold mt-4 mb-2">The 3-2-1 Method</h3>
<p>This is a foolproof method for tender ribs:</p>
<ul>
    <li class="ml-4 list-disc"><strong>3 hours of Smoke:</strong> Place the ribs on your smoker at 225°F (107°C). Use a wood like hickory or apple for a classic smoke flavor.</li>
    <li class="ml-4 list-disc"><strong>2 hours Wrapped:</strong> After 3 hours, remove the ribs, place them on foil with some liquid (like apple juice), and wrap them tightly. Return to the smoker.</li>
    <li class="ml-4 list-disc"><strong>1 hour Unwrapped:</strong> Unwrap the ribs, brush them with your favorite BBQ sauce, and let them cook for one final hour to let the sauce set.</li>
</ul>
<p>The ribs are done when you can pick them up and they bend easily, with the meat starting to crack on the surface. Enjoy your hard-earned, delicious ribs!</p>
`,
        imageId: 'blog-smoking-ribs-1'
    }
];

export const cutOfTheWeek: CutOfTheWeek | null = null;
