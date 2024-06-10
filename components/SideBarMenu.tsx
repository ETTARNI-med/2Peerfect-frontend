"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../public/logo-Bla.svg";
import facebook from "../public/facebook.svg";
import insta from "../public/insta.svg";
import twitter from "../public/twitter-x-line.svg";
import whatsapp from "../public/whatsap.svg";
import email from "../public/email.svg";
import { AlignJustify, X } from "lucide-react";
import Signup from "./Signup";
import SignIn from "./SignIn";

const list = [
  { name: "Accueil", link: "/" },
  { name: "A Propos", link: "/APropos" },
  { name: "Orientation", link: "/Orientation" },
  { name: "Langue", link: "/launge" },
  { name: "Nos évènements", link: "/Nos évènements" },
  { name: "Kids", link: "/Kids" },
  { name: "2peerfect E-learning", link: "/2peerfect Elearning" },
  { name: "2peerfect Business", link: "/2peerfect Business" },
  { name: "Conatct", link: "/Contact" },
];
export default function SideBarMeanu() {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  // fix the menu problem

  const handleClick = () => {
    setIsVisible(true);
  };

  return (
    <>
      {isVisible ? (
        <div className="relative z-50">
          <div className=" w-[40vw] h-screen bg-white " />
          <div className="absolute left-0 top-0 mt-9 mx-10">
            <div className="text-blue-800">
              {" "}
              <X
                onClick={handleClose}
                className="text-[#004AAD] size-16 font-bold "
              />
            </div>

            <div className="flex flex-col  mt-12 gap-10 ">
              {list.map((list, index) => (
                <div
                  key={index}
                  className=" justify-start items-center inline-flex "
                >
                  <Link
                    href={list.link}
                    className="text-blue-800 text-xl font-semibold hover:underline  decoration-lime-500 "
                  >
                    {list.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="w-[30vw] h-[105vh] left-[324px] top-0 absolute bg-blue-800" />
          <div className="w-[235px] h-[34px] left-[403px] -top-[10px] absolute text-white font-semibold  ">
            <Link href={"/"}>
              <Image className="text-white ml-10" src={Logo} alt="" priority />
            </Link>
          </div>
          <div className="w-[235px] h-[34px] left-[403px] top-[246px] absolute text-white text-2xl font-semibold  ">
            Suivez-nous sur
          </div>
          <div className="w-[278.67px] h-[342.18px] left-[417px] top-[322px] absolute">
            <div className="w-[299.22px] h-[23.64px] flex items-center  left-0 top-0 absolute text-white text-xl font-medium  ">
              <Link href="facebook.com">
                <Image className="mr-4" src={facebook} alt="" priority />
              </Link>
              2peerfect
            </div>
            <div className="w-[199.22px] h-[23.64px] flex items-center left-0 top-[79.64px] absolute text-white text-xl font-medium  ">
              <Link href="instagram.com">
                <Image className="mr-4" src={insta} alt="" priority />
              </Link>
              2peerfect
            </div>
            <div className="w-[199.22px] h-[23.64px] flex items-center left-0 top-[159.27px] absolute text-white text-xl font-medium  ">
              <Link href="x.com">
                <Image className="mr-4" src={twitter} alt="" priority />
              </Link>
              2peerfect
            </div>
            <div className="w-[199.22px] h-[23.64px] flex items-center left-0 top-[238.91px] absolute text-white text-xl font-medium  ">
              <Link href="whatsapp.com">
                <Image className="mr-4" src={whatsapp} alt="" priority />
              </Link>
              06-16161616
            </div>
            <div className="w-max h-[23.64px] flex items-center left-0 top-[318.55px] absolute text-white text-xl font-medium  ">
              <Link href="email.com">
                <Image className="mr-4" src={email} alt="" priority />
              </Link>
              contat.peerfect@gmail.com
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="py-6 px-8 relative">
            <AlignJustify
              className="text-[#004AAD] size-16 font-bold cursor-pointer"
              onClick={handleClick}
            />
          </div>

          <div className="flex pt-8 gap-5">
            <div className="relative ">
              <Signup />
            </div>
            <div className="relative ">
              <SignIn />
            </div>
          </div>
        </>
      )}
    </>
  );
}
