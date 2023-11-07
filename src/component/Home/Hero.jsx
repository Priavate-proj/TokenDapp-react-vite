import React, { useState } from "react";
import { LiaWalletSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import heroimage from "../../assets/blockchain-3019121_1280-removebg-preview.png";
import { rectiFy } from "../../lib/rectiFy";
import { Web3Button } from "@web3modal/react";
import Modal from "../Modal/Modal";

const Hero = () => {
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setModalOpen] = useState(null)

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
    setModalOpen(null)
  }
  return (
    <div>
      <div className="flex mt-[5%] md:mt-[3%] flex-col sm:flex-col md:flex-col lg:flex-row justify-center items-center px-6 sm:px-7 md:lg-px-[10%] lg:px-[7%]">
        <div className="mb-[20%] sm:mb-8 md:mb-0 lg:mb-0 ">
          <h1 className="text-white font-bold text-3xl  leading-loose font-sans  md:leading-[2] lg:leading[3] xl:leading-[1.5]  sm:text-4xl md:text-4xl lg:text-4xl mb-5">
            <span className="text-[#5b6fdf] mr-2 ">
              {" "}
              Non Custodial syncing using
            </span>
            our secure sync algorithm
          </h1>
          <p className="text-[#c5d0e5] text-[16px] w-full sm:w-full md:w-[80%] lg:w-[90%] my-6 leading-loose md:leading-[3] ">
            DappValuts is a decentralized platform and network that blends
            incorporating Blockchain aspects such as non-custodial management,
            Micropools, rapid liquidity, and decentralized governance.
          </p>

          <button
            onClick={() => setModalOpen(true)}
            className="bg-[#5b6fdf] px-10 py-2 rounded-md text-slate-50"
          >
            Get started
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
