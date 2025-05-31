import 'jsr:@supabase/functions-js/edge-runtime.d.ts';
import Stripe from 'npm:stripe@17.7.0';

// Helper function to create responses with CORS headers
function corsResponse(body: string | object | null, status = 200) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': '*',
  };

  // For 204 No Content, don't include Content-Type or body
  if (status === 204) {
    return new Response(null, { status, headers });
  }

  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
  });
}

Deno.serve(async (req) => {
  try {
    // Handle CORS preflight requests
    if (req.method === 'OPTIONS') {
      return corsResponse(null, 204);
    }

    if (req.method !== 'POST') {
      return corsResponse({ error: 'Method not allowed' }, 405);
    }

    // Verify required environment variables first
    const stripeSecret = Deno.env.get('STRIPE_SECRET_KEY');
    if (!stripeSecret) {
      return corsResponse({ 
        error: 'Payment processing is temporarily unavailable. Please contact support.' 
      }, 503);
    }

    const stripe = new Stripe(stripeSecret, {
      appInfo: {
        name: 'Bolt Integration',
        version: '1.0.0',
      },
    });

    // Parse request body
    const requestData = await req.json().catch(() => null);
    if (!requestData) {
      return corsResponse({ error: 'Invalid request body' }, 400);
    }

    const { amount, invoiceNumber, planTitle, success_url, cancel_url } = requestData;

    // Validate required parameters
    if (!amount || typeof amount !== 'number' || amount <= 0) {
      return corsResponse({ error: 'Invalid amount' }, 400);
    }

    if (!success_url || !cancel_url) {
      return corsResponse({ error: 'Missing success_url or cancel_url' }, 400);
    }

    // Create Checkout Session with dynamic price
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: planTitle || 'One-time Payment',
            description: invoiceNumber ? `Invoice: ${invoiceNumber}` : undefined,
          },
          unit_amount: amount,
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url,
      cancel_url,
    });

    return corsResponse({
      url: session.url,
      id: session.id,
    });

  } catch (error) {
    console.error('Checkout error:', error);
    return corsResponse({
      error: error instanceof Error 
        ? error.message 
        : 'An error occurred while processing your payment. Please try again later.'
    }, 500);
  }
});