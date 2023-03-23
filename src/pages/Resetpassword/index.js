import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ButtonPrimary from "../../components/Button/ButtonPrimary/ButtonPrimary";
import { resetpass } from "../../services/navtext/navtextSlice";

const ResetPassword = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetpass());
  }, [dispatch]);

  return (
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
            <br /> <br />
            <ButtonPrimary text="Reset"></ButtonPrimary>
            <br />
          </form>
        </div>
      </div>
      <br /> <br /> <br />
    </main>
  );
};

export default ResetPassword;
