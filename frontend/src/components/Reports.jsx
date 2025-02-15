import React from "react";

const Reports = () => {
  return (
    <div className="flex">
    
      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-semibold text-[#004D40] mb-6">Reports</h1>

        {/* Cards for Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <h2 className="text-2xl font-semibold text-[#00796B]">Total Users</h2>
            <p className="text-3xl font-bold">450</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <h2 className="text-2xl font-semibold text-[#00796B]">Total Donations</h2>
            <p className="text-3xl font-bold">320</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <h2 className="text-2xl font-semibold text-[#00796B]">Pending Requests</h2>
            <p className="text-3xl font-bold">25</p>
          </div>
        </div>

        {/* Download Reports */}
        <div className="mt-6">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Download Reports
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reports;
