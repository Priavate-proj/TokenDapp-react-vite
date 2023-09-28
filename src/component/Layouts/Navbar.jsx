import React, { useEffect, useState } from 'react'

import { Outlet } from 'react-router-dom'
import { RiMenu3Fill } from "react-icons/ri";
import {FaTimes} from 'react-icons/fa'
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
  
  }

  return (
    <>
      <div className="">
        {/* {chain} */}
        <nav className="flex   py-14 sm:py-6 md:py-14 justify-between container mx-auto px-6 items-center font-sans sm:px-6 md:px-9 lg:px-7  2xl:px-0">
          <div className="">
            <a href="#" className="logo">
              <h2 className=" text-3xl sm:text-4xl font-mono  md:text-5xl lg:text-4xl font-extrabold text-slate-200">
                DAppVaults
              </h2>
            </a>
          </div>

          <ul
            className={` flex flex-col  md:flex  md:flex-row  text-white   px-6 md:px-0 py-4 md:py-0  md:items-center   ${
              isActive
                ? "block h-screen absolute w-full mt-7   top-[70px] z-10 right-0 backdrop-blur-sm bg-[#000000a5]  transition-all   "
                : "hidden"
            } `}
          >
            <li className="md:mr-5 text-[16px] mb-3 md:mb-0   ">
              <a href="#" className="">
                Docs
              </a>
            </li>

            <li className="md:mr-5 text-[16px] mb-3 md:mb-0  ">
              <a href="#" className="">
                Protocol
              </a>
            </li>

            <li className="md:mr-5 text-[16px] mb-3 md:mb-0  ">
              <a href="#" className="">
                Api
              </a>
            </li>

            <li className="mr-5 text-[16px]  md:mb-0  "></li>
            {connector?.chains?.length > 0 && (
              <select
                className="bg-[#4C96FF] ring-2 ring-transparent border-0 outline-none text-slate-100 rounded-lg mb-3 md:mb-0 px-3 md:px-2 py-2 md:mr-3"
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
            <Web3Button />
          </ul>

          <div className=" md:hidden ">
            { !isActive ? <RiMenu3Fill onClick={toggleNav} className="text-white text-3xl" /> : <FaTimes onClick={toggleNav} className='text-white text-3xl' /> }
          </div>
        </nav>
      </div>

      <div className="min-h-[60vh]">
        <Outlet />
      </div>

      <Footer />

      <ScrollRestoration />
    </>
  );
}

export default Navbar