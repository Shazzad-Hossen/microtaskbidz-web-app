import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import ButtonPrimary from "../../components/Button/ButtonPrimary/ButtonPrimary";
import Spinner from "../../components/Spinner/Spinner";
import { signupUser } from "../../services/signup/signupSlice";
import { signup } from "../../services/navtext/navtextSlice";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confpass, setConfpass] = useState("");
  const body = { name, email, password, confpass };
  const dispatch = useDispatch();
  const { isLoading, isSignedUp, error } = useSelector((state) => state.signup);

  useEffect(() => {
    dispatch(signup());
  }, [dispatch]);

  const err = {
    nErr: false,
    emErr: false,
    passErr: false,
    confPassErr: false,
  };

  error === "NAME_ERROR"
    ? (err.nErr = true)
    : error === "EMAIL_ERROR"
    ? (err.emErr = true)
    : error === "PASS_ERROR"
    ? (err.passErr = true)
    : error === "CONFPASS_ERROR"
    ? (err.confPassErr = true)
    : (err.confPassErr = false);

  return (
    <main>
      {isSignedUp && <Navigate to="/user/signin"></Navigate>}
      {isLoading && <Spinner></Spinner>}
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
          {err.nErr && (
            <p className="font-medium text-[#cc0303]">
              name must be at least 5 charecter
            </p>
          )}
          <br />
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
          {err.emErr && (
            <p className="font-medium text-[#cc0303]">Invalid email address</p>
          )}{" "}
          <br />
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
          {err.passErr && (
            <p className="font-medium text-[#cc0303]">
              password must be at least or more than 8 charecter
            </p>
          )}{" "}
          <br />
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
          {err.confPassErr && (
            <p className="font-medium text-[#cc0303]">
              Password doesn't matched
            </p>
          )}
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
            <Link className="text-[#028090]" to="/user/signin">
              Sign In here
            </Link>
          </p>
        </div>
      </div>
      <br /> <br /> <br />
    </main>
  );
};

export default Signup;
