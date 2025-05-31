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

  const handlePaymentClick = (e: React.MouseEvent<HTMLAnchorElement>, type: 'paypal' | 'venmo') => {
    if (!validateAmount()) {
      e.preventDefault();
      return;
    }

    const numAmount = parseFloat(amount);
    if (type === 'paypal') {
      e.currentTarget.href = `https://paypal.me/CrimsonLandscapingCo/${numAmount}`;
    } else {
      e.currentTarget.href = `https://venmo.com/Crimson-Landscaping?txn=pay&amount=${numAmount}`;
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
              href="https://paypal.me/CrimsonLandscapingCo"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => handlePaymentClick(e, 'paypal')}
              className="flex items-center justify-center w-full p-4 bg-[#0070BA] text-white rounded-md hover:bg-[#005ea6] transition-colors"
            >
              <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-mark-color.svg" alt="PayPal" className="h-6 mr-2" />
              Pay with PayPal
            </a>

            <a 
              href="https://venmo.com/Crimson-Landscaping"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => handlePaymentClick(e, 'venmo')}
              className="flex items-center justify-center w-full p-4 bg-[#3D95CE] text-white rounded-md hover:bg-[#3684b5] transition-colors"
            >
              <CreditCard className="h-5 w-5 mr-2" />
              Pay with Venmo
            </a>
          </div>
          
          <p className="mt-4 text-sm text-gray-600 text-center">
            Enter the amount and click one of the payment options above
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