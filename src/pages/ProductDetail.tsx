import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase, Product } from '../lib/supabase';
import { MessageCircle, Minus, Plus, ArrowLeft } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      if (!id) return;
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .maybeSingle();

      if (error) throw error;
      if (!data) {
        navigate('/products');
        return;
      }
      setProduct(data);
    } catch (err) {
      console.error('Error fetching product:', err);
      navigate('/products');
    } finally {
      setLoading(false);
    }
  };

  const handleOrderOnWhatsApp = () => {
    if (!product) return;

    const message = `Hello, I want to order this product:\n\nProduct Name: ${product.name}\nPrice: Rs. ${product.price}\nQuantity: ${quantity}\nTotal: Rs. ${(product.price * quantity).toLocaleString()}\n\nMy Name: \nMy Address: `;

    const whatsappUrl = `https://wa.me/923145001142?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-20">
        <p className="text-gray-600">Loading product...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-20">
        <p className="text-gray-600">Product not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate('/products')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Products
        </button>

        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div className="flex items-center justify-center">
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-auto object-cover rounded-lg max-w-md"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.src = 'https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=800';
                }}
              />
            </div>

            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>
                <p className="text-2xl font-bold text-gray-900 mb-4">
                  Rs. {product.price.toLocaleString()}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Description
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {product.description}
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Quantity
                  </h3>
                  <div className="flex items-center border border-gray-300 rounded-lg w-fit">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-gray-100 transition-colors"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <div className="px-8 py-3 text-lg font-semibold">
                      {quantity}
                    </div>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-gray-100 transition-colors"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Unit Price:</span>
                    <span className="font-semibold">Rs. {product.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center border-t border-gray-200 pt-3">
                    <span className="text-lg font-semibold">Total:</span>
                    <span className="text-2xl font-bold text-gray-900">
                      Rs. {(product.price * quantity).toLocaleString()}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleOrderOnWhatsApp}
                  className="w-full bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg flex items-center justify-center gap-2 hover:scale-105"
                >
                  <MessageCircle className="w-6 h-6" />
                  Order on WhatsApp
                </button>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>How it works:</strong> Click "Order on WhatsApp" and we'll guide you through the purchase process. We offer cash on delivery for your convenience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
