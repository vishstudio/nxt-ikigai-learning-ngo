"use client";

import React from 'react';
import { motion } from 'motion/react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'secondary' | 'link' | 'white';
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
  const baseStyles = "inline-flex items-center justify-center rounded-full transition-colors duration-150 disabled:opacity-50 disabled:pointer-events-none font-black text-[10px] font-sans tracking-[0.25em] uppercase";

  const variants = {
    primary: "bg-ikigai-accent text-white hover:bg-ikigai-accent-hover px-4 py-2 md:px-5 md:py-2",
    outline: "bg-transparent border border-ikigai-dark/20 text-ikigai-dark hover:bg-ikigai-accent hover:text-white px-4 py-2 md:px-5 md:py-2",
    secondary: "bg-ikigai-surface text-ikigai-dark hover:bg-ikigai-dark hover:text-white px-4 py-2 md:px-5 md:py-2",
    white: "bg-white text-ikigai-dark hover:bg-ikigai-accent hover:text-white px-4 py-2 md:px-5 md:py-2",
    link: "text-ikigai-dark hover:text-ikigai-accent p-0 bg-transparent shadow-none"
  };

  const sizeClasses: Record<string, string> = {
    sm: 'text-[10px] md:text-[10px] px-3 py-1',
    md: 'text-sm md:text-sm',
    lg: 'text-base md:text-base',
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
