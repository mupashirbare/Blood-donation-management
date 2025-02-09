import { useState } from "react";
import { FaUsers, FaUserPlus, FaFileAlt, FaChartPie, FaUser, FaSignOutAlt, FaBars, FaMoon, FaSun } from "react-icons/fa";

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`flex ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      {/* Sidebar */}
      <aside className={`h-screen ${isSidebarOpen ? "w-64" : "w-20"} bg-red-700 text-white transition-width duration-300 p-4 flex flex-col`}>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="mb-6">
          <FaBars size={24} />
        </button>
        <nav className="flex-1">
          <ul className="space-y-4">
            <li className="flex items-center gap-2 p-2 cursor-pointer hover:bg-red-800 rounded-md">
              <FaUsers /> {isSidebarOpen && "Manage Users"}
            </li>
            <li className="flex items-center gap-2 p-2 cursor-pointer hover:bg-red-800 rounded-md">
              <FaUserPlus /> {isSidebarOpen && "Donors Work"}
            </li>
            <li className="flex items-center gap-2 p-2 cursor-pointer hover:bg-red-800 rounded-md">
              <FaFileAlt /> {isSidebarOpen && "Blood Requests"}
            </li>
            <li className="flex items-center gap-2 p-2 cursor-pointer hover:bg-red-800 rounded-md">
              <FaChartPie /> {isSidebarOpen && "Reports"}
            </li>
            <li className="flex items-center gap-2 p-2 cursor-pointer hover:bg-red-800 rounded-md">
              <FaUser /> {isSidebarOpen && "Profile"}
            </li>
          </ul>
        </nav>
        <button className="flex items-center gap-2 p-2 hover:bg-red-800 rounded-md">
          <FaSignOutAlt /> {isSidebarOpen && "Logout"}
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <input type="text" placeholder="Search..." className="p-2 border rounded-md" />
            <button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
            </button>
          </div>
        </header>

        <section className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
          <h2 className="text-xl font-semibold">Dashboard Overview</h2>
          <p>Welcome to the Admin Dashboard. Manage users, donors, blood requests, and more.</p>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
