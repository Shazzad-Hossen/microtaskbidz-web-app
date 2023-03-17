import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import Signup from "./pages/Signup";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
