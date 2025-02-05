import { useState } from "react";
import { FaTint } from "react-icons/fa";
import Footer from "../components/Footer";
import axios from "axios";

const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const BloodBankPage = () => {
  const [selectedBlood, setSelectedBlood] = useState(null);
  const [formData, setFormData] = useState({
    bloodType: "",
    location: "",
    urgency: "Normal",
  });

  const handleOpenForm = (bloodType) => {
    setSelectedBlood(bloodType);
    setFormData({ bloodType, location: "", urgency: "Normal" });
  };

  const handleCloseForm = () => {
    setSelectedBlood(null);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/recipient/request", formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      alert("Blood request submitted successfully!");
      handleCloseForm();
    } catch (error) {
      alert("Error submitting request");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-red-700 text-white text-center py-16 px-4">
        <h1 className="text-4xl font-bold">Blood Bank</h1>
        <p className="text-lg mt-2">Find and request the blood type you need.</p>
      </div>

      {/* Blood Types Grid */}
      <div className="max-w-6xl mx-auto py-12 px-6 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {bloodTypes.map((type, index) => (
          <button
            key={index}
            onClick={() => handleOpenForm(type)}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition duration-300"
          >
            <FaTint className="text-5xl text-red-700" />
            <h2 className="text-2xl font-bold mt-4">{type}</h2>
          </button>
        ))}
      </div>

      {/* Blood Request Form Modal */}
      {selectedBlood && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold text-center text-red-700">
              Request {selectedBlood} Blood
            </h2>
            <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 font-medium">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Urgency</label>
                <select
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                >
                  <option value="Normal">Normal</option>
                  <option value="Urgent">Urgent</option>
                </select>
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handleCloseForm}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BloodBankPage;
