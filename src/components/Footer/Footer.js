import React from "react";
import ButtonPrimary from "../Button/ButtonPrimary/ButtonPrimary";
import "./Footer.css";
import fbico from "../../images/icons/Facebook.png";
import twico from "../../images/icons/Twitter.png";
import inico from "../../images/icons/Linked in.png";
import ytico from "../../images/icons/YouTube.png";

const Footer = () => {
  const footerAccordion = () => {
    document.getElementById("showContentright").classList.toggle("active");
    document.getElementById("showContentleft").classList.toggle("active");
    document.getElementById("svgArrow").classList.toggle("active");
  };

  return (
    <div className="footer-container">
      <div
        onClick={footerAccordion}
        className="  mx-auto flex  max-w-[1280px] justify-center text-white"
      >
        {" "}
        <span
          id="rotate"
          className=" flex h-[50px] w-[50px] items-center justify-center bg-zinc-900"
        >
          <svg id="svgArrow" width="15" height="10" viewBox="0 0 42 25">
            <path
              d="M3 3L21 21L39 3"
              stroke="white"
              strokeWidth="7"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </div>

      <div className="mx-auto flex   flex-col justify-center gap-32 p-2  text-white md:flex-row">
        <div className="">
          <div id="showContentleft" className="showContent">
            <p className="mb-3 text-lg font-semibold">Drop us a line</p>
            <h1 className="mb-3 text-3xl font-bold">
              We’re Talkative. Sleepless 24 hours in a week
            </h1>
            <div className="flex border-b border-[#666666] pb-2 pt-10">
              <h3 className=" w-24 text-[#666666] " htmlFor="Name">
                {" "}
                Name
              </h3>
              <input
                className="w-[100%] border-l border-[#666666] bg-transparent"
                type="text"
              />
            </div>
            <div className="flex border-b border-[#666666] pb-2 pt-10">
              <h3 className=" w-24 text-[#666666] " htmlFor="Name">
                {" "}
                Email
              </h3>
              <input
                className="w-[100%] border-l border-[#666666] bg-transparent"
                type="text"
              />
            </div>
            <div className="flex border-b border-[#666666] pb-2 pt-10">
              <h3 className=" w-24 text-[#666666] " htmlFor="Name">
                {" "}
                Phone
              </h3>
              <input
                className="w-[100%] border-l border-slate-500 bg-transparent"
                type="text"
              />
            </div>
            <div className="flex border-b border-[#666666] pb-2 pt-10">
              <h3 className=" w-24 text-[#666666] " htmlFor="Name">
                {" "}
                Message
              </h3>
              <textarea
                className=" w-[100%] border-l border-[#666666] bg-transparent"
                rows={1}
                type="text"
              />
            </div>
            <br /> <br />
            <ButtonPrimary text="SUBMIT"></ButtonPrimary>
          </div>
        </div>

        <div className="">
          <div id="showContentright" className="showContent">
            <h1 className="mb-3 text-lg font-bold">ADDRESS 01</h1>
            <h1 className="text-base font-bold">Rain Design</h1>
            <p className=" mb-3">
              Silver Tower <br />
              123/45. There are many variations of passages <br />
              12, Jumpton Road, South Avenue. New Jersey, NA. <br />
              Ph. (123) 456 789 <br />
              Email: help@raindesign.com
            </p>

            <h1 className="mb-3 text-lg font-bold">ADDRESS 02</h1>
            <h1 className="text-base font-bold">Rain Design</h1>
            <p className=" mb-3">
              Rain Design <br />
              Alvin Plaza <br />
              45. There are many variations of passages <br />
              12, Jumpton Road, New Jersey, NA. <br />
              Ph. (123) 456 789 <br />
              Email: help@raindesign.com
            </p>
          </div>
        </div>
      </div>

      <div className="mt-3 flex justify-center gap-4">
        <img
          className="max-h-[35px] w-[100%] max-w-[35px]"
          src={fbico}
          alt=""
        />
        <img
          className="max-h-[35px] w-[100%] max-w-[35px]"
          src={twico}
          alt=""
        />
        <img
          className="max-h-[35px] w-[100%] max-w-[35px]"
          src={inico}
          alt=""
        />
        <img
          className="max-h-[35px] w-[100%] max-w-[35px]"
          src={ytico}
          alt=""
        />
      </div>

      <p className="mt-3 flex justify-center text-center text-white">
        © 2023 MicroTaskBidz. All rights reserved. Made by: Shazzad Hossen.
      </p>
    </div>
  );
};

export default Footer;
