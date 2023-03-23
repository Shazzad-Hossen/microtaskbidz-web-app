import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Home } from "./pages";
import Dashboard from "./pages/Dashboard";
import ResetPassword from "./pages/Resetpassword";
import Signin from "./pages/SIgnin";
import Signup from "./pages/Signup";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<Signup />} />
        <Route path="/user/signin" element={<Signin />} />
        <Route path="/user/password" element={<ResetPassword />} />
        <Route path="/user/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
