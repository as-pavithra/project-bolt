import React from 'react';
import Hero from '../components/Hero';
import FeaturedRecipes from '../components/FeaturedRecipes';
import { Link } from 'react-router-dom';
import { ArrowRight, Utensils, Clock, BookOpen } from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Utensils size={24} className="text-amber-600" />,
      title: 'Diverse Recipes',
      description: 'Explore recipes from around the world, from traditional classics to modern innovations.'
    },
    {
      icon: <Clock size={24} className="text-amber-600" />,
      title: 'Quick & Easy',
      description: 'Find quick recipes for busy weeknights as well as elaborate dishes for special occasions.'
    },
    {
      icon: <BookOpen size={24} className="text-amber-600" />,
      title: 'Detailed Instructions',
      description: 'Follow step-by-step instructions with detailed explanations for perfect results every time.'
    }
  ];

  return (
    <main>
      <Hero />
      <FeaturedRecipes />
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Cook With Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover what makes our recipes special and how we can help you become a better cook.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Cooking?</h2>
            <p className="text-lg mb-8">
              Browse our collection of recipes and find something delicious to make today.
            </p>
            <Link 
              to="/recipes" 
              className="inline-flex items-center bg-white text-amber-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Explore All Recipes
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;