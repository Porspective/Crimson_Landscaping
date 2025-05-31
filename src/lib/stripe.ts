import { loadStripe } from '@stripe/stripe-js';

const publishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;

if (!publishableKey) {
  throw new Error('Stripe publishable key is missing. Please check your environment variables.');
}

export const stripePromise = loadStripe(publishableKey);

export const createCheckoutSession = async (amount: number, invoiceNumber?: string) => {
  try {
    const stripe = await stripePromise;
    if (!stripe) throw new Error('Stripe failed to load');

    // Convert amount to cents
    const amountInCents = Math.round(amount * 100);

    const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${publishableKey}`,
      },
      body: JSON.stringify({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: invoiceNumber ? `Invoice #${invoiceNumber}` : 'Crimson Landscaping Service',
              },
              unit_amount: amountInCents,
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${window.location.origin}/#/payment-success`,
        cancel_url: `${window.location.origin}/#/contact`,
      }),
    });

    const session = await response.json();

    if (!response.ok) {
      throw new Error(session.error?.message || 'Failed to create checkout session');
    }

    return {
      url: session.url,
    };
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return {
      error: {
        message: error instanceof Error ? error.message : 'Payment failed. Please try again.'
      }
    };
  }
};