import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import Signin from "./pages/SIgnin";
import Signup from "./pages/Signup";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Signin" element={<Signin />} />
    </Routes>
  );
}

export default App;
