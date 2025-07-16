'use client';
import React from 'react';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Button from '@/components/ui/Button';
import LazyImage from '@/components/ui/LazyImage';
import LazyIcon from '@/components/ui/LazyIcon';
import SearchBox from '@/components/ui/SearchBox';
import ScrollToTop from '@/components/ui/ScrollToTop';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ScrollToTop />
      
      {/* 404 Hero Section */}
      <section className="bg-primary text-white py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="mb-8">
              <LazyImage
                src="/images/logo.png"
                alt="Cortex Hospital Logo"
                width={120}
                height={120}
                className="mx-auto opacity-50"
                priority={true}
              />
            </div>
            <h1 className="text-8xl md:text-9xl font-bold mb-4 text-accent">404</h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight">
              Page Not Found
            </h2>
            <p className="text-lg md:text-xl text-accent-light mb-8 max-w-2xl mx-auto leading-relaxed">
              We're sorry, but the page you're looking for seems to have moved or doesn't exist. 
              Let's get you back to finding the healthcare services you need.
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5"></div>
        <div className="absolute top-32 right-32 w-32 h-32 bg-white opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/20"></div>
        <div className="absolute bottom-32 left-32 w-32 h-32 bg-accent/30"></div>
      </section>

      {/* Quick Navigation Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-medium mb-4">Where Would You Like To Go?</p>
            <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 leading-tight">
              Quick Navigation
            </h3>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto">
              Choose from our most popular pages to continue your journey with Cortex Hospital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Home */}
            <Link href="/" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 will-change-transform hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary p-3 rounded-lg group-hover:bg-accent transition-colors">
                    <LazyIcon
                      src="/images/hospitalImage.jpg"
                      alt="Home"
                      size={24}
                      className="invert"
                      fallbackIcon={
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      }
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    Home
                  </h4>
                </div>
                <p className="text-gray-500 leading-relaxed">
                  Return to our homepage to explore all our orthopaedic and gynecological services.
                </p>
              </div>
            </Link>

            {/* Services */}
            <Link href="/services" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 will-change-transform hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary p-3 rounded-lg group-hover:bg-accent transition-colors">
                    <LazyIcon
                      src="/images/ortho.png"
                      alt="Services"
                      size={24}
                      className="invert"
                      fallbackIcon={
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                        </svg>
                      }
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    Our Services
                  </h4>
                </div>
                <p className="text-gray-500 leading-relaxed">
                  Discover our comprehensive range of medical services and specialties.
                </p>
              </div>
            </Link>

            {/* About */}
            <Link href="/about" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 will-change-transform hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary p-3 rounded-lg group-hover:bg-accent transition-colors">
                    <LazyIcon
                      src="/images/doctor.png"
                      alt="About"
                      size={24}
                      className="invert"
                      fallbackIcon={
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      }
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    About Us
                  </h4>
                </div>
                <p className="text-gray-500 leading-relaxed">
                  Learn about our hospital, our experienced medical team, and our mission.
                </p>
              </div>
            </Link>

            {/* Contact */}
            <Link href="/contact" className="group">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 will-change-transform hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary p-3 rounded-lg group-hover:bg-accent transition-colors">
                    <LazyIcon
                      src="/images/img_phone.svg"
                      alt="Contact"
                      size={24}
                      className="invert"
                      fallbackIcon={
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      }
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    Contact Us
                  </h4>
                </div>
                <p className="text-gray-500 leading-relaxed">
                  Get in touch to schedule an appointment or ask any questions.
                </p>
              </div>
            </Link>

            {/* Emergency */}
            <div className="bg-accent/10 border border-accent rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-accent p-3 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900">
                  Emergency
                </h4>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                For medical emergencies, call us immediately.
              </p>
              <a 
                href="tel:+919373280505" 
                className="text-2xl font-bold text-accent hover:text-accent-dark transition-colors"
              >
                +91 9373280505
              </a>
            </div>

            {/* Search */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gray-600 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900">
                  Search
                </h4>
              </div>
              <p className="text-gray-500 mb-4 leading-relaxed">
                Try searching for what you were looking for.
              </p>
              <SearchBox placeholder="Search our website..." />
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-semibold text-gray-900 mb-6">
            Still Can't Find What You're Looking For?
          </h3>
          <p className="text-gray-500 text-lg mb-8 leading-relaxed">
            Our team is here to help you navigate our website and find the medical care you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 text-lg">
                Contact Support
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg">
                Return Home
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
