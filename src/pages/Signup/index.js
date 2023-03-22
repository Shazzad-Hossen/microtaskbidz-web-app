// import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonPrimary from "../../components/Button/ButtonPrimary/ButtonPrimary";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { signupUser } from "../../services/signup/signupSlice";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confpass, setConfpass] = useState("");
  const body = { name, email, password };
  const dispatch = useDispatch();
  const { isSignedUp } = useSelector((state) => state.signup);

  useEffect(() => {
    if (isSignedUp) window.location.href = "./user/signin";
  }, [isSignedUp]);

  return (
    <div>
      <Header text="Sign Up" isShow="true">
        {" "}
      </Header>

      <main>
        <br /> <br /> <br />
        <div className=" mx-auto  max-w-3xl  rounded-xl bg-formbg">
          <div className="bg-[#fff]   bg-opacity-80 p-10">
            <label className="text-xl font-semibold" htmlFor="name">
              Name
            </label>{" "}
            <br />
            <input
              onChange={(e) => setName(e.target.value)}
              className="border-5 my-2 h-12 w-[100%] rounded-lg"
              type="text"
              name="name"
              id="name"
              value={name}
            />
            <label className="text-xl font-semibold" htmlFor="email">
              Email
            </label>{" "}
            <br />
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="border-5 my-2 h-12 w-[100%] rounded-lg"
              type="email"
              name="email"
              id="email"
              value={email}
            />
            <label className="text-xl font-semibold" htmlFor="password">
              Password
            </label>{" "}
            <br />
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="border-5 my-2 h-12 w-[100%] rounded-lg"
              type="password"
              name="pass"
              id="pass"
              value={password}
            />
            <label className="text-xl font-semibold" htmlFor="ConfirmPassword">
              Confirm Password
            </label>{" "}
            <br />
            <input
              onChange={(e) => setConfpass(e.target.value)}
              className="border-5 my-2 h-12 w-[100%] rounded-lg"
              type="password"
              name="confPass"
              id="confPass"
              value={confpass}
            />
            <br /> <br />
            <span>
              <ButtonPrimary
                onClick={() => dispatch(signupUser(body))}
                text="Sign up"
              ></ButtonPrimary>
            </span>
            <br />
            <br />
            <p>
              Already have an account ?{" "}
              <a className="text-[#028090]" href="/user/signin">
                Sign In here
              </a>
            </p>
          </div>
        </div>
        <br /> <br /> <br />
      </main>

      <Footer></Footer>
    </div>
  );
};

export default Signup;
