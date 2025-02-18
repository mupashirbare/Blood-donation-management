import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import UsersPage from "./pages/UsersPage";
import Login from "./pages/login";
import DonorsPage from "./pages/DonorsPage";
import BloodRequests from "./pages/BloodRequests";
import Profile from "./pages/Profile";
import Reports from "./components/Reports";

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
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        {/* Nested Routes Inside Admin Dashboard */}
        <Route path="/admin" element={<AdminDashboard />}>
          <Route index element={<DashboardStats />} /> {/* Default Admin Page */}
          <Route path="dashboard-stats" element={<DashboardStats />} />
          <Route path="users" element={<UsersPage/>} />
          <Route path="donors" element={<DonorsPage/>} />
          <Route path="blood-requests" element={<BloodRequests/>} />
          <Route path="reports" element={<Reports/>} />
          <Route path="profile" element={<Profile/>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
