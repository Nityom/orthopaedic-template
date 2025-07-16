'use client';
import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import ScrollToTop from '@/components/ui/ScrollToTop';
import Image from 'next/image';
import LazyImage from '@/components/ui/LazyImage';
import LazyIcon from '@/components/ui/LazyIcon';
import LazyMap from '@/components/ui/LazyMap';
import ContactForm from '@/components/common/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ScrollToTop />
      {/* Hero Section */}
      <section className="bg-primary text-white py-12 md:py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <p className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-accent">Contact Us</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-4 md:mb-6 leading-tight">
              Get In Touch With Cortex Hospital
            </h1>
            <p className="text-base md:text-lg text-accent-light mb-6 md:mb-8 leading-relaxed">
              Have questions about our orthopaedic or gynecological services? Ready to schedule an appointment? Reach out to our friendly team today.
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10"></div>
        <div className="absolute top-32 right-32 w-32 h-32 bg-white opacity-5"></div>
        <div className="absolute top-64 right-0 w-32 h-32 bg-white opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/20"></div>
        <div className="absolute bottom-0 right-32 w-32 h-32 bg-accent/30"></div>
        <div className="absolute bottom-32 right-0 w-32 h-32 bg-accent/40"></div>
      </section>
      
      {/* Contact Information & Form Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <p className="text-accent font-medium mb-4">Contact Information</p>
              <h2 className="text-4xl font-semibold text-primary mb-8 leading-tight">
                Cortex Hospital is Here For You
              </h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-6">
                  <div className="bg-primary p-4 rounded-lg">
                    <LazyIcon 
                      src="/images/img_mappin.svg" 
                      alt="Location"
                      size={24}
                      className="invert"
                      priority={true}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Cortex Hospital</h3>
                    <p className="text-gray-500">
                     Cortex Hospital, Beside Urich Mall, <br />
                     Aarti Square,Mohini Nagar, Nagpur Road<br />
                      Wardha(M.S)-442001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="bg-primary p-4 rounded-lg">
                    <LazyIcon 
                      src="/images/img_phone.svg" 
                      alt="Phone" 
                      size={24}
                      className="invert"
                      priority={true}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
                    <p className="text-gray-500">
                      +91 9373280505<br />
                      Monday - Saturday:<br /> Morning: 10:00 AM - 1:00 PM<br />
                      Evening: 6:00 PM - 7:30 PM<br />
                      Sunday Closed
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="bg-primary p-4 rounded-lg">
                    <LazyIcon 
                      src="/images/img_mail.svg" 
                      alt="Email" 
                      size={24}
                      className="invert"
                      priority={true}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
                    <p className="text-gray-500">
                      drvipeenraut@cortexhospital.com<br />
                      drshillparaut@cortexhospital.com
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <div className="bg-gray-200 p-3 rounded-lg hover:bg-[#0B1F44] hover:text-white transition-colors cursor-pointer will-change-transform">
                    <LazyIcon src="/images/img_facebook.svg" alt="Facebook" size={24} />
                  </div>
                  <div className="bg-gray-200 p-3 rounded-lg hover:bg-[#0B1F44] hover:text-white transition-colors cursor-pointer will-change-transform">
                    <LazyIcon src="/images/img_twitter.svg" alt="Twitter" size={24} />
                  </div>
                  <div className="bg-gray-200 p-3 rounded-lg hover:bg-[#0B1F44] hover:text-white transition-colors cursor-pointer will-change-transform">
                    <LazyIcon src="/images/img_linkedin.svg" alt="LinkedIn" size={24} />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>      {/* Office Hours Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-medium mb-4">Office Hours</p>
            <h2 className="text-4xl font-semibold text-gray-900 mb-6 leading-tight">
              When You Can Visit Us
            </h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto">
              We offer flexible hours to accommodate your busy schedule. Emergency appointments are also available.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Regular Hours</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Monday - Saturday</span>
                  <span className="text-gray-500">Morning: 10:00 AM - 1:00 PM</span>
                </li>
                <li className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="font-medium text-gray-900">Monday - Saturday</span>
                  <span className="text-gray-500">Evening: 6:00 PM - 7:30 PM</span>
                </li>
                <li className="flex justify-between items-center pb-4">
                  <span className="font-medium text-gray-900">Sunday</span>
                  <span className="text-gray-500">Closed</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-8 bg-primary text-white">
              <h3 className="text-2xl font-semibold mb-6 text-center">Emergency Care</h3>
              <p className="mb-6 leading-relaxed">
                Orthopaedic and gynecological emergencies can occur unexpectedly. If you're experiencing significant discomfort or urgent medical issues, please contact our emergency number immediately.
              </p>
              <div className="text-center p-4 bg-primary-light rounded-lg mb-6">
                <p className="text-xl font-semibold">Emergency Hotline</p>
                <p className="text-2xl font-bold text-accent">+91 9373280505</p>
              </div>
              <p className="text-sm text-center text-gray-200">
                *Available during regular hours for urgent consultations
              </p>
            </Card>
          </div>
        </div>
      </section>      {/* Map Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-teal-800 font-medium mb-4">Our Location</p>
            <h2 className="text-4xl font-semibold text-gray-900 mb-6 leading-tight">
              Find Our Cortex Hospital
            </h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto">
              We are conveniently located in the heart of Wardha City, with easy access to public transportation and ample parking space.
            </p>
          </div>
          
          <div className="bg-gray-200 rounded-lg h-96 relative">
            {/* Map with lazy loading */}
            <LazyMap
              src="https://www.google.com/maps?q=Cortex+Hospital,+PJX4%2BJ2Q,+Nagpur+Rd,+Sudampuri,+Wardha,+Maharashtra+442001&output=embed"
              className="overflow-hidden rounded-lg h-96 w-full"
            />
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-[#0B1F44] p-3 rounded-full">
                <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-gray-500">Free Parking Available</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[#0B1F44] p-3 rounded-full">
                <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-gray-500">Near Public Transportation</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-[#0B1F44] p-3 rounded-full">
                <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-gray-500">Wheelchair Accessible</span>
            </div>
          </div>
        </div>
      </section>
        {/* FAQ Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-16">
      <p className="text-accent font-medium mb-4">Frequently Asked Questions</p>
      <h2 className="text-4xl font-semibold text-gray-900 mb-6 leading-tight">
        Common Questions
      </h2>
      <p className="text-gray-500 text-lg max-w-3xl mx-auto">
        Find answers to the most frequently asked questions about our services and appointments.
      </p>
    </div>
    
    <div className="max-w-3xl mx-auto">
      <div className="space-y-4">
        {[
          {
            question: "How do I schedule an appointment?",
            answer: "You can schedule an appointment by calling our office at +91 9373280505, using the contact form on our website, or sending us an email. We'll respond as soon as possible to confirm your orthopaedic or gynecological consultation."
          },
          {
            question: "Do you accept medical insurance?",
            answer: "Yes, we accept most major medical insurance plans. Please contact our office to confirm coverage with your specific provider and plan for orthopaedic and gynecological services."
          },
          {
            question: "What should I bring to my first appointment?",
            answer: "Please bring your ID, insurance card, completed patient intake forms (available on our website), and any previous medical records, X-rays, or test results related to your condition."
          },
          {
            question: "What are your office hours?",
            answer: "We are open Monday through Saturday with morning hours from 10:00 AM - 1:00 PM and evening hours from 6:00 PM - 7:30 PM. We are closed on Sundays."
          },
          {
            question: "Do you handle emergency cases?",
            answer: "Yes, we handle orthopaedic and gynecological emergencies during our regular office hours. Please call +91 9373280505 immediately for urgent medical situations."
          },
          {
            question: "What payment methods do you accept?",
            answer: "We accept cash, UPI and offer flexible financing options for treatments."
          }
        ].map((faq, index) => (
          <details key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <summary className="cursor-pointer p-6 hover:bg-gray-50 transition-colors list-none">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <span className="text-gray-400 text-xl flex-shrink-0">+</span>
              </div>
            </summary>
            <div className="px-6 pb-6">
              <p className="text-gray-500 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </details>
        ))}
      </div>
    </div>
  </div>
</section>
      
      {/* CTA Section */}
     
      <Footer />
    </div>
  );
}