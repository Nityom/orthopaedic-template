'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import '../styles/index.css';

// Metadata is moved to a separate constant since we're using 'use client'
const siteMetadata = {
  title: 'Cortex Hospital - Move Better, Live Better',
  description: 'Expert orthodontic care for all ages – creating confident, healthy smiles for your whole family',
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body>
        {children}
        <script id="dhws-errorTracker" src="/dhws-error-tracker.js"></script>
        <script id="dhws-elementInspector" src="/dhws-web-inspector.js"></script>
      </body>
    </html>
  );
}
