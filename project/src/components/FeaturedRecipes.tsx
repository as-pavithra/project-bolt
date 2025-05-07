import React from 'react';
import { recipes } from '../data/recipes';
import RecipeCard from './RecipeCard';

const FeaturedRecipes: React.FC = () => {
  const featuredRecipes = recipes.filter(recipe => recipe.featured);
  
  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Featured Recipes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular and delicious recipes crafted with love and care. 
            These crowd favorites are perfect for any occasion.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRecipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
          
          {featuredRecipes.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600">No featured recipes available at the moment.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRecipes;