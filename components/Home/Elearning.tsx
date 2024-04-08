import Image from "next/image";
import React from "react";
import vector7 from "@/public/Vector 7.svg";
import videoicon from '@/public/22_Video Player.svg'
import blackellips from '@/public/EllipseBlack.svg'
export default function Elearning() {
  return (
    <>
      <div className=" top-16 left-8">
        <Image
          className="relative top-16 left-4 "
          src={vector7}
          alt=""
          priority
        /> <Image
        className=" absolute top-10 left-28"
        src={videoicon}
        alt=""
       
        priority
      />
        <div className="relative -top-[280px] left-11">
        <div className="w-[524.35px] h-[65px] text-blue-800 text-5xl font-bold  underline">
          Formation E-learning
        </div>
        <div className="w-[447.84px] h-[262.98px] text-blue-800 text-2xl font-light">
          Accéder au contenu de formation à tout moment.Notre plateforme de
          e-le arning vous permet un apprentissage plus individualisé, avec des
          modules adaptés au rythme et au style d'apprentissage de chacun.
        </div>
        </div>
        <Image
        className=" absolute top-52 -left-[85px]"
        src={blackellips}
        alt=""
       
        priority
      />
      </div>
    </>
  );
}
