'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Code2, Layout, Database, Cloud, Gauge, Bug,
  Globe, Palette, Smartphone, ShoppingCart, ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Building modern, responsive web applications with React, Next.js, and TypeScript.',
    color: 'from-blue-500 to-cyan-500',
    features: ['React & Next.js', 'TypeScript', 'State Management', 'API Integration'],
  },
  {
    icon: Layout,
    title: 'UI/UX Design',
    description: 'Creating intuitive, beautiful interfaces that users love with attention to detail.',
    color: 'from-purple-500 to-pink-500',
    features: ['Figma Design', 'Design Systems', 'Prototyping', 'User Research'],
  },
  {
    icon: Database,
    title: 'Backend Integration',
    description: 'Connecting frontends to powerful backends with secure, efficient data handling.',
    color: 'from-cyan-500 to-green-500',
    features: ['REST APIs', 'GraphQL', 'Supabase', 'Firebase'],
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    description: 'Full-featured online stores with secure payments and inventory management.',
    color: 'from-orange-500 to-red-500',
    features: ['Stripe Integration', 'Cart Systems', 'Product Catalogs', 'Checkout Flows'],
  },
  {
    icon: Gauge,
    title: 'Performance Optimization',
    description: 'Speed up your website with modern techniques and best practices.',
    color: 'from-yellow-500 to-orange-500',
    features: ['Code Splitting', 'Lazy Loading', 'Caching', 'Bundle Optimization'],
  },
  {
    icon: Bug,
    title: 'Bug Fixing & Maintenance',
    description: 'Debugging, troubleshooting, and ongoing maintenance for existing applications.',
    color: 'from-red-500 to-rose-500',
    features: ['Debugging', 'Code Review', 'Refactoring', 'Updates'],
  },
];

export function ServicesSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="relative py-20 md:py-32 overflow-hidden">
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
            <Globe className="w-4 h-4" />
            What I Offer
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Services &{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive frontend development services to bring your ideas to life.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full p-6 rounded-2xl bg-card border border-border hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
                {/* Hover gradient */}
                <div className={cn(
                  'absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity bg-gradient-to-br',
                  service.color
                )} />

                {/* Icon */}
                <div className={cn(
                  'w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4 shadow-lg',
                  service.color
                )}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2.5 py-1 rounded-lg bg-muted text-xs font-medium text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Learn More */}
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:gap-2 transition-all"
                  whileHover={{ x: 4 }}
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="glass-card rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Have a project in mind?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's work together to build something amazing. I'm always open to discussing new projects and opportunities.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-purple-500/30 transition-shadow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Let's Talk
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
