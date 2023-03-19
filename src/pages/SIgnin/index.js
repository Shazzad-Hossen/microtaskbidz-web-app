import React from "react";
import ButtonPrimary from "../../components/Button/ButtonPrimary/ButtonPrimary";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Signin = () => {
  return (
    <div>
      <Header text="Sign In" isShow="true">
        {" "}
      </Header>

      <main>
        <br /> <br /> <br />
        <div className=" mx-auto  max-w-3xl  rounded-xl bg-formbg">
          <div className="bg-[#fff]   bg-opacity-80 p-10">
            <form>
              <label className="text-xl font-semibold" htmlFor="email">
                Email
              </label>{" "}
              <br />
              <input
                className="border-5 my-2 h-12 w-[100%] rounded-lg"
                type="email"
                name="email"
                id="email"
              />
              <label className="text-xl font-semibold" htmlFor="password">
                Password
              </label>{" "}
              <br />
              <input
                className="border-5 my-2 h-12 w-[100%] rounded-lg"
                type="password"
                name="pass"
                id="pass"
              />
              <a className="text-[#028090]" href="/user/password">
                Forgot password?
              </a>
              <br /> <br />
              <ButtonPrimary text="Sign In"></ButtonPrimary>
              <br />
              <br />
              <p>
                Create a new account ?{" "}
                <a className="text-[#028090]" href="/user">
                  Sign up now
                </a>
              </p>
            </form>
          </div>
        </div>
        <br /> <br /> <br />
      </main>

      <Footer></Footer>
    </div>
  );
};

export default Signin;
