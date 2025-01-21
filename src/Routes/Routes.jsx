import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../component/Navbar"
import Home from "../component/Home";
import MAin from "../Pages/Main";
const AppRoutes = () => {
  return (
    <Router>
        <Navbar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<MAin />} />
       
      </Routes>
    </Router>
  );
};

export default AppRoutes;
