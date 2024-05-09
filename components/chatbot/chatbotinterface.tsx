// ChatbotInterface.tsx
import React, { useState } from 'react';

interface ChatbotInterfaceProps {
  onClose: () => void;
}

const ChatbotInterface: React.FC<ChatbotInterfaceProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<string[]>([]);

  const handleInputSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const userInput: string = e.currentTarget.userInput.value.trim();
    if (userInput !== '') {
      setMessages([...messages, userInput]);
      // Logic for bot response goes here
      e.currentTarget.userInput.value = '';
    }
  };

  return (
    <div className="chatbot-interface">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className="message">
            {message}
          </div>
        ))}
      </div>
      <form onSubmit={handleInputSubmit}>
        <input type="text" name="userInput" placeholder="Type your message..." />
        <button type="submit">Send</button>
      </form>
      {/* Close button */}
      <button onClick={onClose}>Close Chat</button>
    </div>
  );
};

export default ChatbotInterface;
