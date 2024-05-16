import React from "react";
import x from "../../public/x.png";

interface ChatbotPopupProps {
  onClose: () => void;
}

const ChatbotPopup: React.FC<ChatbotPopupProps> = ({ onClose }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-50">
   
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
        <p className="text-lg font-semibold flex items-center justify-center px-4 py-2">La langue du quiz</p>
      
       
        <div className="h-14 flex flex-col mt-10 rounded-b-2xl">
        <select className="px-4 py-2 m-3 text-base text-slate-950 bg-slate-50 rounded-xl mr-4">
              <option value="Language">Français</option>
              <option value="Language">Anglais</option>
              <option value="Language">Arabe</option>
            </select>
          <button className="px-4 py-2 m-3  text-base  text-slate-200 bg-blue-800 rounded-xl mr-4">
            Next
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPopup;
