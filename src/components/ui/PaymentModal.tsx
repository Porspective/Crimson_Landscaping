import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, CreditCard } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6 w-full max-w-md animate-fade-in">
          <Dialog.Title className="text-2xl font-bold text-crimson-900 mb-4">
            Make a Payment
          </Dialog.Title>
          
          <div className="space-y-4">
            <a 
              href="https://paypal.me/CrimsonLandscapingCo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full p-4 bg-[#0070BA] text-white rounded-md hover:bg-[#005ea6] transition-colors"
            >
              <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-mark-color.svg" alt="PayPal" className="h-6 mr-2" />
              Pay with PayPal
            </a>

            <a 
              href="https://venmo.com/Crimson-Landscaping"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full p-4 bg-[#3D95CE] text-white rounded-md hover:bg-[#3684b5] transition-colors"
            >
              <CreditCard className="h-5 w-5 mr-2" />
              Pay with Venmo
            </a>
          </div>
          
          <p className="mt-4 text-sm text-gray-600 text-center">
            Click one of the options above to complete your payment
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