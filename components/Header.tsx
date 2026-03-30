"use client";

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/Button';
import { navItems, socialLinks } from './SiteConfig';
import Logo from './logo/logo';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-ikigai-bg/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Logo />

          <nav className="hidden md:flex space-x-10 items-center" aria-label="Main Navigation">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-ikigai-dark/80 hover:text-ikigai-accent font-medium transition-colors text-[10px] uppercase tracking-[0.2em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ikigai-accent">
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex">
            <Button href="#director-call" variant="outline">Let&apos;s Talk</Button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileMenuOpen} className="text-ikigai-dark hover:text-ikigai-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ikigai-accent p-2 rounded-md">
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} className="md:hidden bg-ikigai-bg fixed inset-0 z-[60] flex flex-col p-8 shadow-2xl overflow-y-auto">
          <div className="flex justify-between items-center mb-16">
            <div className="flex items-center gap-2">
              <Logo />
            </div>
            <button onClick={() => setMobileMenuOpen(false)} className="text-ikigai-dark p-2 hover:rotate-90 transition-transform duration-300" aria-label="Close menu">
              <X size={32} />
            </button>
          </div>

          <div className="flex flex-col h-full justify-between">
            <nav className="space-y-8">
              {navItems.map((item, index) => (
                <motion.a key={item.name} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + index * 0.1 }} href={item.href} onClick={() => setMobileMenuOpen(false)} className="block text-5xl font-serif text-ikigai-dark hover:text-ikigai-accent transition-all hover:translate-x-2">
                  {item.name}
                </motion.a>
              ))}
            </nav>

            <div className="space-y-12 pb-12 mt-12">
              <div>
                <Button href="#director-call" onClick={() => setMobileMenuOpen(false)} className="w-full py-6 text-xs tracking-[0.3em]">Book a Call</Button>
              </div>

              <div className="flex flex-col items-center">
                <p className="text-[10px] uppercase tracking-[0.4em] text-ikigai-muted mb-6 font-bold">Connect with us</p>
                <div className="flex justify-center gap-10">
                  {socialLinks.map((social) => (
                    <a key={social.name} href={social.href} aria-label={`Follow us on ${social.name}`} className="text-ikigai-dark/40 hover:text-ikigai-accent transition-all hover:scale-125 hover:-translate-y-1">
                      {/* icon injected by consumer since SiteConfig leaves icon null */}
                      <span className="w-6 h-6 inline-block" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
