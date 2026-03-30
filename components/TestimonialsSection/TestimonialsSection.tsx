"use client";

import { motion } from 'motion/react';
import { testimonials } from '@/lib/data';
import Image from 'next/image';

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-32 bg-ikigai-surface scroll-mt-20" aria-labelledby="testimonials-title">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Sticky Header Section */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
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

          {/* Masonry Testimonials Grid */}
          <div className="lg:col-span-8">
            <div className="columns-1 md:columns-2 gap-8 space-y-8">
              {testimonials.map((testimonial, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                  className="break-inside-avoid"
                >
                  <div className="bg-white p-10 md:p-12 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-ikigai-dark/5 group hover:scale-[1.02] hover:-translate-y-1">
                    <div className="text-ikigai-accent mb-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.017 21L16.41 14.904C16.634 14.288 16.75 13.633 16.75 12.95V3H24V12.95C24 16.438 22.844 19.342 20.531 21.662C18.219 23.983 15.313 25.143 11.812 25.143V21H14.017ZM3.205 21L5.598 14.904C5.822 14.288 5.938 13.633 5.938 12.95V3H13.188V12.95C13.188 16.438 12.031 19.342 9.719 21.662C7.406 23.983 4.5 25.143 1 25.143V21H3.205Z" />
                      </svg>
                    </div>
                    <p className="text-xl md:text-2xl font-serif text-ikigai-dark leading-relaxed mb-10 group-hover:text-[1.6rem] transition-all duration-500 ease-out">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-[1px] bg-ikigai-accent/30 group-hover:w-16 transition-all duration-500" />
                      <p className="text-xs uppercase tracking-[0.2em] font-bold text-ikigai-muted group-hover:text-ikigai-accent transition-colors duration-500">
                        {testimonial.author}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
