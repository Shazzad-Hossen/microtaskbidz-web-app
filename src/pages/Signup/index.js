import React from "react";
import ButtonPrimary from "../../components/Button/ButtonPrimary/ButtonPrimary";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Signup = () => {
  return (
    <div>
      <Header text="Sign Up" isShow="true">
        {" "}
      </Header>
      <main>
        <div className=" mx-auto  max-w-3xl  rounded-xl bg-formbg">
          <div className="bg-[#fff]   bg-opacity-80 p-10">
            <form>
              <label className="text-xl font-semibold" htmlFor="name">
                Name
              </label>{" "}
              <br />
              <input
                className="border-5 my-2 h-12 w-[100%] rounded-lg"
                type="text"
                name="name"
                id="name"
              />
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
              <label
                className="text-xl font-semibold"
                htmlFor="ConfirmPassword"
              >
                Confirm Password
              </label>{" "}
              <br />
              <input
                className="border-5 my-2 h-12 w-[100%] rounded-lg"
                type="password"
                name="confPass"
                id="confPass"
              />
              <br /> <br />
              <ButtonPrimary text="Sign up"></ButtonPrimary>
              <br />
              <br />
              <p>
                Already have an account ?{" "}
                <a className="text-[#028090]" href="/user/signin">
                  Sign In here
                </a>
              </p>
            </form>
          </div>
        </div>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default Signup;
