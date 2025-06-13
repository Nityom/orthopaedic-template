'use client';
import React from 'react';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="bg-primary text-white py-12 md:py-16 lg:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p 
            className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-accent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Advanced Orthopedics
          </motion.p>
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-4 md:mb-6 leading-tight text-primary-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Move Better, Live Better
          </motion.h1>
          <motion.p 
            className="text-base md:text-lg text-accent-light mb-6 md:mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Experience world-class orthopedic care with our team of expert surgeons. 
            From joint replacements to sports injuries, we're committed to helping you 
            regain mobility and return to an active lifestyle.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Button variant="secondary" size="large" className="bg-[#D4AF37] hover:bg-[#D4AF39] w-full sm:w-auto">
              Schedule Consultation
              <Image src="/images/img_arrowright.svg" alt="Arrow" width={20} height={20} className="ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative Elements */}
      <motion.div 
        className="hidden md:block absolute top-0 right-0 w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 bg-white opacity-10"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 0.1 }}
        transition={{ duration: 0.8 }}
      />
      <motion.div 
        className="hidden md:block absolute top-16 md:top-24 lg:top-32 right-16 md:right-24 lg:right-32 w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 bg-white opacity-5"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 0.05 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      <motion.div 
        className="hidden md:block absolute top-32 md:top-48 lg:top-64 right-0 w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 bg-white opacity-20"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 0.2 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 bg-primary-light"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      <motion.div 
        className="absolute bottom-0 right-16 md:right-24 lg:right-32 w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 bg-accent"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      <motion.div 
        className="absolute bottom-16 md:bottom-24 lg:bottom-32 right-0 w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 bg-accent-dark"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
    </section>
  );
};

export default HeroSection;