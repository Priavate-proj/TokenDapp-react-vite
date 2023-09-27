import React from 'react'

const Footer = () => {
  return (
    <div>
      <hr className="border-slate-700 font-sans" />
      <footer className="  flex justify-between flex-col md:flex-row items-center bg-[#050d20] text-center text-sm sm:text-sm md:text-sm text-[#b4ccf7]  px-3 sm:px-3 md:px-20 lg:px-20 py-20 ">
        <ul className="flex mb-5 text-slate-300 md:mb-0 gap-5 ">
          <li>
            <a href="#" className="">
              Docs
            </a>
          </li>

          <li>
            <a href="#" className="">
              Market
            </a>
          </li>
          <li>
            <a href="#" className="">
             Help
            </a>
          </li>
        </ul>

        <div className=" text-center text-slate-300">
          <div className="">
            <p className=" md:text-sm text-[#b4ccf7">© Copyright DApp 2023</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer