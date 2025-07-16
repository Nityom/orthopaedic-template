'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const SearchBox = ({ placeholder = "Search our website...", className = "" }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const router = useRouter();

  // Predefined search suggestions based on your site content
  const searchData = [
    { title: 'Orthopaedic Services', path: '/services#orthopaedic', category: 'Services' },
    { title: 'Gynecology Services', path: '/services#gynecology', category: 'Services' },
    { title: 'Knee Replacement', path: '/services#knee', category: 'Treatments' },
    { title: 'Spine Surgery', path: '/services#spine', category: 'Treatments' },
    { title: 'Shoulder Treatment', path: '/services#shoulder', category: 'Treatments' },
    { title: 'Joint Replacement', path: '/services#joint', category: 'Treatments' },
    { title: 'Contact Information', path: '/contact', category: 'Contact' },
    { title: 'About Our Doctors', path: '/about#doctors', category: 'About' },
    { title: 'Hospital Location', path: '/contact#location', category: 'Contact' },
    { title: 'Appointment Booking', path: '/contact#appointment', category: 'Services' },
    { title: 'Emergency Services', path: '/contact#emergency', category: 'Emergency' },
    { title: 'Office Hours', path: '/contact#hours', category: 'Information' },
  ];

  useEffect(() => {
    if (query.length > 2) {
      setIsSearching(true);
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5);
      
      setTimeout(() => {
        setSuggestions(filtered);
        setIsSearching(false);
      }, 300);
    } else {
      setSuggestions([]);
      setIsSearching(false);
    }
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      // For now, redirect to home with search query
      router.push(`/?search=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleSuggestionClick = (path) => {
    setQuery('');
    setSuggestions([]);
    router.push(path);
  };

  return (
    <div className={`relative ${className}`}>
      <form onSubmit={handleSearch}>
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
          />
          <button 
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary transition-colors"
          >
            {isSearching ? (
              <div className="animate-spin w-5 h-5 border-2 border-gray-300 border-t-primary rounded-full"></div>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            )}
          </button>
        </div>
      </form>

      {/* Search Suggestions */}
      {suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 fade-in">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion.path)}
              className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg border-b border-gray-100 last:border-b-0"
            >
              <div className="flex items-center justify-between">
                <span className="text-gray-900 font-medium">{suggestion.title}</span>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {suggestion.category}
                </span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
