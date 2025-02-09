import { useState, useEffect } from "react";
import axios from "axios";
import { FaCheck, FaTimes, FaSearch } from "react-icons/fa";

const AdminDashboard = () => {
  const [requests, setRequests] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/admin/requests", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setRequests(res.data);
      } catch (error) {
        console.error("Error fetching requests:", error);
      }
    };
    fetchRequests();
  }, []);

  const handleApprove = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/admin/approve/${id}`, {}, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setRequests((prev) =>
        prev.map((req) => (req._id === id ? { ...req, status: "Approved" } : req))
      );
    } catch (error) {
      console.error("Error approving request:", error);
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/admin/reject/${id}`, {}, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setRequests((prev) =>
        prev.map((req) => (req._id === id ? { ...req, status: "Rejected" } : req))
      );
    } catch (error) {
      console.error("Error rejecting request:", error);
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-red-700 mb-6 text-center">Admin Dashboard</h2>
      
      {/* Search Bar */}
      <div className="mb-4 flex items-center bg-gray-100 p-2 rounded-md">
        <FaSearch className="text-gray-500 ml-2" />
        <input
          type="text"
          placeholder="Search blood requests..."
          className="ml-2 p-2 w-full outline-none bg-transparent"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Requests Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse rounded-lg shadow-md">
          <thead>
            <tr className="bg-red-700 text-white">
              <th className="p-3 text-left">Blood Type</th>
              <th className="p-3 text-left">Location</th>
              <th className="p-3 text-left">Urgency</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests
              .filter((req) => req.bloodType.includes(searchTerm))
              .map((req, index) => (
                <tr key={index} className="border-b hover:bg-gray-100 transition">
                  <td className="p-3">{req.bloodType}</td>
                  <td className="p-3">{req.location}</td>
                  <td className="p-3">{req.urgency}</td>
                  <td className={`p-3 font-bold ${
                    req.status === "Pending"
                      ? "text-yellow-500"
                      : req.status === "Approved"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}>
                    {req.status}
                  </td>
                  <td className="p-3 flex gap-2">
                    {req.status === "Pending" && (
                      <>
                        <button
                          onClick={() => handleApprove(req._id)}
                          className="bg-green-500 text-white p-2 rounded-md hover:bg-green-700 transition"
                        >
                          <FaCheck />
                        </button>
                        <button
                          onClick={() => handleReject(req._id)}
                          className="bg-red-500 text-white p-2 rounded-md hover:bg-red-700 transition"
                        >
                          <FaTimes />
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
