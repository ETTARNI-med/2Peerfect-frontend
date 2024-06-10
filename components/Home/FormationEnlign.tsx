import Image from "next/image";
import React from "react";
import vector6 from "@/public/Vector 6.svg";
import learning from "@/public/learning.svg";
import greenellips from "@/public/EllipseGreen.svg";

export default function PresentielCard() {
  return (
    <>
      <div className=" pt-10 -left-20 z-30 w-max" >
     
      <Image
          className="relative top-16 left-4 "
          src={learning}
          alt=""
          priority
        />
        <Image
          className="relative -left-20 -z-10 "
          src={vector6}
          alt=""
          width={560.039}
          height={360.664}
          priority
        />
        
        <div className="relative -top-80 left-0">
          <div className="w-[513.23px] h-[65px] text-blue-800 text-5xl font-bold  underline">
            Formation en ligne
          </div>

          <div className="w-[447.84px] h-[175.64px] text-blue-800 text-2xl font-light ">
            Les programmes de formation en ligne peuvent être adaptés à vos
            besoins spécifiques, vous permettant de choisir les modules qui
            correspondent à vos objectifs d'apprentissage
          </div>
          

        </div>
        {/* <div className="absolute  top-80  -z-10 w-[60px] h-[59px] rounded-full shadow border-[11px]    border-my-yellow-400" /> */}

        <Image
          className="absolute  top-80 right-0"
          src={greenellips}
          alt=""
          width={30}
          height={30}
          priority
        />
      </div>
    </>
  );
}
