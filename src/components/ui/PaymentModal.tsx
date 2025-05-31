import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { stripePromise, createCheckoutSession } from '../../lib/stripe';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: string;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, selectedPlan }) => {
  const [amount, setAmount] = useState('');
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateAmount = (amount: string): boolean => {
    const numAmount = parseFloat(amount);
    return !isNaN(numAmount) && numAmount > 0;
  };

  const handlePayment = async () => {
    if (!validateAmount(amount)) {
      setError('Please enter a valid amount greater than 0');
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to load');

      const session = await createCheckoutSession(parseFloat(amount), invoiceNumber);
      
      if (!session.id) {
        throw new Error('Failed to create checkout session');
      }

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        throw new Error(result.error.message);
      }
    } catch (error) {
      console.error('Payment error:', error);
      setError(error instanceof Error ? error.message : 'Payment failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
          <Dialog.Title className="text-2xl font-bold text-crimson-900 mb-4">
            {selectedPlan ? `Subscribe to ${selectedPlan}` : 'Make a Payment'}
          </Dialog.Title>
          
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}
          
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Invoice Number (Optional)
              </label>
              <input
                type="text"
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crimson-500"
                placeholder="Enter invoice number"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Amount
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2 text-gray-500">$</span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crimson-500"
                  placeholder="0.00"
                  min="0.01"
                  step="0.01"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex gap-4">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Cancel
            </button>
            <button
              onClick={handlePayment}
              disabled={isProcessing || !validateAmount(amount)}
              className="flex-1 px-4 py-2 bg-crimson-700 text-white rounded-md hover:bg-crimson-800 focus:outline-none focus:ring-2 focus:ring-crimson-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? 'Processing...' : 'Pay Now'}
            </button>
          </div>
          
          <Dialog.Close asChild>
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              aria-label="Close"
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