import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  selectedRecipeDetails: Recipe;
  id: number;

  constructor(private shoppingListService: ShoppingListService,
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.selectedRecipeDetails = this.recipeService.getRecipyById(this.id);
      }
    )


  }

  toShoppingListClick() {

    // this.selectedRecipeDetails.ingredients.forEach(ingredient => {
    //   this.shoppingListService.addToShoppingList(ingredient);
    // });

    this.shoppingListService.addIngredients(this.selectedRecipeDetails.ingredients);


  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.activatedRoute});
    /// also works
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.activatedRoute})
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}
