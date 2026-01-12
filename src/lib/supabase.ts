import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image_url: string;
  created_at: string;
  updated_at: string;
}

export interface AdminCredentials {
  id: string;
  username: string;
  password: string;
  created_at: string;
}
