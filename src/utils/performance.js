// Performance optimization utilities for the application

/**
 * Preload critical resources to improve page load performance
 */
export function preloadCriticalResources() {
  if (typeof window === 'undefined') return;

  // Preload critical fonts
  const fontLink = document.createElement('link');
  fontLink.rel = 'preload';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
  fontLink.as = 'style';
  fontLink.crossOrigin = 'anonymous';
  document.head.appendChild(fontLink);

  // Preload critical images
  const criticalImages = [
    '/images/logo.png',
    '/images/hospitalImage.jpg',
    '/images/doctor1.jpg'
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = src;
    link.as = 'image';
    document.head.appendChild(link);
  });
}

/**
 * Optimize Web Vitals and performance metrics
 */
export function optimizeWebVitals() {
  if (typeof window === 'undefined') return;

  // Optimize Largest Contentful Paint (LCP)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Lazy load images that are about to come into view
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      }
    });
  }, { rootMargin: '50px' });

  // Observe all images with data-src attribute
  document.querySelectorAll('img[data-src]').forEach(img => {
    observer.observe(img);
  });

  // Optimize First Input Delay (FID) by deferring non-critical scripts
  const deferNonCriticalScripts = () => {
    const scripts = document.querySelectorAll('script[data-defer]');
    scripts.forEach(script => {
      if (script.dataset.defer) {
        script.src = script.dataset.defer;
        script.removeAttribute('data-defer');
      }
    });
  };

  // Defer after initial load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', deferNonCriticalScripts);
  } else {
    setTimeout(deferNonCriticalScripts, 100);
  }
}

/**
 * Optimize scroll performance with throttling
 */
export function optimizeScrollPerformance() {
  if (typeof window === 'undefined') return () => {};

  let ticking = false;

  const handleScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        // Add smooth scrolling optimizations
        document.documentElement.style.scrollBehavior = 'smooth';
        ticking = false;
      });
      ticking = true;
    }
  };

  // Add passive scroll listener for better performance
  document.addEventListener('scroll', handleScroll, { passive: true });

  // Return cleanup function
  return () => {
    document.removeEventListener('scroll', handleScroll);
  };
}

/**
 * Initialize all performance optimizations
 */
export function initializePerformanceOptimizations() {
  if (typeof window === 'undefined') return () => {};

  preloadCriticalResources();
  optimizeWebVitals();
  const cleanupScroll = optimizeScrollPerformance();

  return cleanupScroll;
}