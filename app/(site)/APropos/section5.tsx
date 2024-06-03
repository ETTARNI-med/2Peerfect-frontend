import React from "react";
import Image from "next/image";
import Woman from "../../public/woman1.png";

function section5() {
  return (
    <>
      <div className="bg-white flex ">
        <div className="">
          <Image src={Woman} alt="Photo de la fondatrice" className="w-96 h-auto ml-44"/>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="grid grid-cols-2 gap-4 place-items-center ml-44">
  <div className="bg-[#004AAD] w-48 h-20 rounded-2xl text-white uppercase font-bold text-center pt-4"> +1000 <br /> étudiatns</div>
  <div className="bg-[#A7E92F] w-48 h-20 rounded-2xl text-white uppercase font-bold text-center pt-4"> +100 <br /> Formations</div>
  <div className="bg-[#000000] text-white w-48 h-20 rounded-2xl  uppercase font-bold text-center pt-4"> +50 <br /> Partenaires</div>
  <div className="bg-[#3A6BEA] w-48 h-20 rounded-2xl text-white uppercase font-bold text-center pt-2"> +30 <br /> Formations sur Mesure</div>
</div>

      </div>
    </>
  );
}

export default section5;
