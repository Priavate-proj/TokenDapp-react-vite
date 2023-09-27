import React, { useEffect, useState } from 'react'

import { Outlet } from 'react-router-dom'
import { RiMenu3Fill } from "react-icons/ri";
import Footer from './Footer';
import { ScrollRestoration } from 'react-router-dom';
import { Web3Button } from '@web3modal/react';

import { useWritable } from '../../stores';
import { selectedChain } from '../../stores/stores';
import { getAccount, getNetwork } from '@wagmi/core';
import { useAccount } from 'wagmi';
import { switchNetwork } from 'wagmi/actions';



const Navbar = () => {
  // const account = getAccount()
  const { address, connector } = useAccount()
  // console.log({ account, chains: account?.connector?.chains })
  const [chain, setChain] = useWritable(selectedChain)
  const [isActive, setIsActive] = useState(false)
  const handleChainChange = async (e) => {
 
    await switchUserNetwork(e.target.value)
  }
  const switchUserNetwork = async (chainId) => {
    // setChain(chainId)
    try {
    
      const network = await switchNetwork({ chainId: Number(chainId) })
      // if (network.id) setChain(network.id)
  
      setChain(network.id)
    } catch (error) {
     
    } finally {
      
      // const { chain, chains } = getNetwork()
      // console.log({ chain, chains })
    }
  }

  useEffect(() => {
    if (connector?.chains?.length > 0) {
      const { chain, chains } = getNetwork()
      chain.unsupported ? switchUserNetwork(connector?.chains[0].id) : setChain(chain.id)
    }
  }, [connector])
  // useEffect(() => {
  //   console.log({ chain })
  // }, [chain])

  const toggleNav = ()=>{
    
  setIsActive(!isActive);
  console.log(isActive);
  }

  return (
    <>
      <div className="">
        {/* {chain} */}
        <nav className="flex  py-5 sm:py-6 md:py-14 justify-between container mx-auto px-8 items-center font-sans sm:px-6 md:px-9 lg:px-7  2xl:px-0">
          <div className="">
            <a href="#" className="logo">
              <h2 className=" text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-semibold text-slate-200">
                DAppVaults
              </h2>
            </a>
          </div>

          <div className={` flex flex-col  -mr-96 md:-mr-0  items-center md:flex-row  lg:flex-row  ${
                isActive ? "" : ""
              }`}>
            <ul
              className={`  md:flex justify-between mr-14 text-white  `}
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

              <li className="mr-5 text-[16px]  "></li>
            </ul>
            {connector?.chains?.length > 0 && (
              <select
                className="bg-[#4C96FF] ring-2 ring-transparent border-0 outline-none text-slate-100 rounded-md mb-2 md:mb-0 md:px-2 py-2 md:mr-3"
                name=""
                id="select-chains"
                value={chain}
                onChange={handleChainChange}
              >
                {connector?.chains.map((chainOption, i) => (
                  <option key={i} value={chainOption.id}>
                    {chainOption.name}
                  </option>
                ))}
              </select>
            )}
            {/* <button className="bg-[#4755de] hover:bg-[#4756dedb] transition duration-40 text-white rounded-md px-6 py-2">
              Connect wallet
            </button> */}
            <Web3Button />
          </div>

          <div className=" md:hidden ">
            <RiMenu3Fill
              onClick={toggleNav}
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