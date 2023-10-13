const orb = Orbitron({ weight: "600", subsets: ["latin"] });
const orb4 = Orbitron({ weight: "400", subsets: ["latin"] });
const outfit = Outfit({ weight: "300", subsets: ["latin"] });
const outfit6 = Outfit({ weight: "600", subsets: ["latin"] });
import tri from "../../public/assets/triangles.png";

import Image from "next/image";
import canvas from "../../public/assets/column.png";
import char from "../../public/assets/char.png";

import { Orbitron, Outfit } from "next/font/google";
import Solution from "@/components/Solution";
export default function Solutions({id}) {
  return (
    <div className="py-16">
        <Image src={tri} className="absolute hidden md:flex z-0" ></Image>
      <div className="text-[44px] flex flex-col leading-normal text-center z-10 text-white">
        <div className={orb.className}>Solutions</div>
        <div  className="text-[18px] leading-7 pt-12 px-12 md:px-80 capitalize">
          <div id={id} className={outfit.className}>
            We offer a full 360 marketing solution with everything from
            go-to-market strategy to authority building and web3 community
            growth initiatives.Take a look at our catalog of solutions.
          </div>
        </div>
        <div  className="w-screen flex pt-24 md:flex-row flex-col gap-8 px-12 justify-center">
          <div className="justify-center md:justify-start z-10 md:pl-16">
            <Image  src={canvas}></Image>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Solution
              title="Launchpads"
              icon="/assets/inf.png"
              sub="Access x101 launchpads "
            ></Solution>
            <Solution title="Staking" icon="/assets/public.png" sub="Stake your tokens to earn more and supoort ecosystem"></Solution>
            <Solution
              title="Soon..."
              icon="/assets/public.png"
            ></Solution>
            <Solution
              title="Soon..."
              icon="/assets/com.png"
            ></Solution>
            <Solution
              title="Soon..."
              icon="/assets/soc.png"
            ></Solution>
            <div className="bg-[#9E00FF] flex flex-col rounded-md border border-[#393939] justify-between px-8 items-center">
              <div className="flex">
                <div className="text-[20px] w-[140px] pt-8 lg:pb-16">
                  <div className={outfit6.className}>
                    Interested in our High End Services?
                  </div>
                </div>
                <Image src={char} className="mt-8"></Image>
              </div> 
              <div className="w-full bg-black text-[16px] my-4 rounded-lg py-2"> <div className={outfit6.className}>Contact Us</div></div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}
