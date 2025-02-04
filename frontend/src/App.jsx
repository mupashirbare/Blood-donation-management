import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import BloodRequest from "./pages/BloodRequest";
import Navbar from "./components/Navbar";
import ContactPage from "./pages/ContactPage";
import AboutUs from "./pages/AboutUs";
import ServicesPage from "./pages/ServicesPage";

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/RequestBlood" element={<BloodRequest/>} />
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
