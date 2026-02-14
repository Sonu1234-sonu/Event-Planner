import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Stories = () => {
  const testimonials = [
    {
      name: "Priya & Rajesh",
      event: "Wedding",
      rating: 5,
      story: "Festive Flair made our wedding day absolutely magical! From the beautiful banquet hall to the delicious catering, everything was perfect. Our guests are still talking about how amazing the food was and how smoothly everything went.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Amit Kumar",
      event: "Corporate Event",
      rating: 5,
      story: "We organized our annual company event through Festive Flair and it was a huge success! The team was professional, the venue was perfect, and the catering exceeded our expectations. Highly recommended!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Sunita & Vikram",
      event: "Anniversary",
      rating: 5,
      story: "Our 25th anniversary celebration was made special by Festive Flair. The attention to detail and personalized service made us feel like royalty. The team went above and beyond to make our day memorable.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Rohit Sharma",
      event: "Birthday Party",
      rating: 5,
      story: "My daughter's sweet 16 party was absolutely fantastic! The decorations, food, and entertainment were all top-notch. Festive Flair made sure every detail was perfect and my daughter had the best birthday ever.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Neha & Arjun",
      event: "Engagement",
      rating: 5,
      story: "Our engagement ceremony was beautifully organized by Festive Flair. The venue was elegant, the food was delicious, and the service was impeccable. We're definitely using them for our wedding too!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Dr. Meera Singh",
      event: "Medical Conference",
      rating: 5,
      story: "We hosted a medical conference with Festive Flair and it was executed flawlessly. The professional setup, excellent catering, and seamless coordination made our event a great success. Thank you!",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Success Stories</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read about the magical moments we've created for our clients. 
            These heartfelt testimonials showcase our commitment to making every event extraordinary.
          </p>
        </div>

        {/* Featured Story */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg p-8 mb-16">
          <div className="text-center">
            <FaQuoteLeft className="text-4xl mx-auto mb-4 opacity-80" />
            <h2 className="text-3xl font-bold mb-6">Featured Success Story</h2>
            <blockquote className="text-xl italic mb-6 max-w-4xl mx-auto">
              "Festive Flair transformed our wedding dreams into reality. From the initial planning to the final moments of our celebration, 
              their team was there every step of the way. The attention to detail, professional service, and genuine care for our special day 
              made all the difference. Our guests are still talking about how perfect everything was!"
            </blockquote>
            <div className="flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop&crop=face" 
                alt="Featured Couple"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div className="text-left">
                <p className="font-semibold text-lg">Sarah & Michael</p>
                <p className="opacity-90">Wedding Celebration</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.event}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-gray-600 italic">
                "{testimonial.story}"
              </blockquote>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center bg-white rounded-lg shadow-lg p-6">
            <div className="text-4xl font-bold text-pink-500 mb-2">500+</div>
            <div className="text-gray-600">Events Organized</div>
          </div>
          <div className="text-center bg-white rounded-lg shadow-lg p-6">
            <div className="text-4xl font-bold text-purple-500 mb-2">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="text-center bg-white rounded-lg shadow-lg p-6">
            <div className="text-4xl font-bold text-blue-500 mb-2">5+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center bg-white rounded-lg shadow-lg p-6">
            <div className="text-4xl font-bold text-green-500 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Create Your Success Story?</h2>
          <p className="text-xl text-gray-600 mb-6">
            Join hundreds of satisfied clients who have trusted us with their special moments.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
            Start Planning Your Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stories;
