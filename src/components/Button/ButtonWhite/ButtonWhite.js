import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const ButtonWhite = ({ text }) => {
  return (
    <div>
      <button className="bg-[#FFFFFF] py-3 px-4 font-semibold text-[#333333]">
        {" "}
        <FontAwesomeIcon icon={faPlus} />
        &nbsp;&nbsp;&nbsp;{text}
      </button>
    </div>
  );
};

export default ButtonWhite;
