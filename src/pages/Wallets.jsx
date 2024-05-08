import React, { useState } from "react";
import { Link } from "react-router-dom";
import walletimage from "../assets/wallets/images/photo_2021-07-13-16.27.25-removebg-preview.png";
import wallet1 from "../assets/wallets/images/unnamed (3).png";
import wallet2 from "../assets/wallets/images/download.png";
import wallet3 from "../assets/wallets/images/en-coinbase-logo.jpg";
import wallet4 from "../assets/wallets/images/Crypto.com-Buy-Bitcoin-Now-APK-MOD-Premium-Download-3.96.0.png";
import wallet5 from "../assets/wallets/images/unnamed (2).png";
import wallet6 from "../assets/wallets/images/safepal-1022b40e2ea3a4a6bb19cf6ff28d8b92.png";
import wallet7 from "../assets/wallets/images/authereum.png";
import wallet8 from "../assets/wallets/images/pO6fla5H_400x400.jpg";
import wallet9 from "../assets/wallets/images/nebulas.png";
import wallet10 from "../assets/wallets/images/tomo.png";
import wallet11 from "../assets/wallets/images/enjin-coin-enj-logo.png";
import wallet12 from "../assets/wallets/images/nimiq.png";
import wallet13 from "../assets/wallets/images/parsiq.jpg";
import wallet14 from "../assets/wallets/images/rainbow-207dda8d66f8ffc00a21e4fcc5ce0a73.png";
import wallet15 from "../assets/wallets/images/wanchain.png";
import wallet16 from "../assets/wallets/images/iotex.png";
import wallet17 from "../assets/wallets/images/ethereum-classic.png";
import wallet18 from "../assets/wallets/images/kin.png";
import wallet19 from "../assets/wallets/images/14611.png";
import wallet20 from "../assets/wallets/images/6Gk7Sdhs_400x400.jpg";
import wallet21 from "../assets/wallets/images/8wVEhhpi_400x400.jpeg";
import wallet22 from "../assets/wallets/images/RoeM48hT_400x400.png";
import wallet23 from "../assets/wallets/images/nem-1024x1024.png";
import wallet24 from "../assets/wallets/images/photo5940449033686465477.jpg";
import wallet25 from "../assets/wallets/images/download (2).png";
import wallet26 from "../assets/wallets/images/download (1).png";
import wallet27 from "../assets/wallets/images/download.jpg";
import wallet28 from "../assets/wallets/images/Monarch-Wallet.png";
import wallet29 from "../assets/wallets/images/download (3).png";
import wallet30 from "../assets/wallets/images/wallet-connect.03da5e3f.svg";
import wallet31 from "../assets/wallets/images/defi.png";
import wallet32 from "../assets/wallets/images/latestph.png";
import wallet33 from "../assets/wallets/images/alpha.webp";
import wallet34 from "../assets/wallets/images/1inch.svg";
import wallet35 from "../assets/wallets/images/OKX_Logo_Logo.webp";

import { CiSearch } from "react-icons/ci";


const DATA = [
  { id: 1, wallet: "Trust", logo: wallet1 },
  { id: 2, wallet: "Metamask", logo: wallet2 },
  { id: 3, wallet: "Coinbase", logo: wallet3 },
  { id: 32, wallet: "Phantom", logo: wallet32 },
  { id: 33, wallet: "Aplha", logo: wallet33 },
  { id: 34, wallet: "1inch", logo: wallet34 },
  { id: 31, wallet: "OKX", logo: wallet35 },
  { id: 4, wallet: "Crypto.com", logo: wallet4 },
  { id: 5, wallet: "Defi", logo: wallet31 },
  { id: 6, wallet: "Nimiq", logo: wallet5 },
  { id: 7, wallet: "Safepal", logo: wallet6 },
  { id: 8, wallet: "Authereum", logo: wallet7 },
  { id: 9, wallet: "Fint", logo: wallet8 },
  { id: 10, wallet: "Nebulas", logo: wallet9 },
  { id: 11, wallet: "Tomo", logo: wallet10 },
  { id: 12, wallet: "Enjin", logo: wallet11 },
  { id: 13, wallet: "Nimiq", logo: wallet12 },
  { id: 14, wallet: "Parsiq", logo: wallet13 },
  { id: 15, wallet: "Rainbow", logo: wallet14 },
  { id: 16, wallet: "Wanchain", logo: wallet15 },
  { id: 17, wallet: "Iotex", logo: wallet16 },
  { id: 18, wallet: "Ethereum", logo: wallet17 },
  { id: 19, wallet: "kin", logo: wallet18 },
  { id: 20, wallet: "Rice", logo: wallet19 },
  { id: 21, wallet: "Nami wallet", logo: wallet20 },
  { id: 22, wallet: "Ledger live", logo: wallet21 },
  { id: 23, wallet: "Bravos", logo: wallet22 },
  { id: 24, wallet: "Nem", logo: wallet23 },
  { id: 25, wallet: "pera Algo", logo: wallet24 },
  { id: 26, wallet: "Digitex", logo: wallet25 },
  { id: 27, wallet: "Argent", logo: wallet26 },
  { id: 28, wallet: "Monarch", logo: wallet27 },
  { id: 29, wallet: "Nimiq", logo: wallet28 },
  { id: 30, wallet: "Cello", logo: wallet29 },
  { id: 31, wallet: "Wallet Connect", logo: wallet30 },
];

const ConnectWallet = () => {
  const [showWallet, setShowWallet] = useState(false);
  const [enteredValue, setEnteredValue] = useState("")

  const handleValueChange = (e)=> {
  const currentvalue = e.target.value



  setEnteredValue(currentvalue)
  }
  return (
    <>
      <div className="container mx-auto py-10 md:py-20">
        <div className="text-center mb-10 md:mb-14 font-mono">
          {/* <img
          className="w-[60%] sm:w-[45%] md:w-[30%] lg:w-[30%] mx-auto  rounded-lg"
          src={walletimage}
          alt=""
        /> */}
          <h1 className="text-slate-50 text-3xl md:text-4xl mb-8 font-semibold">
            How it works
          </h1>

          <p className="text-slate-300 w-full   md:w-[60%] mx-auto text-[15px] leading-[2.6]">
            {" "}
            Multiple iOS and Android wallets support the WalletConnect protocol.
            Interaction between mobile apps and mobile browsers are supported
            via mobile deep linking.
          </p>
        </div>



        {showWallet ? (
          <div className="px-3 md:px-0 rounded-3xl  py-10 bg-[#1e234dc2] md:bg-transparent">
            <form className=" flex  md:justify-end mb-10" action="">
              <div className="relative ">
                <CiSearch className="absolute text-white text-xl top-3 left-3" />

                <input
                  className="w-[320px] bg-[#313771b4]  outline-none pl-10  text-white py-2 rounded-lg px-3   md:w-[400px]"
                  type="text"
                  placeholder="Search wallet"
                  onChange={handleValueChange}
                  value={enteredValue}
                />
              </div>
            </form>
            <div className="grid grid-cols-3 gap-x-2 md:gap-x-10  font-mono sm:grid-cols-3 smmd:grid-cols-5 lg:grid-cols-6  gap-y-14   mx-auto  ">
              {DATA.filter((wallet) => {
                return enteredValue.toLowerCase() === ""
                  ? wallet
                  : wallet.wallet.includes(enteredValue);
              }).map((item) => { 
                return (
                  <Link
                    className=" shadow-md bg-[#313771b4] rounded-xl ease-linear transition-all hover:scale-95 p-4"
                    to="/submit"
                  >
                    <div className="" key={item.id}>
                      <img
                        className="w-[100%] md:w-[100px] mx-auto rounded-lg mb-3 "
                        src={item.logo}
                        alt=""
                      />
                      <div className="text-center">
                        <button className="  text-slate-50 text-[10px] md:text-sm">
                          {item.wallet}
                        </button>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="text-center">
            <button
              onClick={() => setShowWallet(true)}
              className="  bg-blue-400 w-[250px] md:w-[400px] px-10 py-2 rounded-md"
            >
              Select Wallet
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ConnectWallet;
