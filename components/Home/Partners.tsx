import Image from "next/image";
import React from "react";
import EE from "@/public/E.svg";
import BE from "@/public/behance.svg";
import cisco from "@/public/cisco.svg";
import Ankor from "@/public/ankor.svg";
import EFounder from "@/public/efounder.svg";
import GROUPE from "@/public/Group 155.svg";
import Linkedin from "@/public/linkedin.svg";
import coursera from "@/public/coursera.svg";

export default function Partners() {
  return (
    <>
      <div className="flex bg-black h-[154px] justify-around">
        <Image src={EE} alt="" priority />
        <Image src={BE} alt="" priority />
        <Image src={cisco} alt="" priority />
        <Image src={Ankor} alt="" priority />
        <Image src={EFounder} alt="" priority />
        <Image src={GROUPE} alt="" priority />
        <Image src={Linkedin} alt="" priority />
        <Image src={coursera} alt="" priority />
      </div>
    </>
  );
}
