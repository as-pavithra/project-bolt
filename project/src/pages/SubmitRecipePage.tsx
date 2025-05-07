import React, { useState } from 'react';
import { ChevronDown, Plus, X } from 'lucide-react';

const SubmitRecipePage: React.FC = () => {
  const [ingredients, setIngredients] = useState<string[]>(['']);
  const [instructions, setInstructions] = useState<string[]>(['']);
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const difficultyOptions = ['Easy', 'Medium', 'Hard'];
  
  const handleAddIngredient = () => {
    setIngredients([...ingredients, '']);
  };
  
  const handleIngredientChange = (index: number, value: string) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };
  
  const handleRemoveIngredient = (index: number) => {
    if (ingredients.length > 1) {
      const newIngredients = [...ingredients];
      newIngredients.splice(index, 1);
      setIngredients(newIngredients);
    }
  };
  
  const handleAddInstruction = () => {
    setInstructions([...instructions, '']);
  };
  
  const handleInstructionChange = (index: number, value: string) => {
    const newInstructions = [...instructions];
    newInstructions[index] = value;
    setInstructions(newInstructions);
  };
  
  const handleRemoveInstruction = (index: number) => {
    if (instructions.length > 1) {
      const newInstructions = [...instructions];
      newInstructions.splice(index, 1);
      setInstructions(newInstructions);
    }
  };
  
  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };
  
  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter(t => t !== tag));
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTag();
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally handle the form submission to a backend
    setFormSubmitted(true);
    // Reset form or redirect as needed
  };
  
  if (formSubmitted) {
    return (
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg 
              className="w-10 h-10 text-green-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M5 13l4 4L19 7" 
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Recipe Submitted Successfully!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for sharing your recipe with us. After review, it will be added to our collection.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setFormSubmitted(false)}
              className="px-6 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition-colors"
            >
              Submit Another Recipe
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Share Your Recipe</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a delicious recipe you'd like to share with our community? Fill out the form below to submit your culinary creation.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 md:p-8">
          {/* Basic Info */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b">Basic Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
                  Recipe Title*
                </label>
                <input
                  type="text"
                  id="title"
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="e.g., Homemade Margherita Pizza"
                />
              </div>
              
              <div>
                <label htmlFor="author" className="block text-gray-700 font-medium mb-2">
                  Your Name*
                </label>
                <input
                  type="text"
                  id="author"
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="e.g., John Doe"
                />
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
                  Description*
                </label>
                <textarea
                  id="description"
                  required
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Briefly describe your recipe..."
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="image" className="block text-gray-700 font-medium mb-2">
                  Image URL
                </label>
                <input
                  type="url"
                  id="image"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              
              <div>
                <label htmlFor="difficulty" className="block text-gray-700 font-medium mb-2">
                  Difficulty Level*
                </label>
                <div className="relative">
                  <select
                    id="difficulty"
                    required
                    className="w-full p-3 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="">Select difficulty</option>
                    {difficultyOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <ChevronDown size={16} />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div>
                <label htmlFor="prepTime" className="block text-gray-700 font-medium mb-2">
                  Prep Time (minutes)*
                </label>
                <input
                  type="number"
                  id="prepTime"
                  min="0"
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              
              <div>
                <label htmlFor="cookTime" className="block text-gray-700 font-medium mb-2">
                  Cook Time (minutes)*
                </label>
                <input
                  type="number"
                  id="cookTime"
                  min="0"
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              
              <div>
                <label htmlFor="servings" className="block text-gray-700 font-medium mb-2">
                  Servings*
                </label>
                <input
                  type="number"
                  id="servings"
                  min="1"
                  required
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>
          </div>
          
          {/* Ingredients */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b">Ingredients</h2>
            {ingredients.map((ingredient, index) => (
              <div key={index} className="flex items-center mb-3">
                <input
                  type="text"
                  value={ingredient}
                  onChange={(e) => handleIngredientChange(index, e.target.value)}
                  placeholder={`Ingredient ${index + 1}`}
                  className="flex-1 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => handleRemoveIngredient(index)}
                  className="ml-2 p-2 text-red-500 hover:text-red-700 transition-colors"
                  disabled={ingredients.length === 1}
                >
                  <X size={18} />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddIngredient}
              className="mt-2 flex items-center text-amber-600 hover:text-amber-700 transition-colors"
            >
              <Plus size={16} className="mr-1" />
              Add Ingredient
            </button>
          </div>
          
          {/* Instructions */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b">Instructions</h2>
            {instructions.map((instruction, index) => (
              <div key={index} className="flex items-start mb-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center mr-2 mt-3">
                  {index + 1}
                </span>
                <textarea
                  value={instruction}
                  onChange={(e) => handleInstructionChange(index, e.target.value)}
                  placeholder={`Step ${index + 1}`}
                  rows={2}
                  className="flex-1 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => handleRemoveInstruction(index)}
                  className="ml-2 p-2 text-red-500 hover:text-red-700 transition-colors"
                  disabled={instructions.length === 1}
                >
                  <X size={18} />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddInstruction}
              className="mt-2 flex items-center text-amber-600 hover:text-amber-700 transition-colors"
            >
              <Plus size={16} className="mr-1" />
              Add Step
            </button>
          </div>
          
          {/* Tags */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b">Tags</h2>
            <p className="text-gray-600 mb-4">
              Add tags to help categorize your recipe (e.g., Italian, Vegetarian, Dessert)
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map(tag => (
                <span
                  key={tag}
                  className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full flex items-center"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(tag)}
                    className="ml-1 text-amber-800 hover:text-amber-900"
                  >
                    <X size={14} />
                  </button>
                </span>
              ))}
            </div>
            
            <div className="flex">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Add a tag"
                className="flex-1 p-3 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                type="button"
                onClick={handleAddTag}
                className="px-4 bg-amber-600 text-white rounded-r hover:bg-amber-700 transition-colors"
              >
                Add
              </button>
            </div>
          </div>
          
          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-amber-600 text-white rounded hover:bg-amber-700 transition-colors font-medium"
            >
              Submit Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitRecipePage;