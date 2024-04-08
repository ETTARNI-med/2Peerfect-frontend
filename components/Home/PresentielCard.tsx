import Image from "next/image";
import React from "react";
import vector6 from "@/public/Vector 6.svg";
import presentation from "@/public/presentation.svg";
export default function PresentielCard() {
  return (
    <>
      
      <div className="relative pt-24 -left-20">
      <Image
          className="absolute top-16 left-4 "
          src={presentation}
          alt=""
          width={56.039}
          height={36.664}
          priority
        />
        <Image
          className="relative "
          src={vector6}
          alt=""
          width={560.039}
          height={360.664}
          priority
        />
        <div className="absolute top-32 left-16">
        
          <div className="w-[513.23px] h-[65px] text-blue-800 text-5xl font-bold font-['Inter'] underline">
            Formation présentiel{" "}
          </div>
       
          <div className="w-[447.84px] h-[175.64px] text-blue-800 text-2xl font-light font-['Inter']">
            Assister à votre formation sur votre ville sans déplacement .Vous
            aurez l'opportunité de réseauter avec autres participants, ce qui
            peut être bénéfique sur le plan professionnel et favoriser le
            partage d'expériences.
          </div>
        </div>
      </div>
    </>
  );
}
