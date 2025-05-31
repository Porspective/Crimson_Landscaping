import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: string;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState('');

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
            
            <a 
              href={`https://paypal.me/CrimsonLandscapingCo/${amount}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full bg-crimson-700 text-white py-3 px-4 rounded-md font-medium hover:bg-crimson-800 transition-colors flex items-center justify-center ${!amount && 'opacity-50 cursor-not-allowed'}`}
              onClick={(e) => !amount && e.preventDefault()}
            >
              Pay with PayPal
            </a>
            
            <p className="text-sm text-gray-500 text-center mt-4">
              You will be redirected to PayPal to complete your payment.
            </p>
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