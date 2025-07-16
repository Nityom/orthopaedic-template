'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Skeleton from './Skeleton';

const LazyIcon = ({ 
  src, 
  alt, 
  size = 24, 
  className = '', 
  priority = false,
  fallbackIcon = null,
  ...props 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // For small icons, we can preload them since they're usually critical
  useEffect(() => {
    if (priority && src) {
      const img = new window.Image();
      img.onload = () => setIsLoading(false);
      img.onerror = () => {
        setIsLoading(false);
        setHasError(true);
      };
      img.src = src;
    }
  }, [src, priority]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  if (hasError && fallbackIcon) {
    return fallbackIcon;
  }

  return (
    <div className="relative inline-block" style={{ width: size, height: size }}>
      {isLoading && !priority && (
        <Skeleton 
          className="absolute inset-0"
          style={{ width: size, height: size }}
          variant="rectangular"
        />
      )}
      
      {hasError ? (
        <div 
          className={`flex items-center justify-center bg-gray-100 text-gray-400 rounded ${className}`}
          style={{ width: size, height: size }}
        >
          <svg 
            width={size * 0.6} 
            height={size * 0.6} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor"
          >
            <circle cx="12" cy="12" r="10"/>
            <line x1="15" y1="9" x2="9" y2="15"/>
            <line x1="9" y1="9" x2="15" y2="15"/>
          </svg>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className={`${className} ${isLoading && !priority ? 'opacity-0' : 'opacity-100 fade-in'} transition-opacity duration-200 will-change-opacity`}
          onLoad={handleLoad}
          onError={handleError}
          priority={priority}
          loading={priority ? undefined : 'lazy'}
          {...props}
        />
      )}
    </div>
  );
};

export default LazyIcon;
