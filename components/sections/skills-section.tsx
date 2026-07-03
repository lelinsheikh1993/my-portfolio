'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
  Atom, FileCode, Palette, Database, Server, GitBranch,
  Globe, Smartphone, Cloud, Cpu, Layers, Box
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: Skill[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: Atom,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React', level: 95, icon: '⚛️' },
      { name: 'Next.js', level: 90, icon: '▲' },
      { name: 'TypeScript', level: 90, icon: '📘' },
      { name: 'JavaScript', level: 95, icon: '🟨' },
      { name: 'Tailwind CSS', level: 92, icon: '🎨' },
      { name: 'Redux', level: 88, icon: '🔮' },
    ],
  },
  {
    title: 'UI/UX',
    icon: Palette,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Figma', level: 85, icon: '🎭' },
      { name: 'Framer Motion', level: 92, icon: '🎬' },
      { name: 'CSS3', level: 95, icon: '💅' },
      { name: 'Responsive Design', level: 95, icon: '📱' },
      { name: 'Design Systems', level: 88, icon: '🎯' },
      { name: 'Accessibility', level: 85, icon: '♿' },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'from-cyan-500 to-green-500',
    skills: [
      { name: 'Node.js', level: 80, icon: '💚' },
      { name: 'Express', level: 78, icon: '🚀' },
      { name: 'REST APIs', level: 85, icon: '🔗' },
      { name: 'GraphQL', level: 75, icon: '◈' },
      { name: 'Supabase', level: 85, icon: '⚡' },
      { name: 'Firebase', level: 82, icon: '🔥' },
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: GitBranch,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Git/GitHub', level: 92, icon: '🐙' },
      { name: 'VS Code', level: 95, icon: '💙' },
      { name: 'Vercel', level: 90, icon: '▲' },
      { name: 'Docker', level: 70, icon: '🐳' },
      { name: 'CI/CD', level: 75, icon: '🔄' },
      { name: 'Testing', level: 80, icon: '🧪' },
    ],
  },
];

function SkillBar({ skill, delay, inView }: { skill: Skill; delay: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">{skill.icon}</span>
          <span className="font-medium text-foreground text-sm">{skill.name}</span>
        </div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: delay + 0.5 }}
          className="text-sm font-semibold text-muted-foreground"
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="relative h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full"
        />
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <section id="skills" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-transparent to-muted/50" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm font-medium text-muted-foreground mb-4">
            <Cpu className="w-4 h-4" />
            Skills & Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tech Stack &{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Constantly learning and evolving. Here are the technologies and tools I work with most frequently.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {skillCategories.map((category, i) => (
            <motion.button
              key={category.title}
              onClick={() => setActiveTab(i)}
              className={cn(
                'inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all',
                activeTab === i
                  ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white shadow-lg'
                  : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
              )}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <category.icon className="w-4 h-4" />
              {category.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="relative flex items-start justify-center">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-6 w-full max-w-4xl"
          >
            {skillCategories[activeTab].skills.map((skill, i) => (
              <div
                key={skill.name}
                className="p-4 rounded-xl bg-card/50 border border-border/50 hover:border-border transition-colors"
              >
                <SkillBar skill={skill} delay={i * 0.1} inView={isInView} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Tech Stack Icons Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-center text-lg font-semibold text-foreground mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'React', icon: '⚛️' },
              { name: 'Next.js', icon: '▲' },
              { name: 'TypeScript', icon: '📘' },
              { name: 'JavaScript', icon: '🟨' },
              { name: 'Tailwind', icon: '🎨' },
              { name: 'Node.js', icon: '💚' },
              { name: 'GraphQL', icon: '◈' },
              { name: 'MongoDB', icon: '🍃' },
              { name: 'PostgreSQL', icon: '🐘' },
              { name: 'Redis', icon: '🔴' },
              { name: 'Docker', icon: '🐳' },
              { name: 'AWS', icon: '☁️' },
              { name: 'Git', icon: '📝' },
              { name: 'Figma', icon: '🎭' },
              { name: 'Vercel', icon: '▲' },
              { name: 'Supabase', icon: '⚡' },
            ].map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.9 + i * 0.05 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/50 hover:bg-muted border border-border/50 hover:border-border transition-all cursor-default"
              >
                <span className="text-xl">{tech.icon}</span>
                <span className="text-sm font-medium text-foreground">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
