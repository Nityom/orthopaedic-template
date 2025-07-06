'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { footerAnimation, staggerContainer, navItemAnimation } from '@/utils/animations';

const Footer = () => {
  // State for mobile accordion functionality
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };

  return (
    <motion.footer 
      className="bg-primary text-white py-10 md:py-16"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={footerAnimation}
    >
      <motion.div 
        className="max-w-7xl mx-auto px-4"
        variants={staggerContainer(0.1, 0.2)}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12">
          {/* Left Column - Company Info */}
          <motion.div 
            className="space-y-6"
            variants={navItemAnimation}
          >
            {/* Logo */}
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-3">
                <Image 
                  src="/images/logo.png" 
                  alt="Cortex Hospital Logo" 
                  width={100} 
                  height={100} 
                  className="w-22 h-22 md:w-15 md:h-15"
                />
                <div className="text-2xl md:text-3xl font-bold">
                  <span className="text-white">Cortex</span>
                  <span className="text-accent">Hospital</span>
                </div>
              </div>
            </Link>

            {/* Description */}
            <motion.p 
              className="text-accent-light leading-relaxed text-sm md:text-base max-w-md"
              variants={navItemAnimation}
            >
              Leading the way in orthopaedic and gynecological care. We provide comprehensive medical services with advanced technology and compassionate care to help you achieve optimal health and wellness.
            </motion.p>

            {/* Social Media Icons */}
            <motion.div 
              className="flex gap-3"
              variants={staggerContainer(0.1, 0)}
            >
              <motion.div 
                className="bg-[#D4AF37] p-2 md:p-3 rounded-lg cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image src="/images/img_twitter.svg" alt="Twitter" width={16} height={16} />
              </motion.div>
              <motion.div 
                className="bg-[#D4AF37] p-2 md:p-3 rounded-lg cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image src="/images/img_icon_02.svg" alt="Instagram" width={16} height={16} />
              </motion.div>
              <motion.div 
                className="bg-[#D4AF37] p-2 md:p-3 rounded-lg cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image src="/images/img_youtube.svg" alt="YouTube" width={16} height={16} />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Info */}
          <motion.div 
            className="space-y-6"
            variants={navItemAnimation}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-white">Contact Info</h3>
            
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="bg-[#D4AF37] p-2 rounded-lg mt-1 flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <p className="text-accent-light text-sm md:text-base">
                  123 Medical Plaza, Healthcare District, City 12345
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="bg-[#D4AF37] p-2 rounded-lg mt-1 flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <p className="text-accent-light text-sm md:text-base">
                  +1 (555) 123-4567
                </p>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="bg-[#D4AF37] p-2 rounded-lg mt-1 flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <p className="text-accent-light text-sm md:text-base">
                  info@cortexhospital.com
                </p>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <div className="bg-[#D4AF37] p-2 rounded-lg mt-1 flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div className="text-accent-light text-sm md:text-base">
                  <p>Mon-Fri: 8AM-6PM</p>
                  <p>Sat: 9AM-3PM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="bg-[#D4AF37] py-4 -mx-4 px-4 rounded-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-900">
            <div className="flex flex-col md:flex-row items-center md:gap-4 mb-4 md:mb-0 text-center md:text-left">
              <motion.span variants={navItemAnimation}>
                Copyright © 2025 Cortex Hospital
              </motion.span>
              <div className="w-px h-3 bg-gray-900 hidden md:block"></div>
              <motion.span variants={navItemAnimation}>
                All Rights Reserved
              </motion.span>
            </div>
            <div className="flex items-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link href="/terms" className="hover:underline">
                  Terms of Use
                </Link>
              </motion.div>
              <div className="w-px h-3 bg-gray-900"></div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link href="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;