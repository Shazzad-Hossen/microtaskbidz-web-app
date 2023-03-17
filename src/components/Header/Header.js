import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = ({ text, isShow }) => {
  return (
    <div className="header-container">
      <Navbar></Navbar>

      {isShow && (
        <div className="mx-auto mb-16 max-w-xs border-4 border-white p-9 text-center text-5xl text-white">
          {text}
        </div>
      )
    }
    </div>
  );
};

export default Header;
