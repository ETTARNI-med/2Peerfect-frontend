import Image from 'next/image'
import React from 'react'
import vector9 from '@/public/vector9.svg'
import meet from '@/public/googleMeet.svg'
export default function WebCard() {
  return (<>
    <div className="relative pl- ">
    <Image
          className="  "
          src={vector9}
          alt=""
          priority
        /> 
        <div className="w-[265.28px] h-[158.73px] bg-white rounded-[14px] pl-3 pt-3 top-2 left-38 absolute shadow-2xl">
        <div className="w-[83px] h-[43px] text-blue-800 text-[19px] font-bold ">Web</div>
            <Image 
              className="ml-24 -mt-6 "
              src={meet}
              alt=""
              priority
            />
            <div className="w-[303.32px] h-[20.66px] text-black text-lg mb-2 font-semibold ">Introduction of Data science</div>
            <div className="w-[237.71px] h-[28.18px] text-blue-800 text-xs mb-1 font-light ">Découvrir le monde d’analyse de données...</div>
            <div className="w-[167px] h-9 text-blue-800 text-opacity-90 text-base font-normal ">2 sessions Learning</div>
        </div>
    </div>
    </>
  )
}
