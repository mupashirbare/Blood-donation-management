import { useState, useEffect } from "react";
import axios from "axios";

const BloodRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch blood requests
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/admin/blood-requests");
        setRequests(response.data);
      } catch (err) {
        setError("Failed to load blood requests");
      } finally {
        setLoading(false);
      }
    };
    fetchRequests();
  }, []);

  // Handle Approval
  const handleApprove = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/admin/blood-requests/${id}`, { status: "Approved" });
      setRequests(requests.map(req => (req.id === id ? { ...req, status: "Approved" } : req)));
    } catch (err) {
      console.error("Error approving request");
    }
  };

  // Handle Rejection
  const handleReject = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/admin/blood-requests/${id}`, { status: "Rejected" });
      setRequests(requests.map(req => (req.id === id ? { ...req, status: "Rejected" } : req)));
    } catch (err) {
      console.error("Error rejecting request");
    }
  };

  return (
    <div className="flex">

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-semibold text-[#004D40] mb-6">Blood Requests</h1>

        {loading && <p className="text-center text-gray-500">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {/* Blood Requests Table */}
        <div className="bg-white shadow-md rounded-lg p-4 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#00796B] text-white">
                <th className="p-2">Requester</th>
                <th className="p-2">Blood Type</th>
                <th className="p-2">Quantity</th>
                <th className="p-2">Status</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((req) => (
                <tr key={req.id} className="text-center border-b">
                  <td className="p-2">{req.name}</td>
                  <td className="p-2">{req.bloodType}</td>
                  <td className="p-2">{req.quantity} Units</td>
                  <td className={`p-2 ${req.status === "Approved" ? "text-green-600" : req.status === "Rejected" ? "text-red-600" : "text-yellow-600"}`}>
                    {req.status}
                  </td>
                  <td className="p-2 space-x-2">
                    {req.status === "Pending" && (
                      <>
                        <button onClick={() => handleApprove(req.id)} className="bg-green-500 text-white px-3 py-1 rounded-md">
                          Approve
                        </button>
                        <button onClick={() => handleReject(req.id)} className="bg-red-500 text-white px-3 py-1 rounded-md">
                          Reject
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
    </div>
  );
};

export default BloodRequests;
