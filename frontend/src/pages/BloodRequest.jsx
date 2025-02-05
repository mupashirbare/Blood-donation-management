import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const BloodRequest = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const bloodTypeFromQuery = queryParams.get("type") || "";

  const [formData, setFormData] = useState({
    bloodType: bloodTypeFromQuery,
    location: "",
    urgency: "Normal",
  });

  useEffect(() => {
    setFormData((prev) => ({ ...prev, bloodType: bloodTypeFromQuery }));
  }, [bloodTypeFromQuery]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/recipient/request", formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      alert("Blood request submitted successfully!");
    } catch (error) {
      alert("Error submitting request");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-3xl font-semibold text-red-700 text-center mb-6">
          Request Blood
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Blood Type Selection */}
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

          {/* Location Input */}
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

          {/* Urgency Selection */}
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-red-700 text-white font-bold rounded-md hover:bg-red-800 transition duration-300"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default BloodRequest;
