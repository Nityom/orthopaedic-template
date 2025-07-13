'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import '../styles/index.css';

// Metadata is moved to a separate constant since we're using 'use client'
const siteMetadata = {
  title: 'Cortex Hospital - Top Orthopaedic & Gynecological Hospital in Wardha | Dr. Vipin Raut',
  description: 'Leading orthopaedic and gynecological care in Wardha. Expert treatment for bone, joint, and women\'s health issues with advanced technology and compassionate care by Dr. Vipin Raut and Dr. Shillpa Raut.',
  keywords: 'top orthopaedic hospital wardha, best orthopaedic doctor, Dr. Vipin Raut, Dr. Shillpa Raut, gynecologist wardha, cortex hospital, joint replacement, spine surgery, bone fracture treatment, women health care wardha',
  author: 'Cortex Hospital',
  robots: 'index, follow',
  openGraph: {
    title: 'Cortex Hospital - Top Orthopaedic & Gynecological Hospital in Wardha',
    description: 'Leading healthcare facility in Wardha with expert orthopaedic and gynecological care. Dr. Vipin Raut - Top Orthopaedic Surgeon, Dr. Shillpa Raut - Expert Gynecologist.',
    url: 'https://cortexhospital.com',
    siteName: 'Cortex Hospital',
    locale: 'en_US',
    type: 'website',
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

  return (
    <html lang="en">
      <head>
        <title>{siteMetadata.title}</title>
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
        <meta name="twitter:title" content={siteMetadata.openGraph.title} />
        <meta name="twitter:description" content={siteMetadata.openGraph.description} />
        
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hospital",
              "name": "Cortex Hospital",
              "description": "Top orthopaedic and gynecological hospital in Wardha providing expert medical care",
              "url": "https://cortexhospital.com",
              "telephone": "+91 9373280505",
              "email": "info@cortexhospital.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Beside Urich Mall, Aarti Square, Mohini Nagar, Nagpur Road",
                "addressLocality": "Wardha",
                "addressRegion": "Maharashtra",
                "postalCode": "442001",
                "addressCountry": "IN"
              },
              "openingHours": [
                "Mo-Sa 10:00-13:00",
                "Mo-Sa 18:00-19:30"
              ],
              "medicalSpecialty": ["Orthopedics", "Gynecology", "Obstetrics"],
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
                  }
                ]
              },
              "physician": [
                {
                  "@type": "Physician",
                  "name": "Dr. Vipin Raut",
                  "medicalSpecialty": "Orthopedic Surgery",
                  "description": "Top orthopaedic surgeon in Wardha specializing in joint replacement and spine surgery"
                },
                {
                  "@type": "Physician",
                  "name": "Dr. Shillpa Raut",
                  "medicalSpecialty": "Gynecology and Obstetrics",
                  "description": "Expert gynecologist providing comprehensive women's healthcare"
                }
              ]
            })
          }}
        />
        
        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Wardha, Maharashtra" />
        <meta name="geo.position" content="20.7513;78.6023" />
        <meta name="ICBM" content="20.7513, 78.6023" />
        
        {/* Favicon Links */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="32x32" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16" />
        <link rel="apple-touch-icon" href="/favicon.ico" sizes="180x180" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://cortexhospital.com" />
      </head>
      <body>
        {children}
        <script id="dhws-errorTracker" src="/dhws-error-tracker.js"></script>
        <script id="dhws-elementInspector" src="/dhws-web-inspector.js"></script>
      </body>
    </html>
  );
}