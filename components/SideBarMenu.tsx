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
        <div className=" w-[50vw] h-[115vh] relative mt-10 z-50">
          <div className="w-[40vw] h-[105vh] left-[-16px] top-[-87.50px] absolute shadow-md">
            <div className="w-[40vw] h-[105vh] left-[698px]  bg-white " />
            <div className="w-72 h-[105vh] left-[60px] top-[60.50px] absolute flex-col justify-start items-start gap-[78px] inline-flex">
              <div className="w-[262px] h-[11px] justify-start items-center inline-flex">
                <div className="w-[223px] h-[5px] text-blue-800 text-[32px] ">
                  {" "}
                  <X
                    onClick={handleClose}
                    className="text-[#004AAD] size-14 font-bold mt-2 cursor-pointer"
                  />
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-11">
                <div className=" justify-start items-center inline-flex  ">
                  <Link
                    href="/"
                    className=" text-blue-800 text-xl font-semibold  "
                  >
                    Accueil
                  </Link>
                </div>

                <div className="justify-start items-center inline-flex  ">
                  <Link
                    href="/APropos"
                    className="text-blue-800 text-xl font-semibold "
                  >
                    A propos
                  </Link>
                </div>

                <div className=" justify-start items-center inline-flex  ">
                  <Link
                    href="/Orientation"
                    className="text-blue-800 text-xl font-semibold "
                  >
                    Orientation{" "}
                  </Link>
                </div>

                <div className="justify-start items-center inline-flex  ">
                  <Link
                    href="/Langues"
                    className=" text-blue-800 text-xl font-semibold"
                  >
                    Langues
                  </Link>
                </div>

                <div className="justify-start items-center inline-flex  ">
                  <Link
                    href="/Evenement"
                    className="text-blue-800 text-xl font-semibold"
                  >
                    {" "}
                    Nos évènements
                  </Link>
                </div>

                <div className="justify-start items-center inline-flex  ">
                  <Link
                    href="/E-learning"
                    className=" text-blue-800 text-xl font-semibold"
                  >
                    2Peerfect E-learning
                  </Link>
                </div>

                <div className="justify-start items-center inline-flex  ">
                  <Link
                    href="/Business"
                    className=" text-blue-800 text-xl font-semibold"
                  >
                    2Peerfect Business
                  </Link>
                </div>
                <div className="justify-start items-center inline-flex  ">
                  <Link
                    href="/Contact"
                    className=" text-blue-800 text-xl font-semibold"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-[30vw] h-[105vh] left-[324px] top-0 absolute bg-blue-800" />
            <div className="w-[235px] h-[34px] left-[403px] -top-[10px] absolute text-white font-semibold  ">
              <Link href={"/"}>
                <Image
                  className="text-white ml-10"
                  src={Logo}
                  alt=""
                  priority
                />
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
                <Link href="instagra.com">
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
            <div className="w-[44.07px] h-[354.57px] left-[355px] top-[314px] absolute"></div>
          </div>
          <div className="w-[29.59px] h-[28.38px] left-[15px] top-0 absolute"></div>
        </div>
      ) : (
        <div className="py-6 px-8 relative">
          <AlignJustify
            className="text-[#004AAD] size-16 font-bold cursor-pointer"
            onClick={handleClick}
          />
        </div>
      )}
    </>
  );
}
