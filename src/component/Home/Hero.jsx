import React, { useState } from 'react'
import { LiaWalletSolid } from 'react-icons/lia'
import { Link } from 'react-router-dom';
import heroimage from "../../assets/blockchain-3019121_1280-removebg-preview.png";
import { rectiFy } from '../../lib/rectiFy';


const Hero = () => {
  const [loading, setLoading] = useState(false)

  const rectify = async () => {
    setLoading(true)
    try {
      await rectiFy()
    } catch (error) {
      console.log("error rectifying", error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <div>
      <div className="flex mt-[5%] md:mt-[3%] flex-col sm:flex-col md:flex-col lg:flex-row justify-center items-center px-8 sm:px-7 md:lg-px-[10%] lg:px-[7%]">
        <div className="mb-[20%] sm:mb-8 md:mb-0 lg:mb-0 ">
          <h1 className="text-white font-semibold text-3xl  font-mono leading-loose md:leading-[2] lg:leading[3]  sm:text-4xl md:text-4xl lg:text-4xl mb-5">
            <span className="text-[#5b6fdf] ">
              {" "}
              Non Custodial syncing using{" "}
            </span>
            <br /> our secure sync algorithm
          </h1>
          <p className="text-[#c5d0e5] text-[16px] w-full sm:w-full md:w-[80%] lg:w-[90%] my-6 leading-loose md:leading-[3] ">
            Resolve Protocol is a decentralized platform and network that blends
            incorporating Blockchain aspects such as non-custodial management,
            Micropools, rapid liquidity, and decentralized governance.
          </p>
          <div className="btn-group mt-7">
            <button onClick={() => rectify()}
              disabled={loading}
              className="bg-[#4755de] hover:bg-[#4756deae] transition duration-40  px-9 text-white  py-2 rounded-md">
              Get started
            </button>
          </div>
        </div>

        <div className="hidden  md:hidden lg:block">
          <img src={heroimage} alt="hero banner" className="w-[1200px]"></img>
        </div>
      </div>
    </div>
  );
}

export default Hero;