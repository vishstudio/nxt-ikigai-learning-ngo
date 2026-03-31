"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';

export function StorySection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.2]);

  return (
    <section id="story" ref={containerRef} className="py-32 bg-ikigai-surface scroll-mt-20" aria-labelledby="story-title">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: -20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative h-[500px] lg:h-[70vh] w-full arch-image overflow-hidden shadow-xl"
          >
            <motion.div style={{ y, scale }} className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1972&auto=format&fit=crop"
                alt="A young student focused on reading a book, symbolizing the power of education"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
          <div>
            <span className="uppercase tracking-[0.2em] text-xs font-bold text-ikigai-accent mb-8 block">Our Mission</span>
            <h2 id="story-title" className="text-4xl md:text-5xl lg:text-6xl font-serif mb-10 leading-[1.1] text-ikigai-dark">
              Education is not a privilege. It is a fundamental right.
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-ikigai-muted font-light leading-relaxed mb-16">
              <p>
                IKIGAI has the aim to help students who are struggling financially and cannot afford private tuitions. We believe that every student, at any age, deserves access to quality learning.
              </p>
              <p className="italic">
                &quot;However, if any student from any background approaches us, our volunteers do their best to help.&quot;
              </p>
              <p>
                We connect these students with passionate volunteer teachers, creating a sanctuary for learning, growth, and boundless possibility.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
