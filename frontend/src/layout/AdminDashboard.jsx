import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUsers, FaUserPlus, FaFileAlt, FaChartPie, FaUser,
  FaSignOutAlt, FaBars, FaMoon, FaSun, FaTachometerAlt,
} from "react-icons/fa";

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`flex ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} min-h-screen`}>
      {/* Sidebar */}
      <aside className={`h-screen ${isSidebarOpen ? "w-64" : "w-20"} bg-[#004D40] text-white transition-all duration-300 p-4 flex flex-col`}>
        {/* Sidebar Toggle Button */}
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="mb-6 text-white">
          <FaBars size={24} />
        </button>

        {/* Navigation */}
        <nav className="flex-1">
          <ul className="space-y-4">
            <li>
              <Link to="/dashboard-stats" className="flex items-center gap-2 p-3 rounded-md transition hover:bg-[#00796B]">
                <FaTachometerAlt size={20} /> {isSidebarOpen && "Dashboard Stats"}
              </Link>
            </li>
            <li>
              <Link to="/users" className="flex items-center gap-2 p-3 rounded-md transition hover:bg-[#00796B]">
                <FaUsers size={20} /> {isSidebarOpen && "Manage Users"}
              </Link>
            </li>
            <li>
              <Link to="/donors" className="flex items-center gap-2 p-3 rounded-md transition hover:bg-[#00796B]">
                <FaUserPlus size={20} /> {isSidebarOpen && "Donors Work"}
              </Link>
            </li>
            <li>
              <Link to="/blood-requests" className="flex items-center gap-2 p-3 rounded-md transition hover:bg-[#00796B]">
                <FaFileAlt size={20} /> {isSidebarOpen && "Blood Requests"}
              </Link>
            </li>
            <li>
              <Link to="/reports" className="flex items-center gap-2 p-3 rounded-md transition hover:bg-[#00796B]">
                <FaChartPie size={20} /> {isSidebarOpen && "Reports"}
              </Link>
            </li>
            <li>
              <Link to="/profile" className="flex items-center gap-2 p-3 rounded-md transition hover:bg-[#00796B]">
                <FaUser size={20} /> {isSidebarOpen && "Profile"}
              </Link>
            </li>
          </ul>
        </nav>

        {/* Logout */}
        <Link to="/logout" className="flex items-center gap-2 p-3 rounded-md transition hover:bg-[#00796B]">
          <FaSignOutAlt size={20} /> {isSidebarOpen && "Logout"}
        </Link>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header with Search Bar & Theme Toggle */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>

          <div className="flex items-center gap-4">
            {/* Centered Search Bar */}
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00796B] focus:border-transparent"
              />
            </div>

            {/* Dark Mode Toggle */}
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-md bg-gray-200 dark:bg-gray-700">
              {darkMode ? <FaSun size={24} className="text-yellow-400" /> : <FaMoon size={24} className="text-gray-700" />}
            </button>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Welcome to the Admin Dashboard</h2>
          <p className="text-gray-600 mt-2">Manage all operations from one place.</p>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
