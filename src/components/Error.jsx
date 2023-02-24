import React from "react";

const Error = ({ mensaje }) => {
  return (
    <div className=" bg-red-600 text-white rounded-xl text-center p-3 uppercase font-bold mb-3">
      <p className=" font-bold ">{mensaje}</p>
    </div>
  );
};

export default Error;
