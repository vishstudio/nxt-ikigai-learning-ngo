"use client";

import { motion } from 'motion/react';
import { Heart, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/Button';

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-ikigai-surface scroll-mt-20 border-t border-ikigai-dark/5" aria-labelledby="contact-title">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: "easeOut" }} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <span className="uppercase tracking-[0.2em] text-xs font-bold text-ikigai-accent mb-6 block">Get in Touch</span>
            <h2 id="contact-title" className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 text-ikigai-dark">Ready to make a difference?</h2>
            <p className="text-lg text-ikigai-muted font-light leading-relaxed mb-12 max-w-md">We are always looking for partners, volunteers, and students who need our help. Reach out to us through any of the channels below.</p>

            <div className="space-y-10">
              <div>
                <p className="uppercase tracking-[0.15em] text-xs font-bold text-ikigai-dark mb-3">Email</p>
                <a href="mailto:hello@ikigaingo.org" className="text-2xl font-serif text-ikigai-accent hover:text-ikigai-accent-hover transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ikigai-accent">hello@ikigaingo.org</a>
              </div>
              <div>
                <p className="uppercase tracking-[0.15em] text-xs font-bold text-ikigai-dark mb-3">Phone</p>
                <p className="text-2xl font-serif text-ikigai-muted">+1 (555) 123-4567</p>
              </div>
              <div>
                <p className="uppercase tracking-[0.15em] text-xs font-bold text-ikigai-dark mb-3">Office</p>
                <p className="text-xl font-serif text-ikigai-muted leading-relaxed">123 Purpose Way<br />San Francisco, CA 94103</p>
              </div>
            </div>
          </div>

          <div className="bg-ikigai-bg p-10 md:p-14 soft-image shadow-xl relative border border-ikigai-dark/5 text-center">
            <div className="w-20 h-20 bg-ikigai-surface rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Heart className="text-ikigai-accent w-10 h-10" aria-hidden="true" />
            </div>
            <h3 className="text-3xl font-serif mb-6 text-ikigai-dark">Book a Call</h3>
            <p className="text-ikigai-muted font-light mb-10 leading-relaxed">The fastest way to connect is to schedule a brief call with our director. We can discuss how to best support your needs or your contribution.</p>
            <Button href="#director-call" className="w-full py-6 gap-4" icon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}>Schedule Your Call</Button>
            <p className="text-xs text-ikigai-muted mt-8 uppercase tracking-widest">No forms. Just a real conversation.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
