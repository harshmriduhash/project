import React from 'react';
import { Send, Paperclip } from 'lucide-react';

type Message = {
  id: string;
  content: string;
  sender: string;
  timestamp: string;
};

const demoMessages: Message[] = [
  { id: '1', content: "Hi, I'm interested in your project!", sender: 'freelancer', timestamp: '10:30 AM' },
  { id: '2', content: "Great! Can you tell me about your experience?", sender: 'client', timestamp: '10:32 AM' },
];

export function ChatWindow() {
  return (
    <div className="flex flex-col h-[600px] bg-white rounded-lg shadow-lg">
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold">Chat with John Doe</h3>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {demoMessages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'client' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                message.sender === 'client'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              <p>{message.content}</p>
              <span className="text-xs opacity-75 mt-1 block">
                {message.timestamp}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t">
        <div className="flex gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Paperclip className="h-5 w-5 text-gray-500" />
          </button>
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 border rounded-full px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
          <button className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700">
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}