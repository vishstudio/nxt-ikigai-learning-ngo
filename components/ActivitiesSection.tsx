"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { Maximize2 } from 'lucide-react';
import { Button } from '@/components/Button';

export default function ActivitiesSection() {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<null | { title: string; image: string; description: string; category: string }>(null);

  const categories = ['All', 'Education', 'Arts', 'Community', 'Technology', 'Wellness'];

  const activities = [
    { title: 'Interactive Classrooms', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop', description: 'Our volunteers use modern teaching methods to keep students engaged and curious.', category: 'Education' },
    { title: 'Art & Expression', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop', description: 'Creative workshops help children express their emotions and discover hidden talents.', category: 'Arts' },
    { title: 'Community Outreach', image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop', description: 'We work directly with families to understand their needs and provide holistic support.', category: 'Community' },
    { title: 'Tech Literacy', image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop', description: 'Bridging the digital divide with free access to computers and coding workshops.', category: 'Technology' },
    { title: 'Health & Wellness', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2040&auto=format&fit=crop', description: 'Regular health checkups and yoga sessions to ensure physical and mental well-being.', category: 'Wellness' },
    { title: 'Vocational Training', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop', description: 'Equipping older students with practical skills for future employment and independence.', category: 'Education' },
    { title: 'Science Discovery', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop', description: 'Hands-on experiments that bring scientific concepts to life for our young learners.', category: 'Education' },
    { title: 'Music & Rhythm', image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop', description: 'Exploring the power of music to build confidence and foster teamwork.', category: 'Arts' },
    { title: 'Coding for Kids', image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop', description: 'Teaching the language of the future through fun and interactive coding sessions.', category: 'Technology' },
    { title: 'Yoga & Mindfulness', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2031&auto=format&fit=crop', description: 'Helping children develop focus and emotional resilience through mindful movement.', category: 'Wellness' },
    { title: 'Food Support', image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop', description: 'Ensuring no child goes hungry by providing nutritious meals to families in need.', category: 'Community' },
    { title: 'Outdoor Sports', image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop', description: 'Building character and physical health through organized team sports and play.', category: 'Wellness' }
  ];

  const filteredActivities = filter === 'All' ? activities : activities.filter(a => a.category === filter);

  return (
    <section id="activities" className="py-32 bg-ikigai-bg scroll-mt-20" aria-labelledby="activities-title">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: "easeOut" }} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl"><span className="uppercase tracking-[0.2em] text-xs font-bold text-ikigai-accent mb-6 block">What We Do</span><h2 id="activities-title" className="text-5xl md:text-6xl font-serif text-ikigai-dark leading-tight">A glimpse into our daily <span className="italic">impact.</span></h2></div>
          <div className="flex items-center gap-4 text-ikigai-muted"><span className="text-xs uppercase tracking-widest font-bold">Activity Gallery</span></div>
        </div>

        <div className="flex flex-wrap gap-4 mb-12 border-b border-ikigai-dark/5 pb-8">
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)} className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat ? 'bg-ikigai-accent text-white shadow-md' : 'bg-white text-ikigai-muted hover:bg-ikigai-surface hover:text-ikigai-dark'}`}>{cat}</button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredActivities.map((activity) => (
              <motion.div layout key={activity.title} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4, ease: 'easeOut' }} className="group cursor-pointer" onClick={() => setSelectedImage(activity)}>
                <div className="relative aspect-square w-full rounded-square-image overflow-hidden mb-4 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <Image src={activity.image} alt={activity.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-ikigai-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"><div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white transform scale-50 group-hover:scale-100 transition-transform duration-500"><Maximize2 size={24} /></div></div>
                  <div className="absolute top-4 left-4"><span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest text-ikigai-accent rounded-full shadow-sm">{activity.category}</span></div>
                </div>
                <h3 className="text-lg font-serif text-ikigai-dark group-hover:text-ikigai-accent transition-colors">{activity.title}</h3>
                <p className="text-sm text-ikigai-muted font-light line-clamp-1 mt-1">{activity.description}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-ikigai-dark/95 backdrop-blur-sm" onClick={() => setSelectedImage(null)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} transition={{ type: 'spring', damping: 25, stiffness: 300 }} className="relative max-w-5xl w-full bg-white rounded-square-image overflow-hidden shadow-2xl flex flex-col md:flex-row" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setSelectedImage(null)} className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md flex items-center justify-center text-white transition-colors">X</button>
              <div className="relative w-full md:w-2/3 aspect-square md:aspect-auto h-[400px] md:h-[600px]"><Image src={selectedImage.image} alt={selectedImage.title} fill className="object-cover" referrerPolicy="no-referrer"/></div>
              <div className="w-full md:w-1/3 p-8 md:p-12 flex flex-col justify-center bg-white"><span className="uppercase tracking-[0.2em] text-[10px] font-bold text-ikigai-accent mb-4 block">{selectedImage.category}</span><h3 className="text-3xl md:text-4xl font-serif text-ikigai-dark mb-6 leading-tight">{selectedImage.title}</h3><p className="text-lg text-ikigai-muted font-light leading-relaxed mb-10">{selectedImage.description}</p><Button onClick={() => setSelectedImage(null)} variant="outline" className="w-full">Close Preview</Button></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
