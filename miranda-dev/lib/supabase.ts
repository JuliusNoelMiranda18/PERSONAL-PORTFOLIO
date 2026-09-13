import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://xyzcompany.supabase.co"; // Fallback URL placeholder if env var not provided

const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.dummykey"; // Fallback anon key placeholder

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
