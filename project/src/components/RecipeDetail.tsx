import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, Users, ChefHat, ArrowLeft } from 'lucide-react';
import { recipes } from '../data/recipes';

const RecipeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const recipe = recipes.find(r => r.id === id);
  
  if (!recipe) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Recipe Not Found</h2>
        <p className="text-gray-600 mb-8">The recipe you're looking for doesn't exist or may have been removed.</p>
        <button
          onClick={() => navigate('/recipes')}
          className="inline-flex items-center px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Recipes
        </button>
      </div>
    );
  }
  
  const totalTime = recipe.prepTime + recipe.cookTime;
  
  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center px-3 py-1 text-amber-700 hover:text-amber-800 mb-6 transition-colors"
      >
        <ArrowLeft size={16} className="mr-1" />
        Back
      </button>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="h-64 md:h-96 relative">
          <img 
            src={recipe.image} 
            alt={recipe.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-6 text-white">
              <div className="flex flex-wrap gap-2 mb-2">
                {recipe.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-amber-600/80 text-white px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">{recipe.title}</h1>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex flex-wrap items-center gap-6 mb-8 text-sm md:text-base border-b border-gray-200 pb-6">
            <div className="flex items-center">
              <Clock size={18} className="mr-2 text-amber-600" />
              <div>
                <p className="font-medium">Total Time</p>
                <p className="text-gray-600">{totalTime} mins</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Users size={18} className="mr-2 text-amber-600" />
              <div>
                <p className="font-medium">Servings</p>
                <p className="text-gray-600">{recipe.servings}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <ChefHat size={18} className="mr-2 text-amber-600" />
              <div>
                <p className="font-medium">Difficulty</p>
                <p className={`${
                  recipe.difficulty === 'Easy' 
                    ? 'text-green-600' 
                    : recipe.difficulty === 'Medium'
                      ? 'text-amber-600'
                      : 'text-red-600'
                }`}>
                  {recipe.difficulty}
                </p>
              </div>
            </div>
            
            <div className="ml-auto text-right">
              <p className="font-medium">By {recipe.author}</p>
              <p className="text-gray-600">
                {new Date(recipe.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Description</h2>
            <p className="text-gray-600">{recipe.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Ingredients</h2>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-amber-600 mt-2 mr-2" />
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Instructions</h2>
              <ol className="space-y-4">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-600 text-white font-medium mr-3 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;