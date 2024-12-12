import React from 'react';
import { X, Bell, CheckCircle, AlertCircle, Package } from 'lucide-react';

interface NotificationsWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NotificationsWidget({ isOpen, onClose }: NotificationsWidgetProps) {
  const notifications = [
    {
      id: 1,
      title: 'Order Completed',
      message: 'Your order #12345 has been successfully completed.',
      time: '5m ago',
      icon: CheckCircle,
      iconColor: 'text-green-500',
      iconBg: 'bg-green-100'
    },
    {
      id: 2,
      title: 'New Message',
      message: 'You have a new message from the support team.',
      time: '2h ago',
      icon: AlertCircle,
      iconColor: 'text-blue-500',
      iconBg: 'bg-blue-100'
    },
    {
      id: 3,
      title: 'Package Shipped',
      message: 'Your package has been shipped and is on its way.',
      time: '1d ago',
      icon: Package,
      iconColor: 'text-purple-500',
      iconBg: 'bg-purple-100'
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 w-[380px] bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50">
      <div className="h-full flex flex-col">
        <div className="p-4 border-b">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Bell className="h-5 w-5 text-gray-700" />
              <span className="font-semibold text-gray-900">Notifications</span>
              <span className="bg-red-100 text-red-600 text-sm px-2 py-0.5 rounded-full font-medium">
                {notifications.length}
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
          {notifications.map((notification) => {
            const Icon = notification.icon;
            return (
              <div
                key={notification.id}
                className="p-4 hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <div className="flex space-x-4">
                  <div className={`p-2 rounded-full ${notification.iconBg}`}>
                    <Icon className={`h-5 w-5 ${notification.iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-sm font-medium text-gray-900">
                        {notification.title}
                      </h4>
                      <span className="text-xs text-gray-500">{notification.time}</span>
                    </div>
                    <p className="text-sm text-gray-600">{notification.message}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-4 border-t">
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
            View All Notifications
          </button>
        </div>
      </div>
    </div>
  );
}