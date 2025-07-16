'use client';
import React from 'react';
import Skeleton from '@/components/ui/Skeleton';

export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Skeleton */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Skeleton className="w-32 h-8" />
          <div className="hidden md:flex gap-8">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="w-16 h-6" />
            ))}
          </div>
          <Skeleton className="w-24 h-10" />
        </div>
      </div>

      {/* Hero Section Skeleton */}
      <div className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl">
            <Skeleton className="w-32 h-6 mb-4 bg-accent/20" />
            <Skeleton className="w-full h-16 mb-6 bg-white/20" />
            <Skeleton className="w-full h-6 mb-4 bg-accent/20" />
            <Skeleton className="w-3/4 h-6 mb-8 bg-accent/20" />
            <Skeleton className="w-40 h-12 bg-accent/30" />
          </div>
        </div>
      </div>

      {/* Content Sections Skeleton */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-16">
            <Skeleton className="w-32 h-6 mx-auto mb-4" />
            <Skeleton className="w-96 h-12 mx-auto mb-6" />
            <Skeleton className="w-full max-w-3xl h-6 mx-auto mb-2" />
            <Skeleton className="w-2/3 max-w-2xl h-6 mx-auto" />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Skeleton className="w-12 h-12 rounded-lg" />
                  <Skeleton className="w-32 h-6" />
                </div>
                <Skeleton className="w-full h-4 mb-2" />
                <Skeleton className="w-full h-4 mb-2" />
                <Skeleton className="w-3/4 h-4" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Another Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Skeleton className="w-32 h-6 mb-4" />
              <Skeleton className="w-full h-12 mb-6" />
              <Skeleton className="w-full h-4 mb-2" />
              <Skeleton className="w-full h-4 mb-2" />
              <Skeleton className="w-2/3 h-4 mb-8" />
              <Skeleton className="w-40 h-12" />
            </div>
            <Skeleton className="w-full h-80 rounded-lg" />
          </div>
        </div>
      </div>

      {/* Footer Skeleton */}
      <div className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i}>
                <Skeleton className="w-32 h-6 mb-4 bg-white/20" />
                {[...Array(4)].map((_, j) => (
                  <Skeleton key={j} className="w-full h-4 mb-2 bg-white/10" />
                ))}
              </div>
            ))}
          </div>
          <div className="border-t border-white/20 mt-12 pt-8">
            <Skeleton className="w-full h-4 bg-white/10" />
          </div>
        </div>
      </div>
    </div>
  );
}
