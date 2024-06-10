// Navbar component
"use client";
import React, { useEffect, useState } from "react";
import { AlignJustify } from "lucide-react";
import Logo from "../public/Logo.svg";
import Link from "next/link";
import Image from "next/image";
import SideBarMenu from "./SideBarMenu";
import Signup from "./Signup";
import SignIn from "./SignIn";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const handleClick = () => {
    setIsVisible(false);
  };

  return (
    <div className="flex justify-between w-full h-0 z-50  ">
      <div className="flex justify-between">
        {isVisible ? (
          <div className="">
            <div className="flex gap-3  ">
              <div className="mt-6 mx-8 relative cursor-pointer ">
                <AlignJustify
                  className="text-[#004AAD] size-16 font-bold"
                  onClick={handleClick}
                />
              </div>
              <div className="flex pt-8 gap-5    ">
                <div className="relative">
                  <Signup />
                </div>
                <div className="relative ">
                  <SignIn />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <SideBarMenu />
        )}
      </div>
      {/* <div className="px-6 py-4 relative cursor-pointer border-2 border-red-500"> */}
      <Link href={"/"} className=" mx-6 relative  ">
        <Image
          src={Logo}
          alt="logo"
          priority
          style={{ width: 125, height: 125 }}
        />
      </Link>
      {/* </div> */}
    </div>
  );
}
