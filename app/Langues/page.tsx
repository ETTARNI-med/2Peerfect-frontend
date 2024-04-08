
import Image from "next/image";
import Link from "next/link";
import React from "react";
import francais from '../../public/francais.svg'
import anglais from '../../public/anglais.svg'
import chinise from '../../public/Chinise.svg'
export default function page() {
  const datas = [
    { langue: "Français", logo: francais, link: "/Français" },
    { langue: "Anglais", logo: anglais, link: "/Anglais" },
    { langue: "Chinise", logo: chinise, link: "/Chinise" },
    { langue: "Allemand", logo: chinise, link: "/Allemand" },
    { langue: "Turque", logo: chinise, link: "/Turque" },
    { langue: "Espagnole", logo: chinise, link: "/Espagnole" },
  ];

  return (
    <>
      <div className="mt-48 ">
        <div className=" flex  h-[78px] justify-center text-blue-800 text-5xl font-bold  uppercase mb-10">
        <Link href='/Langues'> Langues</Link>
        </div>
        <div className="grid grid-cols-3 place-items-center">
            {datas.map((data)=>(
                <div className="w-[401px] h-[416px] relative mb-16">
                <div className="w-[401px] h-[375px] left-0 top-0 absolute bg-blue-800 hover:bg-lime-400 rounded-[17px] shadow" />
                <div className="w-[328px] h-[113px] left-[41px] top-[303px] absolute bg-white rounded-[17px] shadow hover:bg-slate-100" />
                <Image className="w-[186px] h-[191px] left-[112px] top-[92px] absolute" src={data.logo} alt="" priority />
                <div className="left-[148px] top-[350px] absolute text-blue-800 text-2xl font-semibold  capitalize"><Link href={data.link}>{data.langue}</Link></div>
            </div>
            ))}
        </div>
      </div>
    </>
  );
}
