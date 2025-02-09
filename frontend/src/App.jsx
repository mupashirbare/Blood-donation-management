import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import ContactPage from "./pages/ContactPage";
import AboutUs from "./pages/AboutUs";
import ServicesPage from "./pages/ServicesPage";
import BloodBankPage from "./pages/BloodBankPage";
import BloodRequest from "./pages/BloodRequest";
import AdminDashboard from "./layout/AdminDashboard";
import DashboardStats from "./components/DashboardStats";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/bloodbank" element={<BloodBankPage />} />
        <Route path="/request-blood" element={<BloodRequest />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Nested Routes Inside Admin Dashboard */}
        <Route path="/admin" element={<AdminDashboard />}>
          <Route index element={<DashboardStats />} /> {/* Default Admin Page */}
          <Route path="dashboard-stats" element={<DashboardStats />} />
          <Route path="users" element={<h2>Manage Users</h2>} />
          <Route path="donors" element={<h2>Donors Work</h2>} />
          <Route path="blood-requests" element={<h2>Blood Requests</h2>} />
          <Route path="reports" element={<h2>Reports</h2>} />
          <Route path="profile" element={<h2>Profile</h2>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
