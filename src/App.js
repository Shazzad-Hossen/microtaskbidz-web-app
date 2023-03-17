import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import ResetPassword from "./pages/Resetpassword";
import Signin from "./pages/SIgnin";
import Signup from "./pages/Signup";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="user" element={<Signup />} />
      <Route path="/user/signin" element={<Signin />} />
      <Route path="/user/password" element={<ResetPassword />} />
    </Routes>
  );
}

export default App;
