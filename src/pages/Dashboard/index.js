import React, { useEffect } from "react";
import "./Dashboard.css";
import dfPropic from "../../images/default pro pic.jpg";
import ButtonPrimary from "../../components/Button/ButtonPrimary/ButtonPrimary";
import Personalinfo from "../../components/Personalinfo/Personalinfo";
import { useDispatch } from "react-redux";
import { dboard } from "../../services/navtext/navtextSlice";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dboard());
  }, [dispatch]);

  return (
    <main>
      <div className="flex">
        {/* sidebar */}
        <div className="w-[300px] bg-[#252525]  text-xl  text-[#cfcfcf]">
          <ul className="sticky top-0">
            <li className="dli">Dashboard</li>
            <li className="dli">Profile</li>
            <li className="dli">Create Task</li>
            <li className="dli">My Tasks</li>
            <li className="dli">Settings</li>
          </ul>
        </div>
        {/* body */}
        <div className=" p-11">
          {/* profile */}
          <div className="">
            <div className="flex gap-4  ">
              <img className="propic" src={dfPropic} alt="" />
              <span
                className="flex flex-col
                        justify-end"
              >
                <ButtonPrimary text="Upload"></ButtonPrimary>
              </span>
            </div>

            <br />
            <br />

            <h1 className="mb-8 text-2xl font-bold">Personal Information</h1>

            <Personalinfo name="Name" value="Shazzad Hossen"></Personalinfo>
            <Personalinfo name="Phone" value="+8801645288850"></Personalinfo>
            <Personalinfo
              name="Email"
              value="shazzad.srv@gmail.com"
            ></Personalinfo>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
