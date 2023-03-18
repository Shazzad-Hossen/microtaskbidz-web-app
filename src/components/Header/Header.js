import React from "react";
import ButtonWhite from "../Button/ButtonWhite/ButtonWhite";
import Navbar from "../Navbar/Navbar";
import "./Header.css";
import banner from "../../images/bidz.png";

const Header = ({ text, isShow }) => {
  return (
    <div className="header-container">
      <Navbar></Navbar>

      {isShow && (
        <div className="mx-auto mb-16 max-w-xs border-4 border-white p-9 text-center text-5xl text-white">
          {text}
        </div>
      )}
      {!isShow && (
        <div className="flex flex-col-reverse items-center justify-center justify-center  gap-10 text-white lg:flex-row">
          <div className="border-4  p-8">
            <h1 className="text-4xl font-bold">
              BID OR HIRE AT A TIME <br />
              IN A SINGLE PLACE
            </h1>
            <p className="mt-5 mb-6 text-3xl font-semibold">
              Simple. Smooth. Elegant
            </p>
            <ButtonWhite text="Call Us: 000-00-0000"></ButtonWhite>
          </div>
          <img className="w-[100%] max-w-[400px]" src={banner} alt="" />
        </div>
      )}
    </div>
  );
};

export default Header;
