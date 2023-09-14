import React, { useState } from 'react'

import { Outlet } from 'react-router-dom'
import { RiMenu3Fill } from "react-icons/ri";
import Footer from './Footer';
import { ScrollRestoration } from 'react-router-dom';





const Navbar = () => {

  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="">
        {" "}
        <nav className="flex  py-6 sm:py-6 md:py-14 justify-between container mx-auto px-8 items-center sm:px-6 md:px-9 lg:px-7">
          <div className="">
            <a href="#" className="logo">
              <h2 className=" text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-extrabold text-slate-200">
                DApp
              </h2>
            </a>
          </div>

          <div className="flex flex-col items-center  md:flex-row ">
            <ul
              className={` md:flex justify-between mr-14 text-white  ${
                open ? "top-20" : "top-[-400px]"
              }`}
            >
              <li className="mr-5 text-[16px]   ">
                <a href="#" className="">
                  Docs
                </a>
              </li>

              <li className="mr-5 text-[16px]  ">
                <a href="#" className="">
                  Protocol
                </a>
              </li>

              <li className="mr-5 text-[16px]   ">
                <a href="#" className="">
                  Api
                </a>
              </li>

              <li className="mr-5 text-[16px]  ">
                <a href="#" className="">
                  Protocol
                </a>
              </li>
            </ul>

            <button className="bg-[#4755de] hover:bg-[#4756dedb] transition duration-40 text-white rounded-md px-6 py-2">
              Connect wallet
            </button>
          </div>

          <div className=" md:hidden ">
            <RiMenu3Fill
              onClick={() => setOpen(!open)}
              className="text-white text-2xl"
            />
          </div>
        </nav>
      </div>

      <div className="min-h-[50vh]">
        <Outlet />
      </div>

      <Footer />

      <ScrollRestoration />
    </>
  );
}

export default Navbar