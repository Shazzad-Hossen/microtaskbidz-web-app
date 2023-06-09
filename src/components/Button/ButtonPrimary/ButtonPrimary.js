import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const ButtonPrimary = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-cyan-700 py-3 px-4 font-semibold text-white"
    >
      {" "}
      <FontAwesomeIcon icon={faPlus} />
      &nbsp;&nbsp;&nbsp;{text}
    </button>
  );
};

export default ButtonPrimary;
