import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, ChefHat } from 'lucide-react';
import { Recipe } from '../types/Recipe';

interface RecipeCardProps {
  recipe: Recipe;
  featured?: boolean;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, featured = false }) => {
  const totalTime = recipe.prepTime + recipe.cookTime;
  
  return (
    <Link 
      to={`/recipes/${recipe.id}`}
      className={`group block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-full ${
        featured ? 'md:col-span-2 bg-white' : 'bg-white'
      }`}
    >
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {recipe.featured && !featured && (
          <div className="absolute top-2 right-2 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded">
            Featured
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-4">
        <div className="flex flex-wrap gap-2 mb-2">
          {recipe.tags.slice(0, 3).map((tag) => (
            <span 
              key={tag} 
              className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-lg md:text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors">
          {recipe.title}
        </h3>
        
        <p className="mt-2 text-gray-600 line-clamp-2">{recipe.description}</p>
        
        <div className="mt-4 flex items-center text-sm text-gray-500 gap-4">
          <div className="flex items-center">
            <Clock size={16} className="mr-1" />
            <span>{totalTime} mins</span>
          </div>
          
          <div className="flex items-center">
            <Users size={16} className="mr-1" />
            <span>{recipe.servings} servings</span>
          </div>
          
          <div className={`ml-auto px-2 py-1 rounded text-xs font-medium ${
            recipe.difficulty === 'Easy' 
              ? 'bg-green-100 text-green-800' 
              : recipe.difficulty === 'Medium'
                ? 'bg-amber-100 text-amber-800'
                : 'bg-red-100 text-red-800'
          }`}>
            {recipe.difficulty}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;