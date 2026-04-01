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

                {/* Avatar Group */}
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-4">
                    {[
                      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
                    ].map((src, i) => (
                      <div key={i} className="w-12 h-12 rounded-full border-2 border-ikigai-surface overflow-hidden relative z-10">
                        <Image src={src} alt={`Community member ${i + 1}`} fill className="object-cover" referrerPolicy="no-referrer" />
                      </div>
                    ))}
                  </div>
                  <div className="text-xs uppercase tracking-widest font-bold text-ikigai-accent">
                    Join 500+ others
                  </div>
                </div>
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
