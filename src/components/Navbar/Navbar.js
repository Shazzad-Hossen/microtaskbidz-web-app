import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.png";
import menubaricon from "../../images/Menu Bar.png";
const Navbar = () => {
  const [menu, setMEnu] = useState(false);
  const menuHandler = () => {
    if (menu) setMEnu(false);
    else setMEnu(true);
  };

  return (
    <div>
      <div className=" mx-auto mb-40 flex max-w-7xl items-center justify-between">
        <img src={logo} alt="" />
        <div className=" hidden md:block">
          <ul className="flex gap-10 text-2xl font-semibold text-white">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/user/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/bidz">Bidz</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/user/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/user">Sign Up</Link>
            </li>
          </ul>
        </div>
        <button className="md:hidden" onClick={menuHandler}>
          <img src={menubaricon} alt="" />
        </button>
      </div>
      {menu && (
        <ul className="flex flex-col items-center justify-center gap-10 text-2xl font-semibold text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/bidz">Bidz</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/user/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/user">Sign Up</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
