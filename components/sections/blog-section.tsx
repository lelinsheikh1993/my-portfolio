'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, ArrowUpRight, Calendar, Tag, PenTool } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: 'mastering-react-performance',
    title: 'Mastering React Performance Optimization',
    excerpt: 'Learn advanced techniques to optimize your React applications for blazing fast performance.',
    image: 'https://images.pexels.com/photos/1089440/pexels-photo-1089440.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'React',
    date: 'Dec 15, 2024',
    readTime: '8 min read',
  },
  {
    slug: 'nextjs-14-features',
    title: 'Next.js 14: Game-Changing Features',
    excerpt: 'Explore the latest features in Next.js 14 and how they can improve your development workflow.',
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Next.js',
    date: 'Dec 10, 2024',
    readTime: '6 min read',
  },
  {
    slug: 'design-systems-guide',
    title: 'Building Scalable Design Systems',
    excerpt: 'A comprehensive guide to creating design systems that scale with your organization.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Design',
    date: 'Dec 5, 2024',
    readTime: '10 min read',
  },
];

export function BlogSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="blog" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm font-medium text-muted-foreground mb-4">
            <PenTool className="w-4 h-4" />
            Latest Articles
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Blog &{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Tutorials
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on frontend development and design.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <Link href={`/blog/${post.slug}`}>
                <article className="relative h-full rounded-2xl overflow-hidden bg-card border border-border hover:border-blue-500/50 transition-all duration-300">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                    {/* Category */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium text-foreground border border-border/50">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>

                    {/* Read More */}
                    <div className="flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:gap-2 transition-all">
                      Read Article
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-medium transition-colors"
          >
            View All Articles
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
