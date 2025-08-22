import React, { useState, useEffect, useRef, useCallback } from 'react';
import { initializeChat, sendMessageToAI } from '../services/geminiService';
import type { ChatMessage } from '../types';
import { ChatIcon } from './icons/ChatIcon';
import { CloseIcon } from './icons/CloseIcon';
import { SendIcon } from './icons/SendIcon';

interface ChatWidgetProps {
  onShowCv: () => void;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ onShowCv }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    if (isOpen) {
        scrollToBottom();
    }
  }, [messages, isOpen]);

  const initChat = useCallback(async () => {
    setIsLoading(true);
    setMessages([]);
    try {
      initializeChat();
      // Send an empty message to get the initial greeting
      const initialResponse = await sendMessageToAI("Hello");
      setMessages([{ sender: 'ai', text: initialResponse }]);
    } catch (error) {
      setMessages([{ sender: 'system', text: "Failed to initialize chat." }]);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      initChat();
    }
  }, [isOpen, messages.length, initChat]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isLoading) return;

    const userMessage: ChatMessage = { sender: 'user', text: userInput };
    setMessages(prev => [...prev, userMessage]);
    setUserInput('');
    setIsLoading(true);

    if (userInput.toLowerCase().includes('cv') || userInput.toLowerCase().includes('resume')) {
        onShowCv();
    }

    const aiResponseText = await sendMessageToAI(userInput);
    const aiMessage: ChatMessage = { sender: 'ai', text: aiResponseText };
    setMessages(prev => [...prev, aiMessage]);
    setIsLoading(false);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-teal-500 text-white p-4 rounded-full shadow-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-transform transform hover:scale-110"
        aria-label="Toggle Chat"
      >
        {isOpen ? <CloseIcon className="w-6 h-6" /> : <ChatIcon className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-full max-w-sm h-[60vh] max-h-[600px] bg-gray-800 rounded-lg shadow-2xl flex flex-col border border-gray-700">
          <header className="bg-gray-900 p-4 rounded-t-lg flex justify-between items-center border-b border-gray-700">
            <h3 className="text-lg font-semibold text-white">Mpho Mahloana's AI Assistant</h3>
            <button onClick={toggleChat} className="text-gray-400 hover:text-white">
              <CloseIcon className="w-5 h-5" />
            </button>
          </header>

          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-lg ${
                      msg.sender === 'user' ? 'bg-teal-600 text-white' : 'bg-gray-700 text-gray-200'
                    }`}
                  >
                    <p className="text-sm" dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br />') }} />
                  </div>
                </div>
              ))}
              {isLoading && messages.length > 0 && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] p-3 rounded-lg bg-gray-700 text-gray-200">
                     <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
                        <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse [animation-delay:0.2s]"></span>
                        <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse [animation-delay:0.4s]"></span>
                     </div>
                  </div>
                </div>
              )}
               <div ref={messagesEndRef} />
            </div>
          </div>

          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-700 bg-gray-900 rounded-b-lg">
            <div className="flex items-center bg-gray-700 rounded-full">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Ask about Mpho..."
                className="w-full bg-transparent px-4 py-2 text-gray-200 focus:outline-none"
                disabled={isLoading}
              />
              <button type="submit" disabled={isLoading || !userInput.trim()} className="p-2 text-teal-400 hover:text-teal-300 disabled:text-gray-500 disabled:cursor-not-allowed m-1">
                <SendIcon className="w-6 h-6" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatWidget;