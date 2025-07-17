'use client';
import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import HeroSection from '@/components/common/HeroSection';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Link from 'next/link';
import ScrollToTop from '@/components/ui/ScrollToTop';
import Image from 'next/image';
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ScrollToTop />
      {/* About Section */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-12">
            <div className="w-full lg:w-1/2 order-2 lg:order-2 mb-6 lg:mb-0">
              <p className="text-accent font-medium mb-3">About Us</p>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-primary mb-3 sm:mb-5 leading-tight">
                Cortex Hospital - Excellence in Orthopaedic, Obstetric & Gynecological Care
              </h2>
              <p className="text-secondary-dark text-sm sm:text-base mb-5 leading-relaxed">
                At Cortex Hospital, we specialize in providing world-class orthopaedic, obstetric and gynecological care. Our multidisciplinary team combines advanced medical expertise with compassionate care to serve women's health needs and musculoskeletal wellness.
              </p>
              <div className="grid grid-cols-1 gap-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="bg-[#D4AF37] p-2.5 rounded-lg flex-shrink-0">
                    <Image src="/images/img_users.svg" alt="Expert orthopedists" width={20} height={20} className="invert" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-primary mb-1">Expert Orthopaedic Surgeons</h3>
                    <p className="text-secondary-dark text-xs sm:text-sm">Specialized care for bones, joints, and spine conditions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#D4AF37] p-2.5 rounded-lg flex-shrink-0">
                    <Image src="/images/img_thumbsup.svg" alt="Advanced Treatment" width={20} height={20} className="invert" />
                  </div>
                
<div>
  <h3 className="text-base sm:text-lg font-semibold text-primary mb-1">Comprehensive Obstetric & Gynecology</h3>
  <p className="text-secondary-dark text-xs sm:text-sm">Complete women's health services, maternity care, and reproductive health.</p>
</div>

                </div>
              </div>
            </div>
 
            <div className="w-full lg:w-1/2 order-1 lg:order-1">
              <div className="bg-primary rounded-lg h-64 sm:h-80 lg:h-full min-h-64 relative overflow-hidden">
                <Image 
                  src="/images/hospitalImage.jpg" 
                  alt="Cortex Hospital - Modern medical facility" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Video Section */}
      <section className="py-12 sm:py-16 lg:py-1 bg-primary relative">
        
        {/* Statistics */}
        <div className="bg-primary py-16 mt-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-semibold text-white mb-6">Cortex Hospital Statistics</h2>
             <p className="text-accent-light text-lg max-w-3xl mx-auto">
  Our commitment to excellence in orthopaedic, Obstetric and gynecological care is reflected in our proven track record of successful treatments, patient satisfaction, and medical achievements over the years.
</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-7xl font-semibold text-accent mb-4">50K+</h3>
                <p className="text-accent-light text-lg">Happy Patients</p>
              </div>
              <div>
                <h3 className="text-7xl font-semibold text-accent mb-4">20+</h3>
                <p className="text-accent-light text-lg">Years Of Experience </p>
              </div>
              <div>
                <h3 className="text-7xl font-semibold text-accent mb-4">34+</h3>
                <p className="text-accent-light text-lg">Awards Won</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <p className="text-accent font-medium mb-4">Our Services</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
       Comprehensive Orthopaedic, Obstetric & Gynecological Care
        </h2>
        <p className="text-gray-500 text-sm sm:text-base lg:text-lg mb-8 leading-relaxed">
          At Cortex Hospital, we bring together expert orthopaedic, Obstetric and gynecological care under one roof. From joint replacements and trauma surgery to maternity and fertility care, we provide holistic and personalized health solutions.
        </p>
      </div>
      <div className="space-y-8">
        <div className="flex items-start gap-6">
          <div className="bg-[#D4AF37] p-6 rounded-lg">
            <Image src="/images/ortho.png" alt="Joint Replacement" width={74} height={74} />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">Joint Replacement & Spine Surgery</h3>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Expert procedures for joint replacements and spinal care including fracture treatments and deformity correction.
            </p>
          </div>
        </div>
        <hr className="border-gray-300" />
        <div className="flex items-start gap-6">
          <div className="bg-[#D4AF37] p-6 rounded-lg">
            <Image src="/images/care.png" alt="Gynecology Services" width={74} height={74} />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">Maternity & Women's Health</h3>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Complete care for pregnancy, childbirth, fertility issues, and women's health including C-sections and surgeries.
            </p>
          </div>
        </div>
        <hr className="border-gray-300" />
        <div className="flex items-start gap-6">
          <div className="bg-[#D4AF37] p-6 rounded-lg">
            <Image src="/images/traumaCare.png" alt="Trauma" width={74} height={74} />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">Trauma Care & Pediatric Orthopedics</h3>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Emergency fracture care, pediatric orthopedics, Ilizarov surgery, digital X-ray, and arthritis management.
            </p>
          </div>
        </div>
        <div className="pt-4">
          <Link href="/services">
            <Button variant="primary" size="large" className="text-[#D4AF37]">
              All Services
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Team Section */}
      
      {/* Testimonials Section */}
      <section className="py-20 bg-[#0B1F44]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent font-medium mb-4">Testimonials</p>
              <h2 className="text-5xl font-semibold text-[#D4AF37] mb-6 leading-tight">
                What Our Patients Say About Cortex Hospital
              </h2>
              <div className="mb-8">
                <Image src="/images/img_icon.svg" alt="Quote icon" width={67} height={84} />
              </div>
             <p className="text-[#D4AF37] text-lg mb-8 leading-relaxed">
  "Honestly, I thought my sports days were over after my ACL injury. But the orthopaedic team at Cortex Hospital was amazing! They got me back on the field stronger than ever. The whole experience was smooth and the recovery was way faster than I expected. Totally recommend!"
</p>
              <div className="flex items-center gap-4">
                
                             <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-gray-900 rounded-full relative overflow-hidden">
                  <Image 
                    src="/images/patientImage.jpeg" 
                    alt="Nityom Tikhe - Patient" 
                    fill
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="text-2xl font-semibold text-[#D4AF37]">Nityom Tikhe</h4>
                  <p className="text-[#D4AF37]">Patient</p>
                </div>
              </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-900 rounded-lg h-96 lg:h-[550px] relative overflow-hidden">
                <Image 
                  src="/images/hospitalImage3.jpg" 
                  alt="Cortex Hospital - Patient testimonial" 
                  fill
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-medium mb-4">How It Works</p>
            <h2 className="text-5xl font-semibold text-gray-900 mb-6 leading-tight">
              Your Journey to Better Health at Cortex Hospital
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-[#D4AF37] p-6 rounded-lg w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Image src="/images/appointment.png" alt="Schedule appointment" width={44} height={44}  />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Book your Appointment</h3>
              <p className="text-gray-500 leading-relaxed">
                Book your appointment with our orthopaedic or gynecology specialists for comprehensive evaluation.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#D4AF37] p-6 rounded-lg w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Image src="/images/doctor.png" alt="Expert care" width={44} height={44}  />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Expert Medical Care</h3>
              <p className="text-gray-500 leading-relaxed">
                Receive personalized treatment from our experienced orthopaedic surgeons and gynecologists.
              </p>
            </div>
            <div className="text-center">     
              <div className="bg-[#D4AF37] p-6 rounded-lg w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Image src="/images/ortho.png" alt="Radiate confidence" width={44} height={44} />
        </div> 
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Complete Recovery</h3>
              <p className="text-gray-500 leading-relaxed">
                Experience full recovery and improved quality of life with our comprehensive care approach.
              </p>
            </div>
          </div>
          <div className="text-center">
            <Button variant="primary" size="large">
              Make Appointment
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}