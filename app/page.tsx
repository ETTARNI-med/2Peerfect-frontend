import React from "react";
import Image from "next/image";
import background from "../public/background.png";

import DesignCard from "@/components/Home/DesignCard";
import PresentielCard from "@/components/Home/PresentielCard";
import Elearning from "@/components/Home/Elearning";
import LangueCard from "@/components/Home/LangueCard";
import WebCard from "@/components/Home/WebCard";
import FormationEnlign from "@/components/Home/FormationEnlign";
import HeroSection from "@/components/Home/HeroSection";
import Partners from "@/components/Home/Partners";
import CoursPopulaire from "@/components/Home/CoursPopulaire";
import JeSuisUnCentre from "@/components/Home/JeSuisUnCentre";
import Events from "@/components/Home/Events";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="relative flex justify-between pl-16">
        <DesignCard />
        <PresentielCard />
      </div>
      <div className="relative flex justify-around">
        <Elearning />
        <LangueCard />
      </div>
      <div className="relative flex justify-around -mt-52">
        <WebCard />
        <FormationEnlign />
      </div>
      <Partners />
      <CoursPopulaire />
      <JeSuisUnCentre />
      <Events />
    </>
  );
}
