import React from 'react'
import  img  from "../../assets/eth.png";

export default function Cta() {
  return (
    <section className="container mx-auto py-14 md:py-20 ">
      <div className="  font-mono">
        <h6 className="text-center text-[#b495ff] font-extrabold text-sm md:text-lg uppercase mb-6">
          GET STARTED
        </h6>
        <h2 className="text-center leading-[2] md:leading-[2] lg:leading-[2] text-white text-xl md:text-4xl font-bold mb-8">
          {" "}
          Join the hundreds of teams
          <br /> building with Blocknative
        </h2>

        <div className="flex justify-center items-center    bg-[#0e162a62]    rounded-xl ">
          <div className="flex justify-center flex-col md:flex-row px-4 py-7 md:py-8 items-center ">
            <div className=" ">
              <p className="text-slate-200 leading-[2.5] w-full md:w-[500px] text-[14px] text-center  md:text-left  md:text-[16px] md:leading-[3]">
                The short seconds between when a blockchain transaction is
                submitted, and when it is final, is the most valuable and
                important moment in finance—and also the least understood.
              </p>
            </div>
            <div className=" w-full">
              <img src={img} className="hidden md:block md:w-[100%]" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
