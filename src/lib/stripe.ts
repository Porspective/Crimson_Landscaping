import { loadStripe } from '@stripe/stripe-js';

export const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export const createCheckoutSession = async (amount: number, invoiceNumber?: string) => {
  const stripe = await stripePromise;
  if (!stripe) throw new Error('Stripe failed to load');

  const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${import.meta.env.VITE_STRIPE_SECRET_KEY}`,
    },
    body: JSON.stringify({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Crimson Landscaping Service',
            description: invoiceNumber ? `Invoice #${invoiceNumber}` : undefined,
          },
          unit_amount: Math.round(amount * 100),
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${window.location.origin}/payment-success`,
      cancel_url: `${window.location.origin}/contact`,
    }),
  });

  const session = await response.json();
  return session;
};