'use client';
import React from 'react';

const Skeleton = ({ className = '', variant = 'rectangular', children, shimmer = true }) => {
  const baseClasses = shimmer 
    ? 'skeleton-shimmer' 
    : 'animate-pulse bg-gray-200';
  
  const variantClasses = {
    rectangular: 'rounded-md',
    circular: 'rounded-full',
    text: 'rounded',
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default Skeleton;
