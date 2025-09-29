import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogPosts } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const image = PlaceHolderImages.find((img) => img.id === post.imageId);

  return (
    <article className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          By {post.author} on {post.date}
        </p>
        <h1 className="mt-2 font-headline text-4xl font-bold md:text-5xl">{post.title}</h1>
      </div>

      {image && (
        <div className="my-8 aspect-video w-full overflow-hidden rounded-2xl shadow-neumorphic-out p-1">
          <Image
            src={image.imageUrl}
            alt={post.title}
            width={1200}
            height={675}
            className="h-full w-full rounded-xl object-cover"
            priority
            data-ai-hint={image.imageHint}
          />
        </div>
      )}
      
      <div 
        className="prose prose-lg dark:prose-invert mx-auto mt-8 max-w-none text-foreground/90 prose-headings:font-headline prose-headings:text-primary prose-a:text-accent hover:prose-a:text-accent/80"
        dangerouslySetInnerHTML={{ __html: post.content }} 
      />
    </article>
  );
}
