import { blogPosts } from '@/lib/data';
import BlogPostCard from '@/components/blog-post-card';

export default function BlogPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-headline text-5xl font-bold">The Butcher's Blog</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80">
          Tips, tricks, and tales from behind the butcher block.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
