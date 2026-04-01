"use client";

import siteData from '../../data/site-data.json';
import { Icons } from '@/lib/data';

export default function SocialLinks({
  size = 18,
  className = '',
  itemClass,
  variant = 1,
}: {
  size?: number;
  className?: string;
  itemClass?: string;
  variant?: 1 | 2;
}) {
  const links: { name: string; href: string; target?: string }[] = (siteData as any).socialLinks as any;


  const footerItemClass = 'w-10 h-10 rounded-full border border-ikigai-bg/10 flex items-center justify-center hover:bg-ikigai-accent hover:border-ikigai-accent transition-all text-ikigai-bg/80 hover:text-white';
  const mobileItemClass = 'w-10 h-10 rounded-full flex items-center justify-center text-ikigai-dark/40 hover:text-ikigai-accent transition-all hover:scale-125 hover:-translate-y-1';

  const computedItemClass = itemClass ?? (variant === 1 ? footerItemClass : mobileItemClass);

  return (
    <div className={`flex gap-2 md:gap-3 ${className}`}>
      {links.map((s) => {
        const Icon = (Icons as any)[s.name] ?? null;
        return (
          <a
            key={s.name}
            href={s.href}
            aria-label={s.name}
            className={computedItemClass}
            target={s.target || '_blank'}
            rel="noopener noreferrer"
          >
            {Icon ? <Icon size={size} /> : <span>{s.name}</span>}
          </a>
        );
      })}
    </div>
  );
}
