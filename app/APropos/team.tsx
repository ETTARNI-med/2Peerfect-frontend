import React from "react";
import Image from "next/image";
import Team1 from "../../public/team0.png";
import Team2 from "../../public/team1.png";
import Team3 from "../../public/team2.png";
import Team4 from "../../public/team3.png";
import Team5 from "../../public/team4.png";
import Team6 from "../../public/team5.png";
// import BackPhoto1 from "../../public/Backphoto1.png";

function Team() {
  return (
    <div className="flex flex-row items-start justify-between gap-12">
       <div className="ml-4">
          <Image src={Team1} alt="Photo de la fondatrice" />
        </div>
        <div className="mt-16">
          <Image src={Team2} alt="Photo de la fondatrice" />
        </div>
        <div>
          <Image src={Team3} alt="Photo de la fondatrice" />
        </div>
        <div className="mt-16">
          <Image src={Team4} alt="Photo de la fondatrice" />
        </div>
        <div>
          <Image src={Team5} alt="Photo de la fondatrice" />
        </div>
        <div className="mr-4 mt-16">
          <Image src={Team6} alt="Photo de la fondatrice" />
        </div>
    </div>
  );
}

export default Team;
