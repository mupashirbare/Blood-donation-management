import { useState } from "react";
import { FaTint } from "react-icons/fa";
import { Link } from "react-router-dom";

const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const BloodBankPage = () => {
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
          <Link
            key={index}
            to={`/request-blood?type=${type}`}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition duration-300"
          >
            <FaTint className="text-5xl text-red-700" />
            <h2 className="text-2xl font-bold mt-4">{type}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BloodBankPage;
