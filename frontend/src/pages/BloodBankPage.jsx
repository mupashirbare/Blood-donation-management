import { useState } from "react";
import { FaTint } from "react-icons/fa";
import Footer from "../components/Footer";

const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const BloodBankPage = () => {
  const [selectedBlood, setSelectedBlood] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });

  const handleOpenForm = (bloodType) => {
    setSelectedBlood(bloodType);
    setFormData({ name: "", contact: "", message: "" });
  };

  const handleCloseForm = () => {
    setSelectedBlood(null);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Blood Request Submitted for ${selectedBlood}!`);
    handleCloseForm();
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold text-center text-red-700">Request {selectedBlood} Blood</h2>
            <form className="mt-4" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Contact Number</label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Blood Type</label>
                <input type="text" value={selectedBlood} readOnly className="w-full p-2 border rounded bg-gray-100" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Message (Optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
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
