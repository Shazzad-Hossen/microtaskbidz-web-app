import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";
import ButtonPrimary from "../../components/Button/ButtonPrimary/ButtonPrimary";
import Spinner from "../../components/Spinner/Spinner";
import Header from "../../components/Header/Header";
import { signinUser } from "../../services/signin/signinSlice";
import { Link } from "react-router-dom";
import { signin } from "../../services/navtext/navtextSlice";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const body = { email, password };
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.signin);

  useEffect(() => {
    dispatch(signin());
  }, [dispatch]);

  return (
    <main>
      {isLoading && <Spinner></Spinner>}
      <br /> <br /> <br />
      <div className=" mx-auto  max-w-3xl  rounded-xl bg-formbg">
        <div className="bg-[#fff]   bg-opacity-80 p-10">
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
          <Link className="text-[#028090]" to="/user/password">
            Forgot password?
          </Link>
          <br /> <br />
          <ButtonPrimary
            onClick={() => dispatch(signinUser(body))}
            text="Sign In"
          ></ButtonPrimary>
          <br />
          <br />
          <p>
            Create a new account ?{" "}
            <Link className="text-[#028090]" to="/user">
              Sign up now
            </Link>
          </p>
        </div>
      </div>
      <br /> <br /> <br />
    </main>
  );
};

export default Signin;
