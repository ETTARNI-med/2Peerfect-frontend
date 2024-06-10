"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import JeVeuxButton from "@/components/JeveuxBtn/JeVeuxButton";
import mainPic from "../../public/images/mainPic.webp";
import rightChat from "../../public/right-robot.png";
import leftChat from "../../public/left-robot.png";
import TriggreChat from "./../chatbot/TriggreChat";

export default function Home() {
  const courses = ["génie civil", "anglais", " UI/UX DESIGN"];
  const [element, setElement] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setElement((prevIndex) => (prevIndex + 1) % courses.length);
    }, 1500); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, []); // Empty dependency array to run useEffect only once on mount

  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  // Modified toggleChatbot function to close the chatbot only when a button is clicked
  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen); // Toggle chatbot visibility
  };
  return (
    <>
      <div className=" h-screen mb-20">
        <Image
          className=" z-30 "
          src={mainPic}
          alt="background"
          style={{
            width: "100%",
            height: "auto",
          }}
          objectFit="cover"
        />
        <div className=" absolute flex justify-center w-full top-1/3">
          <span className="text-white text-[70px] font-bold w-[1122px] h-[270px] leading-[85.08px]">
            Libérez votre apprentissage <br />
            avec 2peerfect en{" "}
            {
              <span className="uppercase text-lime-400">
                {courses[element]}
              </span>
            }
          </span>
        </div>
        <div className="absolute top-2/3  inset-0 flex  justify-center cursor-pointer">
          <JeVeuxButton />
        </div>
        <div
          onClick={() => setIsChatbotOpen(!isChatbotOpen)} // Toggle chatbot visibility when clicked
          className="absolute bottom-0 left-0 p-2 cursor-pointer"
        >
          {/* Left bottom icon */}
          <Image
            className="z-30"
            src={leftChat}
            alt="background"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          {/* Render Chatbot*/}
          {isChatbotOpen && (
            <TriggreChat onClose={() => setIsChatbotOpen(false)} />
          )}{" "}
          {/* Pass function to close the chatbot */}
        </div>

        <div className="absolute bottom-0 right-0 p-2 cursor-pointer">
          {/* Right bottom icon */}
          <Image
            className=" z-30 "
            src={rightChat}
            alt="background"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <div className="absolute right-1/3 -bottom-36 font-extrabold -z-10 w-[111px] h-[111px] rounded-full shadow border-8 border-black" />

        <div className=" absolute -left-12 -z-10 -bottom-[34px] w-[111px] h-[111px] rounded-full shadow border-8 border-blue-800" />
      </div>
    </>
  );
}
