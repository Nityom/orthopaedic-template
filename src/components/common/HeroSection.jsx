'use client';
import React from 'react';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="bg-primary text-white py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <motion.p 
              className="text-xl font-semibold mb-4 text-accent"
              variants={itemVariants}
            >
              Cortex Hospital
            </motion.p>
            <motion.h1 
              className="text-5xl lg:text-7xl font-semibold mb-6 leading-tight"
              variants={itemVariants}
            >
              Excellence in Orthopaedic & Gynecology Care
            </motion.h1>
            <motion.p 
              className="text-lg text-accent-light mb-8 leading-relaxed"
              variants={itemVariants}
            >
              Experience world-class medical care with our expert teams in orthopaedics and gynecology. From joint replacements to women's health services, we're committed to providing comprehensive, compassionate care for your health needs.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link href="/contact">
                <Button variant="secondary" size="large">
                  Schedule Consultation
                  <Image src="/images/img_arrowright.svg" alt="Arrow" width={24} height={24} className="ml-2" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            variants={imageVariants}
          >
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <Image 
                src="/images/patient-image.jpg" 
                alt="Happy patient at Cortex Hospital" 
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full opacity-20"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.2, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            ></motion.div>
            <motion.div 
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full opacity-10"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative Elements */}
      <motion.div 
        className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      ></motion.div>
      <motion.div 
        className="absolute top-32 right-32 w-32 h-32 bg-white opacity-5"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.05, x: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      ></motion.div>
      <motion.div 
        className="absolute top-64 right-0 w-32 h-32 bg-white opacity-20"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.2, x: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-0 right-0 w-32 h-32 bg-accent/20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.2, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8 }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-0 right-32 w-32 h-32 bg-accent/30"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.3, y: 0 }}
        transition={{ delay: 1.3, duration: 0.8 }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-32 right-0 w-32 h-32 bg-accent/40"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.4, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      ></motion.div>
    </section>
  );
};

export default HeroSection;