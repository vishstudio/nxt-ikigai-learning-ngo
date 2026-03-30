"use client";

import { motion } from 'motion/react';
import { Carousel } from '@/components/Carousel';
import Image from 'next/image';

export function SuccessStoriesSection() {
  const stories = [
    {
      name: "Aarav's Journey",
      description: "Once struggling with basic literacy, Aarav now leads his school's debate team and dreams of becoming a lawyer.",
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=2069&auto=format&fit=crop",
      tag: "Academic Excellence"
    },
    {
      name: "Maya's Breakthrough",
      description: "Maya discovered her passion for coding through our free workshops. She recently won a regional tech competition.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
      tag: "Technology"
    },
    {
      name: "Leo's New Chapter",
      description: "After joining our art program, Leo found a way to express his emotions and has now been accepted into a prestigious art academy.",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop",
      tag: "Creative Arts"
    },
    {
      name: "Priya's Resilience",
      description: "Priya overcame significant family challenges to complete her secondary education and is now pursuing a nursing degree.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
      tag: "Higher Education"
    },
    {
      name: "Karan's Innovation",
      description: "Karan's interest in mechanics led him to develop a low-cost irrigation solution for his village's farmers.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop",
      tag: "Innovation"
    }
  ];

  return (
    <section id="success-stories" className="py-32 bg-ikigai-bg scroll-mt-20" aria-labelledby="success-stories-title">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 lg:px-8"
      >
        <div className="text-center mb-24">
          <span className="uppercase tracking-[0.2em] text-xs font-bold text-ikigai-accent mb-6 block">Our Impact</span>
          <h2 id="success-stories-title" className="text-5xl md:text-6xl font-serif text-ikigai-dark">Success Stories</h2>
          <p className="text-ikigai-muted font-light mt-6 max-w-2xl mx-auto">
            Witness the transformation of our students as they overcome obstacles and reach for their dreams.
          </p>
        </div>

        <Carousel 
          items={stories}
          itemsPerPage={{ mobile: 1, tablet: 3, desktop: 4 }}
          renderItem={(story, index) => (
            <div className="group h-full flex flex-col">
              <div className="relative aspect-square w-full rounded-square-image overflow-hidden mb-8 shadow-lg group-hover:shadow-2xl transition-all duration-700 ease-out">
                <motion.div 
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image 
                    src={story.image} 
                    alt={`Success story: ${story.name}`} 
                    fill 
                    className="object-cover group-hover:scale-105 group-hover:brightness-[0.85] transition-all duration-1000 ease-out" 
                    referrerPolicy="no-referrer" 
                  />
                </motion.div>
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1 rounded-full shadow-sm transform group-hover:translate-x-1 transition-transform duration-500">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-ikigai-accent">{story.tag}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ikigai-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                   <p className="text-white text-sm font-light leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {story.description}
                  </p>
                </div>
              </div>
              <h3 className="text-xl font-serif mb-4 text-ikigai-dark group-hover:text-ikigai-accent transition-colors mt-auto">{story.name}</h3>
            </div>
          )}
        />
      </motion.div>
    </section>
  );
}
