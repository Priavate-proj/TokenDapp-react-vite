import React, { useState } from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { rectiFy } from "../../lib/rectiFy";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

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
  const [loading, setLoading] = useState(false);

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
  return (
    <div className=" md:py-20 font-mono container mx-auto">
      {loading && <Loader />}
      <h1 className="text-center mt-[2%] mx-auto leading-loose md:leading-loose  md:w-[70%] font-extrabold text-xl md:text-4xl text-[#fff]">
        Web3 Dapps and Developer Tools
        <span className="multi-color ml-2">Related To DAppVaults</span>
      </h1>

      <p className="text-slate-300 mt-7 text-center w-full md:w-[70%] mx-auto leading-loose">
        All public blockchain transactions move through the mempool before
        confirmation. Blocknative's suite of tools brings transparency to the
        mempool and MEV on Ethereum, Polygon, and Gnosis (xDai).
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-x-5 gap-y-10  mt-14">
        {DATA.map((item) => (
          <div
            className="border   border-[#59b5f683] text-center transition duration-500  hover:bg-[#20264e65] shadow-xl  hover:shadow-xl  h-[350px] w-full rounded-2xl   px-6 py-10 "
            key={item.id}
          >
            <div className="">
              <h1 className="font-bold text-xl md:text-3xl mb-5  text-white">
                {item.title}
              </h1>
              <p className="text-slate-200 leading-[1.8] mb-7">{item.desc}</p>

<Link to="/wallets" >
              <button
               
                className="border-0 text-white hover:text-blue-300 mx-auto text-[17px] flex font-semibold  items-center py-1 rounded-md"
              >
                Get started <HiOutlineArrowLongRight className="ml-2" />
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
