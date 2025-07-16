// Performance monitoring utilities for image loading
export const performanceUtils = {
  // Track image loading performance
  trackImageLoad: (src, startTime) => {
    const loadTime = performance.now() - startTime;
    console.log(`Image loaded: ${src} in ${loadTime.toFixed(2)}ms`);
    
    // Optional: Send to analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'image_load_time', {
        event_category: 'Performance',
        event_label: src,
        value: Math.round(loadTime)
      });
    }
  },

  // Track skeleton display duration
  trackSkeletonDisplay: (componentName, displayTime) => {
    console.log(`Skeleton displayed for ${componentName}: ${displayTime.toFixed(2)}ms`);
  },

  // Preload critical images
  preloadImages: (imageSources) => {
    imageSources.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  },

  // Check if image is in critical viewport
  isInCriticalViewport: (element) => {
    const rect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    return rect.top < viewportHeight * 0.5; // First 50% of viewport
  }
};

export default performanceUtils;
