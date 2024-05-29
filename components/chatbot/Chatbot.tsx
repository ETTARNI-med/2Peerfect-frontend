import { FunctionComponent, useState } from "react";
import logo from "../../public/left-robot.png";
import Arrow from "../../public/Arrow.png";
import Download from "../../public/Download.png";
import x from "../../public/x.png";
import ChatbotPopup from "./ChatbotPopup";

interface ChatbotProps {
  onClose: () => void;
}

const Chatbot: FunctionComponent<ChatbotProps> = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCloseChat = (): void => {
    setIsOpen(false);
    setIsPopupOpen(false);
    // onClose();
  };

  return isOpen ? (
    <div className="relative w-[600px] h-[500px] text-left text-black font-inter">
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black opacity-90 z-50" />
      )}
      <div className="absolute w-96 inset-0 flex flex-col bg-white rounded-2xl shadow-lg">
        <div className="relative h-18 w-full flex  items-center justify-center rounded-2xl bg-[#A7E92F] mb-4">
          <div className="flex flex-col items-center">
            <img className="h-12 w-12 " alt="" src={logo.src} />
            <p className="text-base font-semibold  px-2 py-1 rounded">
              Monsieur Flash Card
            </p>
            {/* <div className="flex items-center justify-between"></div> */}
          </div>
          <div className=" flex absolute top-0 right-0 h-8 w-8 pt-2">
            <img
              className="h-6 w-6 justify-items-end cursor-pointer"
              alt=""
              src={x.src}
              onClick={handleCloseChat}
            />
          </div>
        </div>
        <div className="h-96 relative flex flex-col ">
          <div className="flex absolute top-0 left-0 space-x-4">
            <img className="h-12 w-auto" alt="" src={logo.src} />
          </div>
          <div className="flex items-center justify-center mr-8 mt-8 ml-8  bg-gray-300 p-2 rounded-xl ">
            <p className="text-xs text-black ">
              Je suis Monsieur MouWajih, prêt à vous aider à tranformer vos pdf
              en exercices.
            </p>
          </div>
          <div className="flex flex-col ">
            <div className="flex w-44 bg-gray-300 p-2  rounded-xl mr-10 mt-8 ml-2 ">
              <p className="flex space-x-4 text-xs font-medium text-black ">
                Importer votre PDF
                <img className="h-4 w-auto pl-2" alt="" src={Download.src} />
              </p>
            </div>
            <div className="justify-start ml-6 mt-1">
              <p className="text-xs text-gray-500">6:23 AM</p>
            </div>
          </div>
        </div>
        <div className="relative flex h-14 flex-row items-center justify-center bg-[#A7E92F] rounded-b-xl">
          <div className="flex items-center w-32 justify-center bg-slate-50 p-1 rounded-xl">
            <label
              htmlFor="pdf-upload"
              className="text-base font-medium text-black cursor-pointer "
            >
              Insérer le PDF
              <input id="pdf-upload" type="file" className="hidden" />
            </label>
          </div>
          <div
            className="pl-3 absolute right-4"
            onClick={() => setIsPopupOpen(true)}
          >
            <img src={Arrow.src} alt="" />
          </div>
        </div>
        {/* Render ChatbotPopup conditionally */}
        {isPopupOpen && <ChatbotPopup onClose={handleCloseChat} />}
      </div>
    </div>
  ) : null;
};

export default Chatbot;
