import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaCalendarAlt, FaRupeeSign, FaUsers, FaUtensils } from 'react-icons/fa';
import api from '../../config/api';
import { useAuth } from '../../context/authContext';

const Bookings = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    banquetHallId: '',
    cateringServiceId: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    totalAmount: '',
    advanceAmount: '',
    specialRequirements: '',
    contactNumber: '',
    alternateContact: ''
  });
  const [banquetHalls, setBanquetHalls] = useState([]);
  const [cateringServices, setCateringServices] = useState([]);

  useEffect(() => {
    fetchBookings();
    fetchBanquetHalls();
    fetchCateringServices();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await api.get('/booking/user');
      setBookings(response.data.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
      toast.error('Failed to fetch bookings');
    } finally {
      setLoading(false);
    }
  };

  const fetchBanquetHalls = async () => {
    try {
      const response = await api.get('/public/banquet-halls');
      setBanquetHalls(response.data.data);
    } catch (error) {
      console.error('Error fetching banquet halls:', error);
    }
  };

  const fetchCateringServices = async () => {
    try {
      const response = await api.get('/public/catering-services');
      setCateringServices(response.data.data);
    } catch (error) {
      console.error('Error fetching catering services:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/booking/create', bookingForm);
      toast.success('Booking created successfully!');
      setShowBookingForm(false);
      setBookingForm({
        banquetHallId: '',
        cateringServiceId: '',
        eventType: '',
        eventDate: '',
        guestCount: '',
        totalAmount: '',
        advanceAmount: '',
        specialRequirements: '',
        contactNumber: '',
        alternateContact: ''
      });
      fetchBookings();
    } catch (error) {
      toast.error('Failed to create booking');
      console.error('Error creating booking:', error);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Confirmed': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      case 'Completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
  return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">My Bookings</h1>
        <button
          onClick={() => setShowBookingForm(true)}
          className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
        >
          <FaCalendarAlt className="inline mr-2" />
          New Booking
        </button>
      </div>

      {/* Bookings List */}
      <div className="space-y-6">
        {bookings.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-lg">
            <FaCalendarAlt className="text-6xl text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No Bookings Yet</h3>
            <p className="text-gray-500 mb-6">Start planning your perfect event by creating a new booking.</p>
            <button
              onClick={() => setShowBookingForm(true)}
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
            >
              Create Your First Booking
            </button>
          </div>
        ) : (
          bookings.map((booking) => (
            <div key={booking._id} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{booking.eventType}</h3>
                  <p className="text-gray-600">{booking.banquetHallId?.hallName}</p>
                  <p className="text-sm text-gray-500">{new Date(booking.eventDate).toLocaleDateString()}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking.status)}`}>
                  {booking.status}
                </span>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="flex items-center">
                  <FaUsers className="text-pink-500 mr-2" />
                  <span className="text-gray-600">{booking.guestCount} Guests</span>
                </div>
                <div className="flex items-center">
                  <FaRupeeSign className="text-green-500 mr-2" />
                  <span className="text-gray-600">₹{booking.totalAmount.toLocaleString()}</span>
                </div>
                <div className="flex items-center">
                  <FaCalendarAlt className="text-blue-500 mr-2" />
                  <span className="text-gray-600">Advance: ₹{booking.advanceAmount.toLocaleString()}</span>
                </div>
              </div>
              
              {booking.cateringServiceId && (
                <div className="mb-4">
                  <div className="flex items-center">
                    <FaUtensils className="text-orange-500 mr-2" />
                    <span className="text-gray-600">{booking.cateringServiceId.catererName}</span>
                  </div>
                </div>
              )}
              
              {booking.specialRequirements && (
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-1">Special Requirements:</h4>
                  <p className="text-gray-600">{booking.specialRequirements}</p>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Create New Booking</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
                  <select
                    name="eventType"
                    value={bookingForm.eventType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  >
                    <option value="">Select Event Type</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Corporate">Corporate</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Event Date</label>
                  <input
                    type="date"
                    name="eventDate"
                    value={bookingForm.eventDate}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Banquet Hall</label>
                  <select
                    name="banquetHallId"
                    value={bookingForm.banquetHallId}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  >
                    <option value="">Select Banquet Hall</option>
                    {banquetHalls.map((hall) => (
                      <option key={hall._id} value={hall._id}>
                        {hall.hallName} - ₹{hall.rent}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Catering Service (Optional)</label>
                  <select
                    name="cateringServiceId"
                    value={bookingForm.cateringServiceId}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  >
                    <option value="">Select Catering Service</option>
                    {cateringServices.map((service) => (
                      <option key={service._id} value={service._id}>
                        {service.catererName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Guest Count</label>
                  <input
                    type="number"
                    name="guestCount"
                    value={bookingForm.guestCount}
                    onChange={handleInputChange}
                    required
                    min="1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Total Amount</label>
                  <input
                    type="number"
                    name="totalAmount"
                    value={bookingForm.totalAmount}
                    onChange={handleInputChange}
                    required
                    min="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Advance Amount</label>
                  <input
                    type="number"
                    name="advanceAmount"
                    value={bookingForm.advanceAmount}
                    onChange={handleInputChange}
                    required
                    min="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                  <input
                    type="tel"
                    name="contactNumber"
                    value={bookingForm.contactNumber}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Alternate Contact</label>
                  <input
                    type="tel"
                    name="alternateContact"
                    value={bookingForm.alternateContact}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Special Requirements</label>
                <textarea
                  name="specialRequirements"
                  value={bookingForm.specialRequirements}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div className="flex justify-end space-x-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowBookingForm(false)}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-md hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
                >
                  Create Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bookings;