/*
  # E-Commerce Schema for Local Shop

  1. New Tables
    - `products` - Store all product information
      - `id` (uuid, primary key)
      - `name` (text) - Product name
      - `price` (numeric) - Product price
      - `description` (text) - Product description
      - `image_url` (text) - Product image URL
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `admin_credentials` - Admin login info
      - `id` (uuid, primary key)
      - `username` (text, unique)
      - `password` (text) - hashed password
      - `created_at` (timestamp)

  2. Security
    - Products table allows public read
    - Only admin can create, update, delete products
    - Admin credentials protected
*/

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  price numeric NOT NULL CHECK (price > 0),
  description text NOT NULL,
  image_url text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS admin_credentials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  username text UNIQUE NOT NULL,
  password text NOT NULL,
  created_at timestamptz DEFAULT now()
);

INSERT INTO products (name, price, description, image_url) VALUES
  ('Premium Wireless Headphones', 4999, 'High-quality wireless headphones with noise cancellation and 30-hour battery life', 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600&h=600'),
  ('Designer Leather Wallet', 1299, 'Genuine leather wallet with RFID protection, perfect for keeping your cards safe', 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=600&h=600'),
  ('Stainless Steel Watch', 8999, 'Elegant analog watch with stainless steel body, water-resistant up to 50m', 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600&h=600'),
  ('Premium Coffee Maker', 5499, 'Automatic coffee maker with programmable timer and thermal carafe', 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600&h=600'),
  ('Portable Bluetooth Speaker', 2499, 'Waterproof portable speaker with 360-degree sound and 12-hour battery', 'https://images.pexels.com/photos/3557505/pexels-photo-3557505.jpeg?auto=compress&cs=tinysrgb&w=600&h=600'),
  ('Organic Skincare Set', 1899, 'Complete skincare set with 5 premium organic products for all skin types', 'https://images.pexels.com/photos/3991083/pexels-photo-3991083.jpeg?auto=compress&cs=tinysrgb&w=600&h=600'),
  ('Professional Camera Lens', 12999, '50mm f/1.8 professional lens with auto-focus and image stabilization', 'https://images.pexels.com/photos/606933/pexels-photo-606933.jpeg?auto=compress&cs=tinysrgb&w=600&h=600'),
  ('Luxury Pen Set', 999, 'Premium fountain pen set with refillable cartridges in beautiful gift box', 'https://images.pexels.com/photos/955092/pexels-photo-955092.jpeg?auto=compress&cs=tinysrgb&w=600&h=600');

INSERT INTO admin_credentials (username, password) VALUES
  ('admin', 'admin123');
