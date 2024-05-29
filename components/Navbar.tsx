// Navbar component
"use client";
import React, { useEffect, useState } from "react";
import { AlignJustify } from "lucide-react";
import Logo from "../public/Logo.svg";
import Link from "next/link";
import Image from "next/image";
import SideBarMenu from "./SideBarMenu";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const handleClick = () => {
    setIsVisible(false);
  };
  useEffect(() => {
    // Add event listener when component mounts
    document.body.style.overflow = isVisible ? "hidden" : "auto";

    // Cleanup: remove event listener when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isVisible]);

  return (
    <div className="flex justify-between  h-0  w-full z-50 ">
      {isVisible ? (
        <div className="py-6 px-8 relative cursor-pointer">
          <AlignJustify
            className="text-[#004AAD] size-16 font-bold"
            onClick={handleClick}
          />
        </div>
      ) : (
        <SideBarMenu />
      )}
      <div className="px-6 py-4 relative cursor-pointer">
        <Link href={"/"}>
          <Image className=" mr-10 " src={Logo} alt="" priority />
        </Link>
      </div>
    </div>
  );
}
