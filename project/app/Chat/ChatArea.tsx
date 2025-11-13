// app/chat/ChatArea.tsx
'use client';

import { useState } from 'react';

export default function ChatArea() {
  // For each message
  const [message, setMessage] = useState("");
  // For message history
  const [messages, setMessages] = useState<string[]>([]); 

  const handleSend = () => {
    // .trim = take out spaces from beginning and end of the text. So "   hello " => "hello"
    // This condition checks if message is empty and exits if it is
    if (message.trim() === "") return;
    
    // Add user message
    setMessages(prev => [
      ...prev,
      `You: ${message}`,

      // This would be changed for AI response
      `AI: I received "${message}" — great question!`
    ]); 
    setMessage(""); // clear input
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // prevent newline if in textarea
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Messages or welcome — takes all space */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.length === 0 ? (
          // Welcome screen: center everything
          <div className="flex flex-col h-full items-center justify-center text-gray-600">
            <h1 className="text-4xl font-bold mb-4">Hi 👋</h1>
            <p className="text-lg mb-8">Start a conversation below!</p>
            
            {/* Centered input for first message */}
            <div className="w-full max-w-md">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your first message..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleSend}
                  disabled={message.trim() === ""}
                  className={`px-6 py-3 rounded-xl font-medium ${
                    message.trim() === ""
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }`}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        ) : (
          // Chat history: top-aligned
          <div className="space-y-4">
            {messages.map((msg, i) => (
              <div 
                key={i} 
                className={`p-3 rounded-2xl max-w-xl ${
                  msg.startsWith("You:") 
                    ? "bg-blue-500 text-white ml-auto" 
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {msg}
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Input area: only shown after first message */}
      {messages.length > 0 && (
        <div className="border-t border-gray-200 bg-gray-50 p-3">
          <div className="flex gap-2 max-w-4xl mx-auto">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSend}
              disabled={message.trim() === ""}
              className={`px-6 py-3 rounded-xl font-medium ${
                message.trim() === ""
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}