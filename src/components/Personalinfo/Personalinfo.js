import React from "react";

const Personalinfo = ({ name, value }) => {
  return (
    <div className="flex p-2">
      <h1 className="w-40 text-lg font-semibold">{name}</h1>
      <h1 className="text-lg font-semibold">: {value}</h1>
    </div>
  );
};

export default Personalinfo;
