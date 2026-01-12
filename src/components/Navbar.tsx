import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-gray-900">
            Muhammad Raffay
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-gray-900 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-gray-900 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-gray-900 transition-colors">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-gray-900 transition-colors">
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Hire Me
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
            <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-700 hover:text-gray-900 py-2">
              Home
            </button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left text-gray-700 hover:text-gray-900 py-2">
              Projects
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left text-gray-700 hover:text-gray-900 py-2">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('faq')} className="block w-full text-left text-gray-700 hover:text-gray-900 py-2">
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors text-center"
            >
              Hire Me
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
