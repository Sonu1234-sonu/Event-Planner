import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaUtensils, FaBuilding, FaStar, FaClock, FaCheckCircle } from 'react-icons/fa';
import { useAuth } from '../../context/authContext';
import api from '../../config/api';

const Overview = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    totalBookings: 0,
    upcomingEvents: 0,
    completedEvents: 0,
    totalSpent: 0
  });
  const [recentBookings, setRecentBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Mock data for now - replace with actual API calls
      setStats({
        totalBookings: 5,
        upcomingEvents: 2,
        completedEvents: 3,
        totalSpent: 125000
      });
      
      setRecentBookings([
        {
          id: 1,
          type: 'Wedding',
          venue: 'Grand Palace Banquet',
          date: '2024-02-15',
          status: 'Confirmed',
          amount: 45000
        },
        {
          id: 2,
          type: 'Birthday Party',
          venue: 'Royal Garden Hall',
          date: '2024-01-28',
          status: 'Completed',
          amount: 25000
        }
      ]);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
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
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome back, {user?.fullName}!
        </h1>
        <p className="text-gray-600">
          Here's an overview of your event planning journey with us.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center">
            <div className="p-3 bg-pink-100 rounded-full">
              <FaCalendarAlt className="text-2xl text-pink-500" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Bookings</p>
              <p className="text-2xl font-bold text-gray-800">{stats.totalBookings}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-full">
              <FaClock className="text-2xl text-blue-500" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Upcoming Events</p>
              <p className="text-2xl font-bold text-gray-800">{stats.upcomingEvents}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-full">
              <FaCheckCircle className="text-2xl text-green-500" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Completed Events</p>
              <p className="text-2xl font-bold text-gray-800">{stats.completedEvents}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 rounded-full">
              <FaStar className="text-2xl text-purple-500" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Spent</p>
              <p className="text-2xl font-bold text-gray-800">₹{stats.totalSpent.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Bookings */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Bookings</h2>
        <div className="space-y-4">
          {recentBookings.map((booking) => (
            <div key={booking.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <div className="p-3 bg-pink-100 rounded-full mr-4">
                  {booking.type === 'Wedding' ? <FaBuilding className="text-pink-500" /> : <FaUtensils className="text-pink-500" />}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{booking.type}</h3>
                  <p className="text-gray-600">{booking.venue}</p>
                  <p className="text-sm text-gray-500">{booking.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-800">₹{booking.amount.toLocaleString()}</p>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  booking.status === 'Confirmed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {booking.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Actions</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <button className="p-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300">
            <FaCalendarAlt className="text-2xl mb-2" />
            <h3 className="font-semibold">Book New Event</h3>
            <p className="text-sm opacity-90">Plan your next celebration</p>
          </button>
          
          <button className="p-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300">
            <FaBuilding className="text-2xl mb-2" />
            <h3 className="font-semibold">View Venues</h3>
            <p className="text-sm opacity-90">Browse available halls</p>
          </button>
          
          <button className="p-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300">
            <FaUtensils className="text-2xl mb-2" />
            <h3 className="font-semibold">Catering Services</h3>
            <p className="text-sm opacity-90">Explore food options</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overview;;