import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
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
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="mb-6 text-white">
          <FaBars size={24} />
        </button>

        <nav className="flex-1">
          <ul className="space-y-4">
            <li>
              <Link to="/admin/dashboard-stats" className="flex items-center gap-2 p-3 rounded-md transition hover:bg-[#00796B]">
                <FaTachometerAlt size={20} /> {isSidebarOpen && "Dashboard Stats"}
              </Link>
            </li>
            <li>
              <Link to="/admin/users" className="flex items-center gap-2 p-3 rounded-md transition hover:bg-[#00796B]">
                <FaUsers size={20} /> {isSidebarOpen && "Manage Users"}
              </Link>
            </li>
            <li>
              <Link to="/admin/donors" className="flex items-center gap-2 p-3 rounded-md transition hover:bg-[#00796B]">
                <FaUserPlus size={20} /> {isSidebarOpen && "Donors Work"}
              </Link>
            </li>
            <li>
              <Link to="/admin/blood-requests" className="flex items-center gap-2 p-3 rounded-md transition hover:bg-[#00796B]">
                <FaFileAlt size={20} /> {isSidebarOpen && "Blood Requests"}
              </Link>
            </li>
            <li>
              <Link to="/admin/reports" className="flex items-center gap-2 p-3 rounded-md transition hover:bg-[#00796B]">
                <FaChartPie size={20} /> {isSidebarOpen && "Reports"}
              </Link>
            </li>
            <li>
              <Link to="/admin/profile" className="flex items-center gap-2 p-3 rounded-md transition hover:bg-[#00796B]">
                <FaUser size={20} /> {isSidebarOpen && "Profile"}
              </Link>
            </li>
          </ul>
        </nav>

        <Link to="/logout" className="flex items-center gap-2 p-3 rounded-md transition hover:bg-[#00796B]">
          <FaSignOutAlt size={20} /> {isSidebarOpen && "Logout"}
        </Link>
      </aside>

      {/* Dynamic Content Inside Dashboard */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;
