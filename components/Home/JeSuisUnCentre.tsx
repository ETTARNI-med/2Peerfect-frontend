"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import prof from "@/public/prof.png";
import bgprof from "@/public/bggprof.webp";
import BackgroundSVG from "../BackgroundSVG";
import BackgroundSVGII from "../BackgroundSVGII";

function JeSuisUnCentre() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        className="relative "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative inline-block">
          <div className="absolute inset-0 z-20 left-0 overflow-y-hidden ">
            {isHovered ? <BackgroundSVGII /> : <BackgroundSVG />}
          </div>
          <div className="relative flex">
            <div className="flex items-center ">
              <Image
                src={prof}
                alt="prof"
                className="relative z-30  w-[94%] "
              />
              <Link
                href="/JeSuisProf"
                className="bg-white rounded-[17px] shadow text-center p-6  mb-96  text-blue-800 text-xl font-bold hover:bg-lime-400 cursor-pointer z-50 -translate-x-[71px]"
              >
                PROFESSEUR
              </Link>
            </div>
            <div className=" flex items-center ">
              <Image
                src={bgprof}
                alt="bgprof"
                className="w-full h-full  "
                key="bgprof"
              />
              {isHovered && (
                <div className="absolute inset-0 bg-black opacity-80"></div>
              )}
              <Link
                href="/JeSuisCentre"
                className=" bg-white rounded-[17px] shadow text-center mb-96 py-6 px-14 text-blue-800 text-xl font-bold hover:bg-lime-400 cursor-pointer z-50 -translate-x-[601px]"
              >
                CENTRE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JeSuisUnCentre;
