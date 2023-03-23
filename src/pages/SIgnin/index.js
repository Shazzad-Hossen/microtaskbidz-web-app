import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";
import ButtonPrimary from "../../components/Button/ButtonPrimary/ButtonPrimary";
import Spinner from "../../components/Spinner/Spinner";
import Header from "../../components/Header/Header";
import { signinUser } from "../../services/signin/signinSlice";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const body = { email, password };
  const dispatch = useDispatch();
  const { isLoading, isSignedIn } = useSelector((state) => state.signin);

  useEffect(() => {
    if (isSignedIn) window.location.href = "./dashboard";
  }, [isSignedIn]);

  return (
    <div>
      <Header text="Sign In" isShow="true"></Header>

      {isLoading && <Spinner></Spinner>}

      <main>
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
            <a className="text-[#028090]" href="/user/password">
              Forgot password?
            </a>
            <br /> <br />
            <ButtonPrimary
              onClick={() => dispatch(signinUser(body))}
              text="Sign In"
            ></ButtonPrimary>
            <br />
            <br />
            <p>
              Create a new account ?{" "}
              <a className="text-[#028090]" href="/user">
                Sign up now
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

export default Signin;
