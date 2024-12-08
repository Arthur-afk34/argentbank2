import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Homepage from "./pages/homepage/Homepage";
import Loginpage from "./pages/loginpage/Loginpage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Userpage from "./pages/userpage/Userpage";
import Errorpage from "./pages/errorpage/Errorpage";
import "./designs/css/App.css";

export default function App() {
  const isConnected = useSelector((state) => state.auth.isConnected);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="Login" element={<Loginpage />} />
        <Route
          path="Userpage"
          element={isConnected ? <Userpage /> : <Navigate to="/Login" />}
        />
        <Route path="*" element={<Errorpage />} />
      </Routes>
      <Footer />
    </div>
  );
}
