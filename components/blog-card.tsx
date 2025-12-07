'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BlogPost } from '@/types/blog';
import { Card } from './ui/card';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="hover:shadow-2xl transition-shadow h-full">
        <Link href={`/blog/${post.slug}`}>
          {post.image && (
            <motion.div 
              className="aspect-video bg-gradient-to-br from-sky-100 to-blue-100 rounded-lg mb-4 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </motion.div>
          )}
          <div className="flex items-center gap-3 text-sm text-sky-600 mb-2">
            <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            {post.readTime && <span>• {post.readTime}</span>}
          </div>
          <h3 className="text-xl font-bold mb-2 text-sky-900">{post.title}</h3>
          <p className="text-sky-700 mb-4">{post.description}</p>
          {post.tags && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <motion.span 
                  key={tag} 
                  className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm border border-sky-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          )}
        </Link>
      </Card>
    </motion.div>
  );
}
