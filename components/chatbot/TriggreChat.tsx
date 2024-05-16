import React from "react";
import ChatBot from "./Chatbot";

interface TriggreChatProps {
  onClose: () => void;
}

const TriggreChat: React.FC<TriggreChatProps> = ({ onClose }) => {
  // Prevent the background overlay from closing the chat when clicked
  const stopPropagation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background overlay without onClick event */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      {/* Render Chatbot and prevent click events from bubbling up */}
      <div className="relative z-10" onClick={stopPropagation}>
        <ChatBot />
      </div>
    </div>
  );
};

export default TriggreChat;
