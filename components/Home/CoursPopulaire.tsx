"use client";
import Image from "next/image";

import dataAnalyst from "../../public/dataAnalyst.svg";
import uiux from "../../public/uiux.svg";
import c_plus_plus from "../../public/c_plus_plus.svg";
import stars from "../../public/stars.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import Link from "next/link";
export default function CoursPopulaire() {
  const infos = [
    {
      name: "Marketing",
      image_src: dataAnalyst,
     

      Formation_name: "Les bases de Data anlyst",
    },
    {
      name: "Design",
      image_src: uiux,
      
      Formation_name: `Les bases de UI/UX`,
    },
    { name: "Web", image_src: c_plus_plus, Formation_name: "Les bases de C++" },
    { name: "Web", image_src: c_plus_plus, Formation_name: "Les bases de C++" },
  ];

  const cards = infos.map((info, key) => (
   <div
      className= "h-[436px] w-[366px] bg-[#004AAD] rounded-[50px] hover:bg-lime-400 mt-10 pt-4 border-b-4 border-lime-400"
      key={key}
    >
      <div className="w-[170px] h-[42px] bg-white bg-opacity-90  rounded-[50px] shadow text-blue-800 text-2xl font-medium px-7 py-1 ml-4">
      <Link href={`/${info.name}`}>  {info.name}</Link>
      </div>
      <div className="w-[296px] h-[140px]  rounded-tr-[40px] rounded-bl-[40px] mt-4 ml-8">
        <Image
          className="rounded-[19px]"
          src={info.image_src}
          alt=""
          priority
          height={255}
          width={386}
        />
      </div>
      <Image
        className="w-[128.22px] h-[21.42px] relative mt-2 -right-52"
        src={stars}
        alt=""
        priority
      />
      <div className="w-[315px] h-[70px] text-center text-white text-[32px] font-semibold mt-4">
        {info.Formation_name}
      </div>
      <div className="w-[210px] h-[61px] bg-white rounded-[30px] text-center hover:bg-gray-200 text-blue-800 text-base font-medium mt-8 flex justify-center items-center ml-20">
      <Link href={`/${info.name}`}>  details ...</Link>
      </div>
    </div>
  ));

  return (
    <>
      <div className=" h-[647.31px] w-full  mt-20 ">
        <div className="text-center h-[78px] text-blue-800 text-5xl font-extrabold  uppercase ">
          Les cours les plus populaires
        </div>

        <Swiper navigation={true} modules={[Navigation]} slidesPerView={3}>
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="mx-16">{card}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
