import React, { useState } from "react";
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
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/clients">Clients</a>
            </li>
            <li>
              <a href="/user">Sign Up</a>
            </li>
            <li>
              <a href="/user/signin">Sign In</a>
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
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/clients">Clients</a>
          </li>
          <li>
            <a href="/articles">Articles</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
