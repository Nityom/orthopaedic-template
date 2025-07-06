'use client';
import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { motion } from 'framer-motion';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-12 md:py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-3xl"
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
              Legal Information
            </motion.p>
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-4 md:mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Terms of Use
            </motion.h1>
            <motion.p 
              className="text-base md:text-lg text-accent-light mb-6 md:mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Please read these terms and conditions carefully before using our website and services.
            </motion.p>
          </motion.div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10"></div>
        <div className="absolute top-32 right-32 w-32 h-32 bg-white opacity-5"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/20"></div>
      </section>

      {/* Terms Content */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div 
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className="text-gray-500 mb-8">
              Last updated: July 10, 2025
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 mb-6">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              By accessing and using the Cortex Hospital website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 mb-6">2. Medical Disclaimer</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The information provided on this website is for general informational purposes only and is not intended as medical advice. Always consult with a qualified healthcare professional for medical diagnosis and treatment. Cortex Hospital does not provide medical advice, diagnosis, or treatment through this website.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 mb-6">3. Appointment Scheduling</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Online appointment requests are subject to availability and confirmation by our staff. We will contact you to confirm your appointment within 24 hours. Emergency medical situations should not be handled through our website - please call 911 or visit the nearest emergency room.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 mb-6">4. Privacy and Patient Information</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We are committed to protecting your privacy and maintaining the confidentiality of your health information in accordance with HIPAA regulations. Please review our Privacy Policy for detailed information about how we collect, use, and protect your personal and medical information.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 mb-6">5. Intellectual Property</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              All content on this website, including text, graphics, logos, images, and software, is the property of Cortex Hospital and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or use any content without our written permission.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 mb-6">6. Limitation of Liability</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Cortex Hospital shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of this website or services. This includes, but is not limited to, damages for loss of profits, data, or other intangible losses.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 mb-6">7. User Conduct</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              You agree to use our website and services only for lawful purposes and in accordance with these terms. You may not use our services to transmit harmful, offensive, or inappropriate content, or to violate any applicable laws or regulations.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 mb-6">8. Changes to Terms</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on this website. Your continued use of our services after any changes constitutes acceptance of the new terms.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 mb-6">9. Contact Information</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              If you have any questions about these Terms of Use, please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="text-gray-700 mb-2"><strong>Cortex Hospital</strong></p>
              <p className="text-gray-700 mb-2">123 Medical Plaza, Healthcare District</p>
              <p className="text-gray-700 mb-2">City 12345, United States</p>
              <p className="text-gray-700 mb-2">Phone: +1 (555) 123-4567</p>
              <p className="text-gray-700">Email: legal@cortexhospital.com</p>
            </div>

            <h2 className="text-3xl font-semibold text-gray-900 mb-6">10. Governing Law</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              These terms shall be governed by and construed in accordance with the laws of the State in which Cortex Hospital is located, without regard to its conflict of law provisions.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
