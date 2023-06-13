import { Injectable } from '@angular/core';
import {Recipe} from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Schnitzel.JPG/1024px-Schnitzel.JPG',
      ingredients: ['French Fries', 'Pork', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://www.starfrit.com/en/recipes/pressure-cooker-spaghetti-sauce',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    },
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {...this.recipes.find(recipe => recipe.id === recipeId)};
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => recipe.id !== recipeId);
  }
}
