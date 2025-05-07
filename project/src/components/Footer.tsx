import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Instagram, Facebook, Twitter, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-amber-800 text-amber-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <ChefHat size={24} />
              <span className="font-bold text-xl">Pavi's Kitchen</span>
            </Link>
            <p className="text-amber-100">
              Sharing delicious recipes and culinary inspiration from around the world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-200 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-amber-200 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-amber-200 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="mailto:info@paviskitchen.com" className="text-amber-200 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-amber-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/recipes" className="text-amber-200 hover:text-white transition-colors">
                  Recipes
                </Link>
              </li>
              <li>
                <Link to="/submit" className="text-amber-200 hover:text-white transition-colors">
                  Submit Recipe
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-amber-200 hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-amber-100 mb-4">
              Get the latest recipes and cooking tips delivered to your inbox.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l focus:outline-none text-gray-800 w-full"
              />
              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-500 text-white px-4 py-2 rounded-r transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-amber-200">
          <p>&copy; {currentYear} Pavi's Kitchen. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center">
            Made with <Heart size={16} className="mx-1 text-red-400" /> by Pavi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;