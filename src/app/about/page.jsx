'use client';
import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import ScrollToTop from '@/components/ui/ScrollToTop';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ScrollToTop />
        {/* Hero Section */}
      <section className="bg-primary text-white py-12 md:py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p 
              className="text-lg md:text-xl font-semibold mb-3 md:mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              About Us
            </motion.p>
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-4 md:mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Cortex Hospital: Excellence in Orthopaedic & Gynecology Care
            </motion.h1>
            <motion.p 
              className="text-base md:text-lg text-gray-300 mb-6 md:mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              With over 15 years of experience, Cortex Hospital has been delivering exceptional orthopaedic and gynecological care, helping patients achieve optimal health and quality of life.
            </motion.p>
          </motion.div>
        </div>
        
        {/* Decorative Elements */}
        <motion.div 
          className="hidden md:block absolute top-0 right-0 w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 bg-white opacity-10"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.1 }}
          transition={{ duration: 0.8 }}
        ></motion.div>
        <motion.div 
          className="hidden md:block absolute top-16 md:top-24 lg:top-32 right-16 md:right-24 lg:right-32 w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 bg-white opacity-5"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.05 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        ></motion.div>
        <motion.div 
          className="hidden md:block absolute top-32 md:top-48 lg:top-64 right-0 w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 bg-white opacity-20"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.2 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-0 right-0 w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 bg-primary-light"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-0 right-16 md:right-24 lg:right-32 w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 bg-accent"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-16 md:bottom-24 lg:bottom-32 right-0 w-16 md:w-24 lg:w-32 h-16 md:h-24 lg:h-32 bg-accent-dark"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        ></motion.div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-gray-900 font-medium mb-3 md:mb-4">Our Story</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-4 md:mb-6 leading-tight">
                The Journey of Cortex Hospital
              </h2>
              <p className="text-gray-500 text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
                Founded in 2016, Cortex Hospital began with a clear mission: to provide comprehensive orthopaedic and gynecological care under one roof. Dr. Vipin Raut and Dr. Shilpa Raut started the practice with a focus on women's health and musculoskeletal wellness.
              </p>
              <p className="text-gray-500 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                Today, we've evolved into a leading medical facility specializing in orthopaedic surgery and gynecological care, but our core mission remains unchanged - delivering personalized, compassionate care that helps patients achieve optimal health and well-being.
              </p>
              <Button variant="primary" size="large" className="w-full sm:w-auto">
                Our Services
              </Button>
            </div>
            <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="bg-gray-900 rounded-lg h-64 sm:h-80 lg:h-96 relative overflow-hidden">
                <Image 
                  src="/images/hospitalImage1.jpg" 
                  alt="Cortex Hospital - Our Story" 
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <p className="text-accent font-medium mb-3 md:mb-4">Our Values</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-4 md:mb-6 leading-tight">
              What Makes Us Different
            </h2>
           <p className="text-gray-500 text-base md:text-lg max-w-3xl mx-auto">
  At Cortex Hospital, our core values shape every aspect of our orthopaedic and gynecological care. They guide how we treat each patient, support our community, and collaborate as a team to ensure excellence and compassion.
</p>

          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card className="text-center p-6 md:p-8">
              <div className="bg-primary p-4 md:p-6 rounded-lg w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 flex items-center justify-center">
                <Image src="/images/img_thumbsup.svg" alt="Excellence" width={30} height={30} />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">Excellence</h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                We maintain the highest standards in orthopaedic and gynecological care through advanced technology and evidence-based treatments.
              </p>
            </Card>
              <Card className="text-center p-6 md:p-8">
              <div className="bg-primary p-4 md:p-6 rounded-lg w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 flex items-center justify-center">
                <Image src="/images/img_users.svg" alt="Patient-centered care" width={30} height={30} />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">Patient-Centered</h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                We develop personalized treatment plans that consider each patient's unique needs, lifestyle, and health goals.
              </p>
            </Card>
            
            <Card className="text-center p-6 md:p-8">
              <div className="bg-primary p-4 md:p-6 rounded-lg w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 flex items-center justify-center">
                <Image src="/images/img_icon.svg" alt="Integrity" width={30} height={30} />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">Innovation</h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                We stay at the forefront of medical care, embracing new techniques and technologies for better patient outcomes in both orthopaedics and gynecology.
              </p>
            </Card>
          </div>
        </div>
      </section>
        {/* Our Team Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <p className="text-gray-300 font-medium mb-3 md:mb-4">Our Team</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4 md:mb-6 leading-tight">
              Meet Our Medical Specialists
            </h2>
            <p className="text-gray-200 text-base md:text-lg max-w-4xl mx-auto">
              Our team is composed of skilled orthopaedic surgeons and gynecologists dedicated to providing comprehensive care with precision, expertise, and compassion.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 max-w-6xl w-full">
              {[
                { name: "Dr. Vipin Raut", specialty: "Orthopaedic Surgeon", image: "/images/doctor1.jpg" },
                { name: "Dr. Smita Raut", specialty: "Gynecologist & Obstetrician", image: "/images/doctor2.jpg" },
              ].map((doctor, index) => (
                <Card key={index} className="bg-white rounded-lg overflow-hidden w-[40]">
                  <div className="bg-gray-900 h-56 sm:h-64 md:h-80 relative">
                    {doctor.image ? (
                      <Image 
                        src={doctor.image} 
                        alt={doctor.name} 
                        fill
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                        [Doctor Photo]
                      </div>
                    )}
                  </div>
                  <div className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">{doctor.name}</h3>
                    <p className="text-accent text-base sm:text-lg mb-4 sm:mb-6">{doctor.specialty}</p>
                    <div className="flex gap-3">
                      <div className="bg-accent p-2 sm:p-3 rounded-lg">
                        <Image src="/images/img_facebook.svg" alt="Facebook" width={20} height={20} />
                      </div>
                      <div className="bg-accent p-2 sm:p-3 rounded-lg">
                        <Image src="/images/img_linkedin.svg" alt="LinkedIn" width={20} height={20} />
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
        {/* Facility Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <p className="text-gray-900 font-medium mb-3 md:mb-4">Our Facility</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-4 md:mb-6 leading-tight">
              State-of-the-Art Medical Center
            </h2>
            <p className="text-gray-500 text-base md:text-lg max-w-3xl mx-auto">
              Our modern facility is equipped with advanced diagnostic and treatment technology to provide comprehensive orthopaedic and gynecological care in a comfortable, welcoming environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-gray-900 rounded-lg h-58 sm:h-56 md:h-64 relative overflow-hidden">
              <Image 
                src="/images/hospitalImage.jpg" 
                alt="Reception Area" 
                fill
                className="object-cover w-full h-full"
              />
            </div>
            <div className="bg-gray-900 rounded-lg h-48 sm:h-56 md:h-64 relative">
              {/* Facility image placeholder */}
                <Image 
                src="/images/hospitalImage1.jpg" 
                alt="Reception Area" 
                fill
                className="object-cover w-full h-full"
              />
            </div>
            <div className="bg-gray-900 rounded-lg h-48 sm:h-56 md:h-64 relative sm:col-span-2 lg:col-span-1">
              {/* Facility image placeholder */}
             <Image 
                src="/images/hospitalImage2.png" 
                alt="Reception Area" 
                fill
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          
          <div className="text-center mt-8 md:mt-12">
            <Button variant="primary" size="large" className="w-full sm:w-auto">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
        {/* Testimonials Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <p className="text-accent font-medium mb-3 md:mb-4">Testimonials</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-4 md:mb-6 leading-tight">
              What Our Patients Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                review: "Dr. Vipin Raut performed my knee replacement surgery with exceptional skill. The entire orthopaedic team was professional and caring throughout my recovery. I'm now pain-free and back to my daily activities. Highly recommended!",
                name: "Rajesh Sharma",
                title: "Knee Surgery Patient",
                image: "/images/patient1.png"
              },
              {
                review :"I went to the gynecology department at Cortex Hospital for a check-up, and Dr. Shilpa Raut and her team were really kind and supportive. They made me feel comfortable and took my concerns seriously",
                name: "Priya Patel",
                title: "Gynac Patient",
                image: "/images/patient3.png"
              },
              {
                review: "After my shoulder injury, I was worried about my recovery. The physiotherapy and orthopaedic care here exceeded my expectations. The staff is knowledgeable, facilities are modern, and the treatment approach is comprehensive.",
                name: "Amit Kumar",
                title: "Shoulder Treatment Patient",
                image: "/images/patient2.png"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 md:p-8">
                <div className="mb-4 md:mb-6">
                  <Image src="/images/img_iconn.svg" alt="Quote" width={30} height={30} />
                </div>
                <p className="text-gray-500 text-sm md:text-base mb-6 md:mb-8 leading-relaxed">
                  "{testimonial.review}"
                </p>
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-300 rounded-full relative overflow-hidden">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      fill
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm md:text-base">{testimonial.name}</h4>
                    <p className="text-gray-500 text-xs md:text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
