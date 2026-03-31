"use client";

import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/Button';
import { navItems } from '@/lib/data';
import SocialLinks from '@/components/SocialLinks/SocialLinks';
import Logo from '../logo/Logo';

export default function MobileNav({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="lg:hidden bg-ikigai-bg fixed inset-0 z-[59] flex flex-col py-4 pt-30 md:pt-34 px-6 md:p-8 shadow-2xl overflow-hidden"
    >
      <div className="flex flex-col h-full justify-between">
        <nav className="space-y-6 pt-4">
          {navItems.map((item, index) => (
            <motion.a
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.06 }}
              key={item.name}
              href={item.href}
              onClick={onClose}
              className="block text-3xl leading-tight font-serif text-ikigai-dark hover:text-ikigai-accent transition-all"
            >
              {item.name}
            </motion.a>
          ))}
        </nav>

        <div className="space-y-12 pb-12 mt-12 pt">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              href="#director-call"
              onClick={onClose}
              className="w-full py-6 text-xs tracking-[0.3em]"
            >
              Book a Call
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col items-center"
          >
            <p className="text-[10px] uppercase tracking-[0.4em] text-ikigai-muted mb-6 font-bold">Connect with us</p>
            <div className="flex justify-center gap-6">
              <SocialLinks variant={2} size={24} />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
