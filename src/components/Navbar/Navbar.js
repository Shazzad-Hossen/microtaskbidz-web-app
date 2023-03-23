import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.png";
import menubaricon from "../../images/Menu Bar.png";
import { signout } from "../../services/signin/signinSlice";

const Navbar = () => {
  const { isSignedIn } = useSelector((state) => state.signin);
  const [menu, setMEnu] = useState(false);
  const menuHandler = () => {
    if (menu) setMEnu(false);
    else setMEnu(true);
  };
  const dispatch = useDispatch();

  return (
    <div>
      <div className=" mx-auto mb-40 flex max-w-7xl items-center justify-between">
        <img src={logo} alt="" />
        <div className=" hidden md:block">
          <ul className="flex gap-10 text-2xl font-semibold text-white">
            <li>
              <Link to="/">Home</Link>
            </li>
            {isSignedIn && (
              <li>
                <Link to="/user/dashboard">Dashboard</Link>
              </li>
            )}
            <li>
              <Link to="/bidz">Bidz</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            {!isSignedIn && (
              <li>
                <Link to="/user/signin">Sign In</Link>
              </li>
            )}
            {!isSignedIn && (
              <li>
                <Link to="/user">Sign Up</Link>
              </li>
            )}
            {isSignedIn && (
              <li>
                <Link onClick={() => dispatch(signout())} to="/">
                  Sign Out
                </Link>
              </li>
            )}
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
          {isSignedIn && (
            <li>
              <Link to="/user/dashboard">Dashboard</Link>
            </li>
          )}
          <li>
            <Link to="/bidz">Bidz</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {!isSignedIn && (
            <li>
              <Link to="/user/signin">Sign In</Link>
            </li>
          )}
          {!isSignedIn && (
            <li>
              <Link to="/user">Sign Up</Link>
            </li>
          )}
          {isSignedIn && (
            <li>
              <Link onClick={() => dispatch(signout())} to="/">
                Sign Out
              </Link>
            </li>
          )}
        </ul>
      )}
      <br /> <br /> <br />
    </div>
  );
};

export default Navbar;
