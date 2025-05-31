import { loadStripe } from '@stripe/stripe-js';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
export const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export const createCheckoutSession = async (amount: number, invoiceNumber?: string) => {
  try {
    const stripe = await stripePromise;
    if (!stripe) throw new Error('Stripe failed to load');

    const response = await fetch(`${SUPABASE_URL}/functions/v1/stripe-checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify({
        amount,
        invoiceNumber,
        success_url: `${window.location.origin}/#/payment-success`,
        cancel_url: `${window.location.origin}/#/contact`,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to create checkout session');
    }

    const session = await response.json();
    return session;
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return {
      error: {
        message: error instanceof Error ? error.message : 'Payment failed. Please try again.'
      }
    };
  }
};