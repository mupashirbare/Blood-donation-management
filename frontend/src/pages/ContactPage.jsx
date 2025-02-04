import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import axios from "axios";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      alert("Message sent successfully!");
    } catch (error) {
      alert("Error sending message");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Contact Card */}
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Have any questions? We'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-red-700 text-white font-bold rounded-md hover:bg-red-800 transition duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-red-700 text-2xl" />
              <p className="text-gray-700 text-lg">+252 616917540</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-red-700 text-2xl" />
              <p className="text-gray-700 text-lg">mubashirbarre12t@example.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-red-700 text-2xl" />
              <p className="text-gray-700 text-lg"> Xareed Yarow Guulwade, Kismayo, somalia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
