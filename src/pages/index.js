import Image from "next/image";
import { Orbitron, Outfit } from "next/font/google";
import tri from "../../public/assets/triangles.png";
import doodle from "../../public/assets/doodle.png";
import OurCases from "@/containers/OurCases";
import Solutions from "@/containers/Solutions";
import Community from "@/containers/Community";
import Tweets from "@/components/Tweet";

import binance from "../../public/assets/binancegrey.png";
import cb from "../../public/assets/coinbasegrey.png";
import bitget from "../../public/assets/bitgetgrey.png";
import crypto from "../../public/assets/cryptocomgrey.png";
import pantera from "../../public/assets/panteragrey.png";
import Typewriter from "typewriter-effect";

import logo from "../../public/assets/logo.png";
import { FaXTwitter } from "react-icons/fa6";
import { BsTelegram } from "react-icons/bs";

const orb = Orbitron({ weight: "600", subsets: ["latin"] });
const orb4 = Orbitron({ weight: "400", subsets: ["latin"] });
const outfit = Outfit({ weight: "300", subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col bg-[#0F0F0F] items-center justify-between px-64 `}
    >
      <div className="flex flex-col pt-32">
        <div className="flex md:flex-row flex-col px-12 md:px-32 w-full justify-center ">
          <div className="z-10   text-[50px] md:text-[65px]  text-white h-full pb-[200px] flex flex-col w-full justify-start items-start ">
            <div className={orb.className}>
              Be
              <span className="text-[#9E00FF] ">
                <Typewriter
                  options={{
                    strings: ["Profitable", "Secure", "Fast", "Private"],
                    autoStart: true,
                    loop: true,
                  }}
                ></Typewriter>
              </span>
              with x101pad
            </div>
          </div>

          <div className="md:w-full md:px-0 ml-[-150px] mt-[-60px] hidden  lg:flex justify-center items-start">
            <Image
              src={tri}
              className=" z-10 relative animate-pulse w-[200px] md:w-[340px] ml-48  "
            ></Image>
          </div>
        </div>
        <div>
          <div className="w-screen shadow-[rgba(155,_0,_255,_0.3)_0px_30px_120px] gap-8 h-36 lg:px-48 items-center justify-between p-8 bg-black md:mt-0 flex mt-32 z-10">
            <Image
              src={binance}
              className="max-h-[50px] max-w-[150px] object-fit"
            ></Image>
            <Image
              src={cb}
              className="max-h-[50px] max-w-[150px] object-fit"
            ></Image>
            <Image
              src={crypto}
              className="max-h-[50px] sm:flex hidden max-w-[150px] object-fit"
            ></Image>
            <Image
              src={bitget}
              className="max-h-[50px] md:flex hidden max-w-[150px] object-fit"
            ></Image>
            <Image
              src={pantera}
              className="max-h-[50px] lg:flex hidden max-w-[150px] object-fit"
            ></Image>
          </div>
          <Image
            src={doodle}
            className="mt-[-60px] z-0 absolute right-[10%]"
          ></Image>
        </div>
      </div>
      <OurCases id="#ourcases"></OurCases>
      <Solutions id="#solutions"></Solutions>
      <Community id="#aboutus"></Community>
      <Tweets></Tweets>
      <div className="w-screen px-32 flex justify-between items-center bg-black">
        <div>
          <Image src={logo} width={80} className="py-4"></Image>
        </div>
        <div className={outfit.className}>
          <div className="flex gap-4 text-[16px] text-white">
            <div>Our Cases</div>
            <div>Solutions</div>
            <div>About Us</div>
          </div>
        </div>
        <div className="text-white flex gap-4">
          <FaXTwitter className="cursor-pointer" size={28}></FaXTwitter>
          <BsTelegram className="cursor-pointer" size={28}></BsTelegram>
        </div>
      </div>
    </main>
  );
}
