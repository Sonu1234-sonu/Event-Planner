import React, { useState, useEffect } from "react";
import { FaEye, FaTrashAlt, FaEdit } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import { toast } from "react-hot-toast";
import api from "../../config/api";
import AddBanquetHallModel from "./Modals/AddBanquetHallModel";

const BanquetHall = () => {
  const [banquetHalls, setBanquetHalls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addBanquetHallModel, setAddBanquetHallModel] = useState(false);
  const [viewBanquetHallModel, setViewBanquetHallModel] = useState(false);
  const [editBanquetHallModel, setEditBanquetHallModel] = useState(false);
  const [deleteBanquetHallModel, setDeleteBanquetHallModel] = useState(false);
  const [selectedHall, setSelectedHall] = useState(null);

  useEffect(() => {
    fetchBanquetHalls();
  }, []);

  const fetchBanquetHalls = async () => {
    try {
      const response = await api.get('/admin/banquet-halls');
      setBanquetHalls(response.data.data);
    } catch (error) {
      console.error('Error fetching banquet halls:', error);
      toast.error('Failed to fetch banquet halls');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteHall = async (hallId) => {
    try {
      await api.delete(`/admin/banquet-halls/${hallId}`);
      toast.success('Banquet hall deleted successfully');
      fetchBanquetHalls();
      setDeleteBanquetHallModel(false);
    } catch (error) {
      toast.error('Failed to delete banquet hall');
      console.error('Error deleting banquet hall:', error);
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
    <>
      <div className="px-4 mt-3 flex justify-between">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Banquet Halls</h2>
        <button
          className="border rounded px-4 flex gap-3 items-center text-lg border-green-500 bg-green-500 text-white hover:bg-transparent hover:text-green-500"
          onClick={() => setAddBanquetHallModel(true)}
        >
          <IoAddCircleOutline /> Add New Hall
        </button>
      </div>

      <div className="m-3">
        <table className="min-w-full bg-white rounded-lg shadow-lg">
          <thead>
            <tr className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
              <th className="py-3 px-4 text-left">Hall Name</th>
              <th className="py-3 px-4 text-left">Manager Name</th>
              <th className="py-3 px-4 text-left">Contact Number</th>
              <th className="py-3 px-4 text-left">Capacity</th>
              <th className="py-3 px-4 text-left">Rent</th>
              <th className="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="p-4">
            {banquetHalls.length > 0 ? (
              banquetHalls.map((hall, index) => (
                <tr className="hover:bg-gray-50 border-b" key={index}>
                  <td className="py-3 px-4 font-medium">{hall.hallName}</td>
                  <td className="py-3 px-4">{hall.managerName}</td>
                  <td className="py-3 px-4">{hall.contactNumber}</td>
                  <td className="py-3 px-4">{hall.capacity}</td>
                  <td className="py-3 px-4 font-semibold text-green-600">₹{hall.rent}</td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <button
                        className="text-blue-500 px-3 py-1 rounded hover:text-blue-700 hover:bg-blue-50 transition-colors"
                        onClick={() => {
                          setSelectedHall(hall);
                          setViewBanquetHallModel(true);
                        }}
                        title="View Details"
                      >
                        <FaEye />
                      </button>
                      <button
                        className="text-yellow-500 px-3 py-1 rounded hover:text-yellow-700 hover:bg-yellow-50 transition-colors"
                        onClick={() => {
                          setSelectedHall(hall);
                          setEditBanquetHallModel(true);
                        }}
                        title="Edit Hall"
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="text-red-500 px-3 py-1 rounded hover:text-red-700 hover:bg-red-50 transition-colors"
                        onClick={() => {
                          setSelectedHall(hall);
                          setDeleteBanquetHallModel(true);
                        }}
                        title="Delete Hall"
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center p-8 text-gray-500">
                  <div className="flex flex-col items-center">
                    <IoAddCircleOutline className="text-4xl text-gray-300 mb-2" />
                    <p>No Banquet Halls Available</p>
                    <p className="text-sm">Add your first banquet hall to get started</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <AddBanquetHallModel
        isOpen={addBanquetHallModel}
        onClose={() => setAddBanquetHallModel(false)}
        onSuccess={fetchBanquetHalls}
      />

      {/* Delete Confirmation Modal */}
      {deleteBanquetHallModel && selectedHall && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Confirm Deletion</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete "{selectedHall.hallName}"? This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setDeleteBanquetHallModel(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteHall(selectedHall._id)}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BanquetHall;
