import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Bot, User } from 'lucide-react';
import { Message } from '../Data/chatbot';
import { chatBotConfig, initialMessages, getBotResponse } from '../Data/chatbot';
import KGLOGO from '../../assets/Rectangle.png';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    const newUserMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputMessage),
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, Math.random() * 1000 + 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-5 lg:right-6 right-[30px] z-99">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-teal-50 border border-teal-600 transition-all duration-300 rounded-full p-2.5 md:p-3 shadow-lg hover:scale-105"
          aria-label={isOpen ? 'Close chat' : 'Open chat'}
        >
          {isOpen ? (
            <X className="h-5 w-5 md:h-6 md:w-6 text-teal-600" />
          ) : (
            <img src={KGLOGO} alt="Chat icon" className="w-8 h-8 md:w-9 md:h-9 object-cover rounded-full" />
          )}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-20 right-4 md:right-6 w-[90%] max-w-md h-[60vh] md:h-[32rem] bg-white rounded-2xl shadow-2xl z-40 flex flex-col overflow-hidden border border-gray-200 animate-slideUp"
        >
          {/* Header */}
          <div className="bg-gradient-primary p-3 md:p-4 flex items-center space-x-2 md:space-x-3">
            <div className="w-9 h-9 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center">
              <img src={KGLOGO} className="h-9 w-9 md:h-10 md:w-10" alt="Bot logo" />
            </div>
            <div className="flex-1">
              <h3 className="text-base md:text-lg text-white font-semibold">{chatBotConfig.title}</h3>
              <p className="text-xs md:text-sm text-teal-100">{chatBotConfig.subtitle}</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-teal-200"
              aria-label="Close chat"
            >
              <X className="h-4 w-4 md:h-5 md:w-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-2 md:p-4 space-y-3 md:space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 md:px-4 md:py-3 ${
                    message.isUser
                      ? 'bg-gradient-secondary text-white rounded-br-md'
                      : 'bg-white text-gray-800 rounded-bl-md border border-gray-200'
                  }`}
                >
                  <div className="flex items-start space-x-1.5 md:space-x-2">
                    {!message.isUser && (
                      <img src={KGLOGO} className="h-5 w-5 md:h-6 md:w-6 rounded-full mt-0.5" alt="Bot" />
                    )}
                    <div className="flex-1">
                      <p className="text-xs md:text-sm leading-relaxed">{message.text}</p>
                      <p className={`text-[9px] md:text-[10px] mt-0.5 md:mt-1 ${message.isUser ? 'text-orange-100' : 'text-gray-500'}`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                    {message.isUser && (
                      <div className="w-4 h-4 md:w-5 md:h-5 bg-gradient-primary rounded-full flex items-center justify-center mt-0.5">
                        <User className="h-2.5 w-2.5 md:h-3 md:w-3 text-white" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 rounded-2xl rounded-bl-md px-3 py-2 border border-gray-200">
                  <div className="flex items-center space-x-1.5 md:space-x-2">
                    <div className="w-4 h-4 md:w-5 md:h-5 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Bot className="h-2.5 w-2.5 md:h-3 md:w-3 text-white" />
                    </div>
                    <div className="flex space-x-0.5 md:space-x-1">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-2 md:p-4 border-t border-gray-200 bg-white">
            <div className="flex items-center space-x-1.5 md:space-x-2">
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={chatBotConfig.placeholderText}
                className="w-full px-2 py-2 md:px-3 md:py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none text-xs md:text-sm"
                rows={1}
                style={{ minHeight: '36px', maxHeight: '80px' }}
              />
              <button
                onClick={handleSendMessage}
                disabled={inputMessage.trim() === ''}
                className="bg-gradient-primary hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl p-2 md:p-3 shadow-md hover:shadow-lg transform hover:scale-105"
                aria-label="Send message"
              >
                <Send className="h-4 w-4 md:h-5 md:w-5 text-white" />
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-100 px-2 md:px-3 py-1.5 md:py-2 text-center">
            <p className="text-[9px] md:text-xs text-gray-500">
              {chatBotConfig.poweredByText.split(' ').slice(0, -2).join(' ')}
              <span className="ml-1 font-semibold bg-clip-text text-orange-600">
                {chatBotConfig.poweredByText.split(' ').slice(-2).join(' ')}
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
