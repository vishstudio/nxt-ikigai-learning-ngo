"use client";

import { motion } from 'motion/react';
import VolunteerCard from '../volunteer-card/volunteer-card';
import { Carousel } from '@/components/Carousel';

export function VolunteersSection() {
  const volunteers = [
    {
      name: 'Charvi Sookha',
      img: '/assets/charvi.jpeg',
      href: 'https://www.linkedin.com/in/charvi-sookha-32206a332/'
    },
    {
      name: 'Janesh Luximan',
      img: '/assets/janesh.jpeg',
      href: 'https://www.linkedin.com/in/janesh-luximan/'
    },
    {
      name: 'Ayesha Bhudookan',
      img: '/assets/ayesha.jpeg',
      href: 'https://www.linkedin.com/in/ayesha-bhudookan-4880711a1/'
    },
    {
      name: 'Chitra Gomanee',
      href: 'https://www.linkedin.com/in/chitra-gomanee-901508158?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app '
    },
    {
      name: 'Chounee Dussaram',
      href: '#'
    },
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
          <p className="text-ikigai-muted font-light mt-6 max-w-2xl mx-auto">
            Our programmes are supported by talented volunteers and teachers who give their time and skills to help students learn, grow and thrive. <br />
            Here are some of our volunteers.
          </p>
        </div>

        {/* Carousel for mobile & tablet */}
        <div className="block lg:hidden">
          <Carousel
            items={volunteers}
            itemsPerPage={{ mobile: 1, tablet: 3, desktop: 3 }}
            renderItem={(v: any, i: number) => (
              <div className="px-2">
                <VolunteerCard key={v.name} index={i} name={v.name} role={v.role} img={v.img} href={v.href} />
              </div>
            )}
          />
        </div>

        {/* Grid for desktop */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {volunteers.map((v, i) => (
            <VolunteerCard key={v.name} index={i} name={v.name} img={v.img} href={v.href} />
          ))}
        </div>
      </motion.div>
    </section >
  );
}
