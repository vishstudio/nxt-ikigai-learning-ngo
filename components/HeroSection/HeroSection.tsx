"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Button } from '@/components/Button';
import Image from 'next/image';
import siteData from '../../data/site-data.json';

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.2]);

  function DiscoverWrapper() {
    return (
      <div className="inline-block">
        <Button href="#director-call" variant="link" icon={
          <motion.span
            initial={false}
            animate={{ x: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ x: 12, transition: { duration: 0.28, ease: 'easeOut' } }}
            className="material-symbols-outlined text-[16px]"
          >
            arrow_forward
          </motion.span>
        }>
          Discover our mission
        </Button>
      </div>
    );
  }

  return (
    <section id="home" ref={containerRef} className="pt-32 pb-20 min-h-screen flex items-center overflow-hidden bg-ikigai-bg" aria-labelledby="hero-title">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="z-10"
          >
            <h1 id="hero-title" className="text-6xl md:text-[7rem] lg:text-[8rem] xl:text-[9rem] font-serif leading-[0.8] text-ikigai-dark mb-10 tracking-tighter">
              Nurturing <br />
              <span className="italic text-ikigai-accent">potential,</span><br />
              one child<br />
              at a time.
            </h1>

            <p className="text-lg md:text-xl text-ikigai-muted font-light max-w-lg mb-14 leading-relaxed">
              We provide free, high-quality education to children facing financial hardships. Because every child deserves the chance to find their purpose.
            </p>

            <div className="flex flex-wrap gap-10 items-center">
              <Button href={(siteData as any).phone.href}>
                Book a Call
              </Button>

              {/* Discover button with animated arrow */}
              <DiscoverWrapper />
            </div>
          </motion.div>

          {/* Discover button wrapper component */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[500px] md:h-[70vh] w-full arch-image overflow-hidden shadow-2xl group"
          >
            <motion.div style={{ y, scale }} className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
                alt="A group of diverse children smiling together, representing the community we serve"
                fill
                className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                referrerPolicy="no-referrer"
                priority
              />
            </motion.div>

            <div className="absolute inset-0 bg-ikigai-dark/5 mix-blend-multiply pointer-events-none"></div>

            <div className="absolute bottom-0 left-0 right-0 p-[1.5rem] bg-black/60 text-white z-10 hidden xl:block">
              <p className="text-2xl font-serif italic">&quot;Education is the most powerful weapon which you can use to change the world.&quot;</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
