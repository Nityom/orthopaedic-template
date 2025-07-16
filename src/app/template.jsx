'use client';
import React, { Suspense } from 'react';
import Loading from './loading';

export default function Template({ children }) {
  return (
    <Suspense fallback={<Loading />}>
      <div className="page-transition">
        {children}
      </div>
    </Suspense>
  );
}
