"use client";

import { Button } from '@/components/Button';
import { navItems } from '@/lib/data';
import SocialLinks from '@/components/SocialLinks/SocialLinks';
import Logo from '../logo/Logo';

export function Footer() {
  return (
    <footer className="bg-ikigai-dark pt-24 pb-12 text-ikigai-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <div className="bg-white p-2 rounded-full">
                <Logo />
              </div>
            </div>


            <p className="text-ikigai-bg/60 font-light leading-relaxed max-w-xs">
              Nurturing potential and providing free education to those who need it most. Every child deserves a reason for being.
            </p>
            <div className="flex gap-5">
              <SocialLinks variant={1} size={18} />
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer Navigation">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-ikigai-accent mb-8">Navigation</h4>
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-ikigai-bg/70 hover:text-white transition-colors font-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ikigai-accent">{item.name}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-ikigai-accent mb-8">Contact</h4>
            <ul className="space-y-4 text-ikigai-bg/70 font-light">
              <li>
                <a href="mailto:hello@ikigaingo.org" className="flex items-center gap-3 hover:text-white transition-colors" aria-label="Email hello at ikigai ngo">
                  <span className="material-symbols-outlined text-ikigai-accent text-[20px] flex-shrink-0" aria-hidden>mail</span>
                  <span>hello@ikigaingo.org</span>
                </a>
              </li>

              <li>
                <a href="tel:+15551234567" className="flex items-center gap-3 hover:text-white transition-colors" aria-label="Call Ikigai">
                  <span className="material-symbols-outlined text-ikigai-accent text-[20px] flex-shrink-0" aria-hidden>call</span>
                  <span>+1 (555) 123-4567</span>
                </a>
              </li>

              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Avenue%20Pr%C3%A9sident%20Fran%C3%A7ois%20Mitterand%2C%20Centre%20de%20Flacq%20Mauritius"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                  aria-label="Open address in maps"
                >
                  <span className="material-symbols-outlined text-ikigai-accent text-[20px] flex-shrink-0" aria-hidden>place</span>
                  <span>Avenue Président François Mitterand, Centre de Flacq, Mauritius</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter/CTA */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-ikigai-accent mb-8">Our Mission</h4>
            <p className="text-ikigai-bg/70 font-light mb-8">
              Join our community of volunteers and supporters.
            </p>
            <Button href="#director-call" variant="white">
              Get Involved
            </Button>
          </div>
        </div>

        <div className="pt-12 border-t border-ikigai-bg/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-ikigai-bg/40 text-[10px] uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()}
            <a className="text-ikigai-accent hover:text-white transition-all ease-in-out"
              href="www.vish.studio"
              target="_blank"> VISH studio</a>. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] text-ikigai-bg/40">
            <a href="#" className="hover:text-ikigai-accent transition-colors focus-visible:text-ikigai-accent focus-visible:outline-none">Privacy Policy</a>
            <a href="#" className="hover:text-ikigai-accent transition-colors focus-visible:text-ikigai-accent focus-visible:outline-none">Terms of Service</a>
            <a href="#" className="hover:text-ikigai-accent transition-colors focus-visible:text-ikigai-accent focus-visible:outline-none">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
