'use client';
import React, { useState, useEffect, useRef } from 'react';
import Skeleton from './Skeleton';

const LazyMap = ({ src, className = '', ...props }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div ref={mapRef} className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 z-10">
          <Skeleton className="w-full h-full">
            <div className="flex items-center justify-center h-full">
              <div className="text-gray-400 text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-400 mx-auto mb-2"></div>
                <p className="text-sm">Loading map...</p>
              </div>
            </div>
          </Skeleton>
        </div>
      )}
      
      {isInView && (
        <iframe
          src={src}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={handleLoad}
          className="rounded-lg"
          {...props}
        />
      )}
    </div>
  );
};

export default LazyMap;
