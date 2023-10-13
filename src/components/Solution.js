
const orb = Orbitron({ weight: "600", subsets: ["latin"] });
const orb4 = Orbitron({ weight: "400", subsets: ["latin"] });
const outfit = Outfit({ weight: "700", subsets: ["latin"] });
const outfit400 = Outfit({ weight: "400", subsets: ["latin"] });

import { Orbitron, Outfit } from "next/font/google";
import Image from "next/image"
import inf from "../../public/assets/inf.png"


export default function Solution({icon,title,sub}){
    return(
        <div className="bg-[#1B1B1B] hover:bg-[#9E00FF] shadow-[rgba(155,_0,_255,_0.3)_0px_30px_90px] flex rounded-md border border-[#393939] flex-col md:px-12 md:pt-12 lg:px-24 lg:pt-16 justify-center items-center">
            <Image src={icon} width={60} height={60} className="pt-12 md:pt-0"></Image>
            <div className={outfit.className}> <p className="text-[24px] w-[140px] pb-4 lg:pt-4 ">{title}</p></div>
            <div className={outfit400.className}> <p className="font-thin  text-[16px] w-[180px] pb-4 lg:pb-16">{sub}</p></div>
        </div>
    )
}