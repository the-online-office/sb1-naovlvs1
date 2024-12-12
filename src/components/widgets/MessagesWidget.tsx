import React from 'react';
import { X, MessageSquare } from 'lucide-react';

interface MessagesWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MessagesWidget({ isOpen, onClose }: MessagesWidgetProps) {
  const messages = [
    {
      id: 1,
      sender: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      message: 'Hey, I wanted to discuss the project details...',
      time: '5m ago',
      unread: true
    },
    {
      id: 2,
      sender: 'Jane Smith',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      message: 'The latest designs look great! Just a few tweaks...',
      time: '2h ago',
      unread: true
    },
    {
      id: 3,
      sender: 'Mike Johnson',
      avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      message: 'Thanks for the quick response!',
      time: '1d ago',
      unread: true
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 w-[380px] bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50">
      <div className="h-full flex flex-col">
        <div className="p-4 border-b">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <MessageSquare className="h-5 w-5 text-gray-700" />
              <span className="font-semibold text-gray-900">Messages</span>
              <span className="bg-blue-100 text-blue-600 text-sm px-2 py-0.5 rounded-full font-medium">
                {messages.length}
              </span>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${
                message.unread ? 'bg-blue-50/50' : ''
              }`}
            >
              <div className="flex space-x-4">
                <img
                  src={message.avatar}
                  alt={message.sender}
                  className="h-12 w-12 rounded-full"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-sm font-medium text-gray-900 truncate">
                      {message.sender}
                    </h4>
                    <span className="text-xs text-gray-500">{message.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">{message.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t">
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
            View All Messages
          </button>
        </div>
      </div>
    </div>
  );
}