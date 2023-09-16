import React from 'react'
import { HiOutlineArrowLongRight } from "react-icons/hi2";

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
  return (
    <div className="py-20 mt-[4%] px-4 md:px-[10%]">
      <h1 className="text-center mt-[2%] mx-auto leading-loose md:leading-loose lg:w-[70%] font-extrabold text-3xl md:text-4xl text-[#fff]">
        Web3 Dapps and Developer Tools
        <span className="multi-color ml-1">Related To MetaStrikers</span>
      </h1>

      <p className="text-slate-300 mt-7 text-center w-[95%] md:w-full lg:w-[60%] mx-auto leading-loose">
        All public blockchain transactions move through the mempool before
        confirmation. And the mempool is the root of transaction anxiety.
        Blocknative's suite of tools brings transparency to the mempool and MEV
        on Ethereum, Polygon, and Gnosis (xDai).
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-x-5 gap-y-10 container mt-14">
        {DATA.map((item) => (
          <div
            className="border   border-[#59b5f683] transition duration-500  hover:bg-[#20264e65] shadow-xl  hover:shadow-xl  h-[350px] w-[340px] rounded-2xl   px-6 py-9 "
            key={item.id}
          >
            <div className="">
              <h1 className="font-bold text-3xl mb-5  text-white">
                {item.title}
              </h1>
              <p className="text-slate-200 mb-7">{item.desc}</p>

              <button className="border-0 text-white flex font-semibold  items-center py-1 rounded-md">
                Get started <HiOutlineArrowLongRight className="ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
