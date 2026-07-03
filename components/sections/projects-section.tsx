'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Layers } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product management, shopping cart, checkout flow, and real-time inventory tracking.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Full Stack',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Stripe', 'Tailwind'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 'dashboard-analytics',
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard with data visualization, customizable charts, and automated report generation.',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Frontend',
    technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 'social-app',
    title: 'Social Media App',
    description: 'A modern social platform with posts, stories, real-time messaging, and content discovery features.',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Mobile First',
    technologies: ['React Native', 'Firebase', 'GraphQL', 'AWS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 'ai-content-generator',
    title: 'AI Content Generator',
    description: 'AI-powered tool for generating marketing copy, blog posts, and creative content with advanced customization.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'AI/ML',
    technologies: ['Next.js', 'OpenAI', 'Tailwind', 'Vercel'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: 'project-management',
    title: 'Project Management Tool',
    description: 'Kanban-style project management with team collaboration, time tracking, and sprint planning.',
    image: 'https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tysrgb&w=800',
    category: 'SaaS',
    technologies: ['React', 'Redux', 'Express', 'MongoDB'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: 'nft-marketplace',
    title: 'NFT Marketplace',
    description: 'Decentralized marketplace for creating, buying, and selling NFTs with wallet integration.',
    image: 'https://images.pexels.com/photos/6332400/pexels-photo-6332400.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Web3',
    technologies: ['Next.js', 'Solidity', 'Ethers.js', 'IPFS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <Link href={`/projects/${project.id}`}>
        <div className="relative h-full rounded-2xl overflow-hidden bg-card border border-border hover:border-blue-500/50 transition-all duration-300">
          {/* Glow effect on hover */}
          <motion.div
            animate={{ opacity: isHovered ? 0.15 : 0 }}
            className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl blur-xl pointer-events-none"
          />

          {/* Image */}
          <div className="relative aspect-[16/10] overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.title}
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium text-foreground border border-border/50">
                {project.category}
              </span>
            </div>

            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 text-xs font-medium text-white">
                  Featured
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-xl font-bold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <motion.div
                animate={{ x: isHovered ? 0 : -4, opacity: isHovered ? 1 : 0.5 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowUpRight className="w-5 h-5 text-muted-foreground" />
              </motion.div>
            </div>

            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg bg-muted text-xs font-medium text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2.5 py-1 rounded-lg bg-muted text-xs font-medium text-muted-foreground">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white text-sm font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-shadow"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Demo
              </motion.a>
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 text-foreground text-sm font-medium transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaGithub className="w-3.5 h-3.5" />
                Code
              </motion.a>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function ProjectsSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [filter, setFilter] = React.useState<'all' | 'featured'>('all');

  const filteredProjects = filter === 'featured'
    ? projects.filter((p) => p.featured)
    : projects;

  return (
    <section id="projects" className="relative py-20 md:py-32 overflow-hidden">
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
            <Layers className="w-4 h-4" />
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Projects{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects I've worked on. Each one taught me something new and pushed my skills further.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setFilter('all')}
            className={cn(
              'px-5 py-2.5 rounded-xl font-medium transition-all',
              filter === 'all'
                ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white'
                : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
            )}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter('featured')}
            className={cn(
              'px-5 py-2.5 rounded-xl font-medium transition-all',
              filter === 'featured'
                ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white'
                : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
            )}
          >
            Featured
          </button>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-medium transition-colors"
          >
            View All Projects
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
