// ChatbotPopup.tsx
import React, { useState } from 'react';
import ChatbotInterface from './chatbotinterface';

interface ChatbotPopupProps {
  onClose: () => void;
}

const ChatbotPopup: React.FC<ChatbotPopupProps> = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const togglePopup = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`popup-container ${isOpen ? 'open' : ''}`}>
      <div className="popup-content">
        {/* Pass onClose function to the ChatbotInterface */}
        <ChatbotInterface onClose={onClose} />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ChatbotPopup;
