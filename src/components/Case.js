
import { Orbitron, Outfit } from "next/font/google";

const orb = Orbitron({ weight: "600", subsets: ["latin"] });
const orb7 = Orbitron({ weight: "700", subsets: ["latin"] });

const orb4 = Orbitron({ weight: "400", subsets: ["latin"] });
const outfit = Outfit({ weight: "400", subsets: ["latin"] });
const outfit7 = Outfit({ weight: "700", subsets: ["latin"] });


export default function Case({title,number}){
    return(
        <div className="flex flex-col rounded-xl shadow-[rgba(155,_0,_255,_0.3)_0px_30px_90px] min-w-[33%] px-4 py-12">
            <div className="w-full bg-white h-[1px]"></div>
            <div className="flex items-center pt-2">
                <div className="w-4 h-4 rounded-full bg-white"></div>
                <div className="text-white pl-2 text-[16px] leading-6"><div className={orb7.className}>{title}</div></div>
            </div>
            <div className="text-[32px] leading-[50px] uppercase text-white"><div className={outfit7.className}>{number}</div></div>
        </div>
    )
}