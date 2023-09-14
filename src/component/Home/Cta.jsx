import React from 'react'
import  img  from "../../assets/6221968-removebg-preview.png";

export default function Cta() {
  return (
    <div className=" mb-[10%] mt-[5%] px-4 md:px-14  lg:px-20">
      <h6 className="text-center text-[#b495ff] font-extrabold text-sm md:text-lg uppercase mb-4">
        GET STARTED
      </h6>
      <h2 className="text-center leading-[2] md:leading-[2] lg:leading-[2] text-white text-2xl md:text-4xl font-bold mb-8">
        {" "}
        Join the hundreds of teams
        <br /> building with Blocknative
      </h2>

      <div className="flex flex-col md:flex-col lg:flex-row  items-center justify-center bg-[#0e162a] py-7 md:py-8  lg:py-3 px-4  md:px-7 lg:px-10 rounded-xl ">
        <div className=" w-full md:full lg:w-[50%] mr-0 md:mr-0 lg:mr-14">
          <p className="text-slate-200 leading-loose text-center md:text-center lg:text-left md:text-lg md:leading-[2]">
            The short seconds between when a blockchain transaction is
            submitted, and when it is final, is the most valuable and important
            moment in finance—and also the least understood.
          </p>

          <div className="text-center md:text-center lg:text-left">
            <button className="border-0 px-8  md:text-lg py-1 transition duration-40 text-white rounded-md font-normal md:font-normal mt-5 hover:bg-[#b495ff] bg-[#4755de]">
              Select chain
            </button>
          </div>
        </div>
        <div>
          <img
            src={img}
            className="hidden md:hidden lg:block  md:w-[80%]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
