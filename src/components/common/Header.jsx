'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { headerAnimation, navItemAnimation, mobileMenuAnimation } from '@/utils/animations';
import Button from '@/components/ui/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when navigating to a new page
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Scroll to top when navigating to a new page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {/* Top Bar */}
      <motion.div 
        className="bg-accent py-2 md:py-4"
        initial="hidden"
        animate="show"
        variants={headerAnimation}
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <motion.div 
            className="flex items-center gap-2 mb-2 md:mb-0"
            variants={navItemAnimation}
          >
            <Image src="/images/img_mappin.svg" alt="Location" width={16} height={22} />
            <span className="text-primary text-xs md:text-sm">Cortex Hospital, Beside Urich Mall, Aarti Square, Wardha</span>
          </motion.div>
          <div className="flex items-center gap-4 md:gap-6">
            <motion.div 
              className="flex items-center gap-1 md:gap-2"
              variants={navItemAnimation}
            >
              <Image src="/images/img_phone.svg" alt="Phone" width={16} height={16} />
              <span className="text-primary text-xs md:text-sm">+91 9373280505</span>
            </motion.div>
            <div className="w-px h-4 bg-primary hidden md:block"></div>
      <motion.div 
        className="flex items-center gap-1 md:gap-2"
        variants={navItemAnimation}
      >
        <Image src="/images/img_mail.svg" alt="Email" width={16} height={16} />
        <div className="text-primary text-xs md:text-sm">
          <span>drvipeenraut@cortexhospital.com</span>
          <span className="hidden lg:inline"> | </span>
          <span className="lg:inline block">drshillparaut@cortexhospital.com</span>
        </div>
      </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Header */}
      <motion.header 
        className="bg-white shadow-sm py-4 md:py-6 relative"
        initial="hidden"
        animate="show"
        variants={headerAnimation}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/" className="flex items-center gap-2 md:gap-3">
              <Image 
                src="/images/logo.png" 
                alt="Cortex Hospital Logo" 
                width={40} 
                height={40} 
                className="w-full h-full"
              />
              <div className="text-xl md:text-2xl font-bold">
                <span className="text-primary font-extrabold">Cortex</span>
                <span className="text-primary font-light">Hospital</span>
              </div>
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <motion.div whileHover={{ scale: 1.1 }} variants={navItemAnimation}>
              <Link href="/" className={`text-primary hover:text-accent transition-colors ${pathname === '/' ? 'text-accent font-medium' : ''}`}>
                Home
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} variants={navItemAnimation}>
              <Link href="/about" className={`text-primary hover:text-accent transition-colors ${pathname === '/about' ? 'text-accent font-medium' : ''}`}>
                About Us
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} variants={navItemAnimation}>
              <Link href="/services" className={`text-primary hover:text-accent transition-colors ${pathname === '/services' ? 'text-accent font-medium' : ''}`}>
                Services
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} variants={navItemAnimation}>
              <Link href="/contact" className={`text-primary hover:text-accent transition-colors ${pathname === '/contact' ? 'text-accent font-medium' : ''}`}>
                Contact Us
              </Link>
            </motion.div>
          </nav>

          <div className="flex items-center gap-4">
            <motion.div 
              whileHover="hover" 
              whileTap="tap"
              variants={navItemAnimation}
            >
              <Link href="/contact">
                <Button 
                  variant="primary" 
                  size="medium" 
                  className="hidden sm:flex bg-teal-800 hover:bg-teal-700 px-4 py-2 md:px-6 md:py-3"
                >
                  Book Your Appointment
                  <Image src="/images/img_arrowright.svg" alt="Arrow" width={20} height={20} className="ml-2" />
                </Button>
              </Link>
            </motion.div>
            
            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden absolute top-full left-0 right-0 bg-white z-50 shadow-md"
              initial="hidden"
              animate="show"
              exit="exit"
              variants={mobileMenuAnimation}
            >
              <nav className="flex flex-col py-2">
                <motion.div 
                  variants={navItemAnimation}
                  whileHover={{ backgroundColor: '#e6fffa' }}
                >
                  <Link 
                    href="/" 
                    className={`px-4 py-3 border-b border-gray-100 block ${pathname === '/' ? 'bg-teal-50 text-teal-800' : 'text-gray-900'}`}
                  >
                    Home
                  </Link>
                </motion.div>
                
                <motion.div 
                  variants={navItemAnimation}
                  whileHover={{ backgroundColor: '#e6fffa' }}
                >
                  <Link 
                    href="/about" 
                    className={`px-4 py-3 border-b border-gray-100 block ${pathname === '/about' ? 'bg-teal-50 text-teal-800' : 'text-gray-900'}`}
                  >
                    About Us
                  </Link>
                </motion.div>
                
                <motion.div 
                  variants={navItemAnimation}
                  whileHover={{ backgroundColor: '#e6fffa' }}
                >
                  <Link 
                    href="/services" 
                    className={`px-4 py-3 border-b border-gray-100 block ${pathname === '/services' ? 'bg-teal-50 text-teal-800' : 'text-gray-900'}`}
                  >
                    Services
                  </Link>
                </motion.div>
                
                <motion.div 
                  variants={navItemAnimation}
                  whileHover={{ backgroundColor: '#e6fffa' }}
                >
                  <Link 
                    href="/contact" 
                    className={`px-4 py-3 block ${pathname === '/contact' ? 'bg-teal-50 text-teal-800' : 'text-gray-900'}`}
                  >
                    Contact Us
                  </Link>
                </motion.div>
                
                <motion.div 
                  className="px-4 py-4"
                  variants={navItemAnimation}
                  whileHover={{ scale: 1.02 }}
                >
                  <Link href="/contact">
                    <Button
                      variant="primary"
                      size="medium"
                      className="w-full bg-teal-800 hover:bg-teal-700 flex items-center justify-center"
                    >
                      Book Your Appointment
                      <Image src="/images/img_arrowright.svg" alt="Arrow" width={20} height={20} className="ml-2" />
                    </Button>
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;