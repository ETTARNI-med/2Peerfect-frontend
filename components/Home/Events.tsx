import React from "react";
import eventImage from "@/public/images/eventImg.png";
import Image from "next/image";
import { CalendarDays, MapPin } from "lucide-react";
import Link from "next/link";
export default function Events() {
  const card1 = (
    <div className="h-[495px] w-[400px] bg-white rounded-xl">
      <div className="bg-black text-white h-[56px] w-[231px] font-bold  rounded-xl flex justify-center items-center ml-0 -mt-9">
        Dernier événement
      </div>
      <div className=" flex justify-center mt-5">
        {/* <div className="border-2 bg-black  w-56 h-56 rounded-full"></div>{" "} */}
        <Image src={eventImage} alt="" width={230} height={230} priority />
      </div>
      <div className="flex justify-center space-x-10 mt-3">
        <div className="flex">
          <MapPin className="mr-2 text-blue-500" />
          <h3>Rabat</h3>
        </div>
        <div className="flex">
          <CalendarDays className="mr-2 text-blue-500" />
          <h3>Monday, February 17, 23 </h3>
        </div>
      </div>
      <div className="flex justify-center pl-5 mt-2 pr-5 h-[97px] text-black text-sm font-semibold capitalize leading-[30px]  ">
        évènement d’orientation dédié aux lycéens 5ème,6ème et bac pour
        s’orienter aux métiers du futur
      </div>
      <div className="flex justify-center">
        <div className="w-[132.54px] h-[35px] text-white bg-blue-800 rounded-[5px] font-semibold  flex items-center justify-center">
          <Link href="/details"> plus de détails</Link>
        </div>
      </div>
    </div>
  );
  const card2 = (
    <div className="h-[495px] w-[400px] bg-white rounded-xl">
      <div className="bg-black text-white h-[56px] w-[231px] font-bold  rounded-xl flex justify-center items-center ml-0 -mt-9">
        Prochaine événement
      </div>
      <div className=" flex justify-center mt-5">
        {/* <div className="border-2 bg-black  w-56 h-56 rounded-full"></div>{" "} */}
        <Image src={eventImage} alt="" width={230} height={230} priority />
      </div>
      <div className="flex justify-center space-x-10 mt-3">
        <div className="flex">
          <MapPin className="mr-2 text-blue-500" />
          <h3>Rabat</h3>
        </div>
        <div className="flex">
          <CalendarDays className="mr-2 text-blue-500" />
          <h3>Monday, February 17, 23 </h3>
        </div>
      </div>
      <div className="flex justify-center pl-5 mt-2 pr-5 h-[97px] text-black text-sm font-semibold capitalize leading-[30px]  ">
        évènement d’orientation dédié aux lycéens 5ème,6ème et bac pour
        s’orienter aux métiers du futur
      </div>
      <div className="flex justify-center">
        <div className="w-[132.54px] h-[35px] bg-blue-800 text-white rounded-[5px] font-semibold  flex items-center justify-center">
          <Link href="/details"> plus de détails</Link>
        </div>
      </div>
    </div>
  );
  const card3 = (
    <div className="h-[495px] w-[400px] bg-white rounded-xl">
      <div className="bg-black text-white h-[56px] w-[231px] font-bold  rounded-xl flex justify-center items-center ml-0 -mt-9">
        Prochaine événement
      </div>
      <div className=" flex justify-center mt-5">
        {" "}
        {/* <div className="border-2 bg-black  w-56 h-56 rounded-full"></div> */}
        <Image src={eventImage} alt="" width={230} height={230} priority />
      </div>
      <div className="flex justify-center space-x-10 mt-3">
        <div className="flex">
          <MapPin className="mr-2 text-blue-500" />
          <h3>Rabat</h3>
        </div>
        <div className="flex">
          <CalendarDays className="mr-2 text-blue-500" />
          <h3>Monday, February 17, 23 </h3>
        </div>
      </div>
      <div className="flex justify-center pl-5 mt-2 pr-5 h-[97px] text-black text-sm font-semibold capitalize leading-[30px]  ">
        évènement d’orientation dédié aux lycéens 5ème,6ème et bac pour
        s’orienter aux métiers du futur
      </div>
      <div className="flex justify-center">
        <div className="w-[132.54px] h-[35px] text-white  bg-blue-800 rounded-[5px] font-semibold  flex items-center justify-center">
          <Link href="/details"> plus de détails</Link>
        </div>
      </div>
    </div>
  );
  const allcards = [card1, card2, card3];
  return (
    <>
      <div className="flex justify-center ">
        <div className=" mt-8 w-[1492px] h-[724px] bg-gradient-to-b from-[#6994CD] to-[#69696A] rounded-[90px] shadow ">
          <div className="pt-12 flex justify-center  text-center text-white text-[40px] font-bold  uppercase">
            nos évènements
          </div>
          <div className="mt-16 flex space justify-around"> {allcards}</div>
        </div>
      </div>
    </>
  );
}
