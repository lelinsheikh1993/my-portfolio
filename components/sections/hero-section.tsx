'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  Sparkles,
  Code2,
  Palette,
  Zap,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { cn } from '@/lib/utils';
import { BsTwitter } from 'react-icons/bs';
import { LiaLinkedin } from 'react-icons/lia';
import Image from 'next/image';

const techIcons = [
  { icon: '⚛️', name: 'React', delay: 0 },
  { icon: '▲', name: 'Next.js', delay: 0.2 },
  { icon: '📘', name: 'TypeScript', delay: 0.4 },
  { icon: '🎨', name: 'Tailwind', delay: 0.6 },
  { icon: '🔥', name: 'Firebase', delay: 0.8 },
  { icon: '⚡', name: 'Vite', delay: 1 },
];

const floatingIcons = [
  { icon: Code2, position: 'top-20 left-[10%]', delay: 0 },
  { icon: Palette, position: 'top-32 right-[15%]', delay: 0.3 },
  { icon: Zap, position: 'bottom-40 left-[20%]', delay: 0.6 },
  { icon: Sparkles, position: 'bottom-32 right-[25%]', delay: 0.9 },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/30 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px]"
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Floating icons */}
        {floatingIcons.map((item, i) => (
          <motion.div
            key={i}
            className={cn('absolute', item.position)}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ delay: item.delay, duration: 0.5 }}
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center"
            >
              <item.icon className="w-8 h-8 text-blue-600/40 dark:text-blue-400/40" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 border border-blue-500/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-foreground">Available for new opportunities</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
            >
              <span className="text-foreground">Hi, I'm </span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Lalon Sheikh
              </span>
            </motion.h1>

            {/* Role with typing effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-6"
            >
              <div className="flex items-center gap-2">
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 rounded-full bg-green-500"
                />
                <span className="text-muted-foreground">Open to Work</span>
              </div>
              <span className="text-muted-foreground/30">|</span>
              <span className="text-xl sm:text-2xl font-semibold text-foreground">
                Senior Frontend Developer
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              I craft exceptional digital experiences with modern web technologies.
              Passionate about clean code, stunning UIs, and performant applications
              that users love.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <motion.a
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white font-semibold rounded-2xl shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-purple-500/30 transition-shadow overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>

              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-muted hover:bg-muted/80 text-foreground font-semibold rounded-2xl border border-border transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Me
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-muted hover:bg-muted/80 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-muted hover:bg-muted/80 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
              >
                <LiaLinkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-muted hover:bg-muted/80 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Twitter"
              >
                <BsTwitter className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>

          {/* Image / Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex-1 flex justify-center"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full blur-3xl opacity-30 scale-110" />

              {/* Main avatar container */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
              >
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 p-1 animate-spin-slow">
                  <div className="w-full h-full rounded-full bg-background" />
                </div>

                {/* Avatar image */}
                <div className="absolute inset-4 rounded-full overflow-hidden bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20">
                  {/* <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Lalon Sheikh"
                    className="w-full h-full object-cover"
                  /> */}
                  <Image 
                  src="/lalon.png" alt='Lalon Sheikh'  className="w-full h-full object-cover" width={500} height={400}
                  ></Image>
                </div>

                {/* Rotating tech icons */}
                {techIcons.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + tech.delay, duration: 0.3 }}
                    className="absolute"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${i * 60}deg) translateY(-160px) rotate(-${i * 60}deg)`,
                    }}
                  >
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: tech.delay }}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl glass-card flex items-center justify-center shadow-lg"
                    >
                      <span className="text-xl sm:text-2xl">{tech.icon}</span>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
