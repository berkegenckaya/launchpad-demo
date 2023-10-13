import Image from "next/image";
import { Orbitron, Outfit } from "next/font/google";
import {FaXTwitter} from "react-icons/fa6"
import {BsDiscord, BsTelegram} from "react-icons/bs"
const orb = Orbitron({ weight: "600", subsets: ["latin"] });
const orb4 = Orbitron({ weight: "400", subsets: ["latin"] });
const outfit = Outfit({ weight: "400", subsets: ["latin"] });
import mask from "../../public/assets/wave1.png";
export default function AboutUs({ id }) {
  return (
    <div className="py-16">
      <Image
            src={mask}
            
            className="w-[450px] absolute z-10 top-[500px] md:top-[3200px] left-0"
          ></Image>
      <div className="text-[44px] flex flex-col leading-normal text-start z-10 text-white">
        <div className="w-full md:w-screen flex pt-24 md:flex-row flex-col  justify-center">
          <div className="flex flex-col pt-12 px-12">
            <div className="text-[44px] pl-12 pb-4 ">
              <div className={orb.className}>Join Community</div>
            </div>

            <div
              id={id}
              className="text-[18px] pb-12 text-slate-300  shadow-[rgba(155,_0,_255,_0.3)_0px_30px_90px] flex md:flex-row flex-col	min-h-[250px] z-10  bg-[#63218b] w-screen px-12 pt-12  items-center justify-between leading-7 capitalize"
            >
              <div className="w-full justify-center ">
              <div className={outfit.className}>
                Join our community and stay up to date with all the latest
                updates and events!
              </div></div>
              <div className="flex flex-col justify-center items-center w-4/5">
                <div className={orb.className}>
                  <div className="w-[300px] cursor-pointer border text-[24px] border-[#9E00FF] hover:bg-[#1a0b23] rounded-2xl bg-[#35104b] p-4 flex justify-center text-white">
                    Community
                  </div>
                </div>
                <div className="flex text-white gap-4 pt-4">
                    <FaXTwitter className="cursor-pointer" size={36}></FaXTwitter>
                    <BsTelegram className="cursor-pointer" size={36}></BsTelegram>
                    <BsDiscord className="cursor-pointer"  size={36}></BsDiscord>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
