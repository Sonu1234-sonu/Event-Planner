import React from 'react';
import { FaUtensils, FaBuilding, FaMusic, FaCamera, FaCar, FaGift } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaBuilding className="text-4xl text-pink-500" />,
      title: "Banquet Halls",
      description: "Elegant and spacious venues for weddings, corporate events, and celebrations. We offer venues with different capacities and amenities.",
      features: ["Multiple capacity options", "Modern amenities", "Flexible layouts", "Professional staff"]
    },
    {
      icon: <FaUtensils className="text-4xl text-purple-500" />,
      title: "Catering Services",
      description: "Delicious cuisine options for every taste and dietary preference. From traditional to international cuisine.",
      features: ["Veg & Non-Veg options", "Jain cuisine available", "Customizable menus", "Professional chefs"]
    },
    {
      icon: <FaMusic className="text-4xl text-blue-500" />,
      title: "Entertainment",
      description: "Complete entertainment solutions including DJ services, live music, and cultural performances.",
      features: ["Professional DJs", "Live music bands", "Cultural performances", "Sound systems"]
    },
    {
      icon: <FaCamera className="text-4xl text-green-500" />,
      title: "Photography & Videography",
      description: "Capture your precious moments with our professional photography and videography services.",
      features: ["Professional photographers", "High-quality equipment", "Photo editing", "Video production"]
    },
    {
      icon: <FaCar className="text-4xl text-yellow-500" />,
      title: "Transportation",
      description: "Reliable transportation services for your guests and wedding parties.",
      features: ["Luxury vehicles", "Group transportation", "Airport transfers", "Wedding cars"]
    },
    {
      icon: <FaGift className="text-4xl text-red-500" />,
      title: "Event Planning",
      description: "Complete event coordination from concept to execution, ensuring every detail is perfect.",
      features: ["Full event planning", "Vendor coordination", "Timeline management", "On-site support"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive event planning services to make your special day unforgettable. 
            From venue selection to entertainment, we handle every aspect of your celebration.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Event?</h2>
          <p className="text-xl mb-6">
            Contact us today to discuss your requirements and get a customized quote for your special event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-pink-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Get Quote
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-pink-600 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
