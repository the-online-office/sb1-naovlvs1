import React, { useState } from 'react';
import { Package, Tag, X } from 'lucide-react';

export function OrderSummary() {
  const [couponCode, setCouponCode] = useState('');
  const [isApplied, setIsApplied] = useState(false);
  const [error, setError] = useState('');

  const handleApplyCoupon = () => {
    if (couponCode.toUpperCase() === '20OFF') {
      setIsApplied(true);
      setError('');
    } else {
      setError('Invalid coupon code');
    }
  };

  const handleRemoveCoupon = () => {
    setIsApplied(false);
    setCouponCode('');
    setError('');
  };

  const subtotal = 499.00;
  const processingFee = 9.99;
  const discount = isApplied ? subtotal * 0.2 : 0;
  const total = subtotal + processingFee - discount;

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
      
      <div className="space-y-4 mb-6">
        <div className="flex items-start space-x-4">
          <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Package className="h-6 w-6 text-blue-600" />
          </div>
          <div className="flex-grow">
            <h3 className="text-sm font-medium text-gray-900">Professional Website Development</h3>
            <p className="text-sm text-gray-500">Basic Package</p>
          </div>
          <span className="text-sm font-medium text-gray-900">${subtotal.toFixed(2)}</span>
        </div>
      </div>

      {/* Coupon Code Section */}
      <div className="border-t border-gray-200 pt-4 mb-4">
        {!isApplied ? (
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Tag className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-700">Have a coupon code?</span>
            </div>
            <div className="flex space-x-2">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Enter code"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                onClick={handleApplyCoupon}
                className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
              >
                Apply
              </button>
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
          </div>
        ) : (
          <div className="flex items-center justify-between bg-green-50 p-3 rounded-lg">
            <div className="flex items-center space-x-2">
              <Tag className="h-4 w-4 text-green-600" />
              <span className="text-sm text-green-600 font-medium">
                Coupon "20OFF" applied
              </span>
            </div>
            <button
              onClick={handleRemoveCoupon}
              className="p-1 hover:bg-green-100 rounded-full transition-colors"
            >
              <X className="h-4 w-4 text-green-600" />
            </button>
          </div>
        )}
      </div>

      <div className="border-t border-gray-200 pt-4 space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Subtotal</span>
          <span className="text-gray-900 font-medium">${subtotal.toFixed(2)}</span>
        </div>
        {isApplied && (
          <div className="flex justify-between text-sm">
            <span className="text-green-600">Discount (20%)</span>
            <span className="text-green-600">-${discount.toFixed(2)}</span>
          </div>
        )}
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Processing Fee</span>
          <span className="text-gray-900 font-medium">${processingFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-base font-medium">
          <span className="text-gray-900">Total</span>
          <span className="text-blue-600">${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}