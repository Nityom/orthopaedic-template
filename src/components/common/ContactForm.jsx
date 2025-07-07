'use client';
import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function ContactForm() {
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedProblem, setSelectedProblem] = useState('');

  const doctorProblems = {
    'dr-vipin-raut': [
      'Knee Pain',
      'Back Pain',
      'Shoulder Pain',
      'Hip Pain',
      'Arthritis',
      'Sports Injury',
      'Fracture',
      'Joint Replacement',
      'Spine Issues',
      'Other Orthopaedic Issues'
    ],
    'dr-smita-raut': [
      'Pregnancy Care',
      'Gynecological Exam',
      'Menstrual Problems',
      'Fertility Issues',
      'Menopause',
      'PCOS/PCOD',
      'Urinary Issues',
      'Contraception',
      'Pelvic Pain',
      'Other Gynecological Issues'
    ]
  };

  const handleDoctorChange = (e) => {
    setSelectedDoctor(e.target.value);
    setSelectedProblem(''); // Reset problem selection when doctor changes
  };

  // Function to check if date is Sunday
  const isDateDisabled = (date) => {
    const selectedDate = new Date(date);
    return selectedDate.getDay() === 0; // Sunday is 0
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    if (isDateDisabled(selectedDate)) {
      alert('Sorry, we are closed on Sundays. Please select a different date.');
      e.target.value = '';
    }
  };

  return (
    <Card className="p-8">
      <h3 className="text-2xl font-semibold text-primary mb-6">Book an Appointment</h3>
      <form>
        <div className="mb-6">
          <label htmlFor="fullName" className="block text-sm font-medium text-primary mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
            placeholder="Enter your full name"
            required
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
            required
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="doctor" className="block text-sm font-medium text-primary mb-2">
            Select Doctor
          </label>
          <select
            id="doctor"
            value={selectedDoctor}
            onChange={handleDoctorChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
            required
          >
            <option value="">Choose a doctor</option>
            <option value="dr-vipin-raut">Dr. Vipin Raut - Orthopaedic Surgeon</option>
            <option value="dr-smita-raut">Dr. Smita Raut - Gynecologist & Obstetrician</option>
          </select>
        </div>
        
        <div className="mb-6">
          <label htmlFor="problem" className="block text-sm font-medium text-primary mb-2">
            Select Problem/Condition
          </label>
          <select
            id="problem"
            value={selectedProblem}
            onChange={(e) => setSelectedProblem(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
            disabled={!selectedDoctor}
            required
          >
            <option value="">
              {selectedDoctor ? 'Select your problem' : 'Please select a doctor first'}
            </option>
            {selectedDoctor && doctorProblems[selectedDoctor]?.map((problem, index) => (
              <option key={index} value={problem.toLowerCase().replace(/\s+/g, '-')}>
                {problem}
              </option>
            ))}
          </select>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-primary mb-2">
              Preferred Date
            </label>
            <input
              type="date"
              id="date"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
              min={new Date().toISOString().split('T')[0]}
              onChange={handleDateChange}
              required
            />
            <p className="text-sm text-gray-500 mt-1">*We are closed on Sundays</p>
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-primary mb-2">
              Preferred Time
            </label>
            <select
              id="time"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
              required
            >
              <option value="">Select time</option>
              <optgroup label="Morning (10:00 AM - 1:00 PM)">
                <option value="10:00">10:00 AM</option>
                <option value="10:30">10:30 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="11:30">11:30 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="12:30">12:30 PM</option>
              </optgroup>
              <optgroup label="Evening (6:00 PM - 7:30 PM)">
                <option value="18:00">6:00 PM</option>
                <option value="18:30">6:30 PM</option>
                <option value="19:00">7:00 PM</option>
                <option value="19:30">7:30 PM</option>
              </optgroup>
            </select>
          </div>
        </div>
        
        <Button variant="primary" type="submit" className="w-full">
          Book Appointment
        </Button>
      </form>
    </Card>
  );
}
