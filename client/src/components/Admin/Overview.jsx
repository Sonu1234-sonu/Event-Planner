import React, { useState, useEffect } from 'react';
import { FaUsers, FaBuilding, FaUtensils, FaCalendarAlt, FaEnvelope, FaStar, FaChartLine } from 'react-icons/fa';
import api from '../../config/api';

const Overview = () => {
  const [stats, setStats] = useState({
    totalCustomers: 0,
    totalBookings: 0,
    totalRevenue: 0,
    pendingQueries: 0,
    banquetHalls: 0,
    cateringServices: 0
  });
  const [recentActivities, setRecentActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Mock data for now - replace with actual API calls
      setStats({
        totalCustomers: 156,
        totalBookings: 89,
        totalRevenue: 2450000,
        pendingQueries: 12,
        banquetHalls: 8,
        cateringServices: 15
      });
      
      setRecentActivities([
        {
          id: 1,
          type: 'New Booking',
          description: 'Wedding booking for Grand Palace Banquet',
          time: '2 hours ago',
          amount: 45000
        },
        {
          id: 2,
          type: 'Customer Query',
          description: 'Inquiry about catering services',
          time: '4 hours ago',
          amount: null
        },
        {
          id: 3,
          type: 'New Booking',
          description: 'Birthday party at Royal Garden Hall',
          time: '6 hours ago',
          amount: 25000
        },
        {
          id: 4,
          type: 'Feedback',
          description: '5-star rating received from Priya & Rajesh',
          time: '1 day ago',
          amount: null
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
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">
          Welcome to your event planning management center.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-full">
              <FaUsers className="text-2xl text-blue-500" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Customers</p>
              <p className="text-2xl font-bold text-gray-800">{stats.totalCustomers}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-full">
              <FaCalendarAlt className="text-2xl text-green-500" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Bookings</p>
              <p className="text-2xl font-bold text-gray-800">{stats.totalBookings}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 rounded-full">
              <FaChartLine className="text-2xl text-purple-500" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-800">₹{stats.totalRevenue.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center">
            <div className="p-3 bg-orange-100 rounded-full">
              <FaEnvelope className="text-2xl text-orange-500" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Pending Queries</p>
              <p className="text-2xl font-bold text-gray-800">{stats.pendingQueries}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center">
            <div className="p-3 bg-pink-100 rounded-full">
              <FaBuilding className="text-2xl text-pink-500" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Banquet Halls</p>
              <p className="text-2xl font-bold text-gray-800">{stats.banquetHalls}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-100 rounded-full">
              <FaUtensils className="text-2xl text-yellow-500" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Catering Services</p>
              <p className="text-2xl font-bold text-gray-800">{stats.cateringServices}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Activities</h2>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <div className={`p-3 rounded-full mr-4 ${
                  activity.type === 'New Booking' ? 'bg-green-100' :
                  activity.type === 'Customer Query' ? 'bg-blue-100' :
                  'bg-yellow-100'
                }`}>
                  {activity.type === 'New Booking' ? <FaCalendarAlt className="text-green-500" /> :
                   activity.type === 'Customer Query' ? <FaEnvelope className="text-blue-500" /> :
                   <FaStar className="text-yellow-500" />}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{activity.type}</h3>
                  <p className="text-gray-600">{activity.description}</p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
              </div>
              {activity.amount && (
                <div className="text-right">
                  <p className="font-semibold text-gray-800">₹{activity.amount.toLocaleString()}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Actions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="p-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300">
            <FaBuilding className="text-2xl mb-2" />
            <h3 className="font-semibold">Manage Halls</h3>
            <p className="text-sm opacity-90">Add or edit banquet halls</p>
          </button>
          
          <button className="p-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300">
            <FaUtensils className="text-2xl mb-2" />
            <h3 className="font-semibold">Catering</h3>
            <p className="text-sm opacity-90">Manage catering services</p>
          </button>
          
          <button className="p-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300">
            <FaUsers className="text-2xl mb-2" />
            <h3 className="font-semibold">Customers</h3>
            <p className="text-sm opacity-90">View customer details</p>
          </button>
          
          <button className="p-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300">
            <FaEnvelope className="text-2xl mb-2" />
            <h3 className="font-semibold">Queries</h3>
            <p className="text-sm opacity-90">Handle customer queries</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overview;