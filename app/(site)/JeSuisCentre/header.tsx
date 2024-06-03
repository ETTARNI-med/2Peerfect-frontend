import React from "react";
import Image from "next/image";
import Center from "../../public/center.png";


function header() {
  return (
    <div>
        <div className=" h-screen mb-20">
        <Image
          className=" z-40 "
          src={Center}
          alt="background"
          style={{
            width: "100%",
            height: "auto",
          }}
          objectFit="cover"
        />
        <div className="absolute z-50 inset-0 flex flex-col items-center justify-center">
          <h1 className="font-bold shadow-md bg-blue-800 text-center uppercase mt-56 text-white text-5xl">
            Pourquoi devenir un PARTENAIRE avec 
          </h1>
          <h1 className="font-bold shadow-md bg-blue-800 text-center uppercase  text-white text-5xl">
            2 peerfect?
          </h1>
        </div>
       
      </div>
    </div>
  )
}

export default header