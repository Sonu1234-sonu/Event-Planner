import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaStar, FaThumbsDown, FaThumbsUp } from 'react-icons/fa';
import api from '../../config/api';
import { useAuth } from '../../context/authContext';

const Feedback = () => {
  const { user } = useAuth();
  const [feedback, setFeedback] = useState({
    rating: 0,
    title: '',
    message: '',
    experience: 'positive'
  });
  const [submittedFeedbacks, setSubmittedFeedbacks] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFeedback(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRatingClick = (rating) => {
    setFeedback(prev => ({
      ...prev,
      rating
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (feedback.rating === 0) {
      toast.error('Please provide a rating');
      return;
    }

    if (!feedback.title || !feedback.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      const response = await api.post('/user/feedback', {
        ...feedback,
        userId: user._id,
        userName: user.fullName
      });
      
      toast.success('Thank you for your feedback!');
      setFeedback({
        rating: 0,
        title: '',
        message: '',
        experience: 'positive'
      });
      
      // Add to submitted feedbacks
      setSubmittedFeedbacks(prev => [{
        ...feedback,
        id: Date.now(),
        date: new Date().toLocaleDateString()
      }, ...prev]);
      
    } catch (error) {
      toast.error('Failed to submit feedback');
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Feedback & Reviews</h1>
      
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Feedback Form */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Share Your Experience</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Rating */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Overall Rating *
              </label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRatingClick(star)}
                    className={`text-3xl transition-colors ${
                      star <= feedback.rating 
                        ? 'text-yellow-400' 
                        : 'text-gray-300 hover:text-yellow-300'
                    }`}
                  >
                    <FaStar />
                  </button>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-1">
                {feedback.rating === 0 && 'Click to rate'}
                {feedback.rating === 1 && 'Poor'}
                {feedback.rating === 2 && 'Fair'}
                {feedback.rating === 3 && 'Good'}
                {feedback.rating === 4 && 'Very Good'}
                {feedback.rating === 5 && 'Excellent'}
              </p>
            </div>

            {/* Experience Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Experience Type
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="experience"
                    value="positive"
                    checked={feedback.experience === 'positive'}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  <FaThumbsUp className="text-green-500 mr-1" />
                  <span className="text-gray-700">Positive</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="experience"
                    value="negative"
                    checked={feedback.experience === 'negative'}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  <FaThumbsDown className="text-red-500 mr-1" />
                  <span className="text-gray-700">Negative</span>
                </label>
              </div>
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title *
              </label>
              <input
                type="text"
                name="title"
                value={feedback.title}
                onChange={handleInputChange}
                placeholder="Brief title for your feedback"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Detailed Feedback *
              </label>
              <textarea
                name="message"
                value={feedback.message}
                onChange={handleInputChange}
                rows="4"
                placeholder="Tell us about your experience with our services..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-md hover:from-pink-600 hover:to-purple-700 transition-all duration-300 font-semibold"
            >
              Submit Feedback
            </button>
          </form>
        </div>

        {/* Submitted Feedbacks */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Recent Feedback</h2>
          
          {submittedFeedbacks.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <FaStar className="text-4xl text-gray-300 mx-auto mb-4" />
              <p>No feedback submitted yet</p>
              <p className="text-sm">Share your experience to help us improve!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {submittedFeedbacks.map((item) => (
                <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`text-sm ${
                            i < item.rating ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.message}</p>
                  <div className="flex items-center mt-2">
                    {item.experience === 'positive' ? (
                      <FaThumbsUp className="text-green-500 text-sm mr-1" />
                    ) : (
                      <FaThumbsDown className="text-red-500 text-sm mr-1" />
                    )}
                    <span className="text-xs text-gray-500 capitalize">{item.experience} experience</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Feedback Guidelines */}
      <div className="mt-8 bg-blue-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">Feedback Guidelines</h3>
        <ul className="text-blue-700 space-y-2 text-sm">
          <li>• Be honest and specific about your experience</li>
          <li>• Focus on the service quality and staff behavior</li>
          <li>• Mention any particular aspects you liked or disliked</li>
          <li>• Your feedback helps us improve our services</li>
          <li>• We appreciate constructive criticism</li>
        </ul>
      </div>
    </div>
  );
};

export default Feedback;;