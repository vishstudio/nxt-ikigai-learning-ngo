"use client";

import React from 'react';
import { motion } from 'motion/react';

export type ButtonVariant = 'accent' | 'outlined' | 'white' | 'link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  motionProps?: any;
}

export function Button({ 
  children, 
  href, 
  onClick, 
  variant = 'accent', 
  className = '', 
  icon, 
  iconPosition = 'right',
  motionProps,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-full transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none uppercase tracking-[0.25em] font-black text-[10px] group";
  
  const variants = {
    accent: "bg-ikigai-accent text-white hover:bg-ikigai-accent-hover hover:bg-black hover:text-white px-10 py-5 md:px-12 md:py-6",
    outlined: "border border-ikigai-dark/20 text-ikigai-dark hover:bg-ikigai-dark hover:text-white px-8 py-3 md:px-10 md:py-4",
    white: "bg-white text-ikigai-dark hover:bg-ikigai-accent hover:text-white px-10 py-5 md:px-12 md:py-6",
    link: "text-ikigai-dark hover:text-ikigai-accent p-0 bg-transparent shadow-none hover:translate-x-1"
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-3 flex items-center justify-center">{icon}</span>}
      <span className={variant === 'link' ? "border-b-2 border-current pb-1" : ""}>{children}</span>
      {icon && iconPosition === 'right' && <span className="ml-3 transition-transform group-hover:translate-x-1 flex items-center justify-center">{icon}</span>}
    </>
  );

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (motionProps) {
    return (
      <motion.button
        onClick={onClick}
        className={combinedClassName}
        {...motionProps}
        {...props}
      >
        {content}
      </motion.button>
    );
  }

  if (href) {
    return (
      <a href={href} onClick={onClick as any} className={combinedClassName}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName} {...props}>
      {content}
    </button>
  );
}
