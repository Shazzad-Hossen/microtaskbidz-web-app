import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const ButtonBlack = ({ text }) => {
  return (
    <div>
      <button className="bg-[#333333] py-3 px-4 font-semibold text-white">
        {" "}
        <FontAwesomeIcon icon={faPlus} />
        &nbsp;&nbsp;&nbsp;{text}
      </button>
    </div>
  );
};

export default ButtonBlack;
