'use client';
import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';
import { motion } from 'framer-motion';

export default function PrivacyPage() {
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
              Your Privacy Matters
            </motion.p>
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-4 md:mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Privacy Policy
            </motion.h1>
            <motion.p 
              className="text-base md:text-lg text-accent-light mb-6 md:mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Learn how we protect and handle your personal and medical information.
            </motion.p>
          </motion.div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10"></div>
        <div className="absolute top-32 right-32 w-32 h-32 bg-white opacity-5"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/20"></div>
      </section>

      {/* Privacy Content */}
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

            <h2 className="text-3xl font-semibold text-gray-900 mb-6">1. Introduction</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Cortex Hospital, we are committed to protecting your privacy and maintaining the confidentiality of your personal and medical information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 mb-6">2. HIPAA Compliance</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              As a healthcare provider, Cortex Hospital is required to comply with the Health Insurance Portability and Accountability Act (HIPAA). We maintain strict policies and procedures to protect your Protected Health Information (PHI) and will only use or disclose your health information as permitted by law.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 mb-6">3. Information We Collect</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We may collect the following types of information:
            </p>
            <ul className="text-gray-600 mb-6 leading-relaxed list-disc pl-6">
              <li><strong>Personal Information:</strong> Name, address, phone number, email address, date of birth, social security number</li>
              <li><strong>Medical Information:</strong> Medical history, treatment records, test results, insurance information</li>
              <li><strong>Website Usage:</strong> IP address, browser type, pages visited, time spent on site</li>
              <li><strong>Payment Information:</strong> Billing address, payment method details (processed securely)</li>
            </ul>

            <h2 className="text-3xl font-semibold text-gray-900 mb-6">4. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We use your information for the following purposes:
            </p>
            <ul className="text-gray-600 mb-6 leading-relaxed list-disc pl-6">
              <li>Providing medical care and treatment</li>
              <li>Scheduling appointments and managing your care</li>
              <li>Processing payments and insurance claims</li>
              <li>Communicating with you about your healthcare</li>
              <li>Improving our services and website functionality</li>
              <li>Complying with legal and regulatory requirements</li>
            </ul>

            <h2 className="text-3xl font-semibold text-gray-900 mb-6">5. Information Sharing and Disclosure</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We may share your information in the following circumstances:
            </p>
            <ul className="text-gray-600 mb-6 leading-relaxed list-disc pl-6">
              <li><strong>Healthcare Operations:</strong> With healthcare providers involved in your care</li>
              <li><strong>Legal Requirements:</strong> When required by law or court order</li>
              <li><strong>Insurance:</strong> With your insurance company for payment and coverage determination</li>
              <li><strong>Business Associates:</strong> With third-party vendors who help us provide services (under strict confidentiality agreements)</li>
              <li><strong>Emergency Situations:</strong> When necessary to prevent serious harm to you or others</li>
            </ul>

            <h2 className="text-3xl font-semibold text-gray-900 mb-6">6. Data Security</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, access controls, and regular security audits. However, no method of transmission over the internet is 100% secure.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 mb-6">7. Your Rights</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Under HIPAA and other applicable laws, you have the following rights:
            </p>
            <ul className="text-gray-600 mb-6 leading-relaxed list-disc pl-6">
              <li><strong>Access:</strong> You can request access to your medical records</li>
              <li><strong>Amendment:</strong> You can request corrections to your health information</li>
              <li><strong>Restriction:</strong> You can request limits on how we use your information</li>
              <li><strong>Confidential Communication:</strong> You can request communication through specific means</li>
              <li><strong>Accounting:</strong> You can request a list of disclosures we have made</li>
              <li><strong>Complaint:</strong> You can file a complaint if you believe your privacy rights have been violated</li>
            </ul>

            <h2 className="text-3xl font-semibold text-gray-900 mb-6">8. Cookies and Tracking</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our website uses cookies and similar tracking technologies to enhance your browsing experience and analyze website usage. You can control cookie settings through your browser preferences. Some features of our website may not function properly if cookies are disabled.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 mb-6">9. Third-Party Links</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 mb-6">10. Children's Privacy</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13 without parental consent. If you believe we have inadvertently collected such information, please contact us immediately.
            </p>

        
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
