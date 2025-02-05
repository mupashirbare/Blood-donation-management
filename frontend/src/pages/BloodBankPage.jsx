import { useState } from "react";
import { FaTint } from "react-icons/fa";
import Footer from "../components/Footer";
import BloodRequest from "./BloodRequest";

const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const BloodBankPage = () => {
  const [selectedBloodType, setSelectedBloodType] = useState(null);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-72 flex flex-col items-center justify-center bg-gradient-to-r from-[#B71C1C] to-[#880E4F] text-white text-center">
        <h1 className="text-4xl font-bold">Blood Bank</h1>
        <p className="text-lg mt-2">Find and request the blood type you need.</p>
      </div>

      {/* Blood Types Grid */}
      <div className="max-w-6xl mx-auto py-12 px-6 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {bloodTypes.map((type, index) => (
          <button
            key={index}
            onClick={() => setSelectedBloodType(type)}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition duration-300"
          >
            <FaTint className="text-5xl text-red-700" />
            <h2 className="text-2xl font-bold mt-4">{type}</h2>
          </button>
        ))}
      </div>

      {/* Modal for Blood Request */}
      {selectedBloodType && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
            <button
              onClick={() => setSelectedBloodType(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl"
            >
              &times;
            </button>
            <BloodRequest bloodType={selectedBloodType} closeModal={() => setSelectedBloodType(null)} />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default BloodBankPage;
