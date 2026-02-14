import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaClock, FaEnvelope, FaHeadset, FaPhone, FaQuestionCircle } from 'react-icons/fa';
import api from '../../config/api';
import { useAuth } from '../../context/authContext';

const Support = () => {
  const { user } = useAuth();
  const [supportTicket, setSupportTicket] = useState({
    subject: '',
    category: '',
    priority: 'Medium',
    message: '',
    contactMethod: 'email'
  });
  const [submittedTickets, setSubmittedTickets] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSupportTicket(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!supportTicket.subject || !supportTicket.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      const response = await api.post('/user/support-ticket', {
        ...supportTicket,
        userId: user._id,
        userName: user.fullName,
        userEmail: user.email
      });
      
      toast.success('Support ticket submitted successfully!');
      setSupportTicket({
        subject: '',
        category: '',
        priority: 'Medium',
        message: '',
        contactMethod: 'email'
      });
      
      // Add to submitted tickets
      setSubmittedTickets(prev => [{
        ...supportTicket,
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        status: 'Open'
      }, ...prev]);
      
    } catch (error) {
      toast.error('Failed to submit support ticket');
      console.error('Error submitting support ticket:', error);
    }
  };

  const faqItems = [
    {
      question: "How do I book a banquet hall?",
      answer: "You can book a banquet hall by logging into your account, going to the Bookings section, and clicking 'New Booking'. Select your preferred hall, date, and other details."
    },
    {
      question: "What is the cancellation policy?",
      answer: "Cancellations made 7 days before the event date will receive a full refund. Cancellations made 3-7 days before will receive 50% refund. No refund for cancellations made less than 3 days before the event."
    },
    {
      question: "Can I modify my booking?",
      answer: "Yes, you can modify your booking up to 48 hours before the event date. Contact our support team or use the booking management section in your dashboard."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, UPI, net banking, and cash payments. Advance payment is required to confirm your booking."
    },
    {
      question: "Do you provide catering services?",
      answer: "Yes, we have partnered with various catering services. You can add catering to your booking or contact us for recommendations based on your preferences."
    }
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Customer Support</h1>
      
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <FaPhone className="text-pink-500 mr-3" />
              <div>
                <p className="font-semibold text-gray-800">Phone Support</p>
                <p className="text-gray-600">+91 98765 43210</p>
                <p className="text-sm text-gray-500">Mon-Fri: 9AM-6PM</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <FaEnvelope className="text-blue-500 mr-3" />
              <div>
                <p className="font-semibold text-gray-800">Email Support</p>
                <p className="text-gray-600">support@festiveflair.com</p>
                <p className="text-sm text-gray-500">24/7 Response</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <FaClock className="text-green-500 mr-3" />
              <div>
                <p className="font-semibold text-gray-800">Business Hours</p>
                <p className="text-gray-600">Monday - Friday</p>
                <p className="text-sm text-gray-500">9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">Emergency Support</h3>
            <p className="text-blue-700 text-sm">
              For urgent issues on event day, call our emergency hotline: 
              <span className="font-semibold"> +91 98765 43211</span>
            </p>
          </div>
        </div>

        {/* Support Ticket Form */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Submit Support Ticket</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={supportTicket.subject}
                onChange={handleInputChange}
                placeholder="Brief description of your issue"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  name="category"
                  value={supportTicket.category}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  <option value="">Select Category</option>
                  <option value="Booking">Booking Issue</option>
                  <option value="Payment">Payment Problem</option>
                  <option value="Cancellation">Cancellation</option>
                  <option value="Technical">Technical Issue</option>
                  <option value="General">General Inquiry</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Priority
                </label>
                <select
                  name="priority"
                  value={supportTicket.priority}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                  <option value="Urgent">Urgent</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Contact Method
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="email"
                    checked={supportTicket.contactMethod === 'email'}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  <span className="text-gray-700">Email</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="contactMethod"
                    value="phone"
                    checked={supportTicket.contactMethod === 'phone'}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  <span className="text-gray-700">Phone</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message *
              </label>
              <textarea
                name="message"
                value={supportTicket.message}
                onChange={handleInputChange}
                rows="4"
                placeholder="Please describe your issue in detail..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-md hover:from-pink-600 hover:to-purple-700 transition-all duration-300 font-semibold"
            >
              <FaHeadset className="inline mr-2" />
              Submit Ticket
            </button>
          </form>
        </div>

        {/* Submitted Tickets */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Support Tickets</h2>
          
          {submittedTickets.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <FaQuestionCircle className="text-4xl text-gray-300 mx-auto mb-4" />
              <p>No support tickets submitted</p>
              <p className="text-sm">Submit a ticket if you need help!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {submittedTickets.map((ticket) => (
                <div key={ticket.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      ticket.status === 'Open' ? 'bg-green-100 text-green-800' :
                      ticket.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {ticket.status}
                    </span>
                    <span className="text-sm text-gray-500">{ticket.date}</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">{ticket.subject}</h3>
                  <p className="text-gray-600 text-sm mb-2">{ticket.message}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Priority: {ticket.priority}</span>
                    <span>Contact: {ticket.contactMethod}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                <FaQuestionCircle className="text-pink-500 mr-2" />
                {item.question}
              </h3>
              <p className="text-gray-600 text-sm">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Support;;