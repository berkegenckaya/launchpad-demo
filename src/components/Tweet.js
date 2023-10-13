import React, { useState } from 'react';
import Image from "next/image";
import cb from "../../public/assets/coinbase.png"
import binance from "../../public/assets/binance.png"
import bitget from "../../public/assets/bitget.png"
import crypto from "../../public/assets/crypto.png"
import pantera from "../../public/assets/pantera.png"
import { Orbitron, Outfit } from "next/font/google";
const orb = Orbitron({ weight: "600", subsets: ["latin"] });
const orb4 = Orbitron({ weight: "400", subsets: ["latin"] });
const outfit = Outfit({ weight: "400", subsets: ["latin"] });
import Draggable from 'react-draggable';


const cardData = [
  <div className="bg-[#242830] md:py-4 min-w-[200px] rounded-md flex justify-center shadow-md"><Image src={cb}/></div>,
  <div className="bg-[#242830] md:py-4 flex justify-center rounded-md shadow-md"><Image src={binance}/></div>,
  <div className="bg-[#242830] md:py-4 flex justify-center rounded-md shadow-md"><Image src={bitget}/></div>,
  <div className="bg-[#242830] md:py-4 rounded-md flex justify-center shadow-md"><Image src={crypto}/></div>,
  <div className="bg-[#242830] md:py-4 rounded-md flex justify-center shadow-md"><Image src={pantera}/></div>,

];

const Tweets = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToIndex = (index) => {
    if (index >= 0 && index < cardData.length) {
      setCurrentIndex(index);
    }
  };
  

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % cardData.length;
    goToIndex(nextIndex);
  };

  const goToPrev = () => {
    const prevIndex = (currentIndex - 1 + cardData.length) % cardData.length;
    goToIndex(prevIndex);
  };

  return (
    <div className="flex flex-col items-center mb-12">
        <div className="text-[44px] flex flex-col pt-12 leading-normal text-center text-white">
        <div className={orb.className}>Our Beloved Partners</div>
       
      </div>
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`w-full flex-shrink-0 p-4 ${
                index === currentIndex ? 'opacity-100' : 'opacity-50'
              } transition-opacity duration-300`}
            >
              {card}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 gap-2 flex">
        <button
          className="flex justify-center items-center w-10 h-10 bg-white hover:bg-[#9E00FF] rounded-full"
          onClick={goToPrev}
        >
          &lt;
        </button>
        <button
          className="flex justify-center items-center w-10 h-10 bg-white hover:bg-[#9E00FF] rounded-full"
          onClick={goToNext}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Tweets;
