export const navItems = [
  { name: 'About', href: '#story' },
  { name: 'Activities', href: '#activities' },
  { name: 'Stories', href: '#success-stories' },
  { name: 'Testimonials', href: '#testimonials' },
];

import { Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

export const socialLinks = [
  { name: 'Instagram', icon: <Instagram size={16} />, href: '#' },
  { name: 'Twitter', icon: <Twitter size={16} />, href: '#' },
  { name: 'Facebook', icon: <Facebook size={16} />, href: '#' },
  { name: 'LinkedIn', icon: <Linkedin size={16} />, href: '#' },
];

export const companyPhone = '+1234567890';
export const primaryCta = { text: 'Get Involved', href: `tel:${companyPhone}` };
export const secondaryCta = { text: 'Learn More' };
