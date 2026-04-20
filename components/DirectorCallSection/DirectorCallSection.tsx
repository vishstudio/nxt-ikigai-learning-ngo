"use client";

import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/Button';
import siteData from '../../data/site-data.json';
import Image from 'next/image';
import { useBasePath } from '@/lib/useBasePath';

export function DirectorCallSection() {
  const basePath = useBasePath();

  return (
    <section id="director-call" className="py-32 bg-ikigai-dark text-ikigai-bg relative scroll-mt-20" aria-labelledby="director-call-title">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10"
      >
        <div className="text-center mb-20">
          <span className="uppercase tracking-[0.2em] text-xs font-bold text-ikigai-accent mb-6 block">A Personal Invitation</span>
          <h2 id="director-call-title" className="text-4xl md:text-6xl lg:text-7xl font-serif italic mb-12 leading-tight max-w-4xl mx-auto text-ikigai-bg/90">
            &quot;We started Ikigai because we saw too much brilliance lost to poverty.&quot;
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <p className="text-xl font-serif text-ikigai-bg/80 leading-relaxed mb-6 italic">
              Dear friend,
            </p>

            <p className="text-lg font-light text-ikigai-bg/70 leading-relaxed mb-6">
              We aren&apos;t just teaching math or reading; we are providing a safe space where children and teenagers feel valued, heard, and empowered to dream beyond their circumstances.
            </p>

            <p className="text-lg font-light text-ikigai-bg/70 leading-relaxed mb-12">
              At Ikigai, we believe that everyone deserves the opportunity to discover their purpose.
              Inspired by the Japanese concept of “ikigai” — meaning a reason for being — our mission is to guide individuals, especially young people, toward meaningful personal and professional paths.
            </p>

            <p className="text-lg font-light text-ikigai-bg/70 leading-relaxed mb-12">
              Due to COVID, the tuition has been online (through WhatsApp, Zoom, Microsoft
              Teams, etc). And since it worked we continued it online itself…
            </p>

            <p className="text-lg font-light text-ikigai-bg/70 leading-relaxed mb-12">
              I invite you to a personal conversation. Whether you want to volunteer, donate, or simply learn more about our mission, I want to hear from you. Let&apos;s discuss how we can change lives together.
            </p>

            <div className="flex flex-wrap items-center gap-8">
              <div className="flex items-center gap-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-20 h-20 rounded-full overflow-hidden relative border border-ikigai-bg/20 shadow-lg"
                >
                  <Image
                    src={basePath + "/assets/janesh.jpeg"}
                    alt="Janesh Luximan, Executive Director of Ikigai"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                <div>
                  <p className="font-serif text-3xl text-ikigai-bg">Janesh Luximan</p>
                  <p className="text-xs text-ikigai-accent uppercase tracking-[0.2em] mt-1">Founder</p>
                </div>
              </div>

              <div className="w-px h-14 bg-ikigai-bg/20 hidden sm:block" />

              <div className="flex items-center gap-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                  className="w-20 h-20 rounded-full overflow-hidden relative border border-ikigai-bg/20 shadow-lg"
                >
                  <Image
                    src={basePath + "/assets/ayesha.jpeg"}
                    alt="Co-founder of Ikigai"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                <div>
                  <p className="font-serif text-3xl text-ikigai-bg">Ayesha Bhudookan</p>
                  <p className="text-xs text-ikigai-accent uppercase tracking-[0.2em] mt-1">Co-Founder</p>
                </div>
              </div>
            </div>
          </div>

          {/* The Booking Card */}
          <div className="lg:col-span-5 bg-ikigai-bg text-ikigai-dark p-10 md:p-12 rounded-[2rem] shadow-2xl relative transform lg:translate-y-16">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-black rounded-full hidden md:flex items-center justify-center text-white transform rotate-12 shadow-lg">
              <span className="font-serif italic text-xl">Let&apos;s talk</span>
            </div>

            <h3 className="text-3xl font-serif mb-4">Book a Discovery Call</h3>
            <p className="text-ikigai-muted font-light mb-10 leading-relaxed">
              Schedule a 15-minute conversation directly directly with Ikigai members to explore partnership and volunteer opportunities.
            </p>

            <div className="space-y-6">
              <Button className='w-full' href={(siteData as any).phone.href}>Book a call</Button>

              <p className="text-center text-sm text-ikigai-muted pt-4">
                <a href={`mailto:${(siteData as any).email}`} className="text-ikigai-accent hover:text-black font-regular mt-2 inline-block tracking-wider transition-all">{(siteData as any).email}</a>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
