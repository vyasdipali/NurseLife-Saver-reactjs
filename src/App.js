import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import JobRequirement from "./components/Pages/JobRequirement";
import Home from "./components/Pages/Home";                                  
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CollegeStudent from "./components/Pages/CollegeStudent";
import Experience from "./components/Pages/Experience";
import Footer from "./components/Pages/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/JobRequirement" element={<JobRequirement />} />
        <Route path="/CollegeStudent" element={<CollegeStudent />} />
        <Route path="/Experience" element={<Experience/>} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
