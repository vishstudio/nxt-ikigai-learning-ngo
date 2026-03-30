"use client";

import React from 'react';
import { motion } from 'motion/react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'secondary' | 'link' | 'white' | 'pill';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
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
  size = 'md',
  fullWidth = false,
  icon,
  iconPosition = 'right',
  motionProps,
  ...rest
}: ButtonProps & Record<string, any>) {
  const baseStyles = "inline-flex items-center justify-center rounded-full transform-gpu transition duration-200 disabled:opacity-50 disabled:pointer-events-none font-semibold text-[10px] font-sans tracking-[0.25em] uppercase";

  const variants = {
    primary: "bg-ikigai-accent text-white shadow-[0_24px_48px_rgba(0,0,0,0.12)] hover:brightness-105 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-ikigai-accent/20",
    outline: "bg-transparent border border-ikigai-dark/20 text-ikigai-dark hover:bg-ikigai-accent hover:text-white",
    pill: "bg-white text-ikigai-dark border border-ikigai-dark/10 shadow-sm px-6 py-2 md:px-8 md:py-3 hover:brightness-105 hover:scale-105",
    secondary: "bg-ikigai-surface text-ikigai-dark hover:bg-ikigai-dark hover:text-white",
    white: "bg-white text-ikigai-dark hover:bg-ikigai-accent hover:text-white",
    link: "text-ikigai-dark hover:text-ikigai-accent p-0 bg-transparent shadow-none"
  };

  const sizeClasses: Record<string, string> = {
    sm: 'text-xs md:text-sm px-3 py-1',
    md: 'text-sm md:text-sm px-6 py-3',
    lg: 'text-sm md:text-base px-8 py-3',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-3">{icon}</span>}
      <span className={variant === 'link' ? "border-b-2 border-current pb-1" : ""}>{children}</span>
      {icon && iconPosition === 'right' && <span className="ml-3 transition-transform group-hover:translate-x-1">{icon}</span>}
    </>
  );

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizeClasses[size]} ${widthClass} ${className} group`;

  if (motionProps) {
    return (
      // motion.button supports button props
      <motion.button onClick={onClick} className={combinedClassName} {...motionProps} {...rest}>
        {content}
      </motion.button>
    );
  }

  if (href) {
    return (
      <a href={href} onClick={onClick} className={combinedClassName} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName} {...rest}>
      {content}
    </button>
  );
}
