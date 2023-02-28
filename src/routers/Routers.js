import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import EditSection from "../components/UI/EditSection";
import NotFound from "../pages/NotFound";
import AddSection from "../pages/AddSection";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:id" element={<EditSection />} />
      <Route path="/cars/add" element={<AddSection/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
