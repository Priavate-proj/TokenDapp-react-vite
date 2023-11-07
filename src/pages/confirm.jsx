import React from "react";
import { BiErrorCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

const Confirmation = () => {
  return (
    <div className="py-14">
      <div className="text-center">
        <BiErrorCircle className="text-red-600 text-[100px] mx-auto mb-10 font-mono" />

        <p className="text-red-500 mb-20 text-[12px] md:text-[13px]  ">
          {" "}
          Ooop! An Error Has Occured while trying to connect. Please try again...
        </p>

        <Link to="/">
          <button className="px-10 bg-slate-50 py-1 rounded-lg">Home </button>
        </Link>
      </div>
    </div>
  );
};

export default Confirmation;
