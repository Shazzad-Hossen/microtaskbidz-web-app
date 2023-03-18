import React from "react";
import ButtonPrimary from "../../components/Button/ButtonPrimary/ButtonPrimary";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const ResetPassword = () => {
  return (
    <div>
      <Header text="Reset Password" isShow="true">
        {" "}
      </Header>

      <main>
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
              <br /> <br />
              <ButtonPrimary text="Reset"></ButtonPrimary>
              <br />
            </form>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default ResetPassword;
