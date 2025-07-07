'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import ScrollToTop from '@/components/ui/ScrollToTop';
import Image from 'next/image';
export default function ServicesPage() {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const services = [
    {
      icon: "/images/traumaCare.png",
      title: "Well Equipped Fracture & Trauma Care Unit",
      description: "State-of-the-art emergency trauma care with advanced equipment for immediate fracture treatment and stabilization.",
      additionalInfo: {
        features: [
          "24/7 emergency trauma services",
          "Advanced imaging and diagnostic equipment",
          "Immediate surgical intervention capabilities",
          "Specialized trauma team with experienced orthopedic surgeons"
        ],
        benefits: "Quick response time, comprehensive care, and advanced treatment protocols ensure optimal recovery outcomes."
      }
    },
    {
      icon: "/images/operation.png",
      title: "Advanced Operation Theatre Complex",
      description: "Modern operation theatres with laminar air flow systems ensuring sterile environment for all surgical procedures.",
      additionalInfo: {
        features: [
          "Laminar air flow technology",
          "State-of-the-art surgical equipment",
          "Digital monitoring systems",
          "Infection control protocols"
        ],
        benefits: "Reduced infection risk, improved surgical outcomes, and enhanced patient safety during all procedures."
      }
    },
    {
      icon: "/images/ortho.png",
      title: "Joint Replacement",
      description: "Comprehensive joint replacement procedures for hips, knees, and shoulders using latest minimally invasive techniques.",
      additionalInfo: {
        features: [
          "Hip, knee, and shoulder replacements",
          "Minimally invasive surgical techniques",
          "Computer-assisted surgery options",
          "Comprehensive rehabilitation programs"
        ],
        benefits: "Faster recovery, reduced pain, improved mobility, and long-lasting results with modern implant technology."
      }
    },
    {
      icon: "/images/limb.png",
      title: "Limb Lengthening & Deformity Correction",
      description: "Advanced procedures for limb lengthening and correction of bone deformities using modern surgical techniques.",
      additionalInfo: {
        features: [
          "Ilizarov and modern fixation systems",
          "Gradual lengthening protocols",
          "Deformity correction procedures",
          "Pediatric and adult treatments"
        ],
        benefits: "Improved limb alignment, enhanced mobility, and restored function with minimal complications."
      }
    },
    {
      icon: "/images/fractures.png",
      title: "Ilizarov Surgery",
      description: "Specialized Ilizarov external fixation techniques for complex fractures and bone reconstruction procedures.",
      additionalInfo: {
        features: [
          "External fixation systems",
          "Complex fracture treatment",
          "Bone reconstruction procedures",
          "Post-surgical monitoring and adjustment"
        ],
        benefits: "Effective treatment for complex cases, gradual correction, and preservation of limb function."
      }
    },
    {
      icon: "/images/spine.png",
      title: "Spine Surgery & Fracture Treatment",
      description: "Comprehensive spinal care including minimally invasive spine surgery and advanced fracture treatment.",
      additionalInfo: {
        features: [
          "Minimally invasive spine surgery",
          "Spinal fusion procedures",
          "Disc replacement surgery",
          "Vertebral fracture treatment"
        ],
        benefits: "Reduced surgical trauma, faster recovery, improved spinal stability, and pain relief."
      }
    },
    {
      icon: "/images/pediatrics.png",
      title: "Pediatric Orthopedic Care",
      description: "Specialized orthopedic care for children including growth-related disorders and congenital conditions.",
      additionalInfo: {
        features: [
          "Growth disorder treatment",
          "Congenital deformity correction",
          "Pediatric trauma care",
          "Developmental hip dysplasia treatment"
        ],
        benefits: "Specialized care for growing children, early intervention, and long-term developmental support."
      }
    },
    {
      icon: "/images/shoulder.png",
      title: "Arthroscopic Surgery",
      description: "Minimally invasive arthroscopic procedures for joint problems with faster recovery and reduced scarring.",
      additionalInfo: {
        features: [
          "Knee and shoulder arthroscopy",
          "Minimally invasive techniques",
          "Same-day surgery options",
          "Advanced arthroscopic equipment"
        ],
        benefits: "Smaller incisions, reduced pain, faster recovery, and minimal scarring compared to open surgery."
      }
    },
    {
      icon: "/images/knee.png",
      title: "Arthritis & Osteoporosis Management",
      description: "Comprehensive management of arthritis and osteoporosis with medication, therapy, and lifestyle guidance.",
      additionalInfo: {
        features: [
          "Medication management",
          "Physical therapy programs",
          "Lifestyle counseling",
          "Bone density monitoring"
        ],
        benefits: "Improved joint function, reduced pain, prevention of further bone loss, and enhanced quality of life."
      }
    },
    {
      icon: "/images/xray.png",
      title: "Digital X-ray & Pregnancy Care",
      description: "Advanced digital imaging and comprehensive antenatal and postnatal care for expectant mothers.",
      additionalInfo: {
        features: [
          "Digital X-ray systems",
          "Antenatal checkups",
          "Postnatal care",
          "Pregnancy monitoring"
        ],
        benefits: "Reduced radiation exposure, immediate results, comprehensive maternal care, and healthy pregnancy outcomes."
      }
    },

    {
      icon: "/images/surgery.png",
      title: "Cesarean & Surgical Procedures",
      description: "Expert cesarean delivery and gynecological surgical procedures with advanced surgical techniques.",
      additionalInfo: {
        features: [
          "Cesarean delivery",
          "Gynecological surgeries",
          "Laparoscopic procedures",
          "Post-operative care"
        ],
        benefits: "Safe delivery options, minimal invasive techniques, faster recovery, and comprehensive surgical care."
      }
    },
    {
      icon: "/images/infertility.png",
      title: "Infertility Prevention & Treatment",
      description: "Comprehensive fertility services including diagnosis, treatment, and counseling for reproductive health.",
      additionalInfo: {
        features: [
          "Fertility assessment",
          "Treatment protocols",
          "Counseling services",
          "Reproductive health guidance"
        ],
        benefits: "Improved conception chances, personalized treatment plans, emotional support, and comprehensive care."
      }
    },
  
    {
      icon: "/images/vagina.png",
      title: "Uterine Fibroid Surgery",
      description: "Advanced surgical treatment for uterine fibroids including minimally invasive laparoscopic procedures.",
      additionalInfo: {
        features: [
          "Laparoscopic fibroid removal",
          "Hysteroscopic procedures",
          "Minimally invasive techniques",
          "Fertility preservation options"
        ],
        benefits: "Reduced surgical trauma, faster recovery, preserved fertility, and effective symptom relief."
      }
    },
    {
      icon: "/images/sonography.png",
      title: "Sonography Center",
      description: "State-of-the-art ultrasound imaging for accurate diagnosis and monitoring of various conditions.",
      additionalInfo: {
        features: [
          "High-resolution ultrasound",
          "3D/4D imaging capabilities",
          "Doppler studies",
          "Immediate reporting"
        ],
        benefits: "Accurate diagnosis, non-invasive imaging, real-time results, and comprehensive monitoring."
      }
    },

    {
      icon: "/images/sexual.png",
      title: "Sexual Problem Treatment",
      description: "Confidential and professional treatment for sexual health issues with expert counseling and care.",
      additionalInfo: {
        features: [
          "Confidential consultations",
          "Professional counseling",
          "Medical treatment options",
          "Relationship therapy"
        ],
        benefits: "Improved sexual health, enhanced relationships, professional support, and confidential care."
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <p className="text-xl font-semibold mb-4 text-accent">Our Services</p>
            <h1 className="text-7xl font-semibold mb-6 leading-tight">
              Comprehensive Orthopaedic & Gynecology Care
            </h1>
            <p className="text-lg text-accent-light mb-8 leading-relaxed">
              From preventive care to advanced treatments, Cortex Hospital offers a full range of orthopaedic and gynecological services to support your health and well-being.
            </p>
          <Link href="/contact" passHref>
  <Button variant="secondary" size="large" asChild>
    <span className="flex items-center">
      Make Appointment
      <Image
        src="/images/img_arrowright.svg"
        alt="Arrow"
        width={24}
        height={24}
        className="ml-2"
      />
    </span>
  </Button>
</Link>
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

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-medium mb-4">Our Specialties</p>
            <h2 className="text-5xl font-semibold text-primary mb-6 leading-tight">
              Cortex Hospital Services
            </h2>
            <p className="text-secondary-dark text-lg max-w-3xl mx-auto">
              At Cortex Hospital, we provide comprehensive orthopaedic and gynecological services using the latest technology and techniques to ensure the best outcomes for our patients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <Card key={index} className={`p-8 hover:shadow-xl transition-all duration-300 ${
                expandedCard === index ? 'md:col-span-3 lg:col-span-3' : ''
              }`}>
                <div className="bg-[#0B1F44] p-6 rounded-lg w-20 h-20 mb-6 flex items-center justify-center">
                  <Image src={service.icon} alt={service.title} width={52} height={52} className='invert' />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                {/* Expanded content */}
                {expandedCard === index && (
                  <div className="border-t pt-6 mt-6 transition-all duration-300 ease-in-out">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                    <ul className="space-y-2 mb-6">
                      {service.additionalInfo.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="bg-[#D4AF37] p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg>
                          </div>
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Benefits:</h4>
                      <p className="text-gray-600 text-sm">{service.additionalInfo.benefits}</p>
                    </div>
                  </div>
                )}
                
                <button 
                  onClick={() => toggleCard(index)}
                  className="text-[#D4AF37] font-medium flex items-center hover:text-[#B8941F] transition-colors"
                >
                  {expandedCard === index ? 'Show Less' : 'Learn More'}
                  <Image 
                    src="/images/img_arrowright.svg" 
                    alt="Arrow" 
                    width={16} 
                    height={16} 
                    className={`ml-2 transition-transform duration-200 ${
                      expandedCard === index ? 'rotate-90' : ''
                    }`} 
                  />
                </button>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Service */}
      
      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent font-medium mb-4">Pricing & Charges</p>
            <h2 className="text-5xl font-semibold text-primary mb-6 leading-tight">
              Transparent Pricing Structure
            </h2>
            <p className="text-secondary-dark text-lg max-w-3xl mx-auto">
              At Cortex Hospital, we believe in transparent pricing. Below are our standard charges for various services and procedures.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Basic Services */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300">
              <div className="bg-[#0B1F44] p-6 rounded-lg w-20 h-16 mb-6 flex items-center justify-center">
                <Image src="/images/basic.png" alt="Basic Services" width={32} height={32} className='invert' />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Basic Services</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Registration Fee</span>
                  <span className="font-semibold text-gray-900">₹ 400</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Consultation Fee</span>
                  <span className="font-semibold text-gray-900">₹ 700</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Assistant Doctor Visit</span>
                  <span className="font-semibold text-gray-900">₹ 500</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Special Visit</span>
                  <span className="font-semibold text-gray-900">₹ 9,000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Discharge Charges</span>
                  <span className="font-semibold text-gray-900">₹ 700 - 1,000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">X-ray Services</span>
                  <span className="font-semibold text-gray-900">₹ 500 - 1,000+</span>
                </div>
                
               
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600 text-sm">*Charges vary by test type</span>
                  <Link href="/contact" className="text-accent font-medium text-sm hover:text-[#B8941F] transition-colors">
                    Contact for details
                  </Link>
                </div>
              </div>
            </Card>

            {/* Ward & Nursing */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300">
              <div className="bg-[#0B1F44] p-6 rounded-lg w-20 h-16 mb-6 flex items-center justify-center">
                <Image src="/images/nursing.png" alt="Ward Services" width={32} height={32} className='invert' />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Ward & Nursing</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Daily Admission (Non-AC)</span>
                  <span className="font-semibold text-gray-900">₹ 2,001</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Daily Admission (AC)</span>
                  <span className="font-semibold text-gray-900">₹ 2,901</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Nursing Charges (Per Day)</span>
                  <span className="font-semibold text-gray-900">₹ 800</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Dressing & Injection</span>
                  <span className="font-semibold text-gray-900">₹ 700</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Multipara Monitor</span>
                  <span className="font-semibold text-gray-900">₹ 700</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Sonography</span>
                  <span className="font-semibold text-gray-900">₹ 500 - 1,000+</span>
                </div>
              </div>
            </Card>

            {/* Surgery & Procedures */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300">
              <div className="bg-[#0B1F44] p-6 rounded-lg w-20 h-16 mb-6 flex items-center justify-center">
                <Image src="/images/surgery.png" alt="Surgery Services" width={32} height={32} className='invert' />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Surgery & Procedures</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Surgery Charges</span>
                  <span className="font-semibold text-gray-900">₹ 9,000+</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Anesthesia Charges</span>
                  <span className="font-semibold text-gray-900">₹ 9,000+</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Anesthesia Assistant</span>
                  <span className="font-semibold text-gray-900">₹ 2,000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600">Major Surgery Assistant</span>
                  <span className="font-semibold text-gray-900">₹ 2,000</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600 text-sm">*Charges vary as per surgery type</span>
                  <Link href="/contact" className="text-accent font-medium text-sm hover:text-[#B8941F] transition-colors">
                    Contact for details
                  </Link>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto">
              <h4 className="text-lg font-semibold text-blue-900 mb-2">Important Note</h4>
              <p className="text-blue-800 text-sm">
                All charges are subject to change without prior notice. For detailed pricing information and package deals, please contact our billing department or visit our hospital.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
