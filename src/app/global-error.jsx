'use client';
import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import LazyIcon from '@/components/ui/LazyIcon';

export default function GlobalError({ error, reset }) {
  React.useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global error:', error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen bg-white flex items-center justify-center px-4">
          <div className="max-w-lg mx-auto text-center">
            {/* Error Icon */}
            <div className="mb-8">
              <div className="bg-red-100 p-6 rounded-full inline-block">
                <svg className="w-16 h-16 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              We're experiencing a technical issue. Our team has been notified and is working to resolve this quickly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={reset}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3"
              >
                Try Again
              </Button>
              <Link href="/">
                <Button 
                  variant="outline" 
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3"
                >
                  Go Home
                </Button>
              </Link>
            </div>

            {/* Emergency Contact */}
            <div className="mt-12 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Need Immediate Medical Assistance?
              </h3>
              <p className="text-gray-600 mb-4">
                For medical emergencies, please call us directly:
              </p>
              <a 
                href="tel:+919373280505" 
                className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors"
              >
                +91 9373280505
              </a>
            </div>

            {/* Error Details (in development) */}
            {process.env.NODE_ENV === 'development' && (
              <details className="mt-8 text-left">
                <summary className="cursor-pointer text-gray-500 hover:text-gray-700">
                  Error Details (Development Only)
                </summary>
                <pre className="mt-4 p-4 bg-gray-100 rounded text-sm overflow-auto">
                  {error?.stack || error?.message || 'Unknown error'}
                </pre>
              </details>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}
