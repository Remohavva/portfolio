import { BlogPost } from '@/types/blog';

export const blogPosts: BlogPost[] = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js 14',
    description: 'Learn the basics of Next.js 14 and the App Router',
    date: '2024-01-15',
    readTime: '5 min read',
    tags: ['Next.js', 'React', 'Web Development'],
    image: '/blog/nextjs.png',
    content: 'Full blog post content here...'
  },
  {
    slug: 'typescript-best-practices',
    title: 'TypeScript Best Practices',
    description: 'Essential TypeScript patterns for better code',
    date: '2024-01-10',
    readTime: '8 min read',
    tags: ['TypeScript', 'Best Practices'],
    image: '/blog/typescript.png',
    content: 'Full blog post content here...'
  }
];

export function getBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}
