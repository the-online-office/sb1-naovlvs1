import React from 'react';
import { X, User, Settings, CreditCard, HelpCircle, LogOut, Bell, MessageSquare, LayoutDashboard } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

interface UserProfileWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

export function UserProfileWidget({ isOpen, onClose }: UserProfileWidgetProps) {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    {
      icon: LayoutDashboard,
      label: 'Dashboard',
      onClick: () => {
        navigate('/dashboard');
        onClose();
      }
    },
    {
      icon: User,
      label: 'Profile Settings',
      onClick: () => {
        navigate('/profile');
        onClose();
      }
    },
    {
      icon: MessageSquare,
      label: 'Messages',
      badge: '3',
      onClick: () => {
        navigate('/messages');
        onClose();
      }
    },
    {
      icon: Bell,
      label: 'Notifications',
      badge: '5',
      onClick: () => {
        navigate('/notifications');
        onClose();
      }
    },
    {
      icon: CreditCard,
      label: 'Billing',
      onClick: () => {
        navigate('/billing');
        onClose();
      }
    },
    {
      icon: HelpCircle,
      label: 'Help & Support',
      onClick: () => {
        navigate('/support');
        onClose();
      }
    }
  ];

  const handleSignOut = () => {
    logout();
    onClose();
    navigate('/');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 w-[380px] bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50">
      <div className="h-full flex flex-col">
        <div className="p-4 border-b">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <User className="h-5 w-5 text-gray-700" />
              <span className="font-semibold text-gray-900">Profile</span>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* Profile Header */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                className="h-16 w-16 rounded-full"
              />
              <button className="absolute bottom-0 right-0 p-1 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors">
                <Settings className="h-4 w-4" />
              </button>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {user?.firstName} {user?.lastName}
              </h3>
              <p className="text-sm text-gray-500">{user?.email}</p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="text-xl font-semibold text-gray-900">12</div>
              <div className="text-sm text-gray-500">Orders</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="text-xl font-semibold text-gray-900">3</div>
              <div className="text-sm text-gray-500">Active</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <div className="text-xl font-semibold text-gray-900">$2.4k</div>
              <div className="text-sm text-gray-500">Spent</div>
            </div>
          </div>

          {/* Menu Items */}
          <nav className="space-y-1">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={item.onClick}
                className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <item.icon className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-700">{item.label}</span>
                </div>
                {item.badge && (
                  <span className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>

          {/* Sign Out Button */}
          <div className="mt-6 pt-6 border-t">
            <button
              onClick={handleSignOut}
              className="flex items-center justify-center space-x-2 w-full p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-gray-700"
            >
              <LogOut className="h-5 w-5" />
              <span>Sign out</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}