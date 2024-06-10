"use client";

import { useRef, useState } from "react";
import JeveuxPopup from "./JeveuxPopup";
import menuData from "@/lib/menu"

export default function JeVeuxButton() {
  const [open, setOpen] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleButtonClick = () => {
    setOpen(!open);
  };

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        className="mb-2 w-60 h-[88px] bg-white hover:bg-lime-500 rounded-[17px] shadow text-blue-800 text-xl font-bold"
        onClick={handleButtonClick}
      >
        JE VEUX
      </button>

      {open && (
        <div className="absolute  items-center  z-50">
          <JeveuxPopup items={menuData} onClose={() => setOpen(false)} />
        </div>
      )}
    </div>
  );
}

// onClick={() => setOpen(true)}

//   onClick={handleOverlayClick}

//   const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (e.target === e.currentTarget) {
//       setOpen(false);
//     }
