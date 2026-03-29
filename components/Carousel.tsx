"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  autoScroll?: boolean;
  itemsPerPage?: { mobile: number; tablet: number; desktop: number };
}

export function Carousel<T>({ 
  items, 
  renderItem, 
  autoScroll = true,
  itemsPerPage = { mobile: 1, tablet: 2, desktop: 4 }
}: CarouselProps<T>) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(1);

  useEffect(() => {
    const update = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth >= 1024) setVisibleItems(itemsPerPage.desktop);
        else if (window.innerWidth >= 768) setVisibleItems(itemsPerPage.tablet);
        else setVisibleItems(itemsPerPage.mobile);
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [itemsPerPage]);

  const totalSlides = Math.ceil(items.length / visibleItems);
  const currentSlide = Math.min(Math.round(activeIndex / visibleItems), totalSlides - 1);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth } = scrollRef.current;
        const itemWidth = scrollWidth / items.length;
        const index = Math.round(scrollLeft / itemWidth);
        setActiveIndex(index);
      }
    };

    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, [items.length]);

  useEffect(() => {
    if (!autoScroll || isPaused) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        const itemWidth = scrollWidth / items.length;
        
        if (scrollLeft >= maxScroll - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: itemWidth * visibleItems, behavior: 'smooth' });
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [autoScroll, isPaused, items.length, visibleItems]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;

      if (direction === 'right') {
        if (scrollLeft >= maxScroll - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: clientWidth, behavior: 'smooth' });
        }
      } else {
        if (scrollLeft <= 10) {
          scrollRef.current.scrollTo({ left: maxScroll, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: -clientWidth, behavior: 'smooth' });
        }
      }
    }
  };

  const getWidthClass = () => {
    const { mobile, tablet, desktop } = itemsPerPage;
    
    // Calculate precise offsets for responsive gaps
    const getOffset = (count: number, gapRem: number) => {
      if (count <= 1) return '0px';
      return `${((count - 1) * gapRem) / count}rem`;
    };

    const m = mobile === 1 ? 'min-w-full' : `min-w-[calc(${100/mobile}%-${getOffset(mobile, 1.5)})]`;
    const t = tablet === 1 ? 'md:min-w-full' : `md:min-w-[calc(${100/tablet}%-${getOffset(tablet, 2)})]`;
    const d = desktop === 1 ? 'lg:min-w-full' : `lg:min-w-[calc(${100/desktop}%-${getOffset(desktop, 2)})]`;
    
    return `${m} ${t} ${d}`;
  };

  return (
    <div className="relative group/carousel" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto pb-24 hide-scrollbar snap-x snap-mandatory -mx-6 px-6 lg:-mx-8 lg:px-8 gap-6 md:gap-8"
      >
        {items.map((item, index) => (
          <div 
            key={index}
            className={`${getWidthClass()} flex-shrink-0 snap-start h-full`}
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 1, 
                delay: (index % visibleItems) * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -8, transition: { duration: 0.4, ease: "easeOut" } }}
              className="h-full"
            >
              {renderItem(item, index)}
            </motion.div>
          </div>
        ))}
      </div>
      
      {/* Navigation Controls */}
      <div className="absolute -bottom-4 left-0 right-0 flex flex-col md:flex-row justify-between items-center gap-8 px-4 md:px-0">
        <div className="flex items-center gap-8">
          <div className="flex gap-3">
            <button 
              onClick={() => scroll('left')}
              className="w-14 h-14 rounded-full border border-ikigai-dark/10 flex items-center justify-center hover:bg-ikigai-dark hover:text-white transition-all duration-300 active:scale-90 shadow-sm hover:shadow-md"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-14 h-14 rounded-full border border-ikigai-dark/10 flex items-center justify-center hover:bg-ikigai-dark hover:text-white transition-all duration-300 active:scale-90 shadow-sm hover:shadow-md"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Progress Indicator */}
          <div className="hidden sm:flex items-center gap-4">
            <span className="text-[10px] font-black tracking-[0.3em] text-ikigai-dark uppercase w-6">
              {String(currentSlide + 1).padStart(2, '0')}
            </span>
            <div className="w-24 h-[1px] bg-ikigai-dark/10 relative overflow-hidden">
              <motion.div 
                className="absolute inset-0 bg-ikigai-accent origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: (currentSlide + 1) / totalSlides }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
            <span className="text-[10px] font-black tracking-[0.3em] text-ikigai-dark uppercase opacity-30 w-6">
              {String(totalSlides).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
