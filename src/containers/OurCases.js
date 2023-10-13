import Case from "@/components/Case";
import { Orbitron, Outfit } from "next/font/google";
import Image from "next/image";

import w1 from "../../public/assets/multi.png";
import w2 from "../../public/assets/nokyc.png";
import mask from "../../public/assets/wave1.png";

import w3 from "../../public/assets/chain.png";

import w4 from "../../public/assets/fast.png";
import light from "../../public/assets/light.png";

const orb = Orbitron({ weight: "600", subsets: ["latin"] });
const orb4 = Orbitron({ weight: "400", subsets: ["latin"] });
const outfit = Outfit({ weight: "400", subsets: ["latin"] });

export default function OurCases({ id }) {
  return (
    <div className="py-36">
      <div>
          <Image
            src={mask}
            
            className="w-[450px] absolute z-0 top-[500px] md:top-[1100px] left-0"
          ></Image>
        </div>
      
      <div className="text-[44px] flex flex-col leading-normal text-center text-white">
        <div className={orb.className}>Vision</div>
        <div className="text-[18px] leading-7 pt-12 capitalize">
          <div id={id} className={outfit.className}>
            We’re proud to share some of our current and past cases, with some
            of the web3 industry leaders.
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col w-screen md:px-48 justify-between">
        <Case title="Fully Anonymous" number="No KYC"></Case>
        <Case title="Multi-Chain Support" number="ETH BNB AND MORE "></Case>
        <Case title="Easy and Fast" number="Open and equal"></Case>
      </div>
      <div className="flex flex-wrap md:flex-row flex-col items-center justify-center gap-8">
        <Image src={w1} width={300} height={200} className="border border-[#752ca2] rounded-xl shadow-[rgba(155,_0,_255,_0.3)_0px_30px_90px]"></Image>
        <Image src={w3} width={300} height={200} className="border border-[#752ca2] rounded-xl lg:mt-24 shadow-[rgba(255,_255,_255,_0.1)_0px_30px_90px]"></Image>
        <Image src={w2} width={300} height={200} className="border border-[#752ca2] rounded-xl shadow-[rgba(155,_0,_255,_0.3)_0px_30px_90px]"></Image>
        <Image src={w4} width={300} height={200} className="border border-[#752ca2] rounded-xl lg:mt-24 shadow-[rgba(255,_255,_255,_0.1)_0px_30px_90px]"></Image>
      </div>
    </div>
  );
}
