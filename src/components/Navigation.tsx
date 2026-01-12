import { ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button onClick={() => navigate('/')} className="flex items-center gap-2">
            <ShoppingBag className="w-6 h-6 text-gray-900" />
            <span className="text-xl font-bold text-gray-900">ShopHub</span>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => navigate('/')} className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              Home
            </button>
            <button onClick={() => navigate('/products')} className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              Products
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              Reviews
            </button>
            <button
              onClick={() => navigate('/admin/login')}
              className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
            >
              Admin
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <button onClick={() => navigate('/')} className="block w-full text-left text-gray-700 hover:text-gray-900 py-2 font-medium">
              Home
            </button>
            <button onClick={() => navigate('/products')} className="block w-full text-left text-gray-700 hover:text-gray-900 py-2 font-medium">
              Products
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left text-gray-700 hover:text-gray-900 py-2 font-medium">
              Reviews
            </button>
            <button
              onClick={() => navigate('/admin/login')}
              className="block w-full bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-center font-medium"
            >
              Admin
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
