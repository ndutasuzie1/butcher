import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/lib/types';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

type BlogPostCardProps = {
  post: BlogPost;
};

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === post.imageId);

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
        <div className="flex h-full flex-col rounded-2xl bg-background p-4 shadow-neumorphic-out transition-all duration-300 hover:shadow-neumorphic-in">
        <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-neumorphic-in">
            {image && (
            <Image
                src={image.imageUrl}
                alt={post.title}
                width={800}
                height={450}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={image.imageHint}
            />
            )}
        </div>
        <div className="mt-4 flex flex-grow flex-col">
            <h3 className="font-headline text-2xl font-bold">{post.title}</h3>
            <p className="mt-2 flex-grow text-sm text-foreground/70">{post.excerpt}</p>
            <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
            <span>By {post.author}</span>
            <span>{post.date}</span>
            </div>
            <div className="mt-4 text-right">
                <p className="inline-flex items-center text-sm font-bold text-accent">
                Read More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </p>
            </div>
        </div>
        </div>
    </Link>
  );
}
