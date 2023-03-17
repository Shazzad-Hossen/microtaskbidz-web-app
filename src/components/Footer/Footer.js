import React from "react";
import ButtonPrimary from "../Button/ButtonPrimary/ButtonPrimary";
import "./Footer.css";
import fbico from '../../images/icons/Facebook.png'
import twico from '../../images/icons/Twitter.png'
import inico from '../../images/icons/Linked in.png'
import ytico from '../../images/icons/YouTube.png'





const Footer = () => {
  return (
    <div className="footer-container">
      <div className="mx-auto flex   gap-32 p-2 text-white justify-center">
        <div className="">
          <p className="mb-3 font-semibold text-lg">Drop us a line</p>
          <h1 className="mb-3 text-3xl font-bold">
            We’re Talkative. Sleepless 24 hours in a week
          </h1>
            
            <div className="border-b border-[#666666] flex pb-2 pt-10"> 
            <h3 className=" text-[#666666] w-24 " htmlFor="Name"> Name</h3>
            <input className="w-[100%] bg-transparent border-l border-[#666666]" type="text" />
            </div>

            <div className="border-b border-[#666666] flex pb-2 pt-10"> 
            <h3 className=" text-[#666666] w-24 " htmlFor="Name"> Email</h3>
            <input className="w-[100%] bg-transparent border-l border-[#666666]" type="text" />
            </div>

            <div className="border-b border-[#666666] flex pb-2 pt-10"> 
            <h3 className=" text-[#666666] w-24 " htmlFor="Name"> Phone</h3>
            <input className="w-[100%] bg-transparent border-l border-slate-500" type="text" />
            </div>

            <div className="border-b border-[#666666] flex pb-2 pt-10"> 
            <h3 className=" text-[#666666] w-24 " htmlFor="Name"> Message</h3>
            <textarea className=" w-[100%] bg-transparent border-l border-[#666666]" rows={1} type="text" />
            </div>
            <br /> <br />
            <ButtonPrimary text="SUBMIT"></ButtonPrimary> 

        </div>


        <div className="">
          <h1 className="text-lg font-bold mb-3">ADDRESS 01</h1>
          <h1 className="text-base font-bold">Rain Design</h1>
          <p className=" mb-3">Silver Tower <br />
123/45. There are many variations of passages <br />
12, Jumpton Road, South Avenue. New Jersey, NA. <br />
Ph. (123) 456 789 <br />
Email: help@raindesign.com</p>

<h1 className="text-lg font-bold mb-3">ADDRESS 02</h1>
          <h1 className="text-base font-bold">Rain Design</h1>
          <p className=" mb-3">Rain Design <br />
Alvin Plaza <br />
45. There are many variations of passages <br />
12, Jumpton Road, New Jersey, NA. <br />
Ph. (123) 456 789 <br />
Email: help@raindesign.com</p>

<div className="flex gap-4 mt-16">
  <img src={fbico} alt="" />
  <img src={twico} alt="" />
  <img src={inico} alt="" />
  <img src={ytico} alt="" />

</div>

<div className="flex gap-14 items-end">
<p className="mt-10">© 2020 Rain Design. All rights reserved. <br />
Made by: Rain Group of Company. <br /> <br />

Privacy Policy | Terms and Conditions</p> 

<a href="#top"><button className=" w-16 h-16 bg-zinc-900 text-6xl">	&uarr;</button></a>
</div>




        </div>


      </div>
    </div>
  );
};

export default Footer;
