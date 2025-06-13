'use client';

import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { buttonAnimation } from '@/utils/animations';

const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  type = 'button',
  className = '',
  ...props
}) => {
  const baseClasses = 'font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-light focus:ring-primary-light disabled:bg-gray-400',
    secondary: 'bg-accent text-primary hover:bg-accent-light focus:ring-accent disabled:bg-gray-100',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary disabled:border-gray-200 disabled:text-gray-400',
  };
  
  const sizes = {
    small: 'px-2 py-2 text-xs sm:px-3 sm:py-2 sm:text-sm',
    medium: 'px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base',
    large: 'px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg',
  };
  
  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${disabled ? 'cursor-not-allowed' : ''} ${className}`;
  
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      whileHover="hover"
      whileTap="tap"
      variants={buttonAnimation}
      {...props}
    >
      {children}
    </motion.button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
};

export default Button;