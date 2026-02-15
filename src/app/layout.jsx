'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { preloadCriticalResources, optimizeWebVitals, optimizeScrollPerformance } from '../utils/performance';
import '../styles/index.css';

// Metadata is moved to a separate constant since we're using 'use client'
const siteMetadata = {
  title: 'Cortex Hospital - Premier Orthopaedic, Obstetric & Gynecological Care in Wardha | Dr. Vipeen Raut & Dr. Shillpa Raut',
  description: 'Cortex Hospital is Wardha\'s leading healthcare facility specializing in advanced orthopaedic surgery, comprehensive obstetric care, and expert gynecological treatments. Founded by renowned specialists Dr. Vipeen Raut (MS Orthopaedics) and Dr. Shillpa Raut (MD Gynecology), we provide world-class medical services including joint replacement surgery, spine treatments, fracture care, high-risk pregnancy management, infertility treatments, and minimally invasive gynecological procedures. Located at Nagpur Road, Wardha, we serve patients across Maharashtra with state-of-the-art facilities, 24/7 emergency care, and personalized treatment plans for optimal patient outcomes.',
  keywords: 'Cortex Hospital Wardha, Dr Vipeen Raut orthopaedic surgeon, Dr Shillpa Raut gynecologist, best orthopaedic hospital Wardha, top gynecologist Wardha, joint replacement surgery Wardha, spine surgery specialist, fracture treatment, pregnancy care Wardha, infertility treatment, laparoscopic surgery, arthroscopic surgery, bone specialist Wardha, women health care, maternity hospital Wardha, emergency orthopaedic care, pediatric orthopaedics, sports injury treatment, knee replacement, hip replacement, cesarean delivery, normal delivery, high risk pregnancy, PCOD treatment, endometriosis treatment, fibroid surgery, ovarian cyst treatment',
  author: 'Cortex Hospital - Dr. Vipeen Raut & Dr. Shillpa Raut',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  openGraph: {
    title: 'Cortex Hospital - Premier Healthcare Facility in Wardha | Expert Ortho & Gynec Care',
    description: 'Experience world-class orthopaedic and gynecological care at Cortex Hospital, Wardha. Dr. Vipeen Raut (MS Orthopaedics) and Dr. Shillpa Raut (MD Gynecology) provide advanced treatments including joint replacement, spine surgery, high-risk pregnancy care, and minimally invasive procedures with state-of-the-art technology.',
    url: 'https://www.cortexhospital.com/',
    siteName: 'Cortex Hospital Wardha',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.cortexhospital.com/images/hospitalImage.jpg',
        width: 1200,
        height: 630,
        alt: 'Cortex Hospital - Premier Healthcare Facility in Wardha'
      }
    ]
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon', sizes: '32x32' },
      { url: '/favicon.ico', type: 'image/x-icon', sizes: '16x16' }
    ],
  },
};

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Performance optimizations
  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      preloadCriticalResources();
      optimizeWebVitals();
      const cleanupScroll = optimizeScrollPerformance();
      
      // Cleanup function
      return () => {
        if (cleanupScroll) {
          cleanupScroll();
        }
      };
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <title>{siteMetadata.title}</title>
        <meta name="google-adsense-account" content="ca-pub-2118846061564540" />
        <meta name="description" content={siteMetadata.description} />
        <meta name="keywords" content={siteMetadata.keywords} />
        <meta name="author" content={siteMetadata.author} />
        <meta name="robots" content={siteMetadata.robots} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={siteMetadata.openGraph.title} />
        <meta property="og:description" content={siteMetadata.openGraph.description} />
        <meta property="og:url" content={siteMetadata.openGraph.url} />
        <meta property="og:site_name" content={siteMetadata.openGraph.siteName} />
        <meta property="og:locale" content={siteMetadata.openGraph.locale} />
        <meta property="og:type" content={siteMetadata.openGraph.type} />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@CortexHospital" />
        <meta name="twitter:creator" content="@CortexHospital" />
        <meta name="twitter:title" content={siteMetadata.openGraph.title} />
        <meta name="twitter:description" content={siteMetadata.openGraph.description} />
        <meta name="twitter:image" content="https://www.cortexhospital.com/images/hospitalImage.jpg" />
        <meta name="twitter:image:alt" content="Cortex Hospital - Premier Healthcare Facility in Wardha" />
        
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hospital",
              "name": "Cortex Hospital",
              "description": "Cortex Hospital is a premier healthcare facility in Wardha, Maharashtra, specializing in advanced orthopaedic surgery, comprehensive obstetric care, and expert gynecological treatments. Our state-of-the-art hospital is equipped with modern medical technology and staffed by highly qualified specialists including Dr. Vipeen Raut (MS Orthopaedics) and Dr. Shillpa Raut (MD Gynecology & Obstetrics). We provide comprehensive healthcare services including joint replacement surgery, spine treatments, arthroscopic procedures, fracture care, pregnancy management, infertility treatments, laparoscopic surgery, and 24/7 emergency care.",
              "url": "https://www.cortexhospital.com/",
              "telephone": ["+91 9373280505", "+91 7184273030"],
              "email": "drvipeenraut@cortexhospital.com",
              "image": "https://www.cortexhospital.com/images/hospitalImage.jpg",
              "logo": "https://www.cortexhospital.com/images/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Beside Urich Mall, Aarti Square, Mohini Nagar, Nagpur Road",
                "addressLocality": "Wardha",
                "addressRegion": "Maharashtra",
                "postalCode": "442001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "20.7513",
                "longitude": "78.6023"
              },
              "openingHours": [
                "Mo-Sa 10:00-13:00",
                "Mo-Sa 18:00-19:30"
              ],
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "10:00",
                  "closes": "13:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "18:00",
                  "closes": "19:30"
                }
              ],
              "medicalSpecialty": ["Orthopedics", "Obstetrics", "Gynecology", "Spine Surgery", "Joint Replacement", "Arthroscopic Surgery", "Infertility Treatment"],
              "availableService": [
                {
                  "@type": "MedicalProcedure",
                  "name": "Joint Replacement Surgery",
                  "description": "Advanced knee and hip replacement procedures"
                },
                {
                  "@type": "MedicalProcedure",
                  "name": "Spine Surgery",
                  "description": "Comprehensive spine treatments and surgical procedures"
                },
                {
                  "@type": "MedicalProcedure",
                  "name": "Arthroscopic Surgery",
                  "description": "Minimally invasive joint surgery procedures"
                },
                {
                  "@type": "MedicalProcedure",
                  "name": "Fracture Treatment",
                  "description": "Expert bone fracture care and rehabilitation"
                },
                {
                  "@type": "MedicalProcedure",
                  "name": "Pregnancy Care",
                  "description": "Comprehensive prenatal, delivery, and postnatal care"
                },
                {
                  "@type": "MedicalProcedure",
                  "name": "Infertility Treatment",
                  "description": "Advanced reproductive health and fertility treatments"
                },
                {
                  "@type": "MedicalProcedure",
                  "name": "Laparoscopic Surgery",
                  "description": "Minimally invasive gynecological procedures"
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Medical Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalProcedure",
                      "name": "Orthopaedic Surgery"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalProcedure",
                      "name": "Gynecological Care"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalProcedure",
                      "name": "Obstetric Care"
                    }
                  }
                ]
              },
              "physician": [
                {
                  "@type": "Physician",
                  "name": "Dr. Vipeen Raut",
                  "honorificPrefix": "Dr.",
                  "givenName": "Vipeen",
                  "familyName": "Raut",
                  "medicalSpecialty": ["Orthopedic Surgery", "Joint Replacement", "Spine Surgery", "Arthroscopic Surgery"],
                  "description": "Dr. Vipeen Raut is a highly qualified orthopaedic surgeon with MS in Orthopaedics, specializing in joint replacement surgery, spine treatments, arthroscopic procedures, and fracture care. With years of experience, he provides expert orthopaedic care using the latest surgical techniques and technology.",
                  "alumniOf": "Medical College",
                  "memberOf": "Indian Orthopaedic Association"
                },
                {
                  "@type": "Physician",
                  "name": "Dr. Shillpa Raut",
                  "honorificPrefix": "Dr.",
                  "givenName": "Shillpa",
                  "familyName": "Raut",
                  "medicalSpecialty": ["Gynecology", "Obstetrics", "Infertility Treatment", "Laparoscopic Surgery"],
                  "description": "Dr. Shillpa Raut is an experienced gynecologist and obstetrician with MD in Gynecology & Obstetrics. She specializes in comprehensive women's healthcare, high-risk pregnancy management, infertility treatments, and minimally invasive gynecological procedures.",
                  "alumniOf": "Medical College",
                  "memberOf": "Federation of Obstetric and Gynaecological Societies of India"
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "150",
                "bestRating": "5",
                "worstRating": "1"
              },
              "priceRange": "₹₹",
              "paymentAccepted": ["Cash", "Credit Card", "Insurance"],
              "currenciesAccepted": "INR"
            })
          }}
        />
        
        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Wardha, Maharashtra" />
        <meta name="geo.position" content="20.7513;78.6023" />
        <meta name="ICBM" content="20.7513, 78.6023" />
        
        {/* Hospital-specific Meta Tags */}
        <meta name="hospital.name" content="Cortex Hospital" />
        <meta name="hospital.specialty" content="Orthopaedic Surgery, Gynecology, Obstetrics" />
        <meta name="hospital.doctors" content="Dr. Vipeen Raut, Dr. Shillpa Raut" />
        <meta name="hospital.location" content="Wardha, Maharashtra" />
        <meta name="hospital.services" content="Joint Replacement, Spine Surgery, Pregnancy Care, Infertility Treatment" />
        
        {/* Language and Content Meta Tags */}
        <meta httpEquiv="content-language" content="en-US" />
        <meta name="language" content="English" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Mobile and App Meta Tags */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="theme-color" content="#0066CC" />
        <meta name="msapplication-navbutton-color" content="#0066CC" />
        <meta name="apple-mobile-web-app-title" content="Cortex Hospital" />
        
        {/* Structured Data for Medical Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              "name": "Cortex Hospital",
              "alternateName": "Cortex Hospital Wardha",
              "description": "Premier healthcare facility specializing in orthopaedic surgery, gynecology, and obstetrics",
              "url": "https://www.cortexhospital.com/",
              "logo": "https://www.cortexhospital.com/images/logo.png",
              "image": "https://www.cortexhospital.com/images/hospitalImage.jpg",
              "telephone": "+91 9373280505",
              "email": "drvipeenraut@cortexhospital.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Beside Urich Mall, Aarti Square, Mohini Nagar, Nagpur Road",
                "addressLocality": "Wardha",
                "addressRegion": "Maharashtra",
                "postalCode": "442001",
                "addressCountry": "IN"
              },
              "medicalSpecialty": ["Orthopedics", "Gynecology", "Obstetrics"],
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "credentialCategory": "Medical License",
                  "recognizedBy": "Maharashtra Medical Council"
                }
              ]
            })
          }}
        />
        
        {/* Favicon Links */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="32x32" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16" />
        <link rel="apple-touch-icon" href="/favicon.ico" sizes="180x180" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.cortexhospital.com/" />
      </head>
      <body>
        {children}
        <script id="dhws-errorTracker" src="/dhws-error-tracker.js"></script>
        <script id="dhws-elementInspector" src="/dhws-web-inspector.js"></script>
      </body>
    </html>
  );
}
