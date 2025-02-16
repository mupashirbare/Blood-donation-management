import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  FaUsers, FaUserPlus, FaFileAlt, FaChartPie, FaUser,
  FaSignOutAlt, FaBars, FaMoon, FaSun, FaTachometerAlt,
  FaPalette,
} from "react-icons/fa";

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);
  const [theme, setTheme] = useState("light");

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "light" ? "dark" : prevTheme === "dark" ? "custom" : "light"
    );
  };

  return (
    <div
      className={`flex min-h-screen transition-all duration-300 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : theme === "custom"
          ? "bg-[#E0F7FA] text-[#004D40]"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Sidebar */}
      <aside
        className={`fixed md:relative h-screen ${
          isSidebarOpen ? "w-64" : "w-20"
        } bg-[#004D40] text-white transition-all duration-300 p-4 flex flex-col`}
      >
        <button onClick={toggleSidebar} className="mb-6 text-white flex items-center">
          <FaBars size={24} />
          {isSidebarOpen && <span className="ml-2">Menu</span>}
        </button>

        <nav className="flex-1">
          <ul className="space-y-4">
            <li>
              <Link
                to="/admin/dashboard-stats"
                className="flex items-center gap-2 p-3 rounded-md transition hover:bg-[#00796B]"
              >
                <FaTachometerAlt size={20} /> {isSidebarOpen && "Dashboard Stats"}
              </Link>
            </li>
            <li>
              <Link
                to="/admin/users"
                className="flex items-center gap-2 p-3 rounded-md transition hover:bg-[#00796B]"
              >
                <FaUsers size={20} /> {isSidebarOpen && "Manage Users"}
              </Link>
            </li>
            <li>
              <Link
                to="/admin/donors"
                className="flex items-center gap-2 p-3 rounded-md transition hover:bg-[#00796B]"
              >
                <FaUserPlus size={20} /> {isSidebarOpen && "Donors Work"}
              </Link>
            </li>
            <li>
              <Link
                to="/admin/blood-requests"
                className="flex items-center gap-2 p-3 rounded-md transition hover:bg-[#00796B]"
              >
                <FaFileAlt size={20} /> {isSidebarOpen && "Blood Requests"}
              </Link>
            </li>
            <li>
              <Link
                to="/admin/reports"
                className="flex items-center gap-2 p-3 rounded-md transition hover:bg-[#00796B]"
              >
                <FaChartPie size={20} /> {isSidebarOpen && "Reports"}
              </Link>
            </li>
            <li>
              <Link
                to="/admin/profile"
                className="flex items-center gap-2 p-3 rounded-md transition hover:bg-[#00796B]"
              >
                <FaUser size={20} /> {isSidebarOpen && "Profile"}
              </Link>
            </li>
          </ul>
        </nav>

        <Link
          to="/logout"
          className="flex items-center gap-2 p-3 rounded-md transition hover:bg-[#00796B]"
        >
          <FaSignOutAlt size={20} /> {isSidebarOpen && "Logout"}
        </Link>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-h-screen flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center p-4 bg-white shadow-md">
          <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button onClick={toggleTheme} className="p-2 rounded-md transition bg-gray-200 hover:bg-gray-300">
              {theme === "light" ? <FaMoon size={20} /> : theme === "dark" ? <FaPalette size={20} /> : <FaSun size={20} />}
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 p-6 overflow-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
