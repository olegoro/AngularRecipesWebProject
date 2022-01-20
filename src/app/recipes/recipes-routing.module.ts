import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../Auth/auth.guard";
import { PleaseSelectRecipeComponent } from "./please-select-recipe/please-select-recipe.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipesResolverService } from "./recipes-resolver.service";
import { RecipesComponent } from "./recipes.component";

const routes: Routes = [
  { path: '', component: RecipesComponent, canActivate: [AuthGuard], children: [
    { path: '', component: PleaseSelectRecipeComponent},
    { path: 'new', component: RecipeEditComponent},
    { path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService]},
    { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService]}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  // we export this here, so that in the recipes module we can actually import our recipes routing module
  exports: [RouterModule]
})
export class RecipesRoutingModule {

}
