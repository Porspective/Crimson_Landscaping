import { Handler } from '@netlify/functions';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16',
});

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { amount, invoiceNumber, planTitle } = JSON.parse(event.body || '{}');

    if (!amount || typeof amount !== 'number' || amount <= 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid amount' }),
      };
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: planTitle || 'Crimson Landscaping Service',
              description: invoiceNumber ? `Invoice #${invoiceNumber}` : undefined,
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${event.headers.host}/payment-success`,
      cancel_url: `${event.headers.host}/contact`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ sessionId: session.id }),
    };
  } catch (error) {
    console.error('Checkout session error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Internal server error' 
      }),
    };
  }
};