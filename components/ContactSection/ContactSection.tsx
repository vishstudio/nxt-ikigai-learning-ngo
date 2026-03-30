"use client";

import { motion } from 'motion/react';
import { Button } from '@/components/Button';

export function ContactSection() {
  return (
    <section className="py-32 bg-ikigai-bg relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10"
      >
        <span className="uppercase tracking-[0.2em] text-xs font-bold text-ikigai-accent mb-6 block">Get Involved</span>
        <h2 className="text-5xl md:text-7xl font-serif text-ikigai-dark mb-10 leading-tight">
          Ready to make a <span className="italic">difference?</span>
        </h2>
        <p className="text-xl text-ikigai-muted font-light mb-16 max-w-2xl mx-auto leading-relaxed">
          Whether you want to volunteer your time, make a donation, or simply learn more, we welcome you to our community.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Button href="#director-call" className="py-5 px-10 text-sm">
            Volunteer With Us
          </Button>
          <Button href="#director-call" variant="outlined" className="py-5 px-10 text-sm">
            Make a Donation
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
