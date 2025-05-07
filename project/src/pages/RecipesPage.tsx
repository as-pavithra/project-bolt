import React, { useState, useEffect } from 'react';
import { recipes } from '../data/recipes';
import RecipeCard from '../components/RecipeCard';
import { Search, Filter, X } from 'lucide-react';

const RecipesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [difficulty, setDifficulty] = useState<string>('');
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  
  // Extract all unique tags from recipes
  const allTags = Array.from(
    new Set(recipes.flatMap(recipe => recipe.tags))
  ).sort();
  
  // Filter recipes based on search term, tags, and difficulty
  useEffect(() => {
    let result = recipes;
    
    if (searchTerm) {
      const lowerSearchTerm = searchTerm.toLowerCase();
      result = result.filter(recipe => 
        recipe.title.toLowerCase().includes(lowerSearchTerm) || 
        recipe.description.toLowerCase().includes(lowerSearchTerm) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(lowerSearchTerm))
      );
    }
    
    if (selectedTags.length > 0) {
      result = result.filter(recipe => 
        selectedTags.every(tag => recipe.tags.includes(tag))
      );
    }
    
    if (difficulty) {
      result = result.filter(recipe => recipe.difficulty === difficulty);
    }
    
    setFilteredRecipes(result);
  }, [searchTerm, selectedTags, difficulty]);
  
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };
  
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTags([]);
    setDifficulty('');
  };
  
  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">All Recipes</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Browse our collection of delicious recipes for every occasion, skill level, and taste preference.
        </p>
      </div>
      
      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search recipes..."
              className="pl-10 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
          
          <div className="md:w-48">
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="">Any Difficulty</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
          
          {(searchTerm || selectedTags.length > 0 || difficulty) && (
            <button
              onClick={clearFilters}
              className="flex items-center justify-center p-2 text-red-600 hover:text-red-800 transition-colors"
            >
              <X size={18} className="mr-1" />
              Clear Filters
            </button>
          )}
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 items-center">
          <div className="flex items-center text-gray-700 mr-2">
            <Filter size={16} className="mr-1" />
            <span>Tags:</span>
          </div>
          
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`text-xs px-3 py-1 rounded-full transition-colors ${
                selectedTags.includes(tag)
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      
      {/* Recipe Grid */}
      {filteredRecipes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">No Recipes Found</h3>
          <p className="text-gray-600 mb-4">
            We couldn't find any recipes matching your search criteria.
          </p>
          <button
            onClick={clearFilters}
            className="text-amber-600 font-medium hover:text-amber-700 transition-colors"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
};

export default RecipesPage;