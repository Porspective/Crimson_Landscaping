import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: string;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, selectedPlan }) => {
  const [amount, setAmount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateAmount = (amount: string): boolean => {
    const numAmount = parseFloat(amount);
    return !isNaN(numAmount) && numAmount > 0;
  };

  const handlePayPalCreateOrder = (data: any, actions: any) => {
    if (!validateAmount(amount)) {
      setError('Please enter a valid amount');
      return actions.reject();
    }

    return actions.order.create({
      purchase_units: [{
        description: selectedPlan || 'Crimson Landscaping Service',
        amount: {
          value: amount,
          currency_code: 'USD'
        }
      }]
    });
  };

  const handlePayPalApprove = async (data: any, actions: any) => {
    try {
      setIsProcessing(true);
      const details = await actions.order.capture();
      window.location.href = '/payment-success';
    } catch (error) {
      console.error('Payment failed:', error);
      setError('Payment failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6 w-full max-w-md animate-fade-in">
          <Dialog.Title className="text-2xl font-bold text-crimson-900 mb-4">
            {selectedPlan ? `Pay for ${selectedPlan}` : 'Make a Payment'}
          </Dialog.Title>
          
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}
          
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Amount
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2 text-gray-500">$</span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                    setError(null);
                  }}
                  className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crimson-500"
                  placeholder="0.00"
                  min="0.01"
                  step="0.01"
                  disabled={isProcessing}
                />
              </div>
            </div>

            {validateAmount(amount) && (
              <PayPalScriptProvider options={{
                "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID || "test",
                currency: "USD",
                intent: "capture"
              }}>
                <PayPalButtons
                  style={{ layout: "vertical" }}
                  createOrder={handlePayPalCreateOrder}
                  onApprove={handlePayPalApprove}
                  onError={(err) => {
                    console.error('PayPal error:', err);
                    setError('Payment failed. Please try again.');
                  }}
                  disabled={isProcessing}
                />
              </PayPalScriptProvider>
            )}
          </div>
          
          <Dialog.Close asChild>
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              aria-label="Close"
              disabled={isProcessing}
            >
              <X className="h-5 w-5" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default PaymentModal;