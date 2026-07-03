'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, MapPin, Briefcase, GraduationCap, Heart, Target, Lightbulb, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

const stats = [
  { value: 20, suffix: '+', label: 'Projects Completed', icon: Target },
  { value: 2, suffix: '+', label: 'Years Experience', icon: Briefcase },
  { value: 15, suffix: '+', label: 'Technologies', icon: Lightbulb },
  { value: 100, suffix: '%', label: 'Client Satisfaction', icon: Heart },
];

const highlights = [
  { icon: Briefcase, title: 'Senior Developer', description: 'Leading frontend development at top companies' },
  { icon: GraduationCap, title: 'CS Graduate', description: 'University of Technology, 2022' },
  { icon: Award, title: 'Award Winner', description: 'Best UI/UX Design 2023' },
  { icon: MapPin, title: 'Based in SF', description: 'Available for remote work worldwide' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
      {count}{suffix}
    </span>
  );
}

export function AboutSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm font-medium text-muted-foreground mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Passionate About{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Building Great Products
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a frontend developer who loves turning complex problems into simple, beautiful, and intuitive designs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-3xl blur-2xl opacity-20 scale-105" />

              {/* Main image */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Lalon working"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -right-4 top-1/4 glass-card rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">2+</p>
                    <p className="text-sm text-muted-foreground">Years Exp.</p>
                  </div>
                </div>
              </motion.div>

              {/* Projects badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -left-4 bottom-1/4 glass-card rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">20+</p>
                    <p className="text-sm text-muted-foreground">Projects</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-muted-foreground leading-relaxed">
                I'm a Senior Frontend Developer based in San Francisco with a passion for creating
                intuitive, dynamic user experiences. My journey started in 2022, and since then,
                I've had the privilege of working with amazing teams and contributing to impactful projects.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in React, Next.js, and TypeScript, but I'm always exploring new technologies
                and best practices. When I'm not coding, you'll find me contributing to open-source,
                writing technical articles, or experimenting with design.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 1 + i * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity" />
              <div className="relative glass-card rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
