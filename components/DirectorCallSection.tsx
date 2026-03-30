"use client";

import { useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/Button';

export default function DirectorCallSection() {
  const [isBooking, setIsBooking] = useState(false);

  return (
    <section id="director-call" className="py-32 bg-ikigai-dark text-ikigai-bg relative scroll-mt-20" aria-labelledby="director-call-title">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: "easeOut" }} className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="uppercase tracking-[0.2em] text-xs font-bold text-ikigai-accent mb-6 block">A Personal Invitation</span>
          <h2 id="director-call-title" className="text-4xl md:text-6xl lg:text-7xl font-serif italic mb-12 leading-tight max-w-4xl mx-auto text-ikigai-bg/90">&quot;I started Ikigai because I saw too much brilliance lost to poverty.&quot;</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <p className="text-xl font-serif text-ikigai-bg/80 leading-relaxed mb-6 italic">Dear friend,</p>
            <p className="text-lg font-light text-ikigai-bg/70 leading-relaxed mb-6">We aren&apos;t just teaching math or reading; we are providing a safe space where children feel valued, heard, and empowered to dream beyond their circumstances.</p>
            <p className="text-lg font-light text-ikigai-bg/70 leading-relaxed mb-12">I invite you to a personal conversation. Whether you want to volunteer, donate, or simply learn more about our mission, I want to hear from you. Let&apos;s discuss how we can change lives together.</p>
            <div className="flex items-center gap-6">
              <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }} className="w-20 h-24 rounded-square-image overflow-hidden relative border border-ikigai-bg/20 shadow-lg">
                <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" alt="Sarah Jenkins, Executive Director of Ikigai" fill className="object-cover" referrerPolicy="no-referrer" />
              </motion.div>
              <div>
                <p className="font-serif text-3xl text-ikigai-bg">Sarah Jenkins</p>
                <p className="text-xs text-ikigai-accent uppercase tracking-[0.2em] mt-1">Executive Director</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-ikigai-bg text-ikigai-dark p-10 md:p-12 rounded-[2rem] shadow-2xl relative transform lg:translate-y-16">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-ikigai-accent rounded-full flex items-center justify-center text-white transform rotate-12 shadow-lg"><span className="font-serif italic text-xl">Let&apos;s talk</span></div>
            <h3 className="text-3xl font-serif mb-4">Book a Discovery Call</h3>
            <p className="text-ikigai-muted font-light mb-10 leading-relaxed">Schedule a 15-minute conversation directly with Sarah to explore partnership and volunteer opportunities.</p>

            <div className="space-y-6">
              <Button onClick={() => setIsBooking(true)} className="w-full py-6 px-10 flex justify-between items-center">
                <div className="flex flex-col items-start">
                  <span className="uppercase tracking-[0.3em] text-[10px] font-black opacity-80 mb-1">Primary Action</span>
                  <span className="uppercase tracking-[0.2em] text-sm font-black">{isBooking ? 'Booking System Loading...' : 'Find a Time'}</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors"><ArrowRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" aria-hidden="true" /></div>
              </Button>
              {isBooking && <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center text-xs text-ikigai-accent font-bold">Our booking system is currently being updated. Please email Sarah directly below.</motion.p>}

              <p className="text-center text-sm text-ikigai-muted pt-4">Or email directly at <br /><a href="mailto:sarah@ikigaingo.org" className="text-ikigai-accent hover:underline font-black mt-2 inline-block tracking-wider">sarah@ikigaingo.org</a></p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
