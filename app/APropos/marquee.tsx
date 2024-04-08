import React from "react";
import Image from "next/image";
// import Mark1 from "../../public/mark1.png";
import Mark2 from "../../public/mark2.png";
import Mark3 from "../../public/mark3.png";
import Mark4 from "../../public/mark4.png";
import Mark5 from "../../public/mark5.png";
import Mark6 from "../../public/mark6.png";
import Mark7 from "../../public/mark7.png";
import Marquee from "react-fast-marquee";

function marquee() {
  return (
    <div className="gap-4">
      <Marquee>
        {/* <Image src={Mark1} alt="marquee" className="pt-12"></Image> */}
        <Image src={Mark2} alt="marquee" className="pt-12 "></Image>
        <Image src={Mark3} alt="marquee" className="pt-12"></Image>
        <Image src={Mark4} alt="marquee" className="pt-12"></Image>
        <Image src={Mark5} alt="marquee" className="pt-12"></Image>
        <Image src={Mark6} alt="marquee" className="pt-12"></Image>
        <Image src={Mark7} alt="marquee" className="pt-12"></Image>
      </Marquee>
    </div>
  );
}

export default marquee;
