'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, Building2, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Experience {
  type: 'work' | 'education';
  title: string;
  organization: string;
  location: string;
  date: string;
  description: string;
  achievements?: string[];
}

const experiences: Experience[] = [
  {
    type: 'work',
    title: 'Senior Frontend Developer',
    organization: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    date: '2023 - Present',
    description: 'Leading frontend development for the flagship product, mentoring junior developers, and establishing best practices.',
    achievements: [
      'Improved page load performance by 40%',
      'Led migration to Next.js 14',
      'Implemented design system used by 5 teams',
    ],
  },
  {
    type: 'work',
    title: 'Frontend Developer',
    organization: 'StartupXYZ',
    location: 'Remote',
    date: '2022 - 2023',
    description: 'Built and maintained multiple customer-facing applications using React and TypeScript.',
    achievements: [
      'Developed 15+ reusable components',
      'Reduced bundle size by 30%',
      'Implemented CI/CD pipeline',
    ],
  },
  {
    type: 'education',
    title: 'Bachelor of Science in Computer Science',
    organization: 'University of Technology',
    location: 'California',
    date: '2018 - 2022',
    description: 'Graduated with honors. Focused on software engineering and web technologies.',
    achievements: [
      'GPA: 3.8/4.0',
      'Dean\'s List - 6 semesters',
      'Senior project: AI-powered code reviewer',
    ],
  },
];

const certifications = [
  { name: 'AWS Certified Developer', issuer: 'Amazon Web Services', year: '2023' },
  { name: 'Meta Frontend Developer', issuer: 'Meta', year: '2022' },
  { name: 'Google UX Design', issuer: 'Google', year: '2022' },
];

export function ExperienceSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-transparent to-muted/50" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm font-medium text-muted-foreground mb-4">
            <Briefcase className="w-4 h-4" />
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experience &{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the milestones along the way.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 md:-translate-x-1/2" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={cn(
                'relative mb-12 md:mb-16',
                i % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%] md:ml-auto'
              )}
            >
              {/* Timeline dot */}
              <div
                className={cn(
                  'absolute left-4 md:left-1/2 top-0 w-4 h-4 rounded-full border-4 border-background bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 md:-translate-x-1/2',
                  'z-10'
                )}
              />

              {/* Content card */}
              <div
                className={cn(
                  'ml-12 md:ml-0 glass-card rounded-2xl p-6',
                  i % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                )}
              >
                {/* Date Badge */}
                <div
                  className={cn(
                    'inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-sm font-medium text-muted-foreground mb-4',
                    i % 2 === 0 ? 'md:ml-auto' : ''
                  )}
                >
                  <Calendar className="w-3 h-3" />
                  {exp.date}
                </div>

                {/* Type Icon */}
                <div
                  className={cn(
                    'flex items-center gap-3 mb-3',
                    i % 2 === 0 ? 'md:justify-end' : ''
                  )}
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                    {exp.type === 'work' ? (
                      <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    ) : (
                      <GraduationCap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    )}
                  </div>
                  <div className={i % 2 === 0 ? 'md:text-right' : ''}>
                    <h3 className="text-lg font-bold text-foreground">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Building2 className="w-3 h-3" />
                      {exp.organization}
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div
                  className={cn(
                    'flex items-center gap-1 text-muted-foreground text-sm mb-3',
                    i % 2 === 0 ? 'md:justify-end' : ''
                  )}
                >
                  <MapPin className="w-3 h-3" />
                  {exp.location}
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Achievements */}
                {exp.achievements && (
                  <ul
                    className={cn(
                      'space-y-2',
                      i % 2 === 0 ? 'md:text-right' : ''
                    )}
                  >
                    {exp.achievements.map((achievement, j) => (
                      <li
                        key={j}
                        className={cn(
                          'text-sm text-muted-foreground',
                          i % 2 === 0 ? 'md:ml-auto' : ''
                        )}
                      >
                        • {achievement}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-center text-xl font-semibold text-foreground mb-8 flex items-center justify-center gap-2">
            <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            Certifications
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + i * 0.1 }}
                className="glass-card rounded-xl p-4 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-foreground text-sm mb-1">{cert.name}</h4>
                <p className="text-xs text-muted-foreground">{cert.issuer} • {cert.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
