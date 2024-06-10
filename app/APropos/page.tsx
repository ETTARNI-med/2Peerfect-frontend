import React from "react";
import Image from "next/image";
import Image1 from "../../public/photo 1.png";
import Image2 from "../../public/photo2.png";
import Image3 from "../../public/photo3.png";
import Image4 from "../../public/image4.jpeg";
import Image5 from "../../public/image5.jpeg";
import Image6 from "../../public/image6.png";
import Cards from "./cards";
import Marquee from "./marquee";
import Team from "./team";
import Section5 from "./section5";

export default function page() {
  return (
    <div className="bg-Apropo pt-24">
      {/* first section */}

      <div className="flex gap-x-8  ">
        <div className="flex flex-col justify-center basis-1/2 p-16">
          <h1 className="text-4xl text-blue-800 font-bold	">
            Qui sommes-nous?{" "}
          </h1>
          <p className="pt-4 text-lg">
            <b>2Peerfect</b> est une start-up Edtech, leader avec ces formations
            100% en ligne et sa pédagogie innovante en matière d'enseignement et
            d'apprentissage des langues et logiciels qui vont vous faciliter
            l'intégration au marché professionnel et développer vos compétences
            via des pédagogies d'apprentissage futuriste et des des programmes
            de formations conçu avec excellence.
          </p>
        </div>
        <div className="flex space-x-4 ml-12 basis-1/2">
          <Image
            src={Image1}
            alt="Photo de la fondatrice"
            className="pt-12"
          ></Image>
          <Image
            src={Image2}
            alt="Photo de la fondatrice"
            className="pb-12"
          ></Image>
          <Image
            src={Image3}
            alt="Photo de la fondatrice"
            className="pt-12"
          ></Image>
        </div>
      </div>
      {/* second section */}
      <div className="flex gap-x-8 mt-20">
        <div className="flex w-48  basis-1/2">
          <div className=" rounded-xl">
            {" "}
            <Image
              src={Image4}
              alt="Photo de la fondatrice"
              className="pt-12 rounded-xl"
            ></Image>
          </div>
          <div className="">
            <Image
              src={Image5}
              alt="Photo de la fondatrice"
              className="pb-12"
            ></Image>
          </div>
        </div>

        <div className="flex flex-col justify-center basis-1/2 p-16">
          <h1 className="text-4xl text-blue-800 font-bold	">Notre mission </h1>
          <p className="pt-4 text-lg">
            Favoriser la synergie humaine via un apprentissage collaboratif de
            qualité et développer les compétences techniques et professionnelles
            des apprenants, en les préparant à des carrières spécifiques et en
            favorisant l'acquisition de compétences recherchées sur le marché du
            travail.
          </p>
        </div>
      </div>
      {/* Third section section */}
      <div className="flex gap-x-8 mt-20">
        <div className="flex flex-col justify-center basis-1/2 p-16">
          <h1 className="text-4xl text-blue-800 font-bold	pb-12">
            Notre innovation pédaghogique{" "}
          </h1>
          <p className="pt-4 text-xl">
            Adopter des méthodes d'enseignement novatrices et des technologies
            éducatives pour améliorer l'expérience d'apprentissage
          </p>
        </div>
        <div className=" basis-1/2 rounded-s-3xl rounded-r-3xl bg-blue-800 pl-12 mr-12 ">
          <Image src={Image6} alt="Photo de la fondatrice" className=""></Image>
        </div>
      </div>

      {/* fourth section  */}

      <div className="flex flex-col mt-44">
        <div className="flex justify-center m-20">
          <h1 className="text-4xl text-blue-800 font-bold	">
            Rencontrez notre équipe{" "}
          </h1>
        </div>
        <Team></Team>
      </div>

      {/* Fifth section  */}
      <div className="flex flex-col mt-44">
        <Section5></Section5>
      </div>

      {/* Sixth section  */}
      <div className="flex flex-col bg-white mt-44">
        <div className="flex justify-center m-20">
          <h1 className="text-4xl text-blue-800 font-bold	">
            Pourquoi 2peerfect?
          </h1>
        </div>
        <Cards></Cards>
      </div>

      {/* Seventh section  */}

      <div className="bg-white">
        <Marquee></Marquee>
      </div>
    </div>
  );
}
