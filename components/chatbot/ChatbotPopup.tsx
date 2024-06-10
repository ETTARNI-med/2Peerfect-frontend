import React from "react";
import x from "../../public/x.png";
import { FunctionComponent, useState } from "react";
import ChatbotPopup2 from "./ChatbotPopup2";

interface ChatbotPopupProps {
  onClose: () => void;
}

const ChatbotPopup: FunctionComponent<ChatbotPopupProps> = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCloseChat = (): void => {
    setIsOpen(false);
    setIsPopupOpen(false);
    onClose();
  };

  return isOpen ? (
    <div className="absolute inset-0 flex items-center justify-center z-50">
     {/* {isPopupOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-50" />
      )} */}
      <div className="relative z-50 w-80 h-96 bg-[#A7E92F] rounded-2xl shadow-lg">  
      <button
          className="absolute top-o right-0 p-2 text-sm rounded-full"
          onClick={onClose}
        >
          <img
              className="h-6 w-6 justify-items-end cursor-pointer"
              alt=""
              src={x.src}
             
            />
        </button>
       <div className="flex flex-col"> 
        <p className="text-lg font-semibold flex items-center justify-center px-4 py-2">Le type du PDF</p>
      
       
        <div className="h-14 flex flex-col mt-10 rounded-b-2xl">
          <button className="px-4 m-3 py-2 text-base text-slate-950 bg-slate-50 rounded-xl mr-4">
          Simple PDF
          </button>
          <button className="px-4 py-2 m-3  text-base  text-slate-950 bg-slate-50 rounded-xl mr-4">
          PDF Scanner
        </button>
          <button className="px-4 py-2 m-3  text-base  text-slate-200 bg-blue-800 rounded-xl mr-4" onClick={() => setIsPopupOpen(true)}>
            Next
          </button>
        </div>
        </div>
          {/* Render ChatbotPopup conditionally */}
      {isPopupOpen && (
        <ChatbotPopup2 onClose={handleCloseChat} />
      )}
      </div>
    </div>
    ) : null;
};

export default ChatbotPopup;
