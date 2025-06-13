'use client';
import React from 'react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function ContactForm() {
  return (
    <Card className="p-8">
      <h3 className="text-2xl font-semibold text-primary mb-6">Send Us a Message</h3>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-primary mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-primary mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
              placeholder="Enter your last name"
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
            placeholder="Enter your email address"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
            placeholder="Enter your phone number"
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
            placeholder="Enter your message"
          ></textarea>
        </div>
        
        <Button variant="primary" type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </Card>
  );
}
