"use client";

import React from 'react';
import { motion } from 'motion/react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'secondary' | 'link' | 'white';
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  motionProps?: any;
}

export function Button({ 
  children, 
  href, 
  onClick, 
  variant = 'primary', 
  className = '', 
  icon, 
  iconPosition = 'right',
  motionProps 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-full transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none uppercase tracking-[0.25em] font-black text-[10px]";
  
  const variants = {
    primary: "bg-ikigai-accent text-white hover:bg-ikigai-accent-hover shadow-xl hover:shadow-ikigai-accent/40 hover:-translate-y-1 px-10 py-5 md:px-12 md:py-6",
    outline: "border border-ikigai-dark/20 text-ikigai-dark hover:bg-ikigai-dark hover:text-white px-8 py-3 md:px-10 md:py-4",
    secondary: "bg-ikigai-surface text-ikigai-dark hover:bg-ikigai-dark hover:text-white shadow-md hover:-translate-y-1 px-10 py-5 md:px-12 md:py-6",
    white: "bg-ikigai-bg text-ikigai-dark hover:bg-ikigai-accent hover:text-white shadow-lg hover:shadow-ikigai-accent/20 px-10 py-4",
    link: "text-ikigai-dark hover:text-ikigai-accent p-0 bg-transparent shadow-none hover:translate-x-1"
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-3">{icon}</span>}
      <span className={variant === 'link' ? "border-b-2 border-current pb-1" : ""}>{children}</span>
      {icon && iconPosition === 'right' && <span className="ml-3 transition-transform group-hover:translate-x-1">{icon}</span>}
    </>
  );

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className} group`;

  if (motionProps) {
    return (
      <motion.button
        onClick={onClick}
        className={combinedClassName}
        {...motionProps}
      >
        {content}
      </motion.button>
    );
  }

  if (href) {
    return (
      <a href={href} onClick={onClick} className={combinedClassName}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {content}
    </button>
  );
}
