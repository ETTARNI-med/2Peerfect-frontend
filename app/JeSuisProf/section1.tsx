import React from "react";
import Image from "next/image";
import Back from "../../public/BACK-prof.png";

function section1() {
  return (
    <div>
      {" "}
      <div className=" h-screen mb-20">
        <Image
          className=" z-40 "
          src={Back}
          alt="background"
          style={{
            width: "100%",
            height: "auto",
          }}
          objectFit="cover"
        />
        <div className="absolute z-50 inset-0 flex flex-col items-center justify-center">
          <h1 className="font-bold shadow-md bg-white text-center uppercase mt-56 text-blue-800 text-5xl">
            Pourquoi devenir un professeur avec
          </h1>
          <br />
          <h1 className="font-bold shadow-md bg-white text-center uppercase text-blue-800 text-5xl">
            2 peerfect?
          </h1>
        </div>
      </div>
    </div>
  );
}

export default section1;
