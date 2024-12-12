import React from 'react';
import { X, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CartMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartMenu({ isOpen, onClose }: CartMenuProps) {
  const navigate = useNavigate();

  const handleCheckout = () => {
    onClose();
    navigate('/checkout');
  };

  return (
    <div 
      className={`fixed inset-y-0 right-0 w-[380px] bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="h-full flex flex-col">
        <div className="p-4 border-b">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <ShoppingCart className="h-5 w-5 text-gray-700" />
              <span className="font-semibold text-gray-900">Your Cart</span>
              <span className="bg-gray-100 text-gray-700 text-sm px-2 py-0.5 rounded-full">0</span>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
            <ShoppingCart className="h-16 w-16 mb-4 text-gray-300" />
            <p className="text-lg font-medium mb-2">Your cart is empty</p>
            <p className="text-sm">Browse our packages and add items to your cart</p>
          </div>
        </div>

        <div className="border-t p-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600">Subtotal</span>
            <span className="text-xl font-bold text-gray-900">$0.00</span>
          </div>
          <button 
            onClick={handleCheckout}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}