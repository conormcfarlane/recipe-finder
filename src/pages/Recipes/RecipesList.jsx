import React from "react";
import RecipesCard from "./RecipesCard";
import RecipeData from "../../assets/data/data.json";

export default function RecipesList({}) {
  return (
    <div className="flex flex-col gap-8">
      {RecipeData.map((recipe) => (
        <RecipesCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
