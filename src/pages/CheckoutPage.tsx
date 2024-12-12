import React from 'react';
import { PaymentForm } from '../components/checkout/PaymentForm';
import { OrderSummary } from '../components/checkout/OrderSummary';

export function CheckoutPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <PaymentForm />
        <div className="lg:pl-12">
          <OrderSummary />
        </div>
      </div>
    </main>
  );
}