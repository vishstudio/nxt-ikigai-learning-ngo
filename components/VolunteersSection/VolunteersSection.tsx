"use client";

import { motion } from 'motion/react';
import VolunteerCard from '../volunteer-card/volunteer-card';
import { Carousel } from '@/components/Carousel';

export function VolunteersSection() {
  const volunteers = [
    {
      name: 'Aisha Kumar',
      role: 'Math Tutor',
      bio: 'Leads weekly math clubs for primary students, focusing on confidence-building and problem solving.',
      img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop'
    },
    {
      name: 'Ravi Patel',
      role: 'English & Literacy Coach',
      bio: 'Works on reading programmes and after-school reading circles to boost literacy.',
      img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop'
    },
    {
      name: 'Maya Fernandez',
      role: 'Creative Arts Teacher',
      bio: 'Runs art and theatre activities that help students express themselves and build social skills.',
      img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1000&auto=format&fit=crop'
    },
    { name: 'Sana Begum', role: 'Science Mentor', img: 'https://images.unsplash.com/photo-1545996124-1f6a73b3d6d6?q=80&w=1000&auto=format&fit=crop', href: 'https://www.linkedin.com/in/sana-begum' },
    { name: 'Deepak Rao', role: 'Coding Instructor', img: 'https://images.unsplash.com/photo-1541781774459-bb1e5d0f0f6c?q=80&w=1000&auto=format&fit=crop', href: 'https://www.linkedin.com/in/deepak-rao' },
    { name: 'Lina Gomez', role: 'Hindi Teacher', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1000&auto=format&fit=crop', href: 'https://www.linkedin.com/in/lina-gomez' },
    { name: 'Omar Ali', role: 'Sports Coach', img: 'https://images.unsplash.com/photo-1524503033411-c9566986fc8f?q=80&w=1000&auto=format&fit=crop', href: 'https://www.linkedin.com/in/omar-ali' },
    { name: 'Nisha Verma', role: 'Mentor', img: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1000&auto=format&fit=crop', href: 'https://www.linkedin.com/in/nisha-verma' },
    {
      name: 'Aisha Smith',
      role: 'Math Tutor',
      bio: 'Leads weekly math clubs for primary students, focusing on confidence-building and problem solving.',
      img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop'
    }
  ];

  return (
    <section id="volunteers" className="py-32 scroll-mt-20" aria-labelledby="volunteers-title" style={{ backgroundColor: '#f0efea' }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 lg:px-8"
      >
        <div className="text-center mb-20">
          <span className="uppercase tracking-[0.2em] text-xs font-bold text-ikigai-accent mb-6 block">Our People</span>
          <h2 id="volunteers-title" className="text-5xl md:text-6xl font-serif text-ikigai-dark">Volunteers & Teachers</h2>
          <p className="text-ikigai-muted font-light mt-6 max-w-2xl mx-auto">Our programmes are supported by talented volunteers and teachers who give their time and skills to help students learn, grow and thrive.</p>
        </div>

        {/* Carousel for mobile & tablet */}
        <div className="block lg:hidden">
          <Carousel
            items={volunteers}
            itemsPerPage={{ mobile: 1, tablet: 3, desktop: 3 }}
            renderItem={(v: any, i: number) => (
              <div className="px-2">
                <VolunteerCard key={v.name} index={i} name={v.name} role={v.role} img={v.img} />
              </div>
            )}
          />
        </div>

        {/* Grid for desktop */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {volunteers.map((v, i) => (
            <VolunteerCard key={v.name} index={i} name={v.name} role={v.role} img={v.img} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
