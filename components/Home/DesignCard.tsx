import React from "react";
import { MapPin } from "lucide-react";
import DesignPic from "@/public/DesignPic.svg";
import Image from "next/image";
export default function DesignCard() {
  return (
    <>
      <div className="relative ">
        <div className="absolute  font-extrabold left-[550px] top-[180px]  -z-10 w-[59px] h-[59px] rounded-full shadow border-[11px]  border-my-yellow-400" />

        <Image
          className=" left-[96.88px] z-50 "
          src={DesignPic}
          alt=""
          width={624.799}
          height={579.504}
        />
        <div className="shadow-lg h-[158px] w-[284px] pl-4 absolute left-[-40px] top-[95px]  bg-white rounded-xl">
          <h2 className="text-[#004AAD] font-bold text-[19px]	 mt-2">Design</h2>
          <div className="flex items-center justify-center mb-1">
            <MapPin className="mr-2 text-blue-500" />
            <h3 className="font-semibold text-[16px]">Tanger</h3>
          </div>
          <h1 className="font-bold text-[18px]	 ">
            UI/UX Design for the beginner
          </h1>
          <h6 className="text-[#004AAD] text-[12px] ">
            Lancez-vous dans l'UI design ! Obtenez <br /> des compétences ...
          </h6>
          <h3 className="text-[#1A5CB5] text-[16px]">2 months Learning</h3>
        </div>
      </div>
    </>
  );
}
