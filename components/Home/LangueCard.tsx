import React from "react";
import vector8 from "@/public/vector8.svg";
import vector from "@/public/vector.svg";
import Image from "next/image";
export default function () {
  return (
    <>
      <div className="realtive -mt-28  ">
        <Image className="  left-4 " src={vector8} alt="" priority />
        <div className="w-[265.28px] h-[158.73px] bg-white rounded-[14px] pl-4 pt-3 -top-2/3  -right-[400px] relative shadow-2xl">
          <div className="w-[98px] h-[43px] text-blue-800 text-[19px]  font-bold ]">
            Langue
          </div>
          <div className="flex -mt-3 justify-center">
            <Image
              className="mr-2 -mt-3 "
              src={vector}
              alt=""
              priority
            />
            <div className="w-[193px] h-[35px] text-black text-base font-semibold">
              
              2peerfect e-learning
            </div>
          </div>
          <div className="w-[303.32px] h-[20.66px] text-black text-lg font-semibold -mt-2">
            English for Business
          </div>
          <div className="w-[237.71px] h-[14.09px] text-blue-800 text-xs font-light mt-3 ">
            Améliorer votre anglais pour ....
          </div>
          <div className="w-36 h-9 text-blue-800 text-opacity-90 text-base font-normal ">
            4 Weeks Learning
          </div>
        </div>
      </div>
    </>
  );
}
