import React from "react";
import Chatbot from "./ChatbotPopup";

interface TriggreChatProps {
  onClose: () => void;
}
const TriggreChat: React.FC<TriggreChatProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      <div className="relative z-10">
        <Chatbot />
      </div>
    </div>
  );
};

export default TriggreChat;
