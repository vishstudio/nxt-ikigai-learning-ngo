"use client";

import { motion } from 'motion/react';
import Image from 'next/image';
import { Button } from '@/components/Button';

export function StudentsSection() {
  return (
    <section id="students" className="py-24 bg-white scroll-mt-20" aria-labelledby="students-title">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-7xl mx-auto px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="uppercase tracking-[0.2em] text-xs font-bold text-ikigai-accent mb-8 block">For Students</span>
            <h2 id="students-title" className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 leading-tight text-ikigai-dark">
              Need help with your education? We&apos;re here for you.
            </h2>

            <div className="space-y-6 text-lg text-ikigai-muted font-light leading-relaxed mb-8">
              <p>
                Ikigai exists to support students who face financial hardship and cannot access private tuition. If you&apos;re struggling with schoolwork, behind in class, or need extra guidance, our volunteer teachers provide free, one-on-one and small-group tutoring.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-ikigai-muted">
                <li>Free tutoring across core subjects (math, English, science)</li>
                <li>Flexible schedules: after-school and weekend sessions</li>
                <li>Mentoring, exam prep, and confidence-building support</li>
              </ul>
            </div>

            <div className="flex gap-4">
              <Button href="#contact" variant="primary">Get Help</Button>
              <Button href="#volunteers" variant="ghost">Volunteer</Button>
            </div>
          </div>

          <div className="relative h-72 lg:h-[420px] w-full overflow-hidden rounded-xl shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1400&auto=format&fit=crop"
              alt="Student receiving tutoring"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
