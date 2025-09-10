import React from "react";
import RecipesCard from "./RecipesCard";
import RecipeData from "../../assets/data/data.json";

export default function RecipesList({ filteredRecipes }) {
  return (
    <div className="flex flex-col gap-8">
      {filteredRecipes.map((recipe) => (
        <RecipesCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
