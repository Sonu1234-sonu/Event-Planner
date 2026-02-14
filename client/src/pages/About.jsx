import React from 'react';
import { FaHeart, FaUsers, FaCalendarAlt, FaStar } from 'react-icons/fa';
import banner from '../assets/banner.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img src={banner} alt="About Us" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">About Festive Flair</h1>
            <p className="text-xl">Creating Unforgettable Memories Since Day One</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Our Story */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Story</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            At Festive Flair, we believe that every celebration deserves to be extraordinary. 
            Founded with a passion for creating magical moments, we specialize in transforming 
            your dreams into reality through our comprehensive event planning services.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            From intimate gatherings to grand celebrations, our team of experienced professionals 
            works tirelessly to ensure that every detail is perfect, every moment is memorable, 
            and every guest leaves with a smile.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <FaHeart className="text-4xl text-pink-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Passionate Service</h3>
            <p className="text-gray-600">We pour our heart into every event, ensuring your special day is perfect.</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <FaUsers className="text-4xl text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
            <p className="text-gray-600">Our experienced professionals handle every aspect of your event.</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <FaCalendarAlt className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Flexible Planning</h3>
            <p className="text-gray-600">We adapt to your schedule and preferences for seamless coordination.</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <FaStar className="text-4xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
            <p className="text-gray-600">We maintain the highest standards in all our services and partnerships.</p>
          </div>
        </div>

        {/* Services Overview */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Banquet Halls</h3>
              <p className="text-gray-600">Elegant venues for weddings, corporate events, and celebrations.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍽️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Catering Services</h3>
              <p className="text-gray-600">Delicious cuisine options for every taste and dietary preference.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎉</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Event Planning</h3>
              <p className="text-gray-600">Complete event coordination from concept to execution.</p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto">
            To create extraordinary experiences that bring people together, celebrate life's precious moments, 
            and leave lasting memories that will be cherished for a lifetime. We are committed to excellence, 
            innovation, and making your vision come true.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;