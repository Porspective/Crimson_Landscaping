import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: string;
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
            <p className="text-gray-700">
              Click the button below to make a payment through PayPal:
            </p>
            
            <a 
              href="https://paypal.me/CrimsonLandscapingCo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-crimson-700 text-white py-3 px-4 rounded-md font-medium hover:bg-crimson-800 transition-colors flex items-center justify-center"
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