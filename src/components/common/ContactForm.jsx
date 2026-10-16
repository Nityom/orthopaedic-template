'use client';
import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function ContactForm() {
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedProblem, setSelectedProblem] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    date: '',
    time: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const doctorProblems = {
    'dr-vipeen-raut': [
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
    'dr-shillpa-raut': [
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
    setSelectedProblem('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const isDateDisabled = (date) => {
    const selectedDate = new Date(date);
    return selectedDate.getDay() === 0;
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    if (isDateDisabled(selectedDate)) {
      alert('Sorry, we are closed on Sundays. Please select a different date.');
      e.target.value = '';
      setFormData(prev => ({ ...prev, date: '' }));
    } else {
      setFormData(prev => ({ ...prev, date: selectedDate }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    // Get doctor name
    let doctorDisplayName = selectedDoctor;
    if (selectedDoctor === 'dr-vipeen-raut') {
      doctorDisplayName = 'Dr. Vipeen Raut - Orthopaedic Surgeon';
    } else if (selectedDoctor === 'dr-shillpa-raut') {
      doctorDisplayName = 'Dr. Shillpa Raut - Gynecologist & Obstetrician';
    }

    // Get problem name
    let problemDisplayName = selectedProblem;
    if (selectedDoctor && doctorProblems[selectedDoctor]) {
      const foundProblem = doctorProblems[selectedDoctor].find(problem => 
        problem.toLowerCase().replace(/\s+/g, '-') === selectedProblem
      );
      if (foundProblem) {
        problemDisplayName = foundProblem;
      }
    }

    try {
      // 1. Submit appointment to Cortex-Admin (Convex backend)
      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          phone: formData.phone,
          doctor: selectedDoctor,
          problem: problemDisplayName,
          date: formData.date,
          time: formData.time,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to book appointment. Please try again.');
      }

      setSuccessMessage('Appointment booked successfully! It has been registered in the hospital system.');

      // 2. Open WhatsApp for instant confirmation
      const message = `New Appointment Request - Cortex Hospital
Name: ${formData.fullName || 'Not provided'}
Phone: ${formData.phone || 'Not provided'}
Doctor: ${doctorDisplayName || 'Not selected'}
Problem: ${problemDisplayName || 'Not selected'}
Date: ${formData.date || 'Not selected'}
Time: ${formData.time || 'Not selected'}

Hospital: Cortex Hospital, Wardha
Please confirm this appointment. Thank you!`;

      const phoneNumber = "919373280505";
      const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
      window.open(whatsappURL, '_blank');

      // Reset form
      setFormData({
        fullName: '',
        phone: '',
        date: '',
        time: ''
      });
      setSelectedDoctor('');
      setSelectedProblem('');
    } catch (err) {
      console.error('Booking error:', err);
      setErrorMessage(err.message || 'Something went wrong while booking. Please try again or call us.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="p-8">
      <h3 className="text-2xl font-semibold text-primary mb-6">Book an Appointment</h3>

      {successMessage && (
        <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 text-sm">
          <p className="font-semibold flex items-center gap-1.5">
            <span>✓</span> {successMessage}
          </p>
          <p className="mt-1 text-xs text-green-700">
            A confirmation chat has also been opened in WhatsApp. Our team will contact you shortly.
          </p>
        </div>
      )}

      {errorMessage && (
        <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 text-sm">
          <p className="font-semibold flex items-center gap-1.5">
            <span>⚠</span> {errorMessage}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="fullName" className="block text-sm font-medium text-primary mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
            placeholder="Enter your full name"
            required
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
            placeholder="Enter your phone number"
            required
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="doctor" className="block text-sm font-medium text-primary mb-2">
            Select Doctor *
          </label>
          <select
            id="doctor"
            value={selectedDoctor}
            onChange={handleDoctorChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
            required
          >
            <option value="">Choose a doctor</option>
            <option value="dr-vipeen-raut">Dr. Vipeen Raut - Orthopaedic Surgeon</option>
            <option value="dr-shillpa-raut">Dr. Shillpa Raut - Gynecologist &amp; Obstetrician</option>
          </select>
        </div>
        
        <div className="mb-6">
          <label htmlFor="problem" className="block text-sm font-medium text-primary mb-2">
            Select Problem/Condition *
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
              Preferred Date *
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
              min={new Date().toISOString().split('T')[0]}
              onChange={handleDateChange}
              required
            />
            <p className="text-sm text-gray-500 mt-1">*We are closed on Sundays</p>
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-primary mb-2">
              Preferred Time *
            </label>
            <select
              id="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
              required
            >
              <option value="">Select time</option>
              <optgroup label="Morning (10:00 AM - 1:00 PM)">
                <option value="10:00 AM">10:00 AM</option>
                <option value="10:15 AM">10:15 AM</option>
                <option value="10:30 AM">10:30 AM</option>
                <option value="10:45 AM">10:45 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="11:15 AM">11:15 AM</option>
                <option value="11:30 AM">11:30 AM</option>
                <option value="11:45 AM">11:45 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="12:15 PM">12:15 PM</option>
                <option value="12:30 PM">12:30 PM</option>
                <option value="12:45 PM">12:45 PM</option>
              </optgroup>
              {(() => {
                const selectedDate = new Date(formData.date);
                const isSaturday = selectedDate.getDay() === 6;
                const isOrthoDoctor = selectedDoctor === 'dr-vipeen-raut';
                
                // Show evening slots if it's not Saturday OR if it's Saturday but not ortho doctor
                if (!isSaturday || !isOrthoDoctor) {
                  return (
                    <optgroup label="Evening (6:00 PM - 7:30 PM)">
                      <option value="6:00 PM">6:00 PM</option>
                      <option value="6:15 PM">6:15 PM</option>
                      <option value="6:30 PM">6:30 PM</option>
                      <option value="6:45 PM">6:45 PM</option>
                      <option value="7:00 PM">7:00 PM</option>
                      <option value="7:15 PM">7:15 PM</option>
                      <option value="7:30 PM">7:30 PM</option>
                    </optgroup>
                  );
                }
                return null;
              })()}
            </select>
            {(() => {
              const selectedDate = new Date(formData.date);
              const isSaturday = selectedDate.getDay() === 6;
              const isOrthoDoctor = selectedDoctor === 'dr-vipeen-raut';
              
              if (isSaturday && isOrthoDoctor) {
                return (
                  <p className="text-sm text-orange-600 mt-1">
                    *Orthopaedic services are closed on Saturday evenings
                  </p>
                );
              }
              return null;
            })()}
          </div>
        </div>
        
        <Button 
          variant="primary" 
          type="submit" 
          className="w-full flex items-center justify-center gap-2"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Booking Appointment...
            </>
          ) : (
            'Book Appointment'
          )}
        </Button>
      </form>
    </Card>
  );
}