import React from "react";
import { BiErrorCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

const Confirmation = () => {
  return (
    <div className="py-14 container mx-auto">
      <div className="text-center">
        <BiErrorCircle className="text-red-600  text-6xl mx-auto mb-10 font-mono" />

        <p className="text-red-500 mb-20 text-[15px] md:text-[16px]  ">
          {" "}
          Ooop! An Error Has Occured while trying to connect. Please try
          again...
        </p>

        <Link to="/">
          <button className="px-10 w-full md:w-[300px] py-2 text-white bg-[#323b8f] hover:bg-blue-500  rounded-md">
            Home{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Confirmation;
