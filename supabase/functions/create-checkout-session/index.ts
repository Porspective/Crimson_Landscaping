import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import Stripe from 'npm:stripe@13.11.0';

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
  apiVersion: '2023-10-16',
});

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Content-Type': 'application/json',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const body = await req.json().catch(() => null);
    if (!body) {
      throw new Error('Invalid request body');
    }

    const { amount, invoiceNumber, planTitle } = body;

    // Enhanced validation
    if (!amount || typeof amount !== 'number' || amount <= 0) {
      throw new Error('Amount must be a positive number');
    }

    if (!Number.isInteger(amount)) {
      throw new Error('Amount must be provided in cents (integer value)');
    }

    // Create the checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: planTitle || 'Crimson Clean Co Service',
              description: invoiceNumber ? `Invoice #${invoiceNumber}` : undefined,
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/payment-success`,
      cancel_url: `${req.headers.get('origin')}/contact`,
    });

    return new Response(
      JSON.stringify({ id: session.id }),
      { headers: corsHeaders }
    );
  } catch (error) {
    console.error('Checkout session error:', error);
    
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Failed to create checkout session' 
      }),
      { 
        status: 400,
        headers: corsHeaders,
      }
    );
  }
});