import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, CookingPot, Heart, Share2 } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Pavi's Kitchen</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover the story behind our passion for cooking and sharing recipes.
          </p>
        </div>
        
        {/* About Section */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Chef cooking" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Pavi's Kitchen began as a personal blog where I shared recipes from my family kitchen. 
                What started as a hobby quickly grew into a passion for sharing culinary traditions and 
                inspiring home cooks around the world.
              </p>
              <p className="text-gray-700 mb-4">
                With a background in traditional cooking techniques and a love for experimenting with flavors, 
                I'm dedicated to creating recipes that are both accessible and delicious.
              </p>
              <p className="text-gray-700">
                Today, Pavi's Kitchen has grown into a community where food enthusiasts can find inspiration, 
                share their own recipes, and celebrate the joy of cooking together.
              </p>
            </div>
          </div>
        </div>
        
        {/* Mission Section */}
        <div className="bg-amber-50 rounded-lg p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            To inspire home cooks of all skill levels to create delicious meals that bring people together. 
            We believe that cooking should be enjoyable, accessible, and a way to express creativity and love.
          </p>
        </div>
        
        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CookingPot size={24} className="text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Quality Recipes</h3>
            <p className="text-gray-600">
              Every recipe is carefully tested and refined to ensure delicious results in your home kitchen.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart size={24} className="text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Passion for Food</h3>
            <p className="text-gray-600">
              We put love into every recipe and believe food is one of life's greatest pleasures to be shared.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Share2 size={24} className="text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Community</h3>
            <p className="text-gray-600">
              We foster a supportive community where everyone can learn, share, and grow their cooking skills.
            </p>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Have questions, feedback, or just want to say hello? We'd love to hear from you!
          </p>
          <a 
            href="mailto:contact@paviskitchen.com" 
            className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded hover:bg-amber-700 transition-colors"
          >
            <Mail size={18} className="mr-2" />
            Email Us
          </a>
          <div className="mt-6 border-t border-gray-200 pt-6">
            <p className="text-gray-500">
              Want to contribute to our collection? 
              <Link to="/submit" className="text-amber-600 hover:text-amber-700 ml-1">
                Submit your recipe
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;