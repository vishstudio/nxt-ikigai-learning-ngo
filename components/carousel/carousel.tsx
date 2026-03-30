"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  autoScroll?: boolean;
  itemsPerPage?: { mobile: number; tablet: number; desktop: number };
}

export default function Carousel<T>({
  items,
  renderItem,
  autoScroll = false,
  itemsPerPage = { mobile: 1, tablet: 2, desktop: 4 }
}: CarouselProps<T>) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (typeof window === 'undefined') return;
      if (window.innerWidth >= 1024) setVisible(itemsPerPage.desktop);
      else if (window.innerWidth >= 768) setVisible(itemsPerPage.tablet);
      else setVisible(itemsPerPage.mobile);
    };

    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [itemsPerPage]);

  // Optional autoplay
  useEffect(() => {
    if (!autoScroll || isPaused) return;
    const id = setInterval(() => {
      if (!ref.current) return;
      const { scrollLeft, clientWidth } = ref.current;
      const card = clientWidth / visible;
      ref.current.scrollBy({ left: Math.max(1, Math.round(card)), behavior: 'smooth' });
    }, 4000);
    return () => clearInterval(id);
  }, [autoScroll, isPaused, visible]);

  const scroll = (dir: 'left' | 'right') => {
    if (!ref.current) return;
    const { clientWidth } = ref.current;
    if (dir === 'right') ref.current.scrollBy({ left: clientWidth, behavior: 'smooth' });
    else ref.current.scrollBy({ left: -clientWidth, behavior: 'smooth' });
  };

  const getWidthClass = () => {
    // simple calculation to divide width by visible count
    const m = itemsPerPage.mobile === 1 ? 'min-w-full' : `min-w-[calc(${100 / itemsPerPage.mobile}% - 0.75rem)]`;
    const t = itemsPerPage.tablet === 1 ? 'md:min-w-full' : `md:min-w-[calc(${100 / itemsPerPage.tablet}% - 1rem)]`;
    const d = itemsPerPage.desktop === 1 ? 'lg:min-w-full' : `lg:min-w-[calc(${100 / itemsPerPage.desktop}% - 1rem)]`;
    return `${m} ${t} ${d}`;
  };

  return (
    <div className="relative group" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      <div ref={ref} className="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory -mx-6 px-6 lg:-mx-8 lg:px-8">
        {items.map((it, i) => (
          <div key={i} className={`${getWidthClass()} flex-shrink-0 snap-start`}>
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.05 }}>
              {renderItem(it, i)}
            </motion.div>
          </div>
        ))}
      </div>

      <div className="absolute -bottom-4 left-0 right-0 flex justify-between items-center px-4 md:px-0">
        <div className="flex items-center gap-4">
          <button aria-label="Prev" onClick={() => scroll('left')} className="w-12 h-12 rounded-full border border-ikigai-dark/10 bg-white flex items-center justify-center shadow-sm hover:brightness-105 focus:outline-none">
            <ChevronLeft size={18} />
          </button>
          <button aria-label="Next" onClick={() => scroll('right')} className="w-12 h-12 rounded-full border border-ikigai-dark/10 bg-white flex items-center justify-center shadow-sm hover:brightness-105 focus:outline-none">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
