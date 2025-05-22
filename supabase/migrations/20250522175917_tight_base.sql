/*
  # Create contacts table

  1. New Tables
    - `contacts`
      - `id` (uuid, primary key)
      - `created_at` (timestamp)
      - `name` (text)
      - `email` (text)
      - `phone` (text, nullable)
      - `service` (text, nullable)
      - `message` (text, nullable)
      - `status` (text)

  2. Security
    - Enable RLS on `contacts` table
    - Add policy for service role to manage contacts
*/

CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  service text,
  message text,
  status text NOT NULL DEFAULT 'new'
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can manage contacts"
  ON contacts
  TO service_role
  USING (true)
  WITH CHECK (true);