import { FunctionComponent } from "react";
import { useState } from "react";
import logo from "../../public/left-robot.png";
import Arrow from "../../public/Arrow.png";
import Download from "../../public/Download.png";
import x from "../../public/x.png";

interface ChatbotProps {   onClose: () => void; }

const Chatbot: React.FC<ChatbotProps> = ({ onClose }) => {
  // State to manage chatbot visibility
  const [isOpen, setIsOpen] = useState(true);

  // Function to handle closing the chat
  const handleCloseChat = (): void => {
    setIsOpen(false); // Close the chat
    onClose(); // Call the onClose function passed from the parent
  };

  return isOpen ? (
    <div className="relative w-[600px] h-[500px] text-left text-black font-inter">
      <div className="absolute top-0 right-0 bottom-0 left-[2px] w-[298px] h-full">
      <div onClick={handleCloseChat}>
        <img
          className="absolute top-[15px] right-[15px] bottom-[175px] left-[265px] h-[10px] w-[20px] max-w-full max-h-full overflow-hidden"
          alt=""
          src={x.src}
        />
        </div>
        <div className="absolute top-[20px] right-0 bottom-[2px] left-[2px] h-[178px] w-[296px] rounded-[10px] bg-white" />
        <div className="absolute top-[50px] right-[30px] bottom-[120px] left-[40px] h-[30px] w-[200px]">
          <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full rounded-[5px] bg-[#eee]" />
          <p className="absolute top-[5px] left-[10px] w-[180px] font-normal inline-block text-[12px]">
            <span>Je suis Monsieur MouWajih, prêt à vous </span>
            <br />
            <span>aider à tranformer vos pdf en exercices.</span>
          </p>
        </div>
        <div className="absolute top-[100px] right-[30px] bottom-[80px] left-[40px] h-[20px] w-[200px]">
          <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full rounded-[5px] bg-[#eee]" />
          <p className="absolute top-[2px] left-[30px] h-[16px] w-[140px] font-normal inline-block text-[12px]">
            Importer votre PDF
          </p>
        </div>
        <p className="absolute top-[120px] left-[50px] text-[10px] font-normal text-[#89898a]">
          6:23 AM
        </p>
        {/* <div className="absolute top-[10px] right-[10px] bottom-[170px] left-[2px] h-[20px] w-[286px] rounded-[10px] bg-[#f0f0f0]" /> */}
      
        <img
          className="absolute top-[5px] right-[140px] bottom-[180px] left-[130px] h-[15px] w-[30px] max-w-full max-h-full overflow-hidden"
          alt=""
          src={logo.src}
        />
        <img
          className="absolute top-[45px] right-[265px] bottom-[145px] left-[15px] h-[10px] w-[15px] max-w-full max-h-full overflow-hidden"
          alt=""
          src={logo.src}
        />
        <p className="absolute top-[20px] left-[60px] text-[16px] font-medium bg-[#A7E92F]">
          Monsieur Flash Card
        </p>
        <img
          className="absolute top-[105px] right-[120px] bottom-[85px] left-[160px] h-[10px] w-[15px] pl-4 max-w-full max-h-full overflow-hidden"
          alt=""
          src={Download.src}
        />
        <div className="absolute top-8 right-20 bottom-170 left-[260px] h-16 w-auto rounded-[5px] overflow-hidden bg-[#A7E92F]" />
        <div className="absolute top-[180px] right-0 bottom-0 left-[2px] h-[20px] w-[296px] text-[12px]">
          <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full rounded-[0px_0px_10px_10px] bg-[#a7e92f]"
           />
          <img
            className="absolute top-[5px] right-[15px] bottom-[5px] left-[270px] h-[10px] w-[15px] max-w-full max-h-full overflow-hidden"
            alt=""
            src={Arrow.src}
          />
          <div className="absolute top-[3px] right-[100px] bottom-[3px] left-[30px] h-[14px] w-[170px]">
            <img
              className="absolute top-[3px] right-[45px] bottom-[3px] left-[125px] h-[8px] w-[15px] max-w-full max-h-full overflow-hidden"
              alt=""
              src={Download.src}
            />
            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full rounded-[4px] bg-white" />
            <label
              htmlFor="pdf-upload"
              className="absolute top-0 right-0 bottom-0 left-0 h-full w-full rounded-[4px] bg-white flex flex-col justify-center items-center"
            >
              <input id="pdf-upload" type="file" className="hidden" />
              <p className="text-[12px]">Insérer le PDF</p>
            </label>
          </div>
        </div>
       
      </div>
    </div>
  ): null;
};

export default Chatbot;
