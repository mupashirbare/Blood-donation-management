import { useState } from "react";
import axios from "axios";

const BloodRequest = () => {
  const [formData, setFormData] = useState({
    bloodType: "",
    location: "",
    urgency: "Normal",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

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
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Request Blood</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <select name="bloodType" onChange={handleChange} required className="border p-2">
          <option value="">Select Blood Type</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>
        <input type="text" name="location" placeholder="Location" onChange={handleChange} required className="border p-2" />
        <select name="urgency" onChange={handleChange} className="border p-2">
          <option value="Normal">Normal</option>
          <option value="Urgent">Urgent</option>
        </select>
        <button type="submit" className="bg-red-600 text-white p-2">Submit Request</button>
      </form>
    </div>
  );
};

export default BloodRequest;
