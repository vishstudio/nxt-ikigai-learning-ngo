"use client";

import { motion } from 'motion/react';
import { testimonials } from '@/lib/data';
import Image from 'next/image';
import TestimonialCard from '../testimonial-card/testimonial-card';
import { Carousel } from '../Carousel';

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-32 bg-ikigai-surface scroll-mt-20" aria-labelledby="testimonials-title">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Sticky Header Section */}
          <div className="lg:col-span-4 h-full relative">
            <div className="lg:sticky lg:top-32">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <span className="uppercase tracking-[0.2em] text-xs font-bold text-ikigai-accent mb-6 block">Voices of Impact</span>
                <h2 id="testimonials-title" className="text-5xl md:text-6xl font-serif text-ikigai-dark leading-[1.1] mb-8">
                  Stories from our <span className="italic">community.</span>
                </h2>
                <p className="text-ikigai-muted font-light leading-relaxed mb-12 text-lg">
                  Hear directly from the students, parents, and volunteers who make Ikigai a place of hope and transformation.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="lg:col-span-8">
            {/* Desktop Masonry Grid */}
            <div className="hidden lg:block columns-1 md:columns-2 gap-8 space-y-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  index={index}
                  quote={testimonial.quote}
                  author={testimonial.author}
                />
              ))}
            </div>

            {/* Mobile & Tablet Carousel */}
            <div className="lg:hidden pt-8 pb-4">
              <Carousel
                items={testimonials}
                renderItem={(testimonial, index) => (
                  <div key={index} className="px-1 md:px-3 pb-8 h-full flex flex-col">
                    <TestimonialCard
                      className="h-full"
                      index={index}
                      quote={testimonial.quote}
                      author={testimonial.author}
                    />
                  </div>
                )}
                autoScroll={true}
                itemsPerPage={{ mobile: 1, tablet: 2, desktop: 2 }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
