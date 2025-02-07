import { useState, useEffect } from "react";
import axios from "axios";
import { IoClose } from "react-icons/io5";

const BloodRequest = ({ bloodType, closeModal }) => {
  const [formData, setFormData] = useState({
    bloodType: bloodType,
    location: "",
    urgency: "Normal",
  });

  useEffect(() => {
    setFormData((prev) => ({ ...prev, bloodType }));
  }, [bloodType]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/recipient/request", formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      alert("Blood request submitted successfully!");
      closeModal();
    } catch (error) {
      alert("Error submitting request");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 z-50">
      <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg relative">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-2xl"
        >
          <IoClose />
        </button>

        {/* Header */}
        <h2 className="text-3xl font-semibold text-red-700 text-center mb-6">
          Request Blood
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Blood Type */}
          <div>
            <label className="block text-gray-700 font-medium">Blood Type</label>
            <input
              type="text"
              name="bloodType"
              value={formData.bloodType}
              readOnly
              className="block w-full mt-1 p-3 border border-gray-300 rounded-md bg-gray-100"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-gray-700 font-medium">Location</label>
            <input
              type="text"
              name="location"
              placeholder="Enter location"
              onChange={handleChange}
              required
              className="block w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          {/* Urgency */}
          <div>
            <label className="block text-gray-700 font-medium">Urgency</label>
            <select
              name="urgency"
              onChange={handleChange}
              className="block w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              <option value="Normal">Normal</option>
              <option value="Urgent">Urgent</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={closeModal}
              className="w-1/2 py-3 bg-gray-300 text-gray-700 font-bold rounded-md hover:bg-gray-400 transition duration-300 mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-1/2 py-3 bg-red-700 text-white font-bold rounded-md hover:bg-red-800 transition duration-300"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BloodRequest;
