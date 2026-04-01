"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/Button';
import { navItems } from '@/lib/data';
import Logo from '../logo/Logo';
import siteData from '../../data/site-data.json';

// MobileNav is now rendered at the page level

export function Header({ mobileMenuOpen: mobileMenuOpenProp, setMobileMenuOpen: setMobileMenuOpenProp }: { mobileMenuOpen?: boolean; setMobileMenuOpen?: (v: boolean) => void } = {}) {
  const [internalMobileOpen, setInternalMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuOpen = mobileMenuOpenProp !== undefined ? mobileMenuOpenProp : internalMobileOpen;
  const setMobileMenuOpen = setMobileMenuOpenProp ?? setInternalMobileOpen;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-60 transition-all duration-500 ${scrolled && !mobileMenuOpen ? 'bg-ikigai-bg/95 backdrop-blur-md shadow-sm py-4 md:py-4' : 'bg-transparent py-4 lg:py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home"
            className="w-16 lg:w-20 flex-shrink-0 flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ikigai-accent">
            <Logo />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-10 items-center" aria-label="Main Navigation">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-ikigai-dark/80 hover:text-ikigai-accent font-medium transition-colors text-[10px] uppercase tracking-[0.2em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ikigai-accent"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex">
            <Button href={(siteData as any).phone.href} variant="outlined">
              Book a Call
            </Button>
          </div>

          {/* Mobile menu toggle (visible up to tablet) */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              className="bg-ikigai-dark z-[90] flex items-center justify-center rounded-full text-white hover:text-ikigai-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ikigai-accent p-3 backdrop-blur-sm"
            >
              {mobileMenuOpen ? <span className="material-symbols-outlined !text-[16px]">close</span> : <span className="material-symbols-outlined !text-[16px]">menu</span>}
            </button>
          </div>
        </div>
      </div>

      {/* MobileNav is rendered at page level to allow full-viewport overlay */}
    </header>
  );
}
