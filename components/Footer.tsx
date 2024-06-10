import React from "react";
import Logo from "../public/logo-Bla.svg";
import Image from "next/image";
import facebook from "../public/facebook.svg";
import insta from "../public/insta.svg";
import twitter from "../public/twitter-x-line.svg";
import whatsapp from "../public/whatsap.svg";
import email from "../public/email.svg";
import Link from "next/link";
export default function Footer() {
  const list1 = [
    { name: "A Propos", link: "/APropos" },
    { name: "2peerfect Business", link: "/2peerfect Business" },
    { name: "Nos évènements", link: "/Nos évènements" },
    { name: "Orientation", link: "/Orientation" },
    { name: "Blogs", link: "/Blogs" },
  ];
  const list2 = [
    { name: "Nos formations:", link: "/formation" },
    { name: "Formations présentiels", link: "/Formations présentiels" },
    { name: "Formations en ligne", link: "/Formations en ligne" },
    { name: "Formations e-learning", link: "/Formations e-learning" },
  ];
  const logos = [
    { loogo: facebook, link: "facebook.com" },
    { loogo: insta, link: "instagram.com" },
    { loogo: twitter, link: "x.com" },
    { loogo: whatsapp, link: "whatsap.com" },
    { loogo: email, link: "email.com" },
  ];
  return (
    <>
      <div className=" h-[388px] bg-black  mt-10 ">
        <div className="flex">
          <Link href="/">
            <Image className="text-white ml-10" src={Logo} alt="" priority />
          </Link>
          <div className="text-white font-bold mt-20 ml-32 items-center">
            {list1.map((list, index) => (
              <h1 key={index} className="mb-8 ">
                <Link href={list.link}>{list.name}</Link>
              </h1>
            ))}
          </div>
          <div className="text-white font-bold mt-20 ml-40 items-center">
            {list2.map((list, index) => (
              <h1 key={index} className="mb-8 ">
                <Link href={list.link}>{list.name}</Link>
              </h1>
            ))}
          </div>
          <div className="text-white font-bold mt-20 ml-40 items-center">
            <div className="flex justify-center">Contactez-nous</div>
            <h1 className="mb-8 flex mt-10 space-x-8">
              {logos.map((logo, index) => (
                <Link href={logo.link} key={index}>
                  <Image className="" src={logo.loogo} alt="" priority />
                </Link>
              ))}
            </h1>
          </div>
        </div>
        <div className="text-white flex justify-center">
          All rights 2Peerfect | Copyrights 2024 ©
        </div>
      </div>
    </>
  );
}
