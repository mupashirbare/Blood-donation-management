import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
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
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Admin" element={<AdminDashboard/>} />
        <Route path="/dashboard-stats" element={<DashboardStats/>} />
        <Route path="/BloodBank" element={<BloodBankPage/>} />
        <Route path="/request-blood" element={<BloodRequest/>} />
        <Route path="contact" element={<ContactPage/>} />
        <Route path="about" element={<AboutUs/>} />
        <Route path="services" element={<ServicesPage/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
  );
};

export default App;
