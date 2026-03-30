"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Heart } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/Button';
import { primaryCta, secondaryCta } from './SiteConfig';

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.2]);

  return (
    <section id="home" ref={containerRef} className="pt-32 pb-20 min-h-screen flex items-center overflow-hidden bg-ikigai-bg" aria-labelledby="hero-title">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full">
          <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} className="z-10">
            <h1 id="hero-title" className="text-6xl md:text-[7rem] lg:text-[8rem] xl:text-[9rem] font-serif leading-[0.8] text-ikigai-dark mb-10 tracking-tighter">Nurturing <br /><span className="italic text-ikigai-accent">potential,</span><br />one child<br />at a time.</h1>
            <p className="text-lg md:text-xl text-ikigai-muted font-light max-w-lg mb-14 leading-relaxed">We provide free, high-quality education to children facing financial hardships. Because every child deserves the chance to find their purpose.</p>
            <div className="flex flex-wrap gap-6 items-center">
              <Button href={primaryCta.href} size="lg">{primaryCta.text}</Button>
              <Button href="#story" variant="link" icon={<ArrowRight size={16} />}>{secondaryCta.text}</Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }} className="relative h-[600px] md:h-[80vh] w-full arch-image overflow-hidden shadow-2xl group">
            <motion.div style={{ y, scale }} className="absolute inset-0">
              <Image src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" alt="A group of diverse children smiling together, representing the community we serve" fill className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700" referrerPolicy="no-referrer" priority />
            </motion.div>
            <div className="absolute inset-0 bg-ikigai-dark/5 mix-blend-multiply pointer-events-none"></div>
            <div className="absolute bottom-12 left-12 right-12 text-white z-10 hidden xl:block">
              <p className="text-[10px] uppercase tracking-[0.4em] font-bold mb-2 opacity-60">Impact Report 2026</p>
              <p className="text-2xl font-serif italic">&quot;Education is the most powerful weapon which you can use to change the world.&quot;</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
