'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'TechCorp Inc.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'Alex delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and commitment to quality made the entire process smooth and successful.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    company: 'StartupXYZ',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'Working with Alex was a game-changer for our startup. He transformed our vision into a beautiful, performant web application that our users absolutely love.',
    rating: 5,
  },
  {
    name: 'Emily Davis',
    role: 'Design Lead',
    company: 'Creative Agency',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'As a designer, I was impressed by how Alex brought my designs to life. Every pixel was implemented with precision, and the animations were smooth and polished.',
    rating: 5,
  },
  {
    name: 'James Wilson',
    role: 'CEO',
    company: 'Digital Solutions',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'Alex is a true professional. He not only delivered a great product but also provided valuable insights that improved our overall digital strategy.',
    rating: 5,
  },
];

export function TestimonialsSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [active, setActive] = React.useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-transparent to-muted/50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm font-medium text-muted-foreground mb-4">
            <Star className="w-4 h-4" />
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            What People{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Say About Me
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Feedback from clients and colleagues I've had the pleasure to work with.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Main testimonial */}
          <div className="relative">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                  opacity: i === active ? 1 : 0,
                  scale: i === active ? 1 : 0.95,
                  x: i === active ? 0 : i > active ? 100 : -100,
                }}
                transition={{ duration: 0.4 }}
                className={cn(
                  'absolute inset-0',
                  i === active ? 'relative' : 'pointer-events-none'
                )}
              >
                <div className="glass-card rounded-3xl p-8 md:p-12">
                  {/* Quote icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 flex items-center justify-center mb-6">
                    <Quote className="w-6 h-6 text-white" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        className={cn(
                          'w-5 h-5',
                          j < testimonial.rating
                            ? 'text-yellow-500 fill-yellow-500'
                            : 'text-muted'
                        )}
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-xl object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-xl bg-muted hover:bg-muted/80 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={cn(
                    'w-2.5 h-2.5 rounded-full transition-all',
                    i === active
                      ? 'w-8 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500'
                      : 'bg-muted hover:bg-muted-foreground/30'
                  )}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-xl bg-muted hover:bg-muted/80 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
