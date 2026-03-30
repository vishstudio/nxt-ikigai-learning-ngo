"use client";

import { motion } from 'motion/react';
import { impactStats } from '@/lib/data';
import { useEffect, useRef, useState } from 'react';

function CountUpNumber({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [display, setDisplay] = useState<string>(value);
  const started = useRef(false);

  useEffect(() => {
    const raw = value;
    const match = raw.match(/[0-9,]+/);
    if (!match) return;
    const num = parseInt(match[0].replace(/,/g, ''), 10);
    const suffix = raw.replace(match[0], '');

    const el = ref.current;
    if (!el) return;

    const run = () => {
      if (started.current) return;
      started.current = true;
      const duration = 1400;
      const start = performance.now();

      const step = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - t, 3);
        const current = Math.round(num * eased);
        setDisplay(current.toLocaleString() + suffix);
        if (t < 1) requestAnimationFrame(step);
        else {
          // ensure final format
          setDisplay(num.toLocaleString() + suffix);
        }
      };

      requestAnimationFrame(step);
    };

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          run();
        }
      });
    }, { threshold: 0.4 });

    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <div ref={ref} className={className}>
      {display}
    </div>
  );
}

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
                <CountUpNumber value={stat.value} />
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
