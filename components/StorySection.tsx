"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';

export default function StorySection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.2]);

  return (
    <section id="story" ref={containerRef} className="py-32 bg-ikigai-surface scroll-mt-20" aria-labelledby="story-title">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: "easeOut" }} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          <motion.div initial={{ opacity: 0, scale: 0.95, x: -20 }} whileInView={{ opacity: 1, scale: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut" }} className="relative h-[600px] lg:h-[800px] w-full arch-image overflow-hidden shadow-xl">
            <motion.div style={{ y, scale }} className="absolute inset-0">
              <Image src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1972&auto=format&fit=crop" alt="A young student focused on reading a book, symbolizing the power of education" fill className="object-cover" referrerPolicy="no-referrer" />
            </motion.div>
          </motion.div>

          <div>
            <span className="uppercase tracking-[0.2em] text-xs font-bold text-ikigai-accent mb-8 block">Our Mission</span>
            <h2 id="story-title" className="text-4xl md:text-5xl lg:text-6xl font-serif mb-10 leading-[1.1] text-ikigai-dark">Education is not a privilege. It is a fundamental right.</h2>
            <div className="space-y-6 text-lg md:text-xl text-ikigai-muted font-light leading-relaxed mb-16">
              <p>IKIGAI has the aim to help students who are struggling financially and cannot afford private tuitions. We believe that every student, at any age, deserves access to quality learning.</p>
              <p className="italic">&quot;However, if any student from any background approaches us, our volunteers do their best to help.&quot;</p>
              <p>We connect these students with passionate volunteer teachers, creating a sanctuary for learning, growth, and boundless possibility.</p>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-12 border-t border-ikigai-dark/10 pt-12">
              <div>
                <p className="text-5xl md:text-6xl font-serif text-ikigai-accent mb-3">500+</p>
                <p className="text-xs uppercase tracking-[0.15em] text-ikigai-muted font-medium">Students Reached</p>
              </div>
              <div>
                <p className="text-5xl md:text-6xl font-serif text-ikigai-accent mb-3">100%</p>
                <p className="text-xs uppercase tracking-[0.15em] text-ikigai-muted font-medium">Free Access</p>
              </div>
              <div>
                <p className="text-5xl md:text-6xl font-serif text-ikigai-accent mb-3">50+</p>
                <p className="text-xs uppercase tracking-[0.15em] text-ikigai-muted font-medium">Volunteer Teachers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 pt-32 border-t border-ikigai-dark/10">
          <div className="max-w-4xl mx-auto">
            <div className="relative space-y-24">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-ikigai-dark/10 -translate-x-1/2 hidden md:block" />

              {[{ year: '2018', title: 'The Spark', description: 'IKIGAI founded with 5 passionate volunteers in a small community center.' }, { year: '2020', title: 'Digital Shift', description: 'Launched online tutoring during the pandemic, reaching children in remote areas.' }, { year: '2022', title: 'Growth', description: 'Expanded to 10 communities, supporting 300+ students with holistic care.' }, { year: '2024', title: 'Today', description: 'A thriving community of 500+ students and 50+ dedicated volunteer teachers.' }].map((milestone, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, delay: index * 0.1 }} className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="w-full md:w-1/2 px-4 md:px-12">
                    <div className={`p-8 bg-white rounded-square-image shadow-sm hover:shadow-md transition-shadow duration-500 border border-ikigai-dark/5 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      <span className="text-ikigai-accent font-serif text-3xl font-bold block mb-2">{milestone.year}</span>
                      <h3 className="text-xl font-serif mb-3 text-ikigai-dark">{milestone.title}</h3>
                      <p className="text-ikigai-muted font-light leading-relaxed text-base">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-ikigai-accent border-4 border-ikigai-bg -translate-x-1/2 z-10 hidden md:block shadow-sm" />
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
