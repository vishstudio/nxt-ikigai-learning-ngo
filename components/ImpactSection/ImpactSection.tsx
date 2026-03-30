"use client";

import { motion } from 'motion/react';
import { impactStats } from '@/lib/data';

export function ImpactSection() {
  return (
    <section className="py-20 bg-ikigai-dark text-white" aria-labelledby="impact-title">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {impactStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-serif mb-2 text-ikigai-accent">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-light tracking-wider uppercase opacity-80">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
