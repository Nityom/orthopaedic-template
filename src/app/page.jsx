'use client';
import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import HeroSection from '@/components/common/HeroSection';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
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
          <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-12">
            <div className="w-full lg:w-1/2 order-1 lg:order-2 mb-6 lg:mb-0">
              <p className="text-accent font-medium mb-3">About Us</p>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-primary mb-3 sm:mb-5 leading-tight">
                Your Trusted Partner For Orthopedic Care
              </h2>
              <p className="text-secondary-dark text-sm sm:text-base mb-5 leading-relaxed">
                We provide comprehensive orthopedic care with state-of-the-art facilities and experienced specialists. Our team is dedicated to helping you regain mobility and live pain-free.
              </p>
              <div className="grid grid-cols-1 gap-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="bg-[#D4AF37] p-2.5 rounded-lg flex-shrink-0">
                    <Image src="/images/img_users.svg" alt="Expert orthopedists" width={20} height={20} className="invert" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-primary mb-1">Expert Orthopedists</h3>
                    <p className="text-secondary-dark text-xs sm:text-sm">Specialized care from experienced orthopedic surgeons.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#D4AF37] p-2.5 rounded-lg flex-shrink-0">
                    <Image src="/images/img_thumbsup.svg" alt="Advanced Treatment" width={20} height={20} className="invert" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-primary mb-1">Advanced Treatment</h3>
                    <p className="text-secondary-dark text-xs sm:text-sm">Latest technology and minimally invasive procedures.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block w-full lg:w-1/2 order-2 lg:order-1">
              <div className="bg-primary rounded-lg h-40 sm:h-56 lg:h-80 relative overflow-hidden">
              
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Video Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-primary relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative">
            <Image 
              src="/images/img_video_box.svg" 
              alt="Video background" 
              width={1140}
              height={600}
              className="w-full rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white rounded-full p-6 shadow-lg hover:scale-105 transition-transform">
                <div className="w-0 h-0 border-l-[20px] border-l-primary border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
              </button>
            </div>
          </div>
        </div>
        {/* Statistics */}
        <div className="bg-primary py-16 mt-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-semibold text-white mb-6">Cortex Hospital Statistics</h2>
              <p className="text-accent-light text-lg max-w-3xl mx-auto">
                Purus turpis vivamus sem est blandit. In at egestas id sollicitudin mattis integer aliquet ut tempor. Risus enim nisi ipsum imperdiet. Sed turpis tellus quisque tellus ipsum malesuada fringilla amet elit.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-7xl font-semibold text-accent mb-4">780+</h3>
                <p className="text-accent-light text-lg">Happy Patients</p>
              </div>
              <div>
                <h3 className="text-7xl font-semibold text-accent mb-4">560+</h3>
                <p className="text-accent-light text-lg">Online Appointments</p>
              </div>
              <div>
                <h3 className="text-7xl font-semibold text-accent mb-4">340+</h3>
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
              <p className="text-accent font-medium mb-4">Our Service</p>
              <h2 className="text-5xl font-semibold text-gray-900 mb-6 leading-tight">
                 Specialized Orthodontic Treatment
              </h2>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
               We offer advanced orthodontic solutions including braces, clear aligners, and retainers to correct misaligned teeth and jaw issues—improving function, appearance, and long-term oral health.
              </p>
              {/* <div className="bg-gray-900 rounded-lg h-80 relative">
          
              </div> */}
            </div>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-[#D4AF37] p-6 rounded-lg">
                  <Image src="/images/img_joint.svg" alt="Joint Replacement" width={44} height={44} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Joint Replacement</h3>
                  <p className="text-gray-500 leading-relaxed">
                    State-of-the-art joint replacement procedures for knees, hips, and shoulders.
                  </p>
                </div>
              </div>
              <hr className="border-gray-300" />
              <div className="flex items-start gap-6">
                <div className="bg-[#D4AF37] p-6 rounded-lg">
                  <Image src="/images/img_spine.svg" alt="Spine Surgery" width={44} height={44} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Spine Surgery</h3>
                  <p className="text-gray-500 leading-relaxed">
                    Advanced spinal procedures and minimally invasive techniques.
                  </p>
                </div>
              </div>
              <hr className="border-gray-300" />
              <div className="flex items-start gap-6">
                <div className="bg-[#D4AF37] p-6 rounded-lg">
                  <Image src="/images/img_sports.svg" alt="Sports Medicine" width={44} height={44} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Sports Medicine</h3>
                  <p className="text-gray-500 leading-relaxed">
                    Specialized care for sports-related injuries and rehabilitation.
                  </p>
                </div>
              </div>
              <div className="pt-4">
                <Button variant="primary" size="large" className='text-[#D4AF37]'>
                  All Services
                </Button>
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
                What Our Patients Say About Us
              </h2>
              <div className="mb-8">
                <Image src="/images/img_icon.svg" alt="Quote icon" width={67} height={84} />
              </div>
              <p className="text-[#D4AF37] text-lg mb-8 leading-relaxed">
                Purus turpis vivamus sem est blandit. In at egestas id sollicitudin mattis integer aliquet ut tempor. Risus enim nisi ipsum imperdiet. Sed turpis tellus quisque tellus ipsum malesuada.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-gray-900 rounded-full"></div>
                <div>
                  <h4 className="text-2xl font-semibold text-[#D4AF37]">Jose Turner</h4>
                  <p className="text-[#D4AF37]">Customer</p>
                </div>
              </div>
            </div>
            <div>
              <Image 
                src="/images/img_image.svg" 
                alt="Patient testimonial" 
                width={552}
                height={456}
                className="w-full rounded-lg"
              />
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
              Your Journey to a Healthy Smile Starts Here
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-[#D4AF37] p-6 rounded-lg w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Image src="/images/img_scedule.svg" alt="Schedule appointment" width={44} height={44} className="invert" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Make Appointment</h3>
              <p className="text-gray-500 leading-relaxed">
                Etiam fusce arcu ac auctor nisl purus consectetur. Eu viverra ultricies sit.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#D4AF37] p-6 rounded-lg w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Image src="/images/img_dentist.svg" alt="Expert care" width={44} height={44} className="invert" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Expert Orthodontic Treatment</h3>
              <p className="text-gray-500 leading-relaxed">
                Etiam fusce arcu ac auctor nisl purus consectetur. Eu viverra ultricies sit.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#D4AF37] p-6 rounded-lg w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Image src="/images/img_whitening.svg" alt="Radiate confidence" width={44} height={44} className="invert" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Radiate Confidence</h3>
              <p className="text-gray-500 leading-relaxed">
                Etiam fusce arcu ac auctor nisl purus consectetur. Eu viverra ultricies sit.
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