import { createClient } from 'npm:@supabase/supabase-js@2.39.7';

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
);

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Content-Type': 'application/json',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json().catch(() => null);
    if (!body) {
      throw new Error('Invalid request body');
    }

    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email) {
      throw new Error('Name and email are required');
    }

    // Insert into contacts table
    const { error: insertError } = await supabase
      .from('contacts')
      .insert([
        {
          name,
          email,
          phone: phone || null,
          service: service || null,
          message: message || null,
          status: 'new'
        }
      ]);

    if (insertError) {
      throw new Error('Failed to submit contact form');
    }

    return new Response(
      JSON.stringify({ success: true }),
      { headers: corsHeaders }
    );
  } catch (error) {
    console.error('Contact form submission error:', error);
    
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Failed to submit contact form' 
      }),
      { 
        status: 400,
        headers: corsHeaders,
      }
    );
  }
});