import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Cooking background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
            Discover the Joy of <span className="text-amber-400">Cooking</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 animate-fade-in-delay">
            Explore a world of delicious recipes, cooking tips, and culinary adventures. 
            From simple family dinners to gourmet feasts, find inspiration for your next meal.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
            <button 
              onClick={() => navigate('/recipes')}
              className="bg-amber-600 hover:bg-amber-500 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
            >
              Browse Recipes
              <ChevronRight size={18} className="ml-1" />
            </button>
            
            <button 
              onClick={() => navigate('/submit')}
              className="bg-white hover:bg-gray-100 text-amber-800 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Share Your Recipe
            </button>
          </div>
        </div>
      </div>
      
      {/* Search Bar */}
      <div className="absolute bottom-8 left-0 right-0 mx-auto max-w-3xl px-4 animate-fade-in-up">
        <div className="bg-white rounded-lg shadow-xl p-2 flex">
          <input 
            type="text" 
            placeholder="Search for recipes..." 
            className="w-full px-4 py-2 focus:outline-none text-gray-800"
          />
          <button className="bg-amber-600 hover:bg-amber-500 text-white px-4 py-2 rounded-lg transition-colors flex items-center">
            <Search size={18} className="mr-2" />
            <span className="hidden sm:inline">Search</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;