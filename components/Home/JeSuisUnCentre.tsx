"use client";

import { useState } from "react";

import profcentre from "@/public/images/profCenter.png";
import profgreen from "@/public/images/profgreen.png";

import Image from "next/image";
import Link from "next/link";

export default function JeSuisUnCentre() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="relative -mt-8">
      <div
        className={`absolute top-96 left-96 w-[273.96px] h-[71.05px] bg-white rounded-[17px] shadow text-center pt-6 text-blue-800 text-xl font-bold hover:bg-lime-400`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link href="/JeSuisProf">JE SUIS UN PROFESSEUR</Link>
      </div>
      <div className="relative top-96 left-2/3 w-[273.96px] h-[71.05px] bg-white rounded-[17px] shadow text-center pt-6 text-blue-800 text-xl font-bold hover:bg-lime-400">
        <Link href="/JeSuisCentre">JE SUIS UN CENTRE</Link>
      </div>
      {isHovered ? (
        <Image className="w-full " src={profgreen} alt="" priority />
      ) : (
        <Image className="w-full" src={profcentre} alt="" priority />
      )}
    </div>
  );
}
