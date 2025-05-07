import { Recipe } from '../types/Recipe';

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Homemade Margherita Pizza',
    description: 'A classic Italian pizza with fresh mozzarella, tomatoes, and basil',
    image: 'https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    prepTime: 30,
    cookTime: 15,
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      '500g pizza dough',
      '200g fresh mozzarella, sliced',
      '3 ripe tomatoes, sliced',
      'Fresh basil leaves',
      '3 tablespoons olive oil',
      '2 cloves garlic, minced',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Preheat your oven to 475°F (245°C) with a pizza stone if available.',
      'Roll out the pizza dough on a floured surface to your desired thickness.',
      'In a small bowl, mix olive oil with minced garlic.',
      'Brush the dough with the garlic oil mixture.',
      'Arrange tomato slices and mozzarella on top of the dough.',
      'Season with salt and pepper.',
      'Bake for 12-15 minutes until the crust is golden and cheese is bubbly.',
      'Remove from oven and immediately top with fresh basil leaves.',
      'Let cool slightly before slicing and serving.'
    ],
    author: 'Pavi',
    featured: true,
    tags: ['Italian', 'Pizza', 'Vegetarian'],
    createdAt: new Date('2024-05-10')
  },
  {
    id: '2',
    title: 'Creamy Mushroom Risotto',
    description: 'A rich and creamy Italian rice dish with mushrooms and parmesan',
    image: 'https://images.pexels.com/photos/6287525/pexels-photo-6287525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    prepTime: 15,
    cookTime: 30,
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      '1.5 cups Arborio rice',
      '4 cups vegetable broth, kept warm',
      '1/2 cup dry white wine',
      '300g mixed mushrooms, sliced',
      '1 medium onion, finely diced',
      '2 cloves garlic, minced',
      '3 tablespoons butter',
      '1/2 cup grated Parmesan cheese',
      '2 tablespoons fresh parsley, chopped',
      'Salt and pepper to taste'
    ],
    instructions: [
      'In a large pan, melt 1 tablespoon of butter and sauté mushrooms until golden. Set aside.',
      'In the same pan, add another tablespoon of butter and sauté onion until translucent.',
      'Add garlic and cook for 30 seconds until fragrant.',
      'Add the rice and stir for 1-2 minutes until translucent around the edges.',
      'Pour in the wine and stir until absorbed.',
      'Add warm broth one ladle at a time, stirring frequently and waiting until each addition is absorbed before adding more.',
      'After about 20 minutes, when rice is creamy and al dente, stir in the mushrooms.',
      'Remove from heat and stir in remaining butter and Parmesan cheese.',
      'Season with salt and pepper, and garnish with parsley before serving.'
    ],
    author: 'Pavi',
    tags: ['Italian', 'Rice', 'Vegetarian'],
    createdAt: new Date('2024-05-08')
  },
  {
    id: '3',
    title: 'Thai Green Curry',
    description: 'A fragrant and spicy Thai curry with vegetables and coconut milk',
    image: 'https://images.pexels.com/photos/1320917/pexels-photo-1320917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    prepTime: 20,
    cookTime: 25,
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      '400ml coconut milk',
      '3 tablespoons green curry paste',
      '500g chicken breast, sliced (or tofu for vegetarian option)',
      '1 red bell pepper, sliced',
      '1 zucchini, sliced',
      '100g snow peas',
      '1 tablespoon fish sauce (or soy sauce for vegetarian)',
      '1 tablespoon brown sugar',
      'Fresh Thai basil leaves',
      '2 kaffir lime leaves (optional)',
      'Lime wedges for serving',
      'Jasmine rice for serving'
    ],
    instructions: [
      'In a large pot or wok, heat 2 tablespoons of coconut milk over medium heat.',
      'Add the curry paste and stir-fry for 1-2 minutes until fragrant.',
      'Add the chicken (or tofu) and stir-fry until nearly cooked through.',
      'Pour in the remaining coconut milk, fish sauce, and sugar. Stir to combine.',
      'Add the bell pepper, zucchini, and kaffir lime leaves if using.',
      'Simmer for 10-15 minutes until vegetables are tender.',
      'Add snow peas and cook for another 2 minutes.',
      'Stir in fresh Thai basil leaves.',
      'Serve hot with jasmine rice and lime wedges on the side.'
    ],
    author: 'Pavi',
    featured: true,
    tags: ['Thai', 'Curry', 'Spicy'],
    createdAt: new Date('2024-05-05')
  },
  {
    id: '4',
    title: 'Classic Chocolate Chip Cookies',
    description: 'Soft and chewy chocolate chip cookies that are perfect with a glass of milk',
    image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    prepTime: 15,
    cookTime: 12,
    servings: 24,
    difficulty: 'Easy',
    ingredients: [
      '2 1/4 cups all-purpose flour',
      '1 teaspoon baking soda',
      '1 teaspoon salt',
      '1 cup unsalted butter, softened',
      '3/4 cup granulated sugar',
      '3/4 cup packed brown sugar',
      '2 large eggs',
      '2 teaspoons vanilla extract',
      '2 cups semi-sweet chocolate chips'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C).',
      'In a small bowl, mix flour, baking soda, and salt.',
      'In a large bowl, cream together butter, granulated sugar, and brown sugar until smooth.',
      'Beat in eggs one at a time, then stir in vanilla.',
      'Gradually blend in the dry ingredients.',
      'Fold in chocolate chips.',
      'Drop by rounded tablespoons onto ungreased baking sheets.',
      'Bake for 9-11 minutes or until golden brown.',
      'Let stand on baking sheet for 2 minutes before removing to cool on wire racks.'
    ],
    author: 'Pavi',
    tags: ['Dessert', 'Cookies', 'Baking'],
    createdAt: new Date('2024-05-01')
  }
];