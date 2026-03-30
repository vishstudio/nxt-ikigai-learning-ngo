"use client";

import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { Carousel } from '@/components/Carousel';
import Image from 'next/image';

const testimonialsData = [
  {
    quote: "Ikigai didn't just give my daughter free tutoring; they gave her confidence. She smiles when she talks about school now.",
    author: "Maria S. — Mother"
  },
  {
    quote: "Volunteering here is the highlight of my week. Seeing the 'aha' moment in a child's eyes is worth more than anything.",
    author: "David C. — Volunteer Teacher"
  },
  {
    quote: "The support from Ikigai has been life-changing for our family. My son is now excited about his future.",
    author: "Ahmed K. — Father"
  },
  {
    quote: "Teaching these children is a privilege. Their resilience and eagerness to learn inspire me every day.",
    author: "Elena R. — Volunteer"
  },
  {
    quote: "I never thought I could learn coding, but the mentors here made it so simple and fun. I feel ready for the world.",
    author: "Sanjay M. — Student"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-32 bg-white scroll-mt-20 overflow-hidden" aria-labelledby="testimonials-title">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-4 sticky top-32">
            <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-ikigai-accent mb-6 block">Voices of Hope</span>
            <h2 id="testimonials-title" className="text-6xl md:text-7xl font-serif text-ikigai-dark leading-[0.9] mb-8">The lives <br/> we <span className="italic">touch.</span></h2>
            <p className="text-ikigai-muted font-light text-lg leading-relaxed max-w-xs">Direct stories from the families, volunteers, and mentors who make our mission possible every single day.</p>

            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-ikigai-surface overflow-hidden relative">
                    <Image src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" fill className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-ikigai-muted">500+ Lives Impacted</span>
            </div>
          </motion.div>

          <div className="lg:col-span-8">
            <Carousel items={testimonialsData} itemsPerPage={{ mobile:1, tablet:2, desktop:2 }} renderItem={(t:any, index:number) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: (index%4)*0.08 }} className={`p-10 rounded-square-image border border-ikigai-dark/5 flex flex-col justify-between transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${index===0?'bg-ikigai-surface':'bg-white'}`}>
                <div>
                  <Quote className="w-8 h-8 text-ikigai-accent/20 mb-6" />
                  <p className={`font-serif italic text-ikigai-dark leading-snug mb-8 ${index===0? 'text-2xl md:text-3xl' : 'text-xl'}`}>&quot;{t.quote}&quot;</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-[1px] bg-ikigai-accent/30" />
                  <span className="uppercase tracking-[0.2em] text-[9px] font-black text-ikigai-accent">{t.author}</span>
                </div>
              </motion.div>
            )} />
          </div>
        </div>
      </div>
    </section>
  );
}
