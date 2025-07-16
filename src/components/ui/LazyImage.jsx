'use client';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Skeleton from './Skeleton';

const LazyImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  priority = false,
  skeletonClassName = '',
  trackPerformance = false,
  ...props 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const startTimeRef = useRef(performance.now());

  const handleLoad = () => {
    setIsLoading(false);
    
    if (trackPerformance) {
      const loadTime = performance.now() - startTimeRef.current;
      console.log(`Image loaded: ${src} in ${loadTime.toFixed(2)}ms`);
    }
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    
    if (trackPerformance) {
      console.warn(`Failed to load image: ${src}`);
    }
  };

  return (
    <div className="relative" style={{ width, height }}>
      {isLoading && (
        <Skeleton 
          className={`absolute inset-0 ${skeletonClassName}`}
          style={{ width, height }}
        />
      )}
      
      {hasError ? (
        <div 
          className={`flex items-center justify-center bg-gray-100 text-gray-400 text-xs ${className} fade-in`}
          style={{ width, height }}
        >
          Failed to load
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100 fade-in'} transition-opacity duration-300 will-change-opacity`}
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

export default LazyImage;
