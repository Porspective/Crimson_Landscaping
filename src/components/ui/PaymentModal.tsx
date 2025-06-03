import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, CreditCard } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const validateAmount = () => {
    const numAmount = parseFloat(amount);
    if (!amount || isNaN(numAmount) || numAmount <= 0) {
      setError('Please enter a valid amount');
      return false;
    }
    setError('');
    return true;
  };

  const handlePaymentClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!validateAmount()) {
      e.preventDefault();
      return;
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6 w-full max-w-md animate-fade-in">
          <Dialog.Title className="text-2xl font-bold text-crimson-900 mb-4">
            Make a Payment
          </Dialog.Title>
          
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Payment Amount
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2 text-gray-500">$</span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => {
                    setAmount(e.target.value);
                    setError('');
                  }}
                  className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crimson-500"
                  placeholder="0.00"
                  min="0.01"
                  step="0.01"
                />
              </div>
              {error && <p className="mt-1 text-red-500 text-sm">{error}</p>}
            </div>

            <a 
              href="https://buy.stripe.com/test_00g5kz0Xs5mS8WQ7ss"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handlePaymentClick}
              className="btn-primary w-full flex items-center justify-center py-3"
            >
              <CreditCard className="h-5 w-5 mr-2" />
              Pay with Stripe
            </a>
          </div>
          
          <p className="mt-4 text-sm text-gray-600 text-center">
            Secure payment processing by Stripe
          </p>
          
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